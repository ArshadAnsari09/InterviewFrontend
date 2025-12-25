import axios from 'axios';
import env from '../config/env';

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
        throw error;
    }
};



export {createUser}