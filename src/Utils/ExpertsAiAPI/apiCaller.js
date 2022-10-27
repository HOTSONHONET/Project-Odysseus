import axios from "axios";
import config from "../../config.json";

class ExpertsAiAPICaller {
  // Token generation
  static async generateBearerToken(update_token) {
    const options = {
      method: 'POST',
      url: 'https://developer.expert.ai/oauth2/token',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
      data: { username: config.expertsAi_username, password: config.expertsAi_password }
    };


    await axios.request(options).then(response => {
      update_token(response.data)
    }).catch(function (error) {
      console.error(error);
    });

  }

  // Sentiment analysis
  static async getSentimentAnalysisOfAllTexts(texts, update_data) {
    let data = []
    for (let text of texts) {
      let options = {
        method: 'POST',
        url: 'https://nlapi.expert.ai/v2/analyze/standard/en/sentiment',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${config.expertsAi_bearer_token}`,
          'Content-Type': 'application/json'
        },
        data: {
          document: {
            text: text
          }
        }
      };

      await axios.request(options).then(function (response) {
        data.push(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }

    console.log(data);
    update_data(data);

  }
  // NER
  static async performNER(text) {
    var options = {
      method: 'POST',
      url: 'https://nlapi.expert.ai/v2/analyze/standard/en/entities',
      headers: {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        Authorization: 'Bearer eyJraWQiOiI1RDVOdFM1UHJBajVlSlVOK1RraXVEZE15WWVMMFJQZ3RaUDJGTlhESHpzPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206Y291bnRyeSI6IklOIiwic3ViIjoiNjQxMTBkNGUtMzFhZi00MWQwLTg3NWEtYjk0MGM0NTFmYjgwIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX0FVSGdRMDhDQiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiI2NDExMGQ0ZS0zMWFmLTQxZDAtODc1YS1iOTQwYzQ1MWZiODAiLCJjdXN0b206Y29tcGFueSI6IkljZUNyZWFtIExhYnMiLCJhdWQiOiIxZWdzNjNxOTlwM3NlYmVjaHNiNzI5dDgwbyIsImV2ZW50X2lkIjoiNGI2NGFiNDUtZGUxYi00M2VmLWFjY2EtZTVmNzI1MTBiNTk5IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NjY3OTEwNjYsIm5hbWUiOiJSdWRyYSBQcmFzYWQiLCJjdXN0b206am9iVGl0bGUiOiJNYWNoaW5lIExlYXJuaW5nIEVuZ2luZWVyIiwicGhvbmVfbnVtYmVyIjoiKzkxNzA3NzU2MDQxOCIsImV4cCI6MTY2Njg3NzQ2NiwiaWF0IjoxNjY2NzkxMDY2LCJmYW1pbHlfbmFtZSI6IkRhc2giLCJlbWFpbCI6ImhvdHNvbmhvbmV0QGdtYWlsLmNvbSIsImN1c3RvbTptYXJrZXRpbmdBdXRoIjoiMCJ9.D-Hg3SMTDjqlE3_f4cYrd4NX9hsXSu_KIeYPX27f8LEchZgHPyukB2WoXhQELEN_yQEc66lzOBixhJJXEA_TwqOr7mGgmcbNNVWBDcXEhpqf9W_IR555VzifulaSfI4qB578gBkAm_zQc5wXFN55mu7066bHfP2QJQzkyYIZ8RpM0M4ev5nfzzgU3_L3Xzt413CrC0AvFbrPOs6cOe6kLjJ13j37pPu6b4dEzuDRJ4ka8_7vdcBJePp1Xvdo3hrbdWS-T9QAKpodgRKar3dlxj3J6UUM3fx0zgyk10Jnyp-M6HjIirxDB3cH7chff1myvUioM66IFhqqZgQSC67nQg',
        'Content-Type': 'application/json'
      },
      data: {
        document: {
          text: '@spideycyp_155 @BillyM2k If Russia faced calamitous defeat in conventional warfare for something as strategically critical as Crimea, the probability of using nuclear weapons is high'
        }
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  // Behavorial group
  static async getBehavourialTraits(text) {

  }

}


export default ExpertsAiAPICaller;