module.exports = {
  browser: {},
  common: {
    isomorphic: true,
    url: {
      self: 'http://localhost:8000',
    },
  },
  server: {
    connection: {
      'template-project': {
        dialect: 'mssql',
        host: '127.0.0.1',
        username: 'sa',
        password: 'This!$2019',
        database: 'template-project',
        dialectOptions: {
          requestTimeout: 5 * 60 * 1000,
          connectTimeout: 30 * 1000,
        },
        logging: false,
      },
    },
  },
}
