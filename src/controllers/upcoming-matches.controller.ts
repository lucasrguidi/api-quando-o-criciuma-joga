import { upcomingMatchesRepository } from 'src/repositories/upcoming-matches.repository';

async function getUpcomingMatchesData() {
  try {
    const upcomingMatches = await upcomingMatchesRepository.getApiFootballUpcomingMatches();
    return upcomingMatches;
  } catch (error) {
    return error;
  }
}

export const upcomingMatchesController = {
  getUpcomingMatchesData,
};
