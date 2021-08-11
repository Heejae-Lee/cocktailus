package com.iot.cocktailer.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity
@Accessors(chain = true)
@Getter
@Setter
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long article_id;

    @NotEmpty
    private String member_name;

    @Lob
    private String content;

    @CreationTimestamp
    private Date created;

}
