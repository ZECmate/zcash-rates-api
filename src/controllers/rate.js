const hushRates = require('../services/hushRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling HUSH Rate information from APIs');
  hushRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
