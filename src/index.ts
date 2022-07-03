import express from 'express';
import cors from 'cors';
import UserRouter from './database/router/UserRouter'

const app = express();
const PORT = process.env.PORT || '8080';

app.use(express.json());

app.use(cors());

app.use('/api/user', UserRouter);

app.listen(PORT, () => { console.log(`Server is running in PORT: ${PORT}`); });
