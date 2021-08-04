package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class JpaCommentRepository implements CommentRepository{
    private final EntityManager em;

    @Autowired
    public JpaCommentRepository(EntityManager em){
        this.em = em;
    }

    @Override
    public Comment save(Comment comment) {
        em.persist(comment);
        return comment;
    }

    @Override
    public Optional<Comment> findById(Long id) {
        return em.createQuery("select c from Comment c where c.id = :id",Comment.class)
                .setParameter("id",id)
                .getResultList()
                .stream().findAny();
    }

    @Override
    public List<Comment> findByRecipeArticleId(Long id) {
        return em.createQuery("select c from Comment c where c.article_id = :id",Comment.class)
                .setParameter("id",id)
                .getResultList();
    }
}
