import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    options: {
        params: {
            required: 'snippet',
            maxResults: 5,
            key: 'AIzaSyDNv5WJjj0HeQNyf06wu80xKwuv5TkpP5U'
        }
    }
});