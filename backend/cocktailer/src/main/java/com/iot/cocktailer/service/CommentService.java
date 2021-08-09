package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Comment;
import com.iot.cocktailer.repository.JpaCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final JpaCommentRepository jpaCommentRepository;

    @Autowired
    public CommentService(JpaCommentRepository jpaCommentRepository){
        this.jpaCommentRepository = jpaCommentRepository;
    }


    public Comment postComment(Comment comment){
        jpaCommentRepository.save(comment);
        return comment;
    }
}
