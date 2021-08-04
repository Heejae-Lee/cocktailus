package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.Notice;
import com.iot.cocktailer.repository.JpaNoticeRepository;
import com.iot.cocktailer.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/notices")
public class NoticeController {
    private final JpaNoticeRepository jpaNoticeRepository;
    private final NoticeService noticeService;

    @Autowired
    public NoticeController(JpaNoticeRepository jpaNoticeRepository,NoticeService noticeService){
        this.jpaNoticeRepository = jpaNoticeRepository;
        this.noticeService = noticeService;
    }

    @GetMapping
    public ResponseEntity getAllNotices(){
        return new ResponseEntity<>(jpaNoticeRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postNotice(@RequestBody Notice notice){
        System.out.println(notice.getTitle());
        jpaNoticeRepository.join(notice);
        return new ResponseEntity(notice,HttpStatus.CREATED);
    }

    @GetMapping("/{notice_id}")
    public ResponseEntity getNoticeById(@PathVariable("notice_id") Long id){
        Optional<Notice> optionalNotice = jpaNoticeRepository.findById(id);
        Notice notice = optionalNotice.orElseThrow(()
                -> new IllegalStateException("No matching id")
            );

        return new ResponseEntity<>(notice,HttpStatus.OK);
    }

    @PutMapping("/{notice_id}")
    public ResponseEntity updateNoticeById(@PathVariable("notice_id") Long id,@RequestBody Notice notice){
        Notice result = noticeService.update(id,notice);
        return new ResponseEntity<>(result,HttpStatus.OK);
    }
}
