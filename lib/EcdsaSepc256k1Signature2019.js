/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const Secp256k1KeyPair =
  require('@sphereon/rn-ecdsa-secp256k1-verification-key-2019');
import {JwsLinkedDataSignature} from '@sphereon/rn-jws-linked-data-signature';

export class EcdsaSecp256k1Signature2019 extends JwsLinkedDataSignature {
  /**
   * @param type - {string} Provided by subclass.
   *
   * One of these parameters is required to use a suite for signing:
   *
   * @param type.signer
   * @param [creator] {string} A key id URL to the paired public key.
   * @param [verificationMethod] {string} A key id URL to the paired public key.
   *
   * This parameter is required for signing:
   *
   * @param [signer] {function} an optional signer.
   *
   * Advanced optional parameters and overrides:
   *
   * @param [proof] {object} a JSON-LD document with options to use for
   *   the `proof` node (e.g. any other custom fields can be provided here
   *   using a context different from security-v2).
   * @param [date] {string|Date} signing date to use if not passed.
   * @param [key] {LDKeyPair} an optional crypto-ld KeyPair.
   * @param [useNativeCanonize] {boolean} true to use a native canonize
   *   algorithm.
   * @param type.key
   * @param type.creator
   * @param type.verificationMethod
   * @param type.proof
   * @param type.date
   * @param type.useNativeCanonize
   */
  constructor({
    signer, key, creator, verificationMethod, proof, date, useNativeCanonize
  } = {}) {
    super({
      type: 'EcdsaSecp256k1Signature2019', alg: 'ES256K',
      LDKeyClass: Secp256k1KeyPair, creator, verificationMethod, signer, key,
      proof, date, useNativeCanonize});
    this.requiredKeyType = 'EcdsaSecp256k1VerificationKey2019';
  }
}
