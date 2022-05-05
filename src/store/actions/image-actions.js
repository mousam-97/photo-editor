import { actionTypes } from "../constants/action-types";

const saveImage = (image) => {
    return {
        type: actionTypes.SAVE_IMAGE,
        payload: image
    };
};

export { saveImage };