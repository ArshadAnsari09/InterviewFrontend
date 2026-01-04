import axios from 'axios';
import env from '../config/env';
import {showToast} from './toaster';

const createUser = async (data) => {
    try {
        const response = await axios.post(`${env.baseUrl}/api/v1/user`, data,
            {
                headers: {
                    Authorization: `Basic ${env.basicAuth}`,
                    "content-type": "application/json"
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error sending data to API:", error); 
        showToast(error?.response?.data?.err?.msg || "Something went wrong", 'error');
        throw error;
    }
};

const login = async (data) => {
    try {
        const response = await axios.post(`${env.baseUrl}/api/v1/user/login`, data, 
            {
                headers: {
                    Authorization: `Basic ${env.basicAuth}`,
                    "content-type": "application/json"
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error sending data to API:", error); 
        showToast(error?.response?.data?.err?.msg || "Something went wrong", 'error');
        throw error;
    }
}


export {createUser,login}