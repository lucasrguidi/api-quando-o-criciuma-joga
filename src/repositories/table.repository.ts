import axios from 'axios';

interface axiosConfig {
  method: string;
  url: string;
  headers: {
    'x-rapidapi-key': string;
    'x-rapidapi-host': string;
  };
}

const config: axiosConfig = {
  method: 'get',
  url: 'https://v3.football.api-sports.io/standings?league=2249&season=2025',
  headers: {
    'x-rapidapi-key': 'bb7c90d78d8efb8446257a9fb4583408',
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
};

async function getApiFootballTable() {
  try {
    const response = await axios(config);
    const data = response.data.response[0].league.standings[0];
    return data;
  } catch (error) {
    return error;
  }
}

export const tableRepository = {
  getApiFootballTable,
};
