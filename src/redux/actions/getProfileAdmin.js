import * as adminApis from '../apis/apiEndpoint';
import * as profileConstant from './../constants/actionFetch'

export const fetchProfileAdmin = () => {
    return {
        type : profileConstant.FETCH_PROFILE_ADMIN, 
    };
};

export const fetchProfileAdminSuccess = data => {
    return {
        type : profileConstant.FETCH_PROFILE_ADMIN_SUCCESS,
        payload : {
            data,
        }, 
    };
};

export const fetchProfileAdminFailed = error => {
    return {
        type : profileConstant.FETCH_PROFILE_ADMIN_FAILED,
    };
};

export const fetchProfileAdminRequest = () => {
    return dispatch => {
        dispatch(fetchProfileAdmin());
        adminApis
            .getProfileAdmin()
            .then(resp => {
                const { data } = resp;
                dispatch(fetchProfileAdminSuccess(data))
            })
            .catch(error => {
                dispatch(fetchProfileAdminFailed(error))
            })
    }
}