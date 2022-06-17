import env from './env';

const nodeEnv = process.env.NODE_ENV || 'development';
export default env[nodeEnv];