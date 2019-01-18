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
    instance = new KnetikCloud.VerificationApi();
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

  describe('VerificationApi', function() {
    describe('createRequestTemplate', function() {
      it('should call createRequestTemplate successfully', function(done) {
        //uncomment below and update the code to test createRequestTemplate
        //instance.createRequestTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVerificationRequest', function() {
      it('should call createVerificationRequest successfully', function(done) {
        //uncomment below and update the code to test createVerificationRequest
        //instance.createVerificationRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRequestTemplate', function() {
      it('should call deleteRequestTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteRequestTemplate
        //instance.deleteRequestTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVerificationRequest', function() {
      it('should call deleteVerificationRequest successfully', function(done) {
        //uncomment below and update the code to test deleteVerificationRequest
        //instance.deleteVerificationRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRequestTemplate', function() {
      it('should call getRequestTemplate successfully', function(done) {
        //uncomment below and update the code to test getRequestTemplate
        //instance.getRequestTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRequestTemplates', function() {
      it('should call getRequestTemplates successfully', function(done) {
        //uncomment below and update the code to test getRequestTemplates
        //instance.getRequestTemplates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVerificationRequest', function() {
      it('should call getVerificationRequest successfully', function(done) {
        //uncomment below and update the code to test getVerificationRequest
        //instance.getVerificationRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVerificationRequests', function() {
      it('should call getVerificationRequests successfully', function(done) {
        //uncomment below and update the code to test getVerificationRequests
        //instance.getVerificationRequests(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRequestTemplate', function() {
      it('should call updateRequestTemplate successfully', function(done) {
        //uncomment below and update the code to test updateRequestTemplate
        //instance.updateRequestTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVerificationRequest', function() {
      it('should call updateVerificationRequest successfully', function(done) {
        //uncomment below and update the code to test updateVerificationRequest
        //instance.updateVerificationRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyRequest', function() {
      it('should call verifyRequest successfully', function(done) {
        //uncomment below and update the code to test verifyRequest
        //instance.verifyRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));