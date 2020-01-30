import { LOAD, LOAD_FAILED, LOAD_SUCCESS, SET_SELECTED } from './actions';

const initialState = {
    isLoading: false,
    items: [],
    selected: [],
    error: undefined,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            return {...state, isLoading: true, error: undefined};
        case LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: undefined,
                items: action.data,
                selected: state.selected.filter(
                    id => (undefined !== action.data.find(c => (
                        c.id === id
                    )))
                )
            };
        case LOAD_FAILED:
            return {...state, isLoading: false, error: action.error};
        case SET_SELECTED:
            return {...state, selected: action.campaigns};
        default:
            return state
    }
};

export default reducer;
