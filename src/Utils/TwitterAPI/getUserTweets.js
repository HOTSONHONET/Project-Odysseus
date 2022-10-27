// // Get User Tweet timeline by user ID
// // https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/quick-start

// const needle = require('needle');

// // this is the ID for @TwitterDev

// // The code below sets the bearer token from your environment variables
// // To set environment variables on macOS or Linux, run the export command below from the terminal:
// // export BEARER_TOKEN='YOUR-TOKEN'
// const bearerToken = process.env.bearerToken;

// const getUserTweets = async (userId) => {
//     let userTweets = [];

//     const url = `https://api.twitter.com/2/users/${userId}/tweets`;
//     // we request the author_id expansion so that we can print out the user name later
//     let params = {
//         "max_results": 100,
//         "tweet.fields": "created_at",
//         "expansions": "author_id"
//     }

//     const options = {
//         headers: {
//             "User-Agent": "v2UserTweetsJS",
//             "authorization": `Bearer ${bearerToken}`
//         }
//     }

//     console.log("Retrieving Tweets...");
    
//     try {
//         let resp = await getPage(params, options, url);
        

//         if (resp.statusCode != 200) {
//             console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
//         }

//         userTweets.push.apply(userTweets, resp.data);
//     } catch (err) {
//         throw new Error(`Request failed: ${err}`);
//     }

//     console.dir(userTweets, {
//         depth: null
//     });

// }

// export default getUserTweets