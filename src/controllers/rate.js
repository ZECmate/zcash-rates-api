const zcashRates = require('../services/zcashRates');
const log = require('../lib/log');

exports.list = (req, res, next) => {
  log.debug('Pulling ZCASH Rate information from APIs');
  zcashRates.getAll().then((rates) => {
    res.json(rates);
  }).catch(next);
};
