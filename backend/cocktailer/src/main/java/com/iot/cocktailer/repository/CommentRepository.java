package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentRepository {
    Comment save(Comment comment);
    Optional<Comment> findById(Long id);
    List<Comment> findByRecipeArticleId(Long id);
}
