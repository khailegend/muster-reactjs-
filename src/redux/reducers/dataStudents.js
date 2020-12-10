import * as studentConstants from './../constants/actionFetch';

const initialState = {
    dataStudents : []
};

const Reducer =( state = initialState , action) => {
    switch(action.type){
        case studentConstants.FETCH_STUDENTS: {
            return {
                ...state,
                dataStudents: [],
            }
        }
        case studentConstants.FETCH_STUDENTS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                dataStudents: data,
            }
        }
        case studentConstants.FETCH_STUDENTS_FAILED: {
            return {
                ...state,
                dataStudents: [],
            }
        } 
        default: 
            return state;   
    }
   
}

export default Reducer;