package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.Comment;
import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.repository.JpaCommentRepository;
import com.iot.cocktailer.repository.JpaRecipeArticleRepository;
import com.iot.cocktailer.service.RecipeArticleService;
import com.iot.cocktailer.service.S3UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/recipe-articles")
@CrossOrigin(origins = "*")
public class RecipeArticleController {
    private final RecipeArticleService recipeArticleService;
    private final JpaRecipeArticleRepository jpaRecipeArticleRepository;
    private final JpaCommentRepository jpaCommentRepository;
    private final S3UploadService s3UploadService;

    @Autowired
    public RecipeArticleController(RecipeArticleService recipeArticleService,JpaRecipeArticleRepository jpaRecipeArticleRepository,JpaCommentRepository jpaCommentRepository,S3UploadService s3UploadService){
        this.recipeArticleService = recipeArticleService;
        this.jpaRecipeArticleRepository = jpaRecipeArticleRepository;
        this.jpaCommentRepository = jpaCommentRepository;
        this.s3UploadService = s3UploadService;
    }

    @GetMapping
    public ResponseEntity getRecipeArticles(){
        return new ResponseEntity<>(jpaRecipeArticleRepository.findAllRecipeArticles(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postRecipeArticles(@RequestBody RecipeArticle recipeArticle){
        String imageUrl = s3UploadService.upload(recipeArticle,"static");
        recipeArticle.setImageURL(imageUrl);

        return new ResponseEntity<>(jpaRecipeArticleRepository.save(recipeArticle),HttpStatus.CREATED);
    }

    @GetMapping("/{recipe-articles_id}")
    public ResponseEntity getRecipeArticle(@PathVariable("recipe-articles_id")Long id){
        Map<String,Object> result = new HashMap<>();
        Optional<RecipeArticle> optionalRecipeArticle = jpaRecipeArticleRepository.findById(id);
        RecipeArticle recipeArticle = optionalRecipeArticle.orElseThrow(()
                -> new IllegalStateException("No matching id")
            );

        List<Comment> comments = jpaCommentRepository.findByRecipeArticleId(id);

        result.put("recipe-article",recipeArticle);
        result.put("comments",comments);
        return new ResponseEntity<>(result,HttpStatus.OK);
    }
}
