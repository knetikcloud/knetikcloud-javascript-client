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
    instance = new KnetikCloud.AccessSubTypeResource();
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

  describe('AccessSubTypeResource', function() {
    it('should create an instance of AccessSubTypeResource', function() {
      // uncomment below and update the code to test AccessSubTypeResource
      //var instane = new KnetikCloud.AccessSubTypeResource();
      //expect(instance).to.be.a(KnetikCloud.AccessSubTypeResource);
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instane = new KnetikCloud.AccessSubTypeResource();
      //expect(instance).to.be();
    });

    it('should have the property defaultAccess (base name: "default_access")', function() {
      // uncomment below and update the code to test the property defaultAccess
      //var instane = new KnetikCloud.AccessSubTypeResource();
      //expect(instance).to.be();
    });

    it('should have the property inheritedAccess (base name: "inherited_access")', function() {
      // uncomment below and update the code to test the property inheritedAccess
      //var instane = new KnetikCloud.AccessSubTypeResource();
      //expect(instance).to.be();
    });

    it('should have the property replacementSids (base name: "replacement_sids")', function() {
      // uncomment below and update the code to test the property replacementSids
      //var instane = new KnetikCloud.AccessSubTypeResource();
      //expect(instance).to.be();
    });

    it('should have the property subTypes (base name: "sub_types")', function() {
      // uncomment below and update the code to test the property subTypes
      //var instane = new KnetikCloud.AccessSubTypeResource();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KnetikCloud.AccessSubTypeResource();
      //expect(instance).to.be();
    });

  });

}));
