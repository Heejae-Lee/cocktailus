package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Comment;
import com.iot.cocktailer.domain.Like;
import com.iot.cocktailer.domain.LikeId;
import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.repository.JpaCommentRepository;
import com.iot.cocktailer.repository.JpaRecipeArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class RecipeArticleService {
    private final JpaRecipeArticleRepository jpaRecipeArticleRepository;
    private final JpaCommentRepository jpaCommentRepository;
    private final S3UploadService s3UploadService;
    private final LikeService likeService;
    private final MemberService memberService;

    @Autowired
    public RecipeArticleService(JpaRecipeArticleRepository jpaRecipeArticleRepository, JpaCommentRepository jpaCommentRepository,
                                S3UploadService s3UploadService, LikeService likeService, MemberService memberService){
        this.jpaRecipeArticleRepository = jpaRecipeArticleRepository;
        this.jpaCommentRepository = jpaCommentRepository;
        this.s3UploadService = s3UploadService;
        this.likeService = likeService;
        this.memberService = memberService;
    }

    public Map<String,Object> getRecipeArticle(Long id,String jwt){
        Map<String,Object> result = new HashMap<>();
        Optional<RecipeArticle> optionalRecipeArticle = jpaRecipeArticleRepository.findById(id);
        RecipeArticle recipeArticle = optionalRecipeArticle.orElseThrow(()
                -> new IllegalStateException("No matching id")
        );

        // member liked
        if(jwt != null) {
            String member_name = memberService.getMembernameByJwt(jwt);

            Like like = likeService.getLikeByLikeId(new LikeId(recipeArticle.getId(), member_name));
            recipeArticle.setLiked(like.getLiked());
        }

        List<Comment> comments = jpaCommentRepository.findByRecipeArticleId(id);

        result.put("recipe-article",recipeArticle);
        result.put("comments",comments);
        return result;
    }

    public List<RecipeArticle> getRecipeArticlesWithLiked(String jwt){
        List<RecipeArticle> recipeArticles = jpaRecipeArticleRepository.findAll();
        return getRecipeArticlesWithLiked(jwt, recipeArticles);
    }


    public RecipeArticle postRecipeArticle(RecipeArticle recipeArticle){
        String imageUrl = s3UploadService.upload(recipeArticle,"static");
        recipeArticle.setImageURL(imageUrl);
        jpaRecipeArticleRepository.save(recipeArticle);

        // member liked
        Like like = likeService.getLikeByLikeId(new LikeId(recipeArticle.getId(),recipeArticle.getMember_name()));
        recipeArticle.setLiked(like.getLiked());

        return jpaRecipeArticleRepository.save(recipeArticle);
    }

    public Map<String,List<RecipeArticle>> getMyRecipeArticles(String member_name){
        Map<String,List<RecipeArticle>> result = new HashMap<>();

        // member uploaded liked
        List<RecipeArticle> uploadedRecipeArticles = jpaRecipeArticleRepository.findUploadedByNameOrderByUpdatedDesc(member_name);
        for(RecipeArticle recipeArticle : uploadedRecipeArticles){
            recipeArticle.setLiked(true);
        }

        // member liked
        List<RecipeArticle> likedRecipeArticles = jpaRecipeArticleRepository.findLikedByNameOrderByUpdatedDesc(member_name);

        result.put("uploaded-recipe-articles",uploadedRecipeArticles);
        result.put("liked-recipe-articles",likedRecipeArticles);

        return result;
    }

    public RecipeArticle updateRecipeArticle(Long id,RecipeArticle recipeArticle){
        Optional<RecipeArticle> optionalRecipeArticle = jpaRecipeArticleRepository.findById(id);
        RecipeArticle postedRecipeArticle = optionalRecipeArticle.orElseThrow(
                ()-> new IllegalStateException("No matching id")
            );

        if(!(postedRecipeArticle.getImageURL().equals(recipeArticle.getImageURL()))){
            String imageUrl = s3UploadService.upload(recipeArticle,"static");
            postedRecipeArticle.setImageURL(imageUrl);
        }
        postedRecipeArticle.setContent(recipeArticle.getContent())
                        .setDrink(recipeArticle.getDrink())
                        .setDrinkRatio(recipeArticle.getDrinkRatio())
                        .setTitle(recipeArticle.getTitle())
                        .setTag(recipeArticle.getTag());

        // member liked
        Like like = likeService.getLikeByLikeId(new LikeId(postedRecipeArticle.getId(),postedRecipeArticle.getMember_name()));
        postedRecipeArticle.setLiked(like.getLiked());

        jpaRecipeArticleRepository.save(postedRecipeArticle);
        return postedRecipeArticle;
    }

    public void deleteRecipeArticle(Long id){
        Optional<RecipeArticle> optionalRecipeArticle = jpaRecipeArticleRepository.findById(id);
        RecipeArticle recipeArticle = optionalRecipeArticle.orElseThrow(
                ()-> new IllegalStateException("No matching id")
            );
        jpaRecipeArticleRepository.remove(recipeArticle);
    }

    public List<RecipeArticle> searchRecipeArticles(String title,String jwt){
        List<RecipeArticle> recipeArticles = jpaRecipeArticleRepository.findByTitleDesc(title);

        // member liked
        return getRecipeArticlesWithLiked(jwt, recipeArticles);
    }

    private List<RecipeArticle> getRecipeArticlesWithLiked(String jwt, List<RecipeArticle> recipeArticles) {
        if(jwt != null) {
            String member_name = memberService.getMembernameByJwt(jwt);

            // member liked
            for (RecipeArticle recipeArticle : recipeArticles) {
                Like like = likeService.getLikeByLikeId(new LikeId(recipeArticle.getId(), member_name));
                recipeArticle.setLiked(like.getId().getMember_name().equals(member_name) ? like.getLiked() : false);
            }
        }

        return recipeArticles;
    }
}
