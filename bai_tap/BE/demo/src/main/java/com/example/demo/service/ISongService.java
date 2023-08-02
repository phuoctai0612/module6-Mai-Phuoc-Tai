package com.example.demo.service;

import com.example.demo.model.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ISongService {
    List<Song> getAllListSong(int limitStart,int limitEnd);
  void createSong(Song song);
  void  deleteSong(int id);
  void editSong(int id,Song song);
    List<Song> getListSearch(String nameSong);
}
