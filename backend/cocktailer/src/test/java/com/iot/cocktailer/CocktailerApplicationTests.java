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

//@SpringBootTest
class CocktailerApplicationTests {

	@Test
	void contextLoads() {
	}

}
