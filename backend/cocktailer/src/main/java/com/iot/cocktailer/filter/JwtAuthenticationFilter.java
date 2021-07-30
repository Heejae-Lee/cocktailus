package com.iot.cocktailer.filter;

import com.iot.cocktailer.service.JwtTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtTokenService jwtTokenService;

    @Autowired
    public JwtAuthenticationFilter(JwtTokenService jwtTokenService){
        this.jwtTokenService = jwtTokenService;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        String jwtToken = jwtTokenService.resolveToken((HttpServletRequest) request);
        if(jwtToken != null && jwtTokenService.validateToken(jwtToken)){
            Authentication authentication = jwtTokenService.getAuthentication(jwtToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        chain.doFilter(request,response);

    }
}
