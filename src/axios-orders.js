import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d4bd2.firebaseio.com/'
});

export default instance;