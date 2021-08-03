package com.iot.cocktailer.domain;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity
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

    @NotEmpty
    private String member_name;
}
