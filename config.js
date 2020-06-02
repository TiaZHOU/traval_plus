const config = {};

config.development = {
  name: 'development',
  httpPort: 8080,
  httpsPort: 8081,
  database: 'mongodb+srv://Edison:tester123@cluster0-nwk5j.mongodb.net/test?retryWrites=true&w=majority',
  secret: 'coolcake'
};

config.production = {
  name: 'production',
  httpPort: 8080,
  httpsPort: 443,
  database: 'mongodb+srv://Edison:tester123@cluster0-nwk5j.mongodb.net/test?retryWrites=true&w=majority',
  secret: 'whateverIlike'
};

// Change before deploying
let envToExport = config.production;

module.exports = envToExport;
