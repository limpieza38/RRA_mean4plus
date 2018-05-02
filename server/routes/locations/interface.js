// Rest Schnittstelle
const express = require('express');
const router = express.Router();

const loadAllLocations = require('./dataAccess').loadAllLocations;

const log = require('../../utils/logUtil').logger;

// Get records
router.get('/locations', (req, res) => {
  log.debug("Get locations.");

  loadAllLocations(req, res);
});

module.exports = router;
