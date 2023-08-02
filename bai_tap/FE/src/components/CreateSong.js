import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createSong } from "../service/songService";
function CreateSong() {
  const natigate=useNavigate();
  return (
    <div>
      {
      <div>
      <meta charSet="UTF-8" />
      <title>Create Customer</title>
      <link rel="stylesheet" href="./css/create.css" />
      <div className="container1">
        <Formik initialValues={{ nameSong: "", singer: "", author: "", timeStart: "", numberLike: 0, status: false }}
          validationSchema={yup.object({
            nameSong: yup.string().required("Không được để trống"),
            singer: yup.string().required("Không được để trống").max(30,"Tên ca sĩ tối đa 30 kí tự"),
            author: yup.string().required("Không được để trống").max(30,"Tên nhạc sĩ tối đa 30 kí tự"),
            timeStart: yup.string().required("Không được để trống").matches(/^([0-9]{2}):([0-9]{2})$/,"Thời gian phải theo định dạng hh:mm")
          })}
          onSubmit={async(values)=>{
             const song ={...values}
           await createSong(song)
           Swal.fire({
            icon: 'success',
            title: 'Thêm mới thành công!',
            showConfirmButton: false,
            timer: 1500
          })
          natigate("/")
          }}
        >
          <div className="row">
            
         
            <Form>
              <h4>Bài hát</h4>
                <label htmlFor='nameSong'>Tên bài hát</label>
                <Field type="text" placeholder="Tên bài hát" name="nameSong" id="nameSong" />
                <ErrorMessage component="div" name='nameSong' className='text-red' />
                <label htmlFor='singer'>Singer</label>
                <Field type="text" placeholder="Ca sĩ" name="singer" id="singer" />
                <ErrorMessage component="div" name='singer' className='text-red' />
                
                <label style={{width:"100%"}} htmlFor='author'>Nhạc sĩ</label>
                <Field type="text" placeholder="Nhạc sĩ" name="author" id="author" />
                <ErrorMessage component="div" name='author' className='text-red' />
                <label style={{width:"100%"}} htmlFor='timeStart'>Thời gian phát</label>
                <Field type="text" placeholder="hh:mm" name="timeStart" id="timeStart" />
                <ErrorMessage component="div" name='timeStart' className='text-red' />
          
              <button className="btn btn-success" type="submit" style={{marginTop:"30px"}}>Đăng kí</button>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
}
</div>
  );
}
export default CreateSong;