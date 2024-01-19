"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextMatchesRepository = void 0;
const axios_1 = __importDefault(require("axios"));
const config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/fixtures?season=2024&team=140&next=15&timezone=178',
    headers: {
        'x-rapidapi-key': 'bb7c90d78d8efb8446257a9fb4583408',
        'x-rapidapi-host': 'v3.football.api-sports.io',
    },
};
async function getApiFootballNextMatches() {
    try {
        const response = await (0, axios_1.default)(config);
        const data = response.data.response;
        return data;
    }
    catch (error) {
        return error;
    }
}
exports.nextMatchesRepository = {
    getApiFootballNextMatches,
};
//# sourceMappingURL=next-matches.repository.js.map