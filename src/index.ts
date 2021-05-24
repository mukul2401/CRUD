import express from 'express';
import  connect  from './db/db.connection';
import router from './routes/user.route';

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(router);


//PORT 
const PORT = process.env.PORT;
const HOST = process.env.HOST;


app.listen(PORT, () => {
    console.log(`Connected to ${HOST}:${PORT}`)
    connect();
})
