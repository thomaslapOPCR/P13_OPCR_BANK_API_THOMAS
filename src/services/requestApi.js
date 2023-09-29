import axios from 'axios';
const PORT = 3001;
const BASE_URL = `http://localhost:${PORT}/api/v1`;

export const login = async (email, password) => {
    try {

        const response =
            await axios.post(`${BASE_URL}/user/login`, {
            email,
            password,
        });

        if (response.status === 200) {
            return {auth:true, token: response.data.body.token};
        } else {
            return {auth:false};
        }

    } catch (error) {
        if (error.response) {
            return 'Email or password invalid';
        }

    }
};


export const getProfile = async (token) => {
    try {
        const configAxios = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const response = await axios.post(
            `${BASE_URL}/user/profile`,
            {},
                 configAxios
        );
        return response.data.body

    } catch (error) {
        console.error("Error fetching user profile:", error);
        return {
            status: error.response ? error.response.status : null,
            message: error.response ? error.response.data.message : null,
            body: null,
        };
    }
};

export const updateProfiles = async (token, Profile) => {
    try {

        const configAxios = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const response =
            await axios.put(`${BASE_URL}/user/profile`,
                Profile,
                configAxios
        );

        return response.data.body;
    } catch (error) {
        console.error("Error updating user profile:", error);
    }
};

