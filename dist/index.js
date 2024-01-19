"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const table_controller_1 = require("./controllers/table.controller");
const next_matches_controller_1 = require("./controllers/next-matches.controller");
const last_matches_controller_1 = require("./controllers/last-matches.controller");
const app = (0, express_1.default)();
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
const cache = new node_cache_1.default({ stdTTL: 3600 });
app.get('/', (_req, res) => {
    return res.json('Hello world');
});
app.get('/api/quando-o-criciuma-joga', async (req, res) => {
    try {
        const data = await fetchApiFootballData(req, res);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Um erro ocorreu.' });
    }
});
const fetchApiFootballData = async (_req, res) => {
    try {
        const cachedData = cache.get('cachedData');
        if (cachedData !== undefined && cachedData !== null) {
            return cachedData;
        }
        const tableData = await table_controller_1.tableController.getTableData();
        const nextMatchesData = await next_matches_controller_1.nextMatchesController.getNextMatchesData();
        const lastMatchesData = await last_matches_controller_1.lastMatchesController.getLastMatchesData();
        const data = {
            tableData,
            nextMatchesData,
            lastMatchesData,
        };
        cache.set('cachedData', data);
        return data;
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Erro ao obter os dados.' });
    }
};
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map