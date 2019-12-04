import { QUIZ } from '../actionsTypes';

export const setQuiz = ({ name, description, questions }) => {
    console.log(questions);
    return dispatch => {
        dispatch({
            type: QUIZ,
            data: { name, description, questions },
        });
    };
};
