const fetch = require("node-fetch");
/**
 * @returns {Promise<{url: string, facts: string, pics_repo: string, api_repo: string}>}
 */
module.exports = async() => {
    return fetch("https://axoltlapi.herokuapp.com/", {
        "method": "GET",
        "headers": {
            "Accept": "application/json"
        }
    }).then((data) => data.json()).then((data) => {
        return data;
    })
}