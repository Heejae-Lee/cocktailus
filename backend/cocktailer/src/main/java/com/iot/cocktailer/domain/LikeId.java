package com.iot.cocktailer.domain;

import javax.persistence.Embeddable;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class LikeId implements Serializable {
    private Long article_id;

    private String member_name;

    public Long getArticle_id() {
        return article_id;
    }

    public void setArticle_id(Long article_id) {
        this.article_id = article_id;
    }

    public String getMember_name() {
        return member_name;
    }

    public void setMember_name(String member_name) {
        this.member_name = member_name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LikeId likeId = (LikeId) o;
        return Objects.equals(article_id, likeId.article_id) && Objects.equals(member_name, likeId.member_name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(article_id, member_name);
    }
}
