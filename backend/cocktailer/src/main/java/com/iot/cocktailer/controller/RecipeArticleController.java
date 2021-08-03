package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.repository.JpaRecipeArticleRepository;
import com.iot.cocktailer.service.RecipeArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipe-articles")
@CrossOrigin(origins = "*")
public class RecipeArticleController {
    private final RecipeArticleService recipeArticleService;
    private final JpaRecipeArticleRepository jpaRecipeArticleRepository;

    @Autowired
    public RecipeArticleController(RecipeArticleService recipeArticleService,JpaRecipeArticleRepository jpaRecipeArticleRepository){
        this.recipeArticleService = recipeArticleService;
        this.jpaRecipeArticleRepository = jpaRecipeArticleRepository;
    }

    @GetMapping
    public ResponseEntity getRecipeArticles(){
        List<RecipeArticle> recipeArticles = jpaRecipeArticleRepository.findAllRecipeArticles();
        return new ResponseEntity<>(jpaRecipeArticleRepository.findAllRecipeArticles(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postRecipeArticles(@RequestBody RecipeArticle recipeArticle){
        return new ResponseEntity<>(jpaRecipeArticleRepository.save(recipeArticle),HttpStatus.CREATED);
    }
}
