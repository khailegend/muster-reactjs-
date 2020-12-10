import * as adminApis from '../apis/apiEndpoint';
import * as teacherConstant from './../constants/actionFetch'

export const fetchTeachers = () => {
    return {
        type : teacherConstant.FETCH_TEACHERS, 
    };
};

export const fetchTeachersSuccess = data => {
    return {
        type : teacherConstant.FETCH_TEACHERS_SUCCESS,
        payload : {
            data,
        }, 
    };
};

export const fetchTeachersFailed = error => {
    return {
        type : teacherConstant.FETCH_TEACHERS_FAILED,
    };
};

export const fetchTeachersRequest = () => {
    return dispatch => {
        dispatch(fetchTeachers());
        adminApis
            .getTeachers()
            .then(resp => {
                const { data } = resp;
                dispatch(fetchTeachersSuccess(data))
            })
            .catch(error => {
                dispatch(fetchTeachersFailed(error))
            })
    }
}