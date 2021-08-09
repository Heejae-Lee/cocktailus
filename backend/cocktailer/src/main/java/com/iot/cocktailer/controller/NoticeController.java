package com.iot.cocktailer.controller;

import com.iot.cocktailer.domain.Notice;
import com.iot.cocktailer.repository.JpaNoticeRepository;
import com.iot.cocktailer.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/notices")
@CrossOrigin(origins = "*")
public class NoticeController {
    private final NoticeService noticeService;

    @Autowired
    public NoticeController(NoticeService noticeService){
        this.noticeService = noticeService;
    }

    @GetMapping
    public ResponseEntity getNotices(){
        return new ResponseEntity<>(noticeService.getNotices(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postNotice(@RequestBody Notice notice){
        return new ResponseEntity(noticeService.postNotice(notice),HttpStatus.CREATED);
    }

    @GetMapping("/{notice_id}")
    public ResponseEntity getNoticeById(@PathVariable("notice_id") Long id){
        return new ResponseEntity<>(noticeService.getNotice(id),HttpStatus.OK);
    }

    @PutMapping("/{notice_id}")
    public ResponseEntity updateNoticeById(@PathVariable("notice_id") Long id,@RequestBody Notice notice){
        return new ResponseEntity<>(noticeService.update(id,notice),HttpStatus.OK);
    }
}
