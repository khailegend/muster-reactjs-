import * as types from '../constants/actionTypes';
var initialState = '';

var Reducer =( state = initialState , action) => {
    switch(action.type){
        case types.ADD_ID_DETAIL:
            state = action.idDetail 
            return state
        default: return state ;   
    }
}

export default Reducer;