/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    instance = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
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

  describe('ImportJobResource', function() {
    it('should create an instance of ImportJobResource', function() {
      // uncomment below and update the code to test ImportJobResource
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.ImportJobResource);
    });

    it('should have the property categoryId (base name: "category_id")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property output (base name: "output")', function() {
      // uncomment below and update the code to test the property output
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property recordCount (base name: "record_count")', function() {
      // uncomment below and update the code to test the property recordCount
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

    it('should have the property vendor (base name: "vendor")', function() {
      // uncomment below and update the code to test the property vendor
      //var instane = new KnetikPlatformApiDocumentationLatest.ImportJobResource();
      //expect(instance).to.be();
    });

  });

}));
