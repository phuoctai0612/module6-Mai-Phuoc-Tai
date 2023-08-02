package com.example.demo.repository;
import com.example.demo.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface ISongRepository extends JpaRepository<Song,Integer> {

    @Query(value = "select * from song limit :limitStart,:limitEnd",nativeQuery = true)
    List<Song> getAllListSong(@Param("limitStart") int limitStart,@Param("limitEnd") int limitEnd);
    @Query(value = "select * from song where name_song like concat('%' , :nameSong , '%')",nativeQuery = true)
    List<Song> getListSearch(@Param("nameSong") String nameSong );
    @Modifying

    @Query(value = "insert into song(name_song,singer,author,time_start,number_like,status) " +
            " values(:nameSong,:singer,:author,:timeStart,:numberLike,:status)",nativeQuery = true)
    void createSong(@Param("nameSong") String nameSong,@Param("singer") String singer,@Param("author")
    String author, @Param("timeStart") String timeStart,@Param("numberLike")int numberLike ,@Param("status") boolean status);
    @Modifying
    @Query(value = "UPDATE song s SET s.name_song = :nameSong, s.singer = :singer, s.author = :author, " +
            "s.time_start = :timeStart, s.number_like = :numberLike, s.status = :status WHERE s.id = :id", nativeQuery = true)
    void updateSong(@Param("id") int id, @Param("nameSong") String nameSong, @Param("singer") String singer,
                    @Param("author") String author, @Param("timeStart") String timeStart, @Param("numberLike") int numberLike,
                    @Param("status") boolean status);
    @Modifying
    @Query(value = "DELETE from song where song.id=:id",nativeQuery = true)
    void deleteSong(@Param("id")int id);
}
