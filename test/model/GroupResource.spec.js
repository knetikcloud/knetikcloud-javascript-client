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
    instance = new KnetikCloud.GroupResource();
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

  describe('GroupResource', function() {
    it('should create an instance of GroupResource', function() {
      // uncomment below and update the code to test GroupResource
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be.a(KnetikCloud.GroupResource);
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property memberCount (base name: "member_count")', function() {
      // uncomment below and update the code to test the property memberCount
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property messageOfTheDay (base name: "message_of_the_day")', function() {
      // uncomment below and update the code to test the property messageOfTheDay
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property subMemberCount (base name: "sub_member_count")', function() {
      // uncomment below and update the code to test the property subMemberCount
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

    it('should have the property uniqueName (base name: "unique_name")', function() {
      // uncomment below and update the code to test the property uniqueName
      //var instane = new KnetikCloud.GroupResource();
      //expect(instance).to.be();
    });

  });

}));
