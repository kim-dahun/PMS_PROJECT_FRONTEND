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

const baseEndpoint = "http://localhost:8080/pms/api";

const defaultErrorResult = {
    data : {
        statusCode : null,
        message : null,
        resultData : null
    },
    code : 500,
    message : 'Axios Error'
}

const http_get = async (url, queryParams , customOpt) => {
    try {
    return await axios.get(baseEndpoint + url, {
        ...defaultConfig, ...customOpt,
        params : queryParams ? queryParams : null
    })
    } catch (error) {
        // 서버에서 응답이 있고, 상태 코드가 2xx 범위가 아닐 때
        if (error.response) {
            return {
                data: {
                    statusCode: error.response.status,
                    message: error.response.data.message || 'Server Error',
                    resultData: null
                },
                code: error.response.status,
                message: 'Server Error'
            };
        } else {
            // 서버 응답이 없거나 네트워크 오류일 때
            return defaultErrorResult;
        }
    }
}

const http_post = async (url, body, customOpt) => {
    try {
        return await axios.post(baseEndpoint + url, body, {
            ...defaultConfig, ...customOpt,
        });
    } catch (error) {
        // 서버에서 응답이 있고, 상태 코드가 2xx 범위가 아닐 때
        if (error.response) {
            return {
                data: {
                    statusCode: error.response.status,
                    message: error.response.data.message || 'Server Error',
                    resultData: null
                },
                code: error.response.status,
                message: 'Server Error'
            };
        } else {
            // 서버 응답이 없거나 네트워크 오류일 때
            return defaultErrorResult;
        }
    }
}

const http_put = async (url, body, customOpt) => {
    try {
        return await axios.put(baseEndpoint+ url, body, {
            ...defaultConfig, ...customOpt
        });
    } catch (error) {
        // 서버에서 응답이 있고, 상태 코드가 2xx 범위가 아닐 때
        if (error.response) {
            return {
                data: {
                    statusCode: error.response.status,
                    message: error.response.data.message || 'Server Error',
                    resultData: null
                },
                code: error.response.status,
                message: 'Server Error'
            };
        } else {
            // 서버 응답이 없거나 네트워크 오류일 때
            return defaultErrorResult;
        }
    }
}

const http_delete = async (url, params, customOpt) => {
    try {
        return await axios.delete(baseEndpoint + url, {
            ...defaultConfig, ...customOpt,
            params : params ? params : null
        });
    } catch (error) {
        // 서버에서 응답이 있고, 상태 코드가 2xx 범위가 아닐 때
        if (error.response) {
            return {
                data: {
                    statusCode: error.response.status,
                    message: error.response.data.message || 'Server Error',
                    resultData: null
                },
                code: error.response.status,
                message: 'Server Error'
            };
        } else {
            // 서버 응답이 없거나 네트워크 오류일 때
            return defaultErrorResult;
        }
    }
}


export { http_get, http_post, http_put, http_delete };