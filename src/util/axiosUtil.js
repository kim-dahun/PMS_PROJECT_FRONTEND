import axios from "axios";

const defaultConfig = {
    params : null,
    headers : {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        'timeout' : 60000,
        "proxy" : {
            host : '127.0.0.1',
            port : '8080'
        }
    },
}

const defaultErrorResult = {
    data : {
        statusCode : null,
        message : null,
        resultData : null
    },
    code : 500,
    message : 'Axios Error'
}

const http_get = async (url, queryParams, customOpt) => {
    try {
    return await axios.get(url, {
        ...defaultConfig, ...customOpt,
        params : queryParams ? queryParams : null
    })
    } catch (error) {
        return defaultErrorResult;
    }
}

const http_post = async (url, body, customOpt) => {
    try {
        return await axios.post(url, body, {
            ...defaultConfig, ...customOpt,
        });
    } catch (error) {
        return defaultErrorResult;
    }
}

const http_put = async (url, body, customOpt) => {
    try {
        return await axios.put(url, body, {
            ...defaultConfig, ...customOpt
        });
    } catch (error) {
        return defaultErrorResult;
    }
}

const http_delete = async (url, params, customOpt) => {
    try {
        return await axios.delete(url, {
            ...defaultConfig, ...customOpt,
            params : params ? params : null
        });
    } catch (error) {
        return defaultErrorResult
    }
}


export { http_get, http_post, http_put, http_delete };