export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const RESET_REQUEST = 'RESET_REQUEST';

// a simple function that takes some payload, and returns an action object:
export const requestSuccessful = ({data}) => ({
    type: REQUEST_SUCCESSFUL,
    data,
});
export const requestStarted = () => ({
    type: REQUEST_STARTED,
});
export const requestFailed = ({error}) => ({
    type: REQUEST_FAILED,
    error,
});