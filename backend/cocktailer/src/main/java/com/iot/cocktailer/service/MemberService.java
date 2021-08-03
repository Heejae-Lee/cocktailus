package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.LoginForm;
import com.iot.cocktailer.domain.Member;
import com.iot.cocktailer.repository.JpaMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MemberService implements UserDetailsService {
    private final JpaMemberRepository jpaMemberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenService jwtTokenService;

    @Autowired
    public MemberService(JpaMemberRepository jpaMemberRepository,@Lazy PasswordEncoder passwordEncoder,@Lazy JwtTokenService jwtTokenService){
        this.jpaMemberRepository = jpaMemberRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenService = jwtTokenService;
    }

    public String createMember(Member member){
        member.setPassword(passwordEncoder.encode(member.getPassword()));
        validateDuplicateMember(member);
        jpaMemberRepository.save(member);
        return jwtTokenService.createToken(member);
    }

    public Map<String,String> loginMember(LoginForm loginForm){
        Optional<Member> optionalMember = jpaMemberRepository.findByEmail(loginForm.getEmail());
        Member member = optionalMember.orElseThrow(()->
                new UsernameNotFoundException(loginForm.getEmail())
            );
        if(!passwordEncoder.matches(loginForm.getPassword(),member.getPassword())){
            throw new IllegalStateException("Wrong password");
        }

        String jwtToken = jwtTokenService.createToken(member);

        Map<String,String> resultMap = new HashMap<>();
        resultMap.put("access-token",jwtToken);
        resultMap.put("name",member.getName());
        return resultMap;
    }

    private void validateDuplicateMember(Member member){
        jpaMemberRepository.findByEmail(member.getEmail())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    @Override
    public UserDetails loadUserByUsername(String member_email) throws UsernameNotFoundException {
        Optional<Member> memberWrapper = jpaMemberRepository.findByEmail(member_email);
        Member member = memberWrapper.orElseThrow(()->
                new UsernameNotFoundException(member_email)
        );

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        grantedAuthorities.add(new SimpleGrantedAuthority("Member"));
        return new User(member.getEmail(), member.getPassword(), grantedAuthorities);
    }
}
