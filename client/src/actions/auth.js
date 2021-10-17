import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        router.push('/Dashboard');
    } catch(error) {
        console.log(error.response.data.message);
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        router.push('/Dashboard');
    } catch(error) {
        console.log(error.response.data.message);
    }
};

