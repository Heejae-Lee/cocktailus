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

    @Autowired
    public RecipeArticleController(RecipeArticleService recipeArticleService){
        this.recipeArticleService = recipeArticleService;
    }

    @GetMapping
    public ResponseEntity getRecipeArticles(){
        return new ResponseEntity<>(recipeArticleService.getRecipeArticles(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postRecipeArticle(@RequestBody RecipeArticle recipeArticle){
        return new ResponseEntity<>(recipeArticleService.postRecipeArticle(recipeArticle),HttpStatus.CREATED);
    }

    @GetMapping("/{recipe-articles_id}")
    public ResponseEntity getRecipeArticle(@PathVariable("recipe-articles_id")Long id){
        return new ResponseEntity<>(recipeArticleService.getRecipeArticle(id),HttpStatus.OK);
    }

    @PutMapping("/{recipe-articles_id}")
    public ResponseEntity updateRecipeArticle(@PathVariable("recipe-articles_id")Long id,@RequestBody RecipeArticle recipeArticle){
        return new ResponseEntity<>(recipeArticleService.updateRecipeArticle(id,recipeArticle),HttpStatus.OK);
    }

    @DeleteMapping("/{recipe-articles_id}")
    public ResponseEntity deleteRecipeArticle(@PathVariable("recipe-articles_id")Long id){
        recipeArticleService.deleteRecipeArticle(id);
        return ResponseEntity.noContent().build();
    }
}
