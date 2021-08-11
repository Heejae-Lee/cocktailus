package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentRepository {
    Comment save(Comment comment);
    Optional<Comment> findById(Long articleId,Long commentId);
    List<Comment> findByRecipeArticleId(Long id);
    void remove(Comment comment);
}
