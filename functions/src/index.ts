import * as functions from 'firebase-functions';
import * as next from 'next';
import express, { Request, Response } from 'express';

const dev = process.env.NODE_ENV !== 'production';
const app = next.default({ dev,
    dir: "../",
    conf: { distDir: '.next' } });
const handle = app.getRequestHandler();


const server = express();
const config = functions.config();

process.env.GEMINI_API_KEY = config.gemini.key;
process.env.NEXT_PUBLIC_FIREBASE_API_KEY = config.project_config.api_key;
process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = config.project_config.auth_domain;
process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID = config.project_config.project_id;
process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = config.project_config.storage_bucket;
process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = config.project_config.messaging_sender_id;
process.env.NEXT_PUBLIC_FIREBASE_APP_ID = config.project_config.app_id;


app.prepare().then(() => {
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });
});

export const nextApp = functions.https.onRequest(server);
