import { SET_QUIZ, REMOVE_QUIZ } from '../actionsTypes';

export const setQuiz = ({ name, description, questions }) => {
    return dispatch => {
        dispatch({
            type: SET_QUIZ,
            data: {
                _id: Math.floor(Math.random() * 161102312113245646500),
                name,
                description,
                questions,
            },
        });
    };
};

export const removeQuiz = data => {
    return dispatch => {
        dispatch({
            type: REMOVE_QUIZ,
            data,
        });
    };
};
