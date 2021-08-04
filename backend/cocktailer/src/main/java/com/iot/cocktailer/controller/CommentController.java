package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.Comment;
import com.iot.cocktailer.repository.JpaCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "*")
public class CommentController {
    private final JpaCommentRepository jpaCommentRepository;

    @Autowired
    public CommentController(JpaCommentRepository jpaCommentRepository){
        this.jpaCommentRepository = jpaCommentRepository;
    }

    @PostMapping
    public ResponseEntity postComment(@RequestBody Comment comment){
        jpaCommentRepository.save(comment);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

}
