import axiosUtil from "/src/util/axiosUtil";

const axios = axiosUtil;

const userLogin = (params, customOpt) => {
    return axios.post('/user/login', params, customOpt);
}

const getUserList = (params, customOpt) => {
    return axios.get('/user/select', params, customOpt);
}

const createUserInfo = (body, customOpt) => {
    return axios.post('/user/create', body, customOpt);
}

const updateUserInfo = (body, customOpt) => {
    return axios.post('/user/update', body, customOpt);
}

export { userLogin, getUserList };