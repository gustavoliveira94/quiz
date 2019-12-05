import { QUIZ } from '../actionsTypes';

export const setQuiz = ({ name, description, questions }) => {
    console.log(questions);
    return dispatch => {
        dispatch({
            type: QUIZ,
            data: {
                _id: Math.floor(Math.random() * 161102312113245646500),
                name,
                description,
                questions,
            },
        });
    };
};
