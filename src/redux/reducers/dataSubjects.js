import * as subjectConstants from './../constants/actionFetch';

const initialState = {
    dataSubjects : []
};

const Reducer =( state = initialState , action) => {
    switch(action.type){
        case subjectConstants.FETCH_SUBJECTS: {
            return {
                ...state,
                dataSubjects: [],
            }
        }
        case subjectConstants.FETCH_SUBJECTS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                dataSubjects: data,
            }
        }
        case subjectConstants.FETCH_SUBJECTS_FAILED: {
            return {
                ...state,
                dataSubjects: [],
            }
        } 
        default: 
            return state;   
    }
   
}

export default Reducer;