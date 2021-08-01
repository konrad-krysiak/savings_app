import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { port } from './config.js';
import userRoutes from './routes/user.js';

//we need to initilize express
const app = express();
//Calling use(cors()) will enable the express server to respond to preflight requests.
//A preflight request is basically an OPTION
// request sent to the server before the actual request is sent, in order to ask which origin and which request options the server accepts.
app.use(cors());

app.use('/', userRoutes);

//connection with dataBase

const CONNECTION_URL =
  'mongodb+srv://klara:Madryt1477@savingsapp.glq6s.mongodb.net/savingsapp?retryWrites=true&w=majority';

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
