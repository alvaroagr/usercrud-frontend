import axios from 'axios'

export default axios.create({
    baseURL: "https://alvaroagr-usercrud.herokuapp.com/",
    headers: {
        'Accept': 'application/json'
    }
})