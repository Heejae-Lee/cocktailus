package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Member;
import com.iot.cocktailer.repository.JpaMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    private final JpaMemberRepository jpaMemberRepository;

    @Autowired
    public MemberService(JpaMemberRepository jpaMemberRepository){
        this.jpaMemberRepository = jpaMemberRepository;
    }

    public String createMember(Member member){
        System.out.println(member.getName());
        validateDuplicateMember(member);
        jpaMemberRepository.save(member);
        return "Success";
    }

    private void validateDuplicateMember(Member member){
        jpaMemberRepository.findByName(member.getName())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }
}
