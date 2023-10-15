const express = require('express');
const cors = require('cors');

const userRoutes = require('./src/users/routes')

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())

app.use('/users', userRoutes)

const port = 5000
app.listen(port, () => console.log(`Server is listening on ${port}`));