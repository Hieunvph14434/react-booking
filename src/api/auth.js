import { instance } from "./instance";

const registerApi = async(data) => {
    let url = '/api/register';
    return await instance.post(url, data);
}

const loginApi = async(data) => {
    let url = '/api/login';
    return await instance.post(url, data);
}

const profileApi = async(token) => {
    let url = '/api/profile';
    let headers = {
        'Authorization': `Bearer ${token}`
    };
    return await instance.get(url, {
        headers: headers
    });
}

export {
    registerApi,
    loginApi,
    profileApi
}