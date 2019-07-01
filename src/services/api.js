import axios from '../api';
import tokenProvider from 'axios-token-interceptor';
import cookie from 'react-cookies';
import { ACCESS_TOKEN_FIELD } from '../config';
import Axios from 'axios';
import paths from './apiPaths';

axios.interceptors.request.use(tokenProvider({
    getToken: () => cookie.load(ACCESS_TOKEN_FIELD)
}));


export default class Api {

    constructor() {
        this.url = 'http://localhost:3000';
        // this.url = 'https://cyberuni.herokuapp.com'
    }

    getAllTeachers = async () => {
        try {
            
            const res = await axios.get(path.teachers);
            return res && res.data;
        } catch (e) {
            console.log(e)
        }
    }

    getTeacherById = async (id) => {
        try {
            const res = await axios.get(`${path.teachers}/${id}`);
            return res && res.data;
        } catch (e) {
            console.log(e)
        }
    }

    getAllStudents = async () => {
        try {
            const res = await axios.get(path.students);
            return res && res.data;
        } catch (e) {
            console.log(e)
        }
    }

    getAllSubjects = async () => {
        try {
            const res = await axios.get(path.subjects);
            return res && res.data;
        } catch (e) {
            console.log(e)
        }
    };

    getMySubjects = async () => {
        try {
            return res && res.data;
            const res = await axios.get(path.mySubjects);
        } catch (e) {
            console.log(e)
        }
    };

    signUp = async (...data) => {
        const result = await axios.post(path.students, JSON.stringify(...data));
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

            const { isAxiosError } = await axios.post(path.logIn, { email, password });
            
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

            await axios.post(path.logOut);
            axios.interceptors.response.eject(logOutInterceptor);
        } catch (e) {
            console.log(e);
        }
    }

    getInfoAboutMe = async () => {
        try {
            const res = await axios.get(path.myInfo);
            return res && res.data;
        } catch (e) {
            console.log(e);
        }
    }

    getMyGroup = async () => {
        try {
            const res = await axios.get(path.myGroup);
            return res && res.data;
        } catch (e) {
            console.log(e);
        }
    }

    getMySemester = async () => {
        try {
            const res = await axios.get(path.mySemester);
            return res && res.data;
        } catch (e) {
            console.log(e);
        }
    }

    getMyTasks = async () => {
        try {
            const res = await axios.get(path.myTasks);
            return res && res.data;
        } catch (e) {
            console.log(e);
        }
    }

    createTask = async (...data) => {
        try {
            await axios.post(path.tasks, JSON.stringify(...data));
        } catch (e) {
            console.log(e);
        }
    }

    getMyTeachers = async () => {
        try {
            const res = await axios.get(path.myTeachers);
            return res && res.data;
        } catch (e) {
            console.log(e)
        }
    }

    deleteTaskDeadline = async (id) => {
        try {
            await axios.patch(`${path.teachers}/${id}`, { expirationDate: null });
        } catch (e) {
            console.log(e);
        }
    }

    deleteTask = async (id) => {
        try {
            await axios.delete(`${path.teachers}/${id}`);
        } catch (e) {
            console.log(e);
        }
    }

    toggleTaskCompletness = async (id, completed) => {
        try {
            await axios.patch(`${path.teachers}/${id}`, {
                completed: completed === 'false' ? true : false
            });

        } catch (e) {
            console.log(e);
        }
    }

    getGroupById = async (id) => {
        try {
            const group = await axios.get(`${path.groups}/${id}`);
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