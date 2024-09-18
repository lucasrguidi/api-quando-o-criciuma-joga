import { nextMatchesRepository } from '../repositories/next-matches.repository';

async function getNextMatchesData() {
  try {
    const nextMatches = await nextMatchesRepository.getApiFootballNextMatches();
    return nextMatches;
  } catch (error) {
    return error;
  }
}

export const nextMatchesController = {
  getNextMatchesData,
};
