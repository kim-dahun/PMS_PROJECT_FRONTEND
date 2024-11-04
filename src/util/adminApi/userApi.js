import { http_post, http_get, http_put, http_delete } from '../axiosUtil';

    const userLogin = (params, customOpt) => {
        return http_post('/user/login', params, customOpt);
    }

    const getUserList = (params, customOpt) => {
        return http_get('/user/select', params, customOpt);
    }

    const createUserInfo = (body, customOpt) => {
        return http_post('/user/create', body, customOpt);
    }

    const updateUserInfo = (body, customOpt) => {
        return http_post('/user/update', body, customOpt);
    }

    export { userLogin, getUserList, createUserInfo, updateUserInfo };