import { SET_QUIZ, GET_QUIZ } from '../actionsTypes';

const INITIAL_STATE = {
    setQuiz: {
        name: '',
        description: '',
        questions: [
            {
                name: '',
            },
        ],
        answer: '',
    },
    getQuiz: [],
};

export const quiz = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_QUIZ:
            return {
                ...state,
                setQuiz: action.data,
            };
        case GET_QUIZ:
            return {
                ...state,
                getQuiz: action.data,
            };
        default:
            return state;
    }
};
