import { QUIZ } from '../actionsTypes';

const INITIAL_STATE = {
    quiz: [],
};

export const quiz = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QUIZ:
            return {
                ...state,
                quiz: [...state.quiz, action.data],
            };
        default:
            return state;
    }
};
