// Businesslogik
const loadAllRecords = require('./dataAccess').loadAllRecords;
const builtRecordsDTO = require('../../utils/dtoUtil').recordsDTO;
const log = require('../../utils/logUtil').logger;
const handleSuccess = require('../../utils/restUtil').handleSuccess;
const handleNoContentFound = require('../../utils/restUtil').handleNoContentFound;
const handlePostSuccess = require('../../utils/restUtil').handlePostSuccess;

function handleLoadedRecords(result, res) {

    handleSuccess(result, res);
}

function handleLoadedRecord(record, res) {

    if (record) {
      var result = { data : record };
      handleSuccess(result, res);
    } else {
      handleNoContentFound(res);
    }
}

function handleRecordAdded(result, res) {

    handleSuccess(result, res);
}

module.exports = { handleLoadedRecords, handleLoadedRecord, handleRecordAdded };
