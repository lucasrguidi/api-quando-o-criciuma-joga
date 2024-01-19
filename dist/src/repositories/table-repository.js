"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableRepository = void 0;
const axios_1 = __importDefault(require("axios"));
const config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/standings?league=604&season=2024',
    headers: {
        'x-rapidapi-key': 'bb7c90d78d8efb8446257a9fb4583408',
        'x-rapidapi-host': 'v3.football.api-sports.io',
    },
};
async function getApiFootballTable() {
    try {
        const response = await (0, axios_1.default)(config);
        const data = response.data.response[0].league.standings[0];
        return data;
    }
    catch (error) {
        return error;
    }
}
exports.tableRepository = {
    getApiFootballTable,
};
//# sourceMappingURL=table-repository.js.map