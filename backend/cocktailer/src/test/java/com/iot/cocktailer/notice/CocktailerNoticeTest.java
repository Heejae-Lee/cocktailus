package com.iot.cocktailer.notice;

import com.iot.cocktailer.domain.Notice;
import com.iot.cocktailer.repository.JpaNoticeRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

@SpringBootTest
public class CocktailerNoticeTest {
    private final JpaNoticeRepository jpaNoticeRepository;

    @Autowired
    public CocktailerNoticeTest(JpaNoticeRepository jpaNoticeRepository){
        this.jpaNoticeRepository = jpaNoticeRepository;
    }

    @Test
    @Transactional
    void 공지사항등록테스트(){
        // given
        Notice notice = new Notice();
        notice.setContent("TestContent");
        notice.setTitle("테스트");
        notice.setMember_name("lktgt");

        // when
        Notice postedNotice = jpaNoticeRepository.join(notice);

        // then
        Assertions.assertThat(notice.equals(postedNotice));
    }
}
