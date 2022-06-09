import axios from "axios";
const getIpAddress = () => {
    return new Promise((resolve, reject)=>{
        resolve(axios.get('https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572'));
    })
}

export { getIpAddress };