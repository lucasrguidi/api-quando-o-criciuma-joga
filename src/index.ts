import NodeCache from 'node-cache';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { tableController } from './controllers/table.controller';
import { nextMatchesController } from './controllers/next-matches.controller';
import { lastMatchesController } from './controllers/last-matches.controller';

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));

const cache = new NodeCache({ stdTTL: 3600 });

const refreshCache = async () => {
  try {
    console.log('Refreshing cache...');
    const tableData = await tableController.getTableData();
    const upcomingMatchesData = await nextMatchesController.getNextMatchesData();
    const previousMatchesData = await lastMatchesController.getLastMatchesData();

    const data = {
      table: tableData,
      upcomingMatches: upcomingMatchesData,
      previousMatches: previousMatchesData,
    };

    cache.set('cachedData', data);
    console.log('Cache refreshed successfully');
  } catch (error) {
    console.error('Error refreshing cache', error);
  }
};

setInterval(refreshCache, 3600000);

app.get('/', (_req: Request, res: Response) => {
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

const fetchApiFootballData = async (_req: Request, res: Response) => {
  try {
    const cachedData = cache.get('cachedData');

    if (cachedData !== undefined && cachedData !== null) {
      return cachedData;
    }

    await refreshCache();

    return cache.get('cachedData'); 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao obter os dados.' });
  }
};


const pingSelf = async () => {
  try {
    await fetch(`https://api-quando-o-criciuma-joga.onrender.com/`);
    console.log('Pinged self successfully to keep alive');
  } catch (error) {
    console.error('Error pinging self:', error);
  }
};

setInterval(pingSelf, 840000); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
