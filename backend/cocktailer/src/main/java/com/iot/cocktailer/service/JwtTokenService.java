package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Member;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@Service
public class JwtTokenService {

    @Value("spring.jwt.secret")
    private String secretKey = "secretKey";

    private long tokenValidTime = 30 * 60 * 1000L;
    private final MemberService memberService;

    @Autowired
    public JwtTokenService(MemberService memberService){
        this.memberService = memberService;
    }

    @PostConstruct
    protected void init(){
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(Member member){
        Claims claims = Jwts.claims().setSubject(member.getEmail());
        claims.put("role",member.getRole());
        claims.put("name",member.getName());

        Date now = new Date();
        String jwtToken = Jwts.builder()
                            .setClaims(claims)
                            .setIssuedAt(now)
                            .setExpiration(new Date(now.getTime()+tokenValidTime))
                            .signWith(SignatureAlgorithm.HS256, secretKey)
                            .compact();
        return jwtToken;
    }

    public String getPK(String jwtToken){
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken).getBody().getSubject();
    }

    public String getMemberName(String jwtToken){
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken).getBody().get("name",String.class);
    }



    public Authentication getAuthentication(String jwtToken){
        UserDetails userDetails = memberService.loadUserByUsername(this.getPK(jwtToken));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    public String resolveToken(HttpServletRequest request){
        return request.getHeader("Auth-Token");
    }

    public boolean validateToken(String jwtToken){
        try{
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e){
            return false;
        }
    }
}
