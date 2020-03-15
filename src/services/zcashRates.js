const request = require('request-promise-native');

const zcashRates = {
  getAll() {
    return Promise.all([
      request({ uri: 'https://min-api.cryptocompare.com/data/price?fsym=ZEC&tsyms=BTC', json: true }),
      request({ uri: 'https://bitpay.com/api/rates', json: true }),
    ]).then((results) => {
      const cmcData = results[0]; // results from cryptocompare
      const bitpayData = results[1]; // results from bitpay
      const zcashBtcExchangeRate = cmcData.BTC;
      const rates = [];

      bitpayData.forEach((value) => {
        const exchangeRate = zcashBtcExchangeRate * value.rate;
        rates.push({ code: value.code, name: value.name, rate: exchangeRate });
      });

      return rates;
    });
  },
};

module.exports = zcashRates;