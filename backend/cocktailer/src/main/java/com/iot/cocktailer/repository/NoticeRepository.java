package com.iot.cocktailer.repository;

import com.iot.cocktailer.domain.Notice;

import java.util.List;
import java.util.Optional;

public interface NoticeRepository {
    List<Notice> findAll();
    Notice join(Notice notice);
    Optional<Notice> findById(Long id);
}
