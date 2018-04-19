// Rest Schnittstelle
const express = require('express');
const router = express.Router();

const loadAllRecords = require('./dataAccess').loadAllRecords;
const log = require('../../utils/logUtil').logger;

// Get records
router.get('/records', (req, res) => {
  log.debug("Get records.");

  loadAllRecords(req, res);
});



module.exports = router;
