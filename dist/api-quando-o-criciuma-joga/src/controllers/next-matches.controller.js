"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextMatchesController = void 0;
const next_matches_repository_1 = require("../repositories/next-matches.repository");
async function getNextMatchesData() {
    try {
        const nextMatches = await next_matches_repository_1.nextMatchesRepository.getApiFootballNextMatches();
        return nextMatches;
    }
    catch (error) {
        return error;
    }
}
exports.nextMatchesController = {
    getNextMatchesData,
};
//# sourceMappingURL=next-matches.controller.js.map