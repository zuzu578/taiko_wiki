import axios from "axios";
const getSameLevelDoc = (level) => {
    return new Promise((resolve , reject)=>{
        resolve(axios.get(`http://localhost:8080/wiki/getSameLevelClass?level=${level}`))
    })
}

export { getSameLevelDoc };