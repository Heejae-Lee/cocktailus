package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Like;
import com.iot.cocktailer.domain.RecipeArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.*;

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

    @Override
    public List<RecipeArticle> findUploadedByNameOrderByUpdatedDesc(String member_name) {
        return em.createQuery("select ra from RecipeArticle ra where ra.member_name = :member_name",RecipeArticle.class)
                .setParameter("member_name",member_name)
                .getResultList();
    }

    @Override
    public List<RecipeArticle> findLikedByNameOrderByUpdatedDesc(String member_name) {
        List<Like> likes = em.createQuery("select likes from Like likes where likes.id.member_name = :member_name and likes.liked = true",Like.class)
                .setParameter("member_name",member_name)
                .getResultList();
        List<RecipeArticle> result = new ArrayList<>();
        for(Like like : likes){
            result.add(em.createQuery("select ra from RecipeArticle ra where ra.id = :id",RecipeArticle.class)
                        .setParameter("id",like.getId().getArticle_id())
                        .getSingleResult()
            );
        }
        result.sort(Comparator.comparing(RecipeArticle::getUpdated).reversed());
        return result;
    }

}
