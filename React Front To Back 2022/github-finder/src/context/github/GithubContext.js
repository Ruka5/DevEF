import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GihubProvider = ({ children }) => {
    // const [users, setUser] = useState([]);
    // const [loading, setLoading] = useState(true);
    // INSTEAD of useState we use useReducer
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false    // true only for testing
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)




    // Get initial users (testing purposes)
    // const fetchUsers = async () => {
    //     setLoading();

    //     const response = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         },
    //     })

    //     const data = await response.json()

    //     // setUser(data)
    //     // setLoading(false)
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data  // payload is convention here
    //     })
    //     // console.log(data)
    // }


    // Clear users from useState
    // const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    // // Set loading
    // const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return (
        <GithubContext.Provider value={{
            ...state, // instead down
            // users: state.users,
            // loading: state.loading,
            // user: state.user,
            // repos: state.repos,
            dispatch,
            // clearUsers,
            // fetchUsers,
        }}> {children}
        </GithubContext.Provider>
    )
};

export default GithubContext