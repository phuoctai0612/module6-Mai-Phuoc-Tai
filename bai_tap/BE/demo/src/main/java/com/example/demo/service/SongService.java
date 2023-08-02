package com.example.demo.service;

import com.example.demo.model.Song;
import com.example.demo.repository.ISongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SongService implements ISongService{
    @Autowired
    private ISongRepository iSongRepository;
    @Override
    public List<Song> getAllListSong(int limitStart,int limitEnd) {
        return iSongRepository.getAllListSong(limitStart,limitEnd);
    }

    @Override
    public void createSong(Song song) {
        System.out.println(song.getNameSong());
        iSongRepository.createSong(song.getNameSong(),song.getSinger(),song.getAuthor(),song.getTimeStart(),song.getNumberLike(),song.isStatus());
    }

    @Override
    public void deleteSong(int id) {
        iSongRepository.deleteSong(id);
    }

    @Override
    public void editSong(int id,Song song) {
        iSongRepository.updateSong( id,song.getNameSong(),song.getSinger(),song.getAuthor(),song.getTimeStart(),song.getNumberLike(),song.isStatus());

    }

    @Override
    public List<Song> getListSearch(String nameSong) {
        return iSongRepository.getListSearch(nameSong);
    }
}
