const express = require('express');
require('dotenv').config()
const cors = require('cors');
const UserRouter = require('./router/UserRoutes');
const TodoListRouter = require('./router/TodoListRoutes')

const app = express();

const PORT = process.env.PORT || 3003

app.use(express.json())
app.use(cors())

app.use('/api/user', UserRouter);
app.use('/api/todolist', TodoListRouter)

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING IN THE PORT ${PORT}`);
})