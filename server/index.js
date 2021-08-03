<<<<<<< HEAD
import express from 'express' //we need to initilize express
import mongoose from 'mongoose'
import cors from 'cors'
import { port } from './config.js'
import postRoutes from './routes/user.js'

const app = express()

//Calling use(cors()) will enable the express server to respond to preflight requests.
//A preflight request is basically an OPTION
// request sent to the server before the actual request is sent, in order to ask which origin and which request options the server accepts.
app.use(cors())
app.use(express.json())
app.use('/posts1', postRoutes)
//connection with dataBase

const CONNECTION_URL =
  'mongodb+srv://klara:Madryt1477@savingsapp.glq6s.mongodb.net/savingsapp?retryWrites=true&w=majority'

//create a server that browsers can connect to
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch((err) => console.log(err))
mongoose.set('useFindAndModify', false)
=======
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { port } from './config.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://savingsapp:savingsapp123@cluster0.rokqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
    .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
>>>>>>> Login system in progress
