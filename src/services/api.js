import axios from '../api';
import tokenProvider from 'axios-token-interceptor';
import cookie from 'react-cookies';
import { ACCESS_TOKEN_FIELD } from '../config';
import Axios from 'axios';

axios.interceptors.request.use(tokenProvider({
    getToken: () => cookie.load('access_token')
}));


export default class Api {

    constructor() {
        this.url = 'http://localhost:3000'
    }

    getAllTeachers = async () => {
        try {
            const { data: teachers } = await axios.get(`/teachers`);
            return teachers;
        } catch (e) {
            console.log(e)
        }
    }

    getTeacherById = async (id) => {
        try {
            const { data: teacher } = await axios.get(`/teachers/${id}`);
            return teacher;
        } catch (e) {
            console.log(e)
        }
    }

    getAllStudents = async () => {
        try {
            const { data: students } = await axios.get(`/students`);
            return students;
        } catch (e) {
            console.log(e)
        }
    }

    getAllSubjects = async () => {
        try {
            const { data : subjects } = await axios.get(`/subjects`);
            return subjects;
        } catch (e) {
            console.log(e)
        }
    };

    getMySubjects = async () => {
        try {
            const { data } = await axios.get(`/me/subjects`);
            return data;
        } catch (e) {
            console.log(e)
        }
    };

    signUp = async (...data) => {
        const result = await axios.post('/students', JSON.stringify(...data));
        return result;
    }

    logIn = async (email, password) => {
        try {
            const loginInterceptor = axios.interceptors.response.use(
                (response) => {
                    const { data } = response;
                    const token = data && data.token;

                    if (token) {
                        cookie.save(ACCESS_TOKEN_FIELD, token, { path: '/' });
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    }
                },
                (error) => {
                    return error;
                }
            );

            const { isAxiosError } = await axios.post('/login', { email, password });
            
            if (isAxiosError) {
                return false;
            }

            axios.interceptors.response.eject(loginInterceptor);
            return true;
            
        } catch (e) {
        }
    }

    logOut = async () => {
        try {
            const logOutInterceptor = await axios.interceptors.response.use(
                () => {
                    cookie.remove(ACCESS_TOKEN_FIELD, { path: '/'});
                    delete axios.defaults.headers.common['Authorization'];
                },
                (error) => Promise.reject(error)
            );

            await axios.post('/logout');
            axios.interceptors.response.eject(logOutInterceptor);
        } catch (e) {
            console.log(e);
        }
    }

    getInfoAboutMe = async () => {
        try {
            const { data: info } = await axios.get('/me');
            return info;
        } catch (e) {
            console.log(e);
        }
    }

    getMyGroup = async () => {
        try {
            const { data: info } = await axios.get('/me/group');
            return info;
        } catch (e) {
            console.log(e);
        }
    }

    getMySemester = async () => {
        try {
            const { data: semester } = await axios.get('/me/semester');
            return semester;
        } catch (e) {
            console.log(e);
        }
    }

    getMyTasks = async () => {
        try {
            const { data: tasks } = await axios.get('/me/tasks');
            return tasks;
        } catch (e) {
            console.log(e);
        }
    }

    createTask = async (...data) => {
        try {
            await axios.post('/tasks', JSON.stringify(...data));
        } catch (e) {
            console.log(e);
        }
    }

    getMyTeachers = async () => {
        try {
            const { data } = await axios.get(`/me/teachers`);
            return data;
        } catch (e) {
            console.log(e)
        }
    }

    deleteTaskDeadline = async (id) => {
        try {
            await axios.patch(`/tasks/${id}`, { expirationDate: null });
        } catch (e) {
            console.log(e);
        }
    }

    deleteTask = async (id) => {
        try {
            await axios.delete(`/tasks/${id}`);
        } catch (e) {
            console.log(e);
        }
    }

    toggleTaskCompletness = async (id, completed) => {
        try {
            await axios.patch(`/tasks/${id}`, {
                completed: completed === 'false' ? true : false
            });

        } catch (e) {
            console.log(e);
        }
    }

    getGroupById = async (id) => {
        try {
            const group = await axios.get(`/groups/${id}`);
            return group;
        } catch (e) {
            console.log(e);
        }
    }

    updateUserPhoto = async (id, form) => {
        try {
            console.log(form);

            // delete axios.defaults.headers.common['Content-Type']
            // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

            await Axios({
                method: "PATCH",
                url: `${this.url}/students/${id}/photo`,
                data: form,
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            })

            // delete axios.defaults.headers.common['Content-Type']
            // axios.defaults.headers.common['Content-Type'] = 'application/json';

        } catch (e) {
            console.log(e);
        }
    }
}