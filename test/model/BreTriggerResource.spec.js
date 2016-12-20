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
    instance = new KnetikPlatformApiDocumentationLatest.BreTriggerResource();
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

  describe('BreTriggerResource', function() {
    it('should create an instance of BreTriggerResource', function() {
      // uncomment below and update the code to test BreTriggerResource
      //var instane = new KnetikPlatformApiDocumentationLatest.BreTriggerResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.BreTriggerResource);
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new KnetikPlatformApiDocumentationLatest.BreTriggerResource();
      //expect(instance).to.be();
    });

    it('should have the property eventName (base name: "event_name")', function() {
      // uncomment below and update the code to test the property eventName
      //var instane = new KnetikPlatformApiDocumentationLatest.BreTriggerResource();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instane = new KnetikPlatformApiDocumentationLatest.BreTriggerResource();
      //expect(instance).to.be();
    });

    it('should have the property systemTrigger (base name: "system_trigger")', function() {
      // uncomment below and update the code to test the property systemTrigger
      //var instane = new KnetikPlatformApiDocumentationLatest.BreTriggerResource();
      //expect(instance).to.be();
    });

    it('should have the property triggerDescription (base name: "trigger_description")', function() {
      // uncomment below and update the code to test the property triggerDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.BreTriggerResource();
      //expect(instance).to.be();
    });

    it('should have the property triggerName (base name: "trigger_name")', function() {
      // uncomment below and update the code to test the property triggerName
      //var instane = new KnetikPlatformApiDocumentationLatest.BreTriggerResource();
      //expect(instance).to.be();
    });

  });

}));