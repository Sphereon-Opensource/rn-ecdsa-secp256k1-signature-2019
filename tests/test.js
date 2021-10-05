/**
 * Node.js test runner for jsonld-signatures.
 *
 * @author Dave Longley
 * @author David I. Lehn
 *
 * Copyright (c) 2011-2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

// support async/await tests in node6
if(!require('semver').gte(process.version, '8.6.0')) {
  require('@babel/register')({
    presets: [
      [
        '@babel/preset-env', {
          targets: 'node 6'
        }
      ]
    ]
  });
}

const chai = require('chai');
const assert = chai.assert;
const common = require('./test-common');
const jsigs = require('@sphereon/rn-jsonld-signatures');
const constants = require('@sphereon/rn-jsonld-signatures/lib/constants');
const Suite = require('..');
const should = chai.should();
const util = require('@sphereon/rn-jsonld-signatures/lib/util');

const options = {
  assert,
  constants,
  jsigs,
  should,
  Suite,
  util,
  nodejs: true
};

common(options).then(() => {
  run();
}).catch(err => {
  console.error(err);
});

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});
