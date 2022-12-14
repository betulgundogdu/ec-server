require('dotenv').config();
import express from 'express';
import routes from "./routes";
import { connect } from './utils/database';
import cors from 'cors';

const app = express();

const port = `${process.env.PORT}`;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server running..');
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
  connect();
  routes(app);
});
