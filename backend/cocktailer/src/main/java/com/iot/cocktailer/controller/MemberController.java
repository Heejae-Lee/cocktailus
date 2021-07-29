package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.Member;
import com.iot.cocktailer.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        String result = memberService.createMember(member);

        return new ResponseEntity<>(member, HttpStatus.CREATED);
    }
}
