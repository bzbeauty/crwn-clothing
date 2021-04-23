import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null,
    emailAndPassword: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                errorMessage: action.payload
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                errorMessage: null
            };
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: null
            };
        default:
            return state;
    }
};

export default userReducer;

/*  case UserActionTypes.GOOGLE_SIGN_IN_START:
            return {
                ...state
            };
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                ...state,
                emailAndPassword: action.payload
            };
        case UserActionTypes.SIGN_OUT_START:
            return{
                ...state,
                currentUser: action.payload
            } */