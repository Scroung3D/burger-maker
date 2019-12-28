import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-82270.firebaseio.com/'
});

export default instance;