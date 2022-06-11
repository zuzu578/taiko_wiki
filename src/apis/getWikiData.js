import axios from "axios"

const getWikiData = (searchKeyword) =>{
    return new Promise((resolve,reject)=>{
        resolve(axios.get(`http://localhost:8080/wiki/getWikiData?searchKeyword=${searchKeyword}`));
    })
}

export { getWikiData };