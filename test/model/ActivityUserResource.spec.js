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
    instance = new KnetikCloud.ActivityUserResource();
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

  describe('ActivityUserResource', function() {
    it('should create an instance of ActivityUserResource', function() {
      // uncomment below and update the code to test ActivityUserResource
      //var instane = new KnetikCloud.ActivityUserResource();
      //expect(instance).to.be.a(KnetikCloud.ActivityUserResource);
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instane = new KnetikCloud.ActivityUserResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikCloud.ActivityUserResource();
      //expect(instance).to.be();
    });

    it('should have the property joinedDate (base name: "joined_date")', function() {
      // uncomment below and update the code to test the property joinedDate
      //var instane = new KnetikCloud.ActivityUserResource();
      //expect(instance).to.be();
    });

    it('should have the property leftDate (base name: "left_date")', function() {
      // uncomment below and update the code to test the property leftDate
      //var instane = new KnetikCloud.ActivityUserResource();
      //expect(instance).to.be();
    });

    it('should have the property metric (base name: "metric")', function() {
      // uncomment below and update the code to test the property metric
      //var instane = new KnetikCloud.ActivityUserResource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KnetikCloud.ActivityUserResource();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new KnetikCloud.ActivityUserResource();
      //expect(instance).to.be();
    });

  });

}));
