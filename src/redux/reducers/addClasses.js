import * as types from '../constants/actionTypes';
var initialState = [];

var Reducer =( state = initialState , action) => {
    switch(action.type){
        case types.ADD_CLASSES:
            state.push(action.classes)
            return [...state]
        default: return state ;
    }
}

export default Reducer;