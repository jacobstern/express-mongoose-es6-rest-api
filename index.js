import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';

mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

app.listen(config.port, () => {
  console.log(`server started on port ${config.port} (${config.env})`); // eslint-disable-line
});

export default app;
