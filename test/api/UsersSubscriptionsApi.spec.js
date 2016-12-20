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
    instance = new KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi();
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

  describe('UsersSubscriptionsApi', function() {
    describe('getSubscriptionDetailsUsingGET', function() {
      it('should call getSubscriptionDetailsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionDetailsUsingGET
        //instance.getSubscriptionDetailsUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionDetailsUsingGET1', function() {
      it('should call getSubscriptionDetailsUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionDetailsUsingGET1
        //instance.getSubscriptionDetailsUsingGET1(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reactivateUsingPOST', function() {
      it('should call reactivateUsingPOST successfully', function(done) {
        //uncomment below and update the code to test reactivateUsingPOST
        //instance.reactivateUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setBillDateUsingPUT', function() {
      it('should call setBillDateUsingPUT successfully', function(done) {
        //uncomment below and update the code to test setBillDateUsingPUT
        //instance.setBillDateUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setPaymentMethodUsingPUT', function() {
      it('should call setPaymentMethodUsingPUT successfully', function(done) {
        //uncomment below and update the code to test setPaymentMethodUsingPUT
        //instance.setPaymentMethodUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setStatusUsingPUT', function() {
      it('should call setStatusUsingPUT successfully', function(done) {
        //uncomment below and update the code to test setStatusUsingPUT
        //instance.setStatusUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setUserPlanUsingPUT', function() {
      it('should call setUserPlanUsingPUT successfully', function(done) {
        //uncomment below and update the code to test setUserPlanUsingPUT
        //instance.setUserPlanUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));