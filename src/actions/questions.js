import { SET_QUIZ } from '../actionsTypes';

export const setQuestion = quiz => {
    return dispatch => {
        dispatch({
            type: SET_QUIZ,
            data: { quiz },
        });
    };
};
