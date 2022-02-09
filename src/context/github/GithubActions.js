import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// create an instance of axios
const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {Authorization: `token ${GITHUB_TOKEN}`}
})

 // Get search results -- export so can be used in function
 export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    });

    console.log(`${GITHUB_URL}/search/users?${params}`);

    const response = await github.get(`/search/users?${params}`); // gives us the response including the json data
    return response.data.items; // items array in the data to be returned
}

// get user and repos
export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ]);

    return { user: user.data, repos: repos.data };
}