import * as profileConstants from './../constants/actionFetch';

const initialState = {
    dataAdmin : [],
};

const Reducer =( state = initialState , action) => {
    switch(action.type){
        case profileConstants.FETCH_PROFILE_ADMIN: {
            return {
                ...state,
                dataAdmin: [],
            }
        }
        case profileConstants.FETCH_PROFILE_ADMIN_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                dataAdmin: data,
            }
        }
        case profileConstants.FETCH_PROFILE_ADMIN_FAILED: {
            return {
                ...state,
                dataAdmin: [],
            }
        } 
        default: 
            return state;   
    }
   
}

export default Reducer;