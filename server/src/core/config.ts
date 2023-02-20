import * as process from 'process';

export default () => ({
  ACCESS_TOKEN_CLIENT_ID: process.env.ACCESS_TOKEN_CLIENT_ID,
  ACCESS_TOKEN_URL: process.env.ACCESS_TOKEN_URL,
});
