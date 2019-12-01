import { SET_QUIZ } from '../actionsTypes';

export const setQuiz = ({ name, description, questions }) => {
    return dispatch => {
        dispatch({
            type: SET_QUIZ,
            data: { name, description, questions },
        });
    };
};
