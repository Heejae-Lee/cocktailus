package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.Like;
import com.iot.cocktailer.domain.RecipeArticle;
import com.iot.cocktailer.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequestMapping("/like")
@RestController
@CrossOrigin(origins = "*")
public class LikeController {
    private final LikeService likeService;

    public LikeController(LikeService likeService){
        this.likeService = likeService;
    }


    @PostMapping
    public ResponseEntity switchLike(@RequestBody Like like){
        return new ResponseEntity<>(likeService.switchLike(like.getId()), HttpStatus.OK);
    }
}
