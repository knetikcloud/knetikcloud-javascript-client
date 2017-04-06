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
    instance = new KnetikPlatformApiDocumentationLatest.Language();
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

  describe('Language', function() {
    it('should create an instance of Language', function() {
      // uncomment below and update the code to test Language
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.Language);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "date_created")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be();
    });

    it('should have the property dateUpdated (base name: "date_updated")', function() {
      // uncomment below and update the code to test the property dateUpdated
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be();
    });

    it('should have the property isPrimary (base name: "is_primary")', function() {
      // uncomment below and update the code to test the property isPrimary
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.Language();
      //expect(instance).to.be();
    });

  });

}));
