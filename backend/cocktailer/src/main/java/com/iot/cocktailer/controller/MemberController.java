package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.LoginForm;
import com.iot.cocktailer.domain.Member;
import com.iot.cocktailer.service.JwtTokenService;
import com.iot.cocktailer.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService){
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity createMember(@RequestBody Member member){
        System.out.println(member.getName());
        String result = memberService.createMember(member);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Access-Control-Allow-Origin","*");
        headers.set("Access-Control-Allow-Credentials","true");
        return new ResponseEntity<>(result, headers, HttpStatus.CREATED);
    }

//    @PostMapping("/login")
//    public ResponseEntity loginMember(@RequestBody LoginForm loginForm){
//
//    }
}
