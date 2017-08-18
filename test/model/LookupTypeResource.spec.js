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
    instance = new KnetikCloud.LookupTypeResource();
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

  describe('LookupTypeResource', function() {
    it('should create an instance of LookupTypeResource', function() {
      // uncomment below and update the code to test LookupTypeResource
      //var instane = new KnetikCloud.LookupTypeResource();
      //expect(instance).to.be.a(KnetikCloud.LookupTypeResource);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikCloud.LookupTypeResource();
      //expect(instance).to.be();
    });

    it('should have the property keyType (base name: "key_type")', function() {
      // uncomment below and update the code to test the property keyType
      //var instane = new KnetikCloud.LookupTypeResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikCloud.LookupTypeResource();
      //expect(instance).to.be();
    });

    it('should have the property valueType (base name: "value_type")', function() {
      // uncomment below and update the code to test the property valueType
      //var instane = new KnetikCloud.LookupTypeResource();
      //expect(instance).to.be();
    });

  });

}));
