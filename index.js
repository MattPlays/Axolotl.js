const axios = require("axios").default;
/**
 * @returns {Promise<{url: string, facts: string, pics_repo: string, api_repo: string}>}
 */
module.exports = async() => {
    return axios({
        method: "GET",
        url: "https://axoltlapi.herokuapp.com/",
        headers: {
            "Accept":"application/json"
        }
    }).then(({data}) => {
        return data;
    }).catch((err) => {throw new Error(err)});
}