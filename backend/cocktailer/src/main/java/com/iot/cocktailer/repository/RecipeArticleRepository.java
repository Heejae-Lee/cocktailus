package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.RecipeArticle;

import java.util.List;
import java.util.Optional;

public interface RecipeArticleRepository {
    List<RecipeArticle> findAll();
    RecipeArticle save(RecipeArticle recipeArticle);
    Optional<RecipeArticle> findById(Long id);
}
