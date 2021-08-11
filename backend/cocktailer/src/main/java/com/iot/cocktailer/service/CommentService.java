package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Comment;
import com.iot.cocktailer.repository.JpaCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentService {
    private final JpaCommentRepository jpaCommentRepository;

    @Autowired
    public CommentService(JpaCommentRepository jpaCommentRepository){
        this.jpaCommentRepository = jpaCommentRepository;
    }

    public Comment postComment(Long articleId,Comment comment){
        comment.setArticle_id(articleId);
        jpaCommentRepository.save(comment);

        return comment;
    }

    public Comment updateComment(Long articleId,Long commentId,Comment comment){
        Optional<Comment> optionalComment = jpaCommentRepository.findById(articleId,commentId);
        Comment postedComment = optionalComment.orElseThrow(
                () -> new IllegalStateException("No matching id")
        );

        postedComment.setContent(comment.getContent());
        jpaCommentRepository.save(postedComment);

        return postedComment;
    }

    public void deleteComment(Long articleId,Long commentId){
        Optional<Comment> optionalComment = jpaCommentRepository.findById(articleId,commentId);
        Comment comment = optionalComment.orElseThrow(
                () -> new IllegalStateException("No matching id")
        );

        jpaCommentRepository.remove(comment);
    }
}
