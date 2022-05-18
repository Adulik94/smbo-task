import axios from "axios";
//  youtube API key
const KEY = 'AIzaSyDVPzHRlo03vuh6S8Y3VZXGwJKa54juEaU';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})