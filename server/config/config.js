// check env.
const env = process.env.NODE_ENV || 'development';

// fetch env. config 
const config = require('./config.json');
const envConfig = config[env];

// merge env. config with process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);