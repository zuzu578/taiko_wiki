import axios from "axios"


const fileUpload = (frm) => {
    return new Promise((resolve,reject)=>{
        resolve(axios.post('http://localhost:8080/wiki/uploadFile', frm, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
        }));
    })
}

export { fileUpload };