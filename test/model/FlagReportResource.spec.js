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
    instance = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
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

  describe('FlagReportResource', function() {
    it('should create an instance of FlagReportResource', function() {
      // uncomment below and update the code to test FlagReportResource
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.FlagReportResource);
    });

    it('should have the property context (base name: "context")', function() {
      // uncomment below and update the code to test the property context
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be();
    });

    it('should have the property contextId (base name: "context_id")', function() {
      // uncomment below and update the code to test the property contextId
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be();
    });

    it('should have the property resolution (base name: "resolution")', function() {
      // uncomment below and update the code to test the property resolution
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be();
    });

    it('should have the property resolved (base name: "resolved")', function() {
      // uncomment below and update the code to test the property resolved
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.FlagReportResource();
      //expect(instance).to.be();
    });

  });

}));