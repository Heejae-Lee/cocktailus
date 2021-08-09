package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Comment;
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

    @Autowired
    public RecipeArticleService(JpaRecipeArticleRepository jpaRecipeArticleRepository,JpaCommentRepository jpaCommentRepository,S3UploadService s3UploadService){
        this.jpaRecipeArticleRepository = jpaRecipeArticleRepository;
        this.jpaCommentRepository = jpaCommentRepository;
        this.s3UploadService = s3UploadService;
    }

    public Map<String,Object> getRecipeArticle(Long id){
        Map<String,Object> result = new HashMap<>();
        Optional<RecipeArticle> optionalRecipeArticle = jpaRecipeArticleRepository.findById(id);
        RecipeArticle recipeArticle = optionalRecipeArticle.orElseThrow(()
                -> new IllegalStateException("No matching id")
        );

        List<Comment> comments = jpaCommentRepository.findByRecipeArticleId(id);

        result.put("recipe-article",recipeArticle);
        result.put("comments",comments);
        return result;
    }

    public List<RecipeArticle> getRecipeArticles(){
        return jpaRecipeArticleRepository.findAll();
    }

    public RecipeArticle postRecipeArticle(RecipeArticle recipeArticle){
        String imageUrl = s3UploadService.upload(recipeArticle,"static");
        recipeArticle.setImageURL(imageUrl);
        return jpaRecipeArticleRepository.save(recipeArticle);
    }

}
