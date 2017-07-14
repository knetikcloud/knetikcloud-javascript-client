/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    factory(root.expect, root.KnetikcloudSdk);
  }
}(this, function(expect, KnetikcloudSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikcloudSdk.BroadcastableEvent();
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

  describe('BroadcastableEvent', function() {
    it('should create an instance of BroadcastableEvent', function() {
      // uncomment below and update the code to test BroadcastableEvent
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be.a(KnetikcloudSdk.BroadcastableEvent);
    });

    it('should have the property client (base name: "client")', function() {
      // uncomment below and update the code to test the property client
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

    it('should have the property doNotBroadcast (base name: "do_not_broadcast")', function() {
      // uncomment below and update the code to test the property doNotBroadcast
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

    it('should have the property section (base name: "section")', function() {
      // uncomment below and update the code to test the property section
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

    it('should have the property specifics (base name: "specifics")', function() {
      // uncomment below and update the code to test the property specifics
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

    it('should have the property synchronous (base name: "synchronous")', function() {
      // uncomment below and update the code to test the property synchronous
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KnetikcloudSdk.BroadcastableEvent();
      //expect(instance).to.be();
    });

  });

}));