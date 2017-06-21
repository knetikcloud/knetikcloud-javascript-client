/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    describe('createSubscription', function() {
      it('should call createSubscription successfully', function(done) {
        //uncomment below and update the code to test createSubscription
        //instance.createSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSubscriptionTemplate', function() {
      it('should call createSubscriptionTemplate successfully', function(done) {
        //uncomment below and update the code to test createSubscriptionTemplate
        //instance.createSubscriptionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSubscription', function() {
      it('should call deleteSubscription successfully', function(done) {
        //uncomment below and update the code to test deleteSubscription
        //instance.deleteSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSubscriptionTemplate', function() {
      it('should call deleteSubscriptionTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteSubscriptionTemplate
        //instance.deleteSubscriptionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscription', function() {
      it('should call getSubscription successfully', function(done) {
        //uncomment below and update the code to test getSubscription
        //instance.getSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionTemplate', function() {
      it('should call getSubscriptionTemplate successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionTemplate
        //instance.getSubscriptionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionTemplates', function() {
      it('should call getSubscriptionTemplates successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionTemplates
        //instance.getSubscriptionTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptions', function() {
      it('should call getSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getSubscriptions
        //instance.getSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('processSubscriptions', function() {
      it('should call processSubscriptions successfully', function(done) {
        //uncomment below and update the code to test processSubscriptions
        //instance.processSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSubscription', function() {
      it('should call updateSubscription successfully', function(done) {
        //uncomment below and update the code to test updateSubscription
        //instance.updateSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSubscriptionTemplate', function() {
      it('should call updateSubscriptionTemplate successfully', function(done) {
        //uncomment below and update the code to test updateSubscriptionTemplate
        //instance.updateSubscriptionTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
