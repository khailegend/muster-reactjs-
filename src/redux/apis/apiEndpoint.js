import axiosService from '../commons/axiosService';
import {API_ENDPOINT} from '../constants/actionFetch'


const profile = 'profile';
const subjects = 'all-subjects'
const students = 'all-students'
const teachers = 'all-teachers'
const classes = 'all-classes'

export const getProfileAdmin = () => {
    return axiosService.get(`${API_ENDPOINT}/${profile}`);
}

export const getSubjects = () => {
    return axiosService.get(`${API_ENDPOINT}/${subjects}`);
}

export const getStudents = () => {
    return axiosService.get(`${API_ENDPOINT}/${students}`);
}

export const getTeachers = () => {
    return axiosService.get(`${API_ENDPOINT}/${teachers}`);
}

export const getClasses = () => {
    return axiosService.get(`${API_ENDPOINT}/${classes}`);
}