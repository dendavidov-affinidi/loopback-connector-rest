// Copyright IBM Corp. 2013,2019. All Rights Reserved.
// Node module: loopback-connector-rest
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = require('./lib/rest-builder');

const connector = require('./lib/rest-connector');

module.exports.RestConnector = connector.RestConnector;
module.exports.initialize = connector.initialize;
