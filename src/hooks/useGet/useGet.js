// import our action creators
import {
    requestStarted,
    requestSuccessful,
    requestFailed,
} from './actions.js';
import { reducer } from './reducer.js';
import { useEffect, useReducer } from "react";

export const useGet = ({url}) => {
    const [state, dispatch] = useReducer(reducer, {
        isLoading: true,
        data: null,
        error: null,
    });

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            dispatch(requestStarted());

            try {
                console.log('going to load:', url);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(
                        `${response.status} ${response.statusText}`
                    );
                }

                const data = await response.json();

                dispatch(requestSuccessful({data}));
            } catch (e) {
                console.log(e);
                console.log(abortController.signal);
                // only call dispatch when we know the fetch was not aborted
                if (!abortController.signal.aborted) {
                    console.log('failerd')
                    dispatch(requestFailed({error: e.message}));
                }
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url]);

    return state;
};