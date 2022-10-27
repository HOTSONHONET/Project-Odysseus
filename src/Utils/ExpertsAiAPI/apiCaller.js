import axios from "axios";
import config from "../../config.json";

class ExpertsAiAPICaller {
  // Token generation
  static async generateBearerToken() {
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
      localStorage.setItem("token", response.data);

    }).catch(function (error) {
      console.error(error);
    });

  }

  // Sentiment analysis
  static async getSentimentAnalysisOfAllTexts(texts, update_gdata, update_score) {
    let data = {
      negative: [], positive: []
    }
    let negs_score = 0, pos_score = 0;
    let N = texts.length ? texts.length : 100;
    for (let text of texts) {
      let options = {
        method: 'POST',
        url: 'https://nlapi.expert.ai/v2/analyze/standard/en/sentiment',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        },
        data: {
          document: {
            text: text
          }
        }
      };

      await axios.request(options).then(response => {
        (response.data.data.sentiment.overall < 0) ?
          data.negative.push(response.data.data.sentiment) :
          data.positive.push(response.data.data.sentiment)
      }).catch(function (error) {
        console.error(error);
      });
    }

    data.negative.forEach(ele => {
      negs_score += ele.overall;
    })

    data.positive.forEach(ele => {
      pos_score += ele.overall;
    })

    let score = (negs_score + pos_score) / N;
    score = score.toFixed(2);
    update_score(score);

    update_gdata({
      labels: ['Negative', 'Postive'],
      datasets: [
        {
          label: '',
          data: [data.negative.length, data.positive.length],
          backgroundColor: ['rgba(255, 0, 0, 0.3)', 'rgba(0, 255, 0, 0.3)'],
        },
      ],
    });



  }
  // NER
  static async performNER(text) {
    var options = {
      method: 'POST',
      url: 'https://nlapi.expert.ai/v2/analyze/standard/en/entities',
      headers: {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      },
      data: {
        document: {
          text: text
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