'use strict';
var moment = require('moment-jalaali');
require('moment/locale/fa');
moment.loadPersian({
  dialect: 'persian-modern'
});

module.exports = moment;
