package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Member;

import java.util.Optional;

public interface MemberRepository {

    Member save(Member member);
    Optional<Member> findByEmail(String name);
}
