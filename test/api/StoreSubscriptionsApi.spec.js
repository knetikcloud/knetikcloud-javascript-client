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
    instance = new KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi();
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

  describe('StoreSubscriptionsApi', function() {
    describe('createSubscriptionTemplateUsingPOST', function() {
      it('should call createSubscriptionTemplateUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createSubscriptionTemplateUsingPOST
        //instance.createSubscriptionTemplateUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSubscriptionUsingPOST', function() {
      it('should call createSubscriptionUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createSubscriptionUsingPOST
        //instance.createSubscriptionUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePlanUsingDELETE', function() {
      it('should call deletePlanUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deletePlanUsingDELETE
        //instance.deletePlanUsingDELETE(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSubscriptionTemplateUsingDELETE', function() {
      it('should call deleteSubscriptionTemplateUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteSubscriptionTemplateUsingDELETE
        //instance.deleteSubscriptionTemplateUsingDELETE(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionTemplateUsingGET', function() {
      it('should call getSubscriptionTemplateUsingGET successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionTemplateUsingGET
        //instance.getSubscriptionTemplateUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionTemplatesUsingGET', function() {
      it('should call getSubscriptionTemplatesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionTemplatesUsingGET
        //instance.getSubscriptionTemplatesUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionUsingGET', function() {
      it('should call getSubscriptionUsingGET successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionUsingGET
        //instance.getSubscriptionUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSubscriptionsUsingGET', function() {
      it('should call listSubscriptionsUsingGET successfully', function(done) {
        //uncomment below and update the code to test listSubscriptionsUsingGET
        //instance.listSubscriptionsUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('processUsingPOST', function() {
      it('should call processUsingPOST successfully', function(done) {
        //uncomment below and update the code to test processUsingPOST
        //instance.processUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSubscriptionTemplateUsingPUT', function() {
      it('should call updateSubscriptionTemplateUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateSubscriptionTemplateUsingPUT
        //instance.updateSubscriptionTemplateUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSubscriptionUsingPUT', function() {
      it('should call updateSubscriptionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateSubscriptionUsingPUT
        //instance.updateSubscriptionUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
