/*!
 * Copyright (c) 2014-2018 Digital Bazaar, Inc. All rights reserved.
 */
/* eslint-disable indent */
'use strict';

const {EcdsaSecp256k1Signature2019} = require(
  '../lib/EcdsaSepc256k1Signature2019');
module.exports = async function({
  should
}) {

// run tests
describe('EcdsaSecp256k1Signature2019', () => {
  it('constructor works', async () => {
    const s = new EcdsaSecp256k1Signature2019();
    s.should.be.an('object');
    should.exist(s.type);
    s.type.should.equal('EcdsaSecp256k1Signature2019');
    should.exist(s.requiredKeyType);
    s.requiredKeyType.should.equal('EcdsaSecp256k1VerificationKey2019');
  });
});

};
