import TourActionTypes from './Tour.types';

export const INITIAL_STATE = {
    tourState: [],
    hasError: false,
};

const tourReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TourActionTypes.GET_TOUR_DATA_SUCCESS:
            return {
                tourState: action.payload,
                hasError: false,
            }

        case TourActionTypes.GET_TOUR_DATA_FAIL:
            return {
                tourState: [],
                hasError: true,
            }

        default:
            return state;
    }
};

export default tourReducer;
