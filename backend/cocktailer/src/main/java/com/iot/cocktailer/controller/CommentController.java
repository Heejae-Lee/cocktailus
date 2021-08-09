package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.Comment;
import com.iot.cocktailer.repository.JpaCommentRepository;
import com.iot.cocktailer.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "*")
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity postComment(@RequestBody Comment comment){
        return new ResponseEntity<>(commentService.postComment(comment), HttpStatus.CREATED);
    }

}
