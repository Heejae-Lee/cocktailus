package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.service.RecipeArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/myrecipe")
@RestController
@CrossOrigin(origins = "*")
public class MyRecipeController {
    private final RecipeArticleService recipeArticleService;

    @Autowired
    public MyRecipeController(RecipeArticleService recipeArticleService){
        this.recipeArticleService = recipeArticleService;
    }

    @GetMapping("/{member_name}")
    public ResponseEntity getMyRecipeArticles(@PathVariable("member_name")String member_name){
        return new ResponseEntity<>(recipeArticleService.getMyRecipeArticles(member_name), HttpStatus.OK);
    }


}
