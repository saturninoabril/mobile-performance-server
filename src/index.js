import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import models, {sequelize} from './models';
import routes from './routes';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

// Routes

app.use('/metrics', routes.metric);
app.use('/traces', routes.trace);

// Start

sequelize.sync().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}!`),
  );
});
