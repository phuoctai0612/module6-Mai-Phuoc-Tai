package com.example.demo.controller;

import com.example.demo.model.Song;
import com.example.demo.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/songs")

public class SongController {
    @Autowired
    private ISongService iSongService;

    @GetMapping("{limitStart}/{limitEnd}")
    public List<Song> getAllList(@PathVariable int limitStart,@PathVariable int limitEnd) {
        System.out.println(limitStart);
        System.out.println(limitEnd);
        return iSongService.getAllListSong(limitStart,limitEnd);
    }
    @GetMapping("/search/{nameSong}")
    public List<Song> getListSearch(@PathVariable String nameSong) {
        System.out.println(nameSong);
        return iSongService.getListSearch(nameSong);
    }

    @PostMapping("")
    public void createSong(@RequestBody Song song) {
        System.out.println();
        iSongService.createSong(song);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteSong(@PathVariable int id) {
        System.out.println(id);
        iSongService.deleteSong(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
   @PutMapping("{id}")
    public  ResponseEntity<?> editSong(@PathVariable int id,@RequestBody Song song){
         iSongService.editSong(id,song);
        return new ResponseEntity<>(HttpStatus.OK);
   }
}
