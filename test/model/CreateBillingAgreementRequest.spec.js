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
    instance = new KnetikPlatformApiDocumentationLatest.CreateBillingAgreementRequest();
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

  describe('CreateBillingAgreementRequest', function() {
    it('should create an instance of CreateBillingAgreementRequest', function() {
      // uncomment below and update the code to test CreateBillingAgreementRequest
      //var instane = new KnetikPlatformApiDocumentationLatest.CreateBillingAgreementRequest();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.CreateBillingAgreementRequest);
    });

    it('should have the property cancelUrl (base name: "cancel_url")', function() {
      // uncomment below and update the code to test the property cancelUrl
      //var instane = new KnetikPlatformApiDocumentationLatest.CreateBillingAgreementRequest();
      //expect(instance).to.be();
    });

    it('should have the property returnUrl (base name: "return_url")', function() {
      // uncomment below and update the code to test the property returnUrl
      //var instane = new KnetikPlatformApiDocumentationLatest.CreateBillingAgreementRequest();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new KnetikPlatformApiDocumentationLatest.CreateBillingAgreementRequest();
      //expect(instance).to.be();
    });

  });

}));
