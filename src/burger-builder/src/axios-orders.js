import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-76db7.firebaseio.com/'
});

export default instance;