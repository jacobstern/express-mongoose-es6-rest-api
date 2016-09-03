import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';

mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

const debug = require('debug')('express-mongoose-es6-rest-api:index');

app.listen(config.port, () => {
  debug(`server started on port ${config.port} (${config.env})`);
});

export default app;
