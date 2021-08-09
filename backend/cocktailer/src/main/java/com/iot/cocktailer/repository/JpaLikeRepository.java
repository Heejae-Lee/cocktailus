package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Like;
import com.iot.cocktailer.domain.LikeId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@Repository
public class JpaLikeRepository implements LikeRepository{

    private final EntityManager em;

    @Autowired
    public JpaLikeRepository(EntityManager em){
        this.em = em;
    }

    @Override
    public Optional<Like> findLikeById(LikeId likeId) {
        return Optional.ofNullable(em.find(Like.class,likeId));
    }

    @Override
    public Like save(Like like) {
        em.persist(like);
        return like;
    }
}
