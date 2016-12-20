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
    instance = new KnetikPlatformApiDocumentationLatest.DeviceResource();
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

  describe('DeviceResource', function() {
    it('should create an instance of DeviceResource', function() {
      // uncomment below and update the code to test DeviceResource
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.DeviceResource);
    });

    it('should have the property authorization (base name: "authorization")', function() {
      // uncomment below and update the code to test the property authorization
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property deviceType (base name: "device_type")', function() {
      // uncomment below and update the code to test the property deviceType
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property macAddress (base name: "mac_address")', function() {
      // uncomment below and update the code to test the property macAddress
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property make (base name: "make")', function() {
      // uncomment below and update the code to test the property make
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property os (base name: "os")', function() {
      // uncomment below and update the code to test the property os
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property serial (base name: "serial")', function() {
      // uncomment below and update the code to test the property serial
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new KnetikPlatformApiDocumentationLatest.DeviceResource();
      //expect(instance).to.be();
    });

  });

}));