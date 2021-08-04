package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class JpaNoticeRepository implements NoticeRepository{
    private final EntityManager em;

    @Autowired
    public JpaNoticeRepository(EntityManager em){
        this.em = em;
    }

    @Override
    public List<Notice> findAll() {
        return em.createQuery("select n from Notice n",Notice.class)
                .getResultList();
    }

    @Override
    public Notice join(Notice notice) {
        em.persist(notice);
        return notice;
    }

    @Override
    public Optional<Notice> findById(Long id) {
        return em.createQuery("select n from Notice n where n.id = :id",Notice.class)
                .setParameter("id",id)
                .getResultList()
                .stream().findAny();
    }
}
