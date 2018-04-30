// Rest Schnittstelle
const express = require('express');
const router = express.Router();

const loadAllRecords = require('./dataAccess').loadAllRecords;
const loadRecord = require('./dataAccess').loadRecord;
const addRecord = require('./dataAccess').addRecord;
//const loadRecordsPerBusinessUnit = require('./dataAccess').loadRecordsPerBusinessUnit;
//const loadRecordsPerDocumentType = require('./dataAccess').loadRecordsPerDocumentType;

const log = require('../../utils/logUtil').logger;


// Add record
router.post('/record', (req, res) => {
  log.debug("Adding record.");

  addRecord(req, res);
});

// Get records
router.get('/records', (req, res) => {
  log.debug("Get records.");

  loadAllRecords(req, res);
});

// Get record
router.get('/record/:recordID', (req, res) => {
  log.debug("Get record.");

  loadRecord(req, res);
});

/*
// Get records per business unit
router.get('/records/businessUnit/:id', (req, res) => {
  log.debug("Get record.");

  loadRecordsPerBusinessUnit(req, res);
});

// Get records per document type
router.get('/records/documentType/:id', (req, res) => {
  log.debug("Get record.");

  loadRecordsPerDocumentType(req, res);
});

*/

module.exports = router;
