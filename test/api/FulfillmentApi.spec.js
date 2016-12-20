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
    instance = new KnetikPlatformApiDocumentationLatest.FulfillmentApi();
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

  describe('FulfillmentApi', function() {
    describe('createFulfillmentTypeUsingPOST', function() {
      it('should call createFulfillmentTypeUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createFulfillmentTypeUsingPOST
        //instance.createFulfillmentTypeUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFulfillmentTypeUsingDELETE', function() {
      it('should call deleteFulfillmentTypeUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteFulfillmentTypeUsingDELETE
        //instance.deleteFulfillmentTypeUsingDELETE(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentTypeUsingGET', function() {
      it('should call getFulfillmentTypeUsingGET successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentTypeUsingGET
        //instance.getFulfillmentTypeUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFulfillmentsUsingGET', function() {
      it('should call getFulfillmentsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getFulfillmentsUsingGET
        //instance.getFulfillmentsUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFulfillmentTypeUsingPUT', function() {
      it('should call updateFulfillmentTypeUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateFulfillmentTypeUsingPUT
        //instance.updateFulfillmentTypeUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));