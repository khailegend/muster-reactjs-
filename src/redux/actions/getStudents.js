import * as adminApis from '../apis/apiEndpoint';
import * as studentConstant from './../constants/actionFetch'

export const fetchStudents = () => {
    return {
        type : studentConstant.FETCH_STUDENTS, 
    };
};

export const fetchStudentsSuccess = data => {
    return {
        type : studentConstant.FETCH_STUDENTS_SUCCESS,
        payload : {
            data,
        }, 
    };
};

export const fetchStudentsFailed = error => {
    return {
        type : studentConstant.FETCH_STUDENTS_FAILED,
    };
};

export const fetchStudentsRequest = () => {
    return dispatch => {
        dispatch(fetchStudents());
        adminApis
            .getStudents()
            .then(resp => {
                const { data } = resp;
                dispatch(fetchStudentsSuccess(data))
            })
            .catch(error => {
                dispatch(fetchStudentsFailed(error))
            })
    }
}