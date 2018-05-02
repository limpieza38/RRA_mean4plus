// Datenbank Abfragen
const connection = require('../../utils/dataAccessUtil').connection;
const selectResult = require('../../utils/dataAccessUtil').selectResult;
const locations = require('../../static/constants').MEAN_LOCATIONS_COLLECTION;
const log = require('../../utils/logUtil').logger;
const handleLoadedLocations = require('./businessHandler').handleLoadedLocations;
const handleError = require('../../utils/restUtil').handleError;


function loadAllLocations(req, res) {
  log.debug("Loading all locations from database");

  connection((db) => {
      db.collection(locations)
          .find()
          .toArray()
          .then((data) => {
              log.debug("Loading finished");
              selectResult.data = data;
              handleLoadedLocations(selectResult, res);
          })
          .catch((err) => {
              log.error("Error while loading locations from database")
              selectResult.status = 400;
              selectResult.message = typeof err == 'object' ? err.message : err;
              log.error("Error: %s", selectResult.message);
              handleError(selectResult, res);
          });
  });

}

module.exports = { loadAllLocations };
