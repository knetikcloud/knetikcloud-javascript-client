/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    factory(root.expect, root.KnetikPlatformApiDocumentationLatest);
  }
}(this, function(expect, KnetikPlatformApiDocumentationLatest) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
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

  describe('RewardSetResource', function() {
    it('should create an instance of RewardSetResource', function() {
      // uncomment below and update the code to test RewardSetResource
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.RewardSetResource);
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property currencyRewards (base name: "currency_rewards")', function() {
      // uncomment below and update the code to test the property currencyRewards
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property itemRewards (base name: "item_rewards")', function() {
      // uncomment below and update the code to test the property itemRewards
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property maxPlacing (base name: "max_placing")', function() {
      // uncomment below and update the code to test the property maxPlacing
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property uniqueKey (base name: "unique_key")', function() {
      // uncomment below and update the code to test the property uniqueKey
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.RewardSetResource();
      //expect(instance).to.be();
    });

  });

}));
