package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.LoginForm;
import com.iot.cocktailer.domain.Member;
import com.iot.cocktailer.repository.JpaMemberRepository;
import com.iot.cocktailer.service.JwtTokenService;
import com.iot.cocktailer.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/members")
@CrossOrigin(origins = "*")
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService){
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity createMember(@RequestBody Member member){
        System.out.println(member.getName());
        member.setRole("Member");
        String result = memberService.createMember(member);

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity loginMember(@RequestBody LoginForm loginForm){
        Map<String,String> resultMap = memberService.loginMember(loginForm);
        return new ResponseEntity<>(resultMap, HttpStatus.OK);
    }

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity illegalStateExceptionHandler(Exception e){
        String message = e.getMessage();
        switch(message){
            case "Wrong password":
                return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
            default:
                return new ResponseEntity<>("Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
