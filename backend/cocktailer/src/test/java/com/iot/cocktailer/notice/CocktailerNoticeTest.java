package com.iot.cocktailer.notice;

import com.iot.cocktailer.domain.Notice;
import com.iot.cocktailer.repository.JpaNoticeRepository;
import com.iot.cocktailer.service.NoticeService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

@SpringBootTest(
        properties = "spring.config.location=" +
                "classpath:application.properties," +
                "classpath:aws.properties," +
                "classpath:datasource.properties"
)
public class CocktailerNoticeTest {
    private final JpaNoticeRepository jpaNoticeRepository;
    private final NoticeService noticeService;

    @Autowired
    public CocktailerNoticeTest(JpaNoticeRepository jpaNoticeRepository,NoticeService noticeService){
        this.jpaNoticeRepository = jpaNoticeRepository;
        this.noticeService = noticeService;
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
        Notice postedNotice = jpaNoticeRepository.save(notice);

        // then
        Assertions.assertThat(notice.equals(postedNotice));
    }

    @Test
    @Transactional
    void 공지사항삭제테스트(){
        // given
        Notice notice = new Notice();
        notice.setTitle("Test");
        notice.setContent("testContent");
        notice.setMember_name("lktgt");
        noticeService.postNotice(notice);

        // when
        noticeService.deleteNotice(notice.getId());

        // then
        Assertions.assertThat(noticeService.getNotice(notice.getId())).isEqualTo("No matching id");
    }
}
