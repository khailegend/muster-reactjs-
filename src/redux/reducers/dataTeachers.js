import * as teacherConstants from './../constants/actionFetch';

const initialState = {
    dataTeachers: []
};

const Reducer =( state = initialState , action) => {
    switch(action.type){
        case teacherConstants.FETCH_TEACHERS: {
            return {
                ...state,
                dataTeachers: [],
            }
        }
        case teacherConstants.FETCH_TEACHERS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                dataTeachers: data,
            }
        }
        case teacherConstants.FETCH_TEACHERS_FAILED: {
            return {
                ...state,
                dataTeachers: [],
            }
        } 
        default: 
            return state;   
    }
   
}

export default Reducer;