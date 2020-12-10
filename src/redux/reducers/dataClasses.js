import * as classConstants from './../constants/actionFetch';

const initialState = {
    dataClasses : [],
};

const Reducer =( state = initialState , action) => {
    switch(action.type){
        case classConstants.FETCH_CLASSES: {
            return {
                ...state,
                dataClasses: [],
            }
        }
        case classConstants.FETCH_CLASSES_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                dataClasses: data,
            }
        }
        case classConstants.FETCH_CLASSES_FAILED: {
            return {
                ...state,
                dataClasses: [],
            }
        } 
        default: 
            return state;   
    }
   
}

export default Reducer;