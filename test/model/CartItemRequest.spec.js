/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KnetikCloud);
  }
}(this, function(expect, KnetikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikCloud.CartItemRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CartItemRequest', function() {
    it('should create an instance of CartItemRequest', function() {
      // uncomment below and update the code to test CartItemRequest
      //var instane = new KnetikCloud.CartItemRequest();
      //expect(instance).to.be.a(KnetikCloud.CartItemRequest);
    });

    it('should have the property affiliateKey (base name: "affiliate_key")', function() {
      // uncomment below and update the code to test the property affiliateKey
      //var instane = new KnetikCloud.CartItemRequest();
      //expect(instance).to.be();
    });

    it('should have the property catalogSku (base name: "catalog_sku")', function() {
      // uncomment below and update the code to test the property catalogSku
      //var instane = new KnetikCloud.CartItemRequest();
      //expect(instance).to.be();
    });

    it('should have the property giftTarget (base name: "gift_target")', function() {
      // uncomment below and update the code to test the property giftTarget
      //var instane = new KnetikCloud.CartItemRequest();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new KnetikCloud.CartItemRequest();
      //expect(instance).to.be();
    });

    it('should have the property priceOverride (base name: "price_override")', function() {
      // uncomment below and update the code to test the property priceOverride
      //var instane = new KnetikCloud.CartItemRequest();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new KnetikCloud.CartItemRequest();
      //expect(instance).to.be();
    });

  });

}));
