package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.Comment;
import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.service.CommentService;
import com.iot.cocktailer.service.RecipeArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/recipe-articles")
@CrossOrigin(origins = "*")
public class RecipeArticleController {
    private final RecipeArticleService recipeArticleService;
    private final CommentService commentService;

    @Autowired
    public RecipeArticleController(RecipeArticleService recipeArticleService,CommentService commentService){
        this.recipeArticleService = recipeArticleService;
        this.commentService = commentService;
    }

    @GetMapping
    public ResponseEntity getRecipeArticles(HttpServletRequest httpServletRequest){
        String jwt = httpServletRequest.getHeader("Auth-Token");
        return new ResponseEntity<>(recipeArticleService.getRecipeArticlesWithLiked(jwt), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postRecipeArticle(@RequestBody RecipeArticle recipeArticle){
        return new ResponseEntity<>(recipeArticleService.postRecipeArticle(recipeArticle),HttpStatus.CREATED);
    }

    @GetMapping(
            params = "title"
    )
    public ResponseEntity searchRecipeArticles(@RequestParam("title")String title, HttpServletRequest httpServletRequest){
        String jwt = httpServletRequest.getHeader("Auth-Token");
        return new ResponseEntity<>(recipeArticleService.searchRecipeArticles(title,jwt),HttpStatus.OK);
    }

    @GetMapping(
            params = "sort"
    )
    public ResponseEntity getSortRecipeArticles(@RequestParam("sort")String sorts, HttpServletRequest httpServletRequest){
        String jwt = httpServletRequest.getHeader("Auth-Token");
        return new ResponseEntity<>(recipeArticleService.searchSortRecipeArticles(sorts,jwt),HttpStatus.OK);
    }

    @GetMapping("/{recipe-articles_id}")
    public ResponseEntity getRecipeArticle(@PathVariable("recipe-articles_id")Long id,HttpServletRequest httpServletRequest){
        String jwt = httpServletRequest.getHeader("Auth-Token");
        return new ResponseEntity<>(recipeArticleService.getRecipeArticle(id,jwt),HttpStatus.OK);
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

    @PostMapping("/{recipe-articles_id}/comments")
    public ResponseEntity postComment(@PathVariable("recipe-articles_id")Long articleId,@RequestBody Comment comment){
        return new ResponseEntity<>(commentService.postComment(articleId,comment), HttpStatus.CREATED);
    }

    @PutMapping("/{recipe-articles_id}/comments/{comment_id}")
    public ResponseEntity updateComment(@PathVariable("recipe-articles_id")Long articleId,@PathVariable("comment_id")Long commentId,@RequestBody Comment comment){
        return new ResponseEntity<>(commentService.updateComment(articleId,commentId,comment), HttpStatus.OK);
    }

    @DeleteMapping("/{recipe-articles_id}/comments/{comment_id}")
    public ResponseEntity deleteComment(@PathVariable("recipe-articles_id")Long articleId,@PathVariable("comment_id")Long commentId){
        commentService.deleteComment(articleId,commentId);
        return ResponseEntity.noContent().build();
    }
}
