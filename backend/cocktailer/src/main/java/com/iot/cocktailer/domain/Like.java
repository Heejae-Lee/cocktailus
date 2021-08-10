package com.iot.cocktailer.domain;

import javax.persistence.*;

@Entity
@Table(name="likes")
public class Like {

    @EmbeddedId
    private LikeId id;

    private Boolean liked;

    public Like() {
    }

    public Like(LikeId id, Boolean liked) {
        this.id = id;
        this.liked = liked;
    }

    public LikeId getId() {
        return id;
    }

    public void setId(LikeId id) {
        this.id = id;
    }

    public Boolean getLiked() {
        return liked;
    }

    public void setLiked(Boolean liked) {
        this.liked = liked;
    }
}
