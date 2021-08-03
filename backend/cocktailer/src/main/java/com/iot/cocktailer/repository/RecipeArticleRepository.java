package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.RecipeArticle;

import java.util.List;

public interface RecipeArticleRepository {
    List<RecipeArticle> findAllRecipeArticles();
    RecipeArticle save(RecipeArticle recipeArticle);

}
