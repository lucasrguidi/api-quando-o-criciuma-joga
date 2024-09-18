import { previousMatchesRepository } from 'src/repositories/previous-matches.repository';

async function getPreviousMatchesData() {
  try {
    const previousMatches = await previousMatchesRepository.getApiFootballPreviousMatches();
    return previousMatches;
  } catch (error) {
    return error;
  }
}

export const previousMatchesController = {
  getPreviousMatchesData,
};
