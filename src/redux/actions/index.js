import * as types from './../constants/actionTypes';


export const admin = (data) => {
    return {
        type : types.ADMIN,
        data
    }
} 

// add classes from modal to class list 
export const addClasses = (classes) => {
    return {
        type : types.ADD_CLASSES,
        classes
    }
}

//show modal add classes
export const showModalAddClasses = () => {
    return {
        type : types.SHOW_MODAL_ADD_CLASSES,
    }
}
export const closeModalAddClasses = () => {
    return {
        type : types.CLOSE_MODAL_ADD_CLASSES,
    }
}

//control classes list 
export const keyControlClassList = (keyControl) => {
    return {
        type : types.ADD_KEY_CONTROL_CLASS_LIST,
        keyControl
    }
}

//function filter (use for all page in page Admin)
export const keyFilter = (keyFilter) => {
    return {
        type : types.ADD_KEY_FILTER,
        keyFilter
    }
}

//show modal add students
export const showModalAddStudents = () => {
    return {
        type : types.SHOW_MODAL_ADD_STUDENTS,
    }
}
export const closeModalAddStudents = () => {
    return {
        type : types.CLOSE_MODAL_ADD_STUDENTS,
    }
}

//show modal add teacher
export const showModalAddTeacher = () => {
    return {
        type : types.SHOW_MODAL_ADD_TEACHER,
    }
}
export const closeModalAddTeacher = () => {
    return {
        type : types.CLOSE_MODAL_ADD_TEACHER,
    }
}

//show modal detail student
export const showDetailStudent = () => {
    return {
        type : types.SHOW_DETAIL_STUDENT,
    }
}
export const closeDetailStudent = () => {
    return {
        type : types.CLOSE_DETAIL_STUDENT,
    }
}
export const keyDetail = (idDetail) => {
    return {
        type : types.ADD_ID_DETAIL,
        idDetail
    }
}

// add students from modal to class list 
export const addStudents = (students) => {
    return {
        type : types.ADD_STUDENTS,
        students
    }
}


//show snackbar
export const openSnackbar = () => {
    return {
        type : types.SHOW_SNACKBAR,
    }
}
export const closeSnackbar = () => {
    return {
        type : types.CLOSE_SNACKBAR,
    }
}