package com.iot.cocktailer;

import com.iot.cocktailer.domain.Member;
import com.iot.cocktailer.repository.JpaMemberRepository;
import com.iot.cocktailer.service.JwtTokenService;
import com.iot.cocktailer.service.MemberService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class CocktailerApplicationTests {
	private final MemberService memberService;
	private final JpaMemberRepository jpaMemberRepository;
	private final JwtTokenService jwtTokenService;

	@Autowired
	public CocktailerApplicationTests(MemberService memberService,JpaMemberRepository jpaMemberRepository,JwtTokenService jwtTokenService){
		this.memberService = memberService;
		this.jpaMemberRepository = jpaMemberRepository;
		this.jwtTokenService = jwtTokenService;
	}

	@Test
	void contextLoads() {
	}

	@Test
	@Transactional
	void 회원가입테스트(){
		// given
		Member member = new Member();
		member.setName("test123456");
		member.setPassword("asdf1234");

		// when
		String result = memberService.createMember(member);

		// then
		Assertions.assertThat(result.equals(jwtTokenService.createToken(member)));

	}

	@Test
	@Transactional
	void 로그인테스트(){
		// given
		Member member = new Member();
		member.setName("test123456");
		member.setPassword("asdf1234");

		// when
		// then

	}

}
