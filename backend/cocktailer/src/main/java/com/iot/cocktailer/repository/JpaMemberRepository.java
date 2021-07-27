package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
@Repository
public class JpaMemberRepository implements MemberRepository{
    private final EntityManager em;

    @Autowired
    public JpaMemberRepository(EntityManager em){
        this.em = em;
    }

    @Override
    public Member save(Member member) {
        em.persist(member);
        return member;
    }

    @Override
    public Optional<Member> findByName(String name) {
        Member member = em.find(Member.class,name);
        return Optional.ofNullable(member);
    }
}
