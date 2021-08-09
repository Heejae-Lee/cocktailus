package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.RecipeArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class JpaRecipeArticleRepository implements RecipeArticleRepository{
    private final EntityManager em;

    @Autowired
    public JpaRecipeArticleRepository(EntityManager em){
        this.em = em;
    }

    @Override
    public List<RecipeArticle> findAll() {
        return em.createQuery("select recipe from RecipeArticle recipe",RecipeArticle.class)
                .getResultList();
    }

    @Override
    public RecipeArticle save(RecipeArticle recipeArticle) {
        em.persist(recipeArticle);
        return recipeArticle;
    }

    @Override
    public Optional<RecipeArticle> findById(Long id) {
        return em.createQuery("select ra from RecipeArticle ra where ra.id = :id",RecipeArticle.class)
                .setParameter("id",id)
                .getResultList()
                .stream().findAny();
    }

}
