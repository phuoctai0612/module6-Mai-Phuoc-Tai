import { Link } from "react-router-dom";
import { getListSong, editStatusSong, deleteStatusSong, searchSong } from "../service/songService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
let limitStart = 0
let limitEnd = 4
function SongManagement() {
    const [songs, setSongs] = useState([])
    // let [limitStart] = useState(0)
    // let [limitEnd] = useState(4)
    const [page, setPage] = useState(1)
    const [displaySingAndAuthor, setDisplaySingAndAuthor] = useState({})
    const getAll = (limitStart, limitEnd) => {
        const list = async () => {
            setSongs(await getListSong(limitStart, limitEnd))

        }
        list();
    }

    useEffect(() => {
        getAll(limitStart, limitEnd)
    }, [])
    const searchNameSong = async (nameSong) => {
        if (nameSong == '') {
            setSongs(await getListSong())
        } else {
            setSongs(await searchSong(nameSong));
            console.log(nameSong);
        }

    }

    const editStatus = (obj) => {
        const objNew = { ...obj }
        console.log(objNew);
        editStatusSong(objNew);
    }

    const displaySing = async (obj) => {
        setDisplaySingAndAuthor(obj);
    }
    const previous = async () => {
        if (limitStart >= 4) {
            limitStart -= 4
        }
        const checkData = await getListSong(limitStart, limitEnd)
        if (checkData.length == 0 && limitStart >= 0 && limitEnd >= 0) {
            limitStart -= 4
        } else {
            getAll(limitStart, limitEnd)
        }
    }

    const after = async () => {
        limitStart += 4
       await getListSong(limitStart, limitEnd).then((data) => {
        console.log(data.length);
            if (data.length == 0) {
                limitStart -= 4
            }
            else {
                getAll(limitStart, limitEnd)
            }
        }
        )
       

    }

    return (
        <div >
            {songs &&
                <div>
                    <div style={{ float: "left", width: "450px", border: "solid 1px", padding: "20px" }}>
                        <h1>{displaySingAndAuthor.nameSong}</h1>
                        <h3>{displaySingAndAuthor.author}</h3>
                    </div>
                    <div style={{ width: "30%", float: "right", display: "flex" }}>
                        <input placeholder="Tên bài hát" type="text" id="nameSong"></input>
                        <button className="btn btn-success" onClick={() => {
                            const nameSong = document.getElementById("nameSong").value
                            searchNameSong(nameSong)
                        }}>Tìm kiếm</button>
                    </div>
                    <div className="container-xl">
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h2>Quản lí <b>bài hát</b></h2>
                                        </div>
                                        <div className="col-sm-6">
                                            <Link to={`/songs/create`} className="btn btn-success"><span>Đăng kí bài hát</span></Link>

                                        </div>
                                    </div>
                                </div>
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên bài hát</th>
                                            <th>Ca sĩ</th>
                                            <th>Thời gian phát</th>
                                            <th>Số lượt yêu thích</th>
                                            <th>Trạng thái</th>
                                            <th>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {songs.map((item, index) =>
                                            <tr key={`S_${index}`}>
                                                <td>{index + 1}</td>
                                                <a onClick={() => {
                                                    const obj = {
                                                        nameSong: item.nameSong,
                                                        author: item.author
                                                    }
                                                    displaySing(obj)


                                                }}>
                                                    <td>{item.nameSong}</td></a>

                                                <td>{item.singer}</td>
                                                <td>{item.timeStart}</td>
                                                <td>{item.numberLike}</td>
                                                <td><button onClick={async () => {
                                                    await deleteStatusSong(item.id)
                                                    setSongs(await getListSong())
                                                }}>Xoa</button></td>
                                                {
                                                    item.status ? <td>Công khai</td> : <td>Lưu trữ</td>
                                                }
                                                <td>
                                                    <button className="btn btn-success" onClick={() => {
                                                        const obj = {
                                                            id: item.id,
                                                            nameSong: item.nameSong,
                                                            singer: item.singer,
                                                            author: item.author,
                                                            timeStart: item.timeStart,
                                                            numberLike: item.numberLike,
                                                            status: true
                                                        }
                                                        Swal.fire({
                                                            title: 'Bạn có muốn công khai bài hát ' + item.nameSong,
                                                            showCancelButton: true,
                                                            confirmButtonText: 'Có',
                                                            cancelButtonText: 'Không',
                                                            reverseButtons: true
                                                        }).then(async (res) => {
                                                            if (res.isConfirmed) {
                                                                editStatus(obj)
                                                                Swal.fire({
                                                                    icon: 'success',
                                                                    title: 'Công khai thành công!',
                                                                    showConfirmButton: false,
                                                                    timer: 1500
                                                                })
                                                            }
                                                            setSongs(await getListSong(""))
                                                        })
                                                    }}>
                                                        Công khai
                                                    </button>

                                                </td>

                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button onClick={async () => {
                            await previous()
                        }}>Trước</button>
                        <button onClick={() => {
                            after();
                        }

                        }>Sau</button>
                    </div>
                </div>
            }

        </div>
    )
}

export default SongManagement;