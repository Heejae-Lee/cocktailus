package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Like;
import com.iot.cocktailer.domain.LikeId;

import java.util.Optional;

public interface LikeRepository {
    Optional<Like> findById(LikeId likeId);
    Like save(Like like);
}
