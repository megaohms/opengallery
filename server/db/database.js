const connectionInfo = {
  host: 'opengallery.cbxmygjagdjr.us-west-1.rds.amazonaws.com',
  port: '5432',
  user: process.env.AWS_POSTGRESQL_USERNAME,
  password: process.env.AWS_POSTGRESQL_PW,
  database: 'opengallery'
};

const pg = require('knex')({
  client: 'pg',
  connection: connectionInfo,
  pool: {
    min: 2,
    max: 30
  },
  acquireConnectionTimeout: 10000,
  searchPath: 'knex,public'
});

module.exports = pg;


