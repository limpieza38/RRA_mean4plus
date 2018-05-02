// Datenbank Abfragen
const connection = require('../../utils/dataAccessUtil').connection;
const selectResult = require('../../utils/dataAccessUtil').selectResult;
const getObjectId = require('../../utils/dataAccessUtil').getObjectId;
const records = require('../../static/constants').MEAN_RECORDS_COLLECTION;
const log = require('../../utils/logUtil').logger;
const recordsDTO = require('../../utils/dtoUtil').recordsDTO;
const handleLoadedRecords = require('./businessHandler').handleLoadedRecords;
const handleRecordAdded = require('./businessHandler').handleRecordAdded;
const handleLoadedRecord = require('./businessHandler').handleLoadedRecord;
const handleError = require('../../utils/restUtil').handleError;


function addRecord(req, res) {
    log.debug("Adding record to database");
    log.debug("Post data: ",  req.body);
    var record = recordsDTO(req.body);

    connection((db) => {
        db.collection(records)
            .insertOne(record)
            .then((data) => {
                log.debug("Adding record finished");
                handleRecordAdded(data, res);
            })
            .catch((err) => {
                log.error("Error while adding record to database")
                selectResult.status = 400;
                selectResult.message = typeof err == 'object' ? err.message : err;
                log.error("Error: %s", selectResult.message);
                handleError(selectResult, res);
            })
    });
  }

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
              log.error("Error while loading records from database")
              selectResult.status = 400;
              selectResult.message = typeof err == 'object' ? err.message : err;
              log.error("Error: %s", selectResult.message);
              handleError(selectResult, res);
          });
  });

}

function loadRecord(req, res) {
    var recordID = req.params.recordID;
    log.debug("Loading record " + recordID + " from database");

    connection((db) => {
        db.collection(records)
            .findOne({_id : getObjectId(recordID)})
            .then((record) => {
                log.debug("Loading finished");

                handleLoadedRecord(record, res);
            })
            .catch((err) => {
                log.error("Error while loading records from database")
                selectResult.status = 400;
                selectResult.message = typeof err == 'object' ? err.message : err;
                log.error("Error: %s", selectResult.message);
                handleError(selectResult, res);
            });
    });

  }

/*, loadRecordsPerBusinessUnit, loadRecordsPerDocumentType*/
module.exports = { loadAllRecords, loadRecord, addRecord };
