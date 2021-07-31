import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { port } from './config.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(cors());

app.use('/', userRoutes);

const CONNECTION_URL = 'mongodb+srv://savingsapp:savingsapp123@cluster0.rokqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
    .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);