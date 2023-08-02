import axios from "axios";


export async function getListSong(limitStart,limitEnd) {
     const res = (await axios.get(`http://localhost:8080/songs/`+limitStart+"/"+limitEnd))
     return res.data
}
export async function createSong(song) {
     await axios.post(`http://localhost:8080/songs`, song)
}
export async function editStatusSong(song) {
     await axios.put(`http://localhost:8080/songs/` + song.id, song)
}
export async function deleteStatusSong(id) {
     await axios.delete(`http://localhost:8080/songs/` + id)
}
export async function searchSong(nameSong) {
     const res = await axios.get(`http://localhost:8080/songs/search/` + nameSong)
     return res.data
}
export async function pageSong(nameSong) {
     const res = await axios.get(`http://localhost:8080/songs/page/` + nameSong + "/limit/" + 4)
     return res.data
}

