"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastMatchesController = void 0;
const last_matches_repository_1 = require("src/repositories/last-matches.repository");
async function getLastMatchesData() {
    try {
        const lastMatches = await last_matches_repository_1.lastMatchesRepository.getApiFootballLastMatches();
        return lastMatches;
    }
    catch (error) {
        return error;
    }
}
exports.lastMatchesController = {
    getLastMatchesData,
};
//# sourceMappingURL=last-matches.controller.js.map