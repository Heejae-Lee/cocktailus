package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.repository.JpaRecipeArticleRepository;
import com.iot.cocktailer.service.RecipeArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "*")
public class RecipeArticleController {
    private final RecipeArticleService recipeArticleService;
    private final JpaRecipeArticleRepository jpaRecipeArticleRepository;

    @Autowired
    public RecipeArticleController(RecipeArticleService recipeArticleService,JpaRecipeArticleRepository jpaRecipeArticleRepository){
        this.recipeArticleService = recipeArticleService;
        this.jpaRecipeArticleRepository = jpaRecipeArticleRepository;
    }

    public ResponseEntity getRecipes(){
        return new ResponseEntity<>(jpaRecipeArticleRepository.getRecipeArticles(), HttpStatus.OK);
    }
}
