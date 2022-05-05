import { actionTypes } from "../constants/action-types";

let initialState = {
    images: [],
};

const imageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SAVE_IMAGE:
            return { ...state, images: [...state.images,payload] };

        default:
            return state;
    };
};

export default imageReducer;