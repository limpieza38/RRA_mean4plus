// Businesslogik
const loadAllRecords = require('./dataAccess').loadAllRecords;
const builtRecordsDTO = require('../../utils/dtoUtil').recordsDTO;
const log = require('../../utils/logUtil').logger;
const handleSuccess = require('../../utils/restUtil').handleSuccess;

function handleLoadedRecords(result, res) {
    
    handleSuccess(result, res);
}

module.exports = { handleLoadedRecords };
