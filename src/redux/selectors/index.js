import _ from 'lodash'

export const getSubjects = state => state.subjectsReducer.subjects;

export const getLoggedInStatus = state => state.authReducer.isLoggedIn;

export const getTeachers = state => state.teachersReducer.teachers

export const getTeacherById = (state, id) => {

    if (state.teachersReducer.teachers) {
        const teachers = state.teachersReducer.teachers;

        if (!teachers) {
            return null;
        }

        return _.find(teachers, (teacher => teacher._id === id)) || [];
    }
}

export const getMyGroup = (state) => state.groupsReducer.myGroup;

export const getStudentById = (state, id) => {
    const students = state.studentsReducer.students;

    if (!students) {
        return null;
    }

    return _.find(students, (student => student._id === id)) || [];
}

export const getUserInfo = state => state.userInfoReducer.userInfo

export const getUserEmailAndName = state => {
    if (state.userInfoReducer.userInfo) {
        const { email, first_name, last_name } = state.userInfoReducer.userInfo
        return {
            email,
            first_name,
            last_name
        }
    }
}

export const getTodos = state => state.todosReducer.todos