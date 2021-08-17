package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Like;
import com.iot.cocktailer.domain.LikeId;
import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.repository.JpaLikeRepository;
import com.iot.cocktailer.repository.JpaRecipeArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LikeService {

    private final JpaRecipeArticleRepository jpaRecipeArticleRepository;
    private final JpaLikeRepository jpaLikeRepository;

    @Autowired
    public LikeService(JpaRecipeArticleRepository jpaRecipeArticleRepository,JpaLikeRepository jpaLikeRepository){
        this.jpaRecipeArticleRepository = jpaRecipeArticleRepository;
        this.jpaLikeRepository = jpaLikeRepository;
    }

    public RecipeArticle switchLike(LikeId likeId){
        Optional<RecipeArticle> optionalRecipeArticle = jpaRecipeArticleRepository.findById(likeId.getArticle_id());
        RecipeArticle recipeArticle = optionalRecipeArticle.orElseThrow(()->
                    new IllegalStateException("No matching id")
                );

        Optional<Like> optionalLike = jpaLikeRepository.findById(likeId);
        Like like = optionalLike.orElseGet(
                ()->jpaLikeRepository.save(new Like(likeId,false))
            );

        Integer likeCount = recipeArticle.getLikeCount();
        System.out.println(likeCount);
        like.setLiked(!like.getLiked());
        recipeArticle.setLiked(like.getLiked());

        if(like.getLiked()){
            recipeArticle.setLikeCount(likeCount+1);
        }else{
            recipeArticle.setLikeCount(likeCount-1);
        }

        jpaRecipeArticleRepository.save(recipeArticle);
        jpaLikeRepository.save(like);

        return recipeArticle;
    }

    public Like getLikeByLikeId(LikeId likeId){
        Optional<Like> optionalLike = jpaLikeRepository.findById(likeId);

        return optionalLike.orElseGet(
                    ()-> jpaLikeRepository.save(new Like(likeId,false))
                );
    }
}
