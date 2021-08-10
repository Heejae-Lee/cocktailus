package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Comment;
import com.iot.cocktailer.domain.Like;
import com.iot.cocktailer.domain.LikeId;
import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.repository.JpaCommentRepository;
import com.iot.cocktailer.repository.JpaLikeRepository;
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
    private final JpaLikeRepository jpaLikeRepository;
    private final S3UploadService s3UploadService;
    private final LikeService likeService;

    @Autowired
    public RecipeArticleService(JpaRecipeArticleRepository jpaRecipeArticleRepository,JpaCommentRepository jpaCommentRepository,
                                S3UploadService s3UploadService,JpaLikeRepository jpaLikeRepository,LikeService likeService){
        this.jpaRecipeArticleRepository = jpaRecipeArticleRepository;
        this.jpaCommentRepository = jpaCommentRepository;
        this.jpaLikeRepository = jpaLikeRepository;
        this.s3UploadService = s3UploadService;
        this.likeService = likeService;
    }

    public Map<String,Object> getRecipeArticle(Long id){
        Map<String,Object> result = new HashMap<>();
        Optional<RecipeArticle> optionalRecipeArticle = jpaRecipeArticleRepository.findById(id);
        RecipeArticle recipeArticle = optionalRecipeArticle.orElseThrow(()
                -> new IllegalStateException("No matching id")
        );

        // member liked
        Like like = likeService.getLikeByLikeId(new LikeId(recipeArticle.getId(),recipeArticle.getMember_name()));
        recipeArticle.setLiked(like.getLiked());
        List<Comment> comments = jpaCommentRepository.findByRecipeArticleId(id);

        result.put("recipe-article",recipeArticle);
        result.put("comments",comments);
        return result;
    }

    public List<RecipeArticle> getRecipeArticles(){
        List<RecipeArticle> recipeArticles = jpaRecipeArticleRepository.findAll();

        // member liked
        for(RecipeArticle recipeArticle : recipeArticles){
            Like like = likeService.getLikeByLikeId(new LikeId(recipeArticle.getId(),recipeArticle.getMember_name()));
            recipeArticle.setLiked(like.getLiked());
        }

        return jpaRecipeArticleRepository.findAll();
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

        // member liked
        List<RecipeArticle> uploadedRecipeArticles = jpaRecipeArticleRepository.findUploadedByNameOrderByUpdatedDesc(member_name);
        for(RecipeArticle recipeArticle : uploadedRecipeArticles){
            Like like = likeService.getLikeByLikeId(new LikeId(recipeArticle.getId(),recipeArticle.getMember_name()));
            recipeArticle.setLiked(like.getLiked());
        }

        // member liked
        List<RecipeArticle> likedRecipeArticles = jpaRecipeArticleRepository.findLikedByNameOrderByUpdatedDesc(member_name);
        for(RecipeArticle recipeArticle : likedRecipeArticles){
            recipeArticle.setLiked(true);
        }

        result.put("uploaded-recipe-articles",uploadedRecipeArticles);
        result.put("liked-recipe-articles",likedRecipeArticles);

        return result;
    }


}
