export const LOAD = 'LOAD';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILED = 'LOAD_FAILED';
export const SET_SELECTED = 'SET_SELECTED';

export const load = () => {
    console.log("load called")
    return (
        {
            type: LOAD
        }
    )};

export const loadSuccess = (data) => (
    {
        type: LOAD_SUCCESS,
        data
    }
);
export const loadFailure = (error) => (
    {
        type: LOAD_FAILED,
        error
    }
);

export const setSelected = (selected) => (
    {
        type: SET_SELECTED,
        selected
    }
);
