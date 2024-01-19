"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableController = void 0;
const table_repository_1 = require("../repositories/table-repository");
async function getTableData() {
    try {
        const table = await table_repository_1.tableRepository.getApiFootballTable();
        return table;
    }
    catch (error) {
        return error;
    }
}
exports.tableController = {
    getTableData,
};
//# sourceMappingURL=table-controller.js.map