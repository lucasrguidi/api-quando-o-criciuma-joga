import { tableRepository } from '../repositories/table.repository';

async function getTableData() {
  try {
    const table = await tableRepository.getApiFootballTable();
    return table;
  } catch (error) {
    return error;
  }
}

export const tableController = {
  getTableData,
};
