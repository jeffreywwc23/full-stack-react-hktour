import axios from "axios";
import TourActionTypes from './Tour.types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetTourDataAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get("http://127.0.0.1:3000/api/v1/tours");
            const { data } = res;
            dispatch({
                type: TourActionTypes.GET_TOUR_DATA_SUCCESS,
                payload: data
            });
            toast.success('Getting Tour Data Successfully');
        } catch (error) {
            if (error.response) {
                dispatch({
                    type: TourActionTypes.GET_TOUR_DATA_FAIL,
                    payload: error.response.data.message,
                });
                toast.error(error.response.data.message);
            }
        }
    };
};



