import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null,
    emailAndPassword: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: null
            };
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case UserActionTypes.GOOGLE_SIGN_IN_START:
            return {
                ...state
            };
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                emailAndPassword: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;