package com.iot.cocktailer.domain;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String article_id;

    @NotEmpty
    private String member_name;

    @Lob
    private String content;

    @CreationTimestamp
    private Date created;
}
