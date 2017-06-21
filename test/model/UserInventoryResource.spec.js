/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
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
    instance = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
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

  describe('UserInventoryResource', function() {
    it('should create an instance of UserInventoryResource', function() {
      // uncomment below and update the code to test UserInventoryResource
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.UserInventoryResource);
    });

    it('should have the property behaviorData (base name: "behavior_data")', function() {
      // uncomment below and update the code to test the property behaviorData
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property expires (base name: "expires")', function() {
      // uncomment below and update the code to test the property expires
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoice_id")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "item_id")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property itemName (base name: "item_name")', function() {
      // uncomment below and update the code to test the property itemName
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property itemTypeHint (base name: "item_type_hint")', function() {
      // uncomment below and update the code to test the property itemTypeHint
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new KnetikPlatformApiDocumentationLatest.UserInventoryResource();
      //expect(instance).to.be();
    });

  });

}));