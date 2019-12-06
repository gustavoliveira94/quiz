import { SET_QUIZ, REMOVE_QUIZ } from '../actionsTypes';

const INITIAL_STATE = {
    quiz: [],
};

export const quiz = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_QUIZ:
            return {
                ...state,
                quiz: [...state.quiz, action.data],
            };
        case REMOVE_QUIZ:
            return {
                ...state,
                quiz: [...state.quiz.filter(q => q._id !== action.data)],
            };
        default:
            return state;
    }
};
