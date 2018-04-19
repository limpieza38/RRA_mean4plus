// Datenbank Abfragen
const connection = require('../../utils/dataAccessUtil').connection;
const selectResult = require('../../utils/dataAccessUtil').selectResult;
const records = require('../../static/constants').MEAN_RECORDS_COLLECTION;
const log = require('../../utils/logUtil').logger;
const handleLoadedRecords = require('./businessHandler').handleLoadedRecords;
const handleError = require('../../utils/restUtil').handleError;

function loadAllRecords(req, res) {
  log.debug("Loading all records from database");

  connection((db) => {
      db.collection(records)
          .find()
          .toArray()
          .then((data) => {
              log.debug("Loading finished");
              selectResult.data = data;
              handleLoadedRecords(selectResult, res);
          })
          .catch((err) => {
              log.error("Error while loading data from database")
              selectResult.status = 400;
              selectResult.message = typeof err == 'object' ? err.message : err;
              log.error("Error: %s", selectResult.message);
              handleError(selectResult, res);
          });
  });

}
module.exports = { loadAllRecords };