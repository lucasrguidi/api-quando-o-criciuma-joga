import NodeCache from 'node-cache';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { tableController } from './controllers/table.controller';
import { nextMatchesController } from './controllers/next-matches.controller';
import { lastMatchesController } from './controllers/last-matches.controller';

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const cache = new NodeCache({ stdTTL: 3600 });

app.get('/', (req, res) => {
  return res.json('Hello world');
});

app.get('/api/quando-o-criciuma-joga', async (req: Request, res: Response) => {
  try {
    const data = await fetchApiFootballData(req, res);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Um erro ocorreu.' });
  }
});

const fetchApiFootballData = async (req: Request, res: Response) => {
  try {
    const cachedData = cache.get('cachedData');

    if (cachedData !== undefined && cachedData !== null) {
      return cachedData;
    }

    const tableData = await tableController.getTableData();
    const nextMatchesData = await nextMatchesController.getNextMatchesData();
    const lastMatchesData = await lastMatchesController.getLastMatchesData();

    const data = {
      tableData,
      nextMatchesData,
      lastMatchesData,
    };

    cache.set('cachedData', data);

    return data;
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao obter os dados.' });
  }
};

export default fetchApiFootballData;
