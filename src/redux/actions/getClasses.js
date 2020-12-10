import * as adminApis from '../apis/apiEndpoint';
import * as classConstant from './../constants/actionFetch'

export const fetchClasses = () => {
    return {
        type : classConstant.FETCH_CLASSES, 
    };
};

export const fetchClassesSuccess = data => {
    return {
        type : classConstant.FETCH_CLASSES_SUCCESS,
        payload : {
            data,
        }, 
    };
};

export const fetchClassesFailed = error => {
    return {
        type : classConstant.FETCH_CLASSES_FAILED,
    };
};

export const fetchClassesRequest = () => {
    return dispatch => {
        dispatch(fetchClasses());
        adminApis
            .getClasses()
            .then(resp => {
                const { data } = resp;
                dispatch(fetchClassesSuccess(data))
            })
            .catch(error => {
                dispatch(fetchClassesFailed(error))
            })
    }
}