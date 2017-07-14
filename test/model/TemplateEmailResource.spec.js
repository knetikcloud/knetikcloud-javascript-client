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
    factory(root.expect, root.knetikcloud-sdk);
  }
}(this, function(expect, knetikcloud-sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new knetikcloud-sdk.TemplateEmailResource();
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

  describe('TemplateEmailResource', function() {
    it('should create an instance of TemplateEmailResource', function() {
      // uncomment below and update the code to test TemplateEmailResource
      //var instane = new knetikcloud-sdk.TemplateEmailResource();
      //expect(instance).to.be.a(knetikcloud-sdk.TemplateEmailResource);
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new knetikcloud-sdk.TemplateEmailResource();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instane = new knetikcloud-sdk.TemplateEmailResource();
      //expect(instance).to.be();
    });

    it('should have the property templateKey (base name: "template_key")', function() {
      // uncomment below and update the code to test the property templateKey
      //var instane = new knetikcloud-sdk.TemplateEmailResource();
      //expect(instance).to.be();
    });

    it('should have the property templateVars (base name: "template_vars")', function() {
      // uncomment below and update the code to test the property templateVars
      //var instane = new knetikcloud-sdk.TemplateEmailResource();
      //expect(instance).to.be();
    });

  });

}));
