import axios from 'axios';

const classroomApi = axios.create({
    baseURL: 'https://classroom.googleapis.com'
});

export { classroomApi }