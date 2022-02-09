const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

 // Get search results -- export so can be used in function
 export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    });

    console.log(`${GITHUB_URL}/search/users?${params}`);

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });

    const {items} = await response.json();

    return items; // return the data
}