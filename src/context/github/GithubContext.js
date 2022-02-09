import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

// file was cleaned up to basically just have the state
// passing down state, dispatching to use from components

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext;