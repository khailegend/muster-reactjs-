import * as adminApis from '../apis/apiEndpoint';
import * as subjectConstant from './../constants/actionFetch'

export const fetchSubjects = () => {
    return {
        type : subjectConstant.FETCH_SUBJECTS, 
    };
};

export const fetchSubjectsSuccess = data => {
    return {
        type : subjectConstant.FETCH_SUBJECTS_SUCCESS,
        payload : {
            data,
        }, 
    };
};

export const fetchSubjectsFailed = error => {
    return {
        type : subjectConstant.FETCH_SUBJECTS_FAILED,

    };
};

export const fetchSubjectsRequest = () => {
    return dispatch => {
        dispatch(fetchSubjects());
        adminApis
            .getSubjects()
            .then(resp => {
                const { data } = resp;
                dispatch(fetchSubjectsSuccess(data))
            })
            .catch(error => {
                dispatch(fetchSubjectsFailed(error))
            })
    }
}