package com.iot.cocktailer.service;

import com.iot.cocktailer.domain.Notice;
import com.iot.cocktailer.repository.JpaNoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NoticeService {
    private final JpaNoticeRepository jpaNoticeRepository;

    @Autowired
    public NoticeService(JpaNoticeRepository jpaNoticeRepository){
        this.jpaNoticeRepository = jpaNoticeRepository;
    }

    public Notice update(Long id,Notice notice){
        Optional<Notice> optionalNotice = jpaNoticeRepository.findById(id);
        Notice postedNotice = optionalNotice.orElseThrow(()
                -> new IllegalStateException("No matching id")
            );
        postedNotice.setContent(notice.getContent());
        postedNotice.setContent(notice.getTitle());
        jpaNoticeRepository.join(postedNotice);

        return postedNotice;
    }
}
