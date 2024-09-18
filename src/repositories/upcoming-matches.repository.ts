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
  url: 'https://v3.football.api-sports.io/fixtures?season=2024&team=140&next=15&timezone=178',
  headers: {
    'x-rapidapi-key': 'bb7c90d78d8efb8446257a9fb4583408',
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
};

async function getApiFootballUpcomingMatches() {
  try {
    const response = await axios(config);
    const data = response.data.response;
    return data;
  } catch (error) {
    return error;
  }
}

export const upcomingMatchesRepository = {
  getApiFootballUpcomingMatches,
};
