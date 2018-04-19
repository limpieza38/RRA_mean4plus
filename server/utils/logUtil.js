const log4js = require('log4js');
log4js.configure({
  appenders: { stdout: { type: 'file', filename: 'stdout.log' }, console: { type: 'console' } },
  categories: { default: { appenders: ['stdout', 'console'], level: 'debug' } }
});
const logger = log4js.getLogger('rra');

module.exports = { logger };
