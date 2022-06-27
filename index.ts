import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT || '8080'


const app = express();

app.listen(PORT, () => { console.log(`Server is Running in the port ${PORT}`); })