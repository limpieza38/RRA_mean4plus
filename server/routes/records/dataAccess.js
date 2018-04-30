// Datenbank Abfragen
const connection = require('../../utils/dataAccessUtil').connection;
const selectResult = require('../../utils/dataAccessUtil').selectResult;
const records = require('../../static/constants').MEAN_RECORDS_COLLECTION;
const log = require('../../utils/logUtil').logger;
const handleLoadedRecords = require('./businessHandler').handleLoadedRecords;
const handleError = require('../../utils/restUtil').handleError;


function addRecord(req, res) {
    log.debug("Adding record to database");
    var record = {
        businessUnity: req.body.businessUnity,
        documentType: req.body.documentType,
        volume: req.body.volume,
        description: req.body.description,
        dateCreatedFrom: req.body.dateCreatedFrom,
        dateCreatedTo: req.body.dateCreatedTo,
        building: req.body.building,
        floor: req.body.floor,
        room: req.body.room,
        boxDraw: req.body.boxDraw,
        createdBy: req.body.createdBy,
        dateArchived: req.body.dateArchived
    };
    connection((db) => {
        db.collection(records)
            .insertOne(record, function(err,res){
                if (err){
                    log.error("Error while adding record to database")
                    selectResult.status = 400;
                    selectResult.message = typeof err == 'object' ? err.message : err;
                    log.error("Error: %s", selectResult.message);
                    handleError(selectResult, res);
                }
                else {
                    log.debug("Adding record finished");
                    
                    //selectResult.data = res.body.toArray();
                    //handleLoadedRecords(selectResult, res);
                }
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
    log.debug("Loading record from database");
    var recordID = req.params.recordID;
    connection((db) => {
        db.collection(records)
            .find({_id: recordID})
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

/*, loadRecordsPerBusinessUnit, loadRecordsPerDocumentType*/
module.exports = { loadAllRecords, loadRecord, addRecord };
