package com.iot.cocktailer.domain;

import lombok.*;
import lombok.experimental.Accessors;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@DynamicInsert
@Accessors(chain = true)
@Setter
@Getter
public class RecipeArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String title;

    @CreationTimestamp
    private Date created;

    @UpdateTimestamp
    private Date updated;

    @Lob
    private String content;

    private String imageURL;

    private String drink;
    private String drinkRatio;
    private String tag;

    @Transient
    private boolean liked;

    @NotEmpty
    private String member_name;

    @Column(columnDefinition = "int default 0")
    private Integer likeCount;

    public boolean isLiked() {
        return liked;
    }

    public RecipeArticle setLiked(boolean liked) {
        this.liked = liked;
        return this;
    }
}
