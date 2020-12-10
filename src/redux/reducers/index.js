import {combineReducers} from 'redux';
import dataAdmin from './dataAdmin';
import addClasses from './addClasses';
import controlClassList from './controlClassList';
import filter from './filter';
import keyDetail from './keyDetail'
import modalAddClass from './modalAddClass';
import modalAddStudents from './modalAddStudents';
import modalAddTeacher from './modalAddTeacher';
import detailStudent from './detailStudent'
import addStudents from './addStudents';
import snackbar from './snackbar';
import dataSubjects from './dataSubjects';
import dataStudents from './dataStudents';
import dataTeachers from './dataTeachers';
import dataClasses from './dataClasses';

const Reducer = combineReducers({
    dataAdmin, //loginAdmin : loginAdmin
    modalAddClass,
    addClasses, 
    controlClassList,
    filter,
    keyDetail,
    modalAddStudents,
    addStudents,
    snackbar,
    dataSubjects,
    dataStudents,
    dataTeachers,
    modalAddTeacher,
    detailStudent,
    dataClasses
});

export default Reducer;