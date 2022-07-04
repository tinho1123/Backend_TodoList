const express = require('express');
const cors = require('cors');
const UserRouter = require('./database/router/UserRoutes');

const app = express();

const PORT = process.env.PORT || 3003

app.use(express.json())
app.use(cors())

app.use('/api/user', UserRouter);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING IN THE PORT ${PORT}`);
})