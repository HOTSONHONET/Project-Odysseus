const needle = require('needle');

const token = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/2/users/by?usernames="

const bearerToken = process.env.BEARER_TOKEN;

const getRequest = async (userName) => {

    const params = {
        usernames: userName, 
    }

    try {
        const resp = await needle('get', endpointURL, params, {
            headers: {
                "User-Agent": "v2UserLookupJS",
                "authorization": `Bearer ${bearerToken}`
            }
        })

        if (resp.statusCode != 200) {
            console.log(`${resp.statusCode}`);
        }
        console.log(resp.body.data)
        // console.dir(resp.data, {
        //     depth: null
        // });
    
    } catch (err) {
        throw new Error(`Request failed: ${err}`);
    }
}
    

getRequest('elonmusk')