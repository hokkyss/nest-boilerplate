import type { VercelApiHandler } from '@vercel/node';
import type { Express } from 'express';

import bootstrap from '../src/bootstrap';

let server: Express | null = null;

const handler: VercelApiHandler = async (req, res) => {
  if (!server) {
    [, server] = await bootstrap();
  }
  server(req, res);
};

export default handler;
