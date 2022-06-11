import axios from "axios"

const postingWiki = (frm) => {
    return new Promise((resolve,reject)=>{
        resolve(axios.post('http://localhost:8080/wiki/postingWiki', frm, {
                    // headers: {
                    //     'Content-Type': 'multipart/form-data'
                    // }
        }));
    })
}

export { postingWiki };