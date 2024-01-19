import { lastMatchesRepository } from 'src/repositories/last-matches.repository';

async function getLastMatchesData() {
  try {
    const lastMatches = await lastMatchesRepository.getApiFootballLastMatches();
    return lastMatches;
  } catch (error) {
    return error;
  }
}

export const lastMatchesController = {
  getLastMatchesData,
};
