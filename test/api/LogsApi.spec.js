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
    instance = new KnetikCloud.LogsApi();
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

  describe('LogsApi', function() {
    describe('addUserLog', function() {
      it('should call addUserLog successfully', function(done) {
        //uncomment below and update the code to test addUserLog
        //instance.addUserLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBREEventLog', function() {
      it('should call getBREEventLog successfully', function(done) {
        //uncomment below and update the code to test getBREEventLog
        //instance.getBREEventLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBREEventLogs', function() {
      it('should call getBREEventLogs successfully', function(done) {
        //uncomment below and update the code to test getBREEventLogs
        //instance.getBREEventLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBREForwardLog', function() {
      it('should call getBREForwardLog successfully', function(done) {
        //uncomment below and update the code to test getBREForwardLog
        //instance.getBREForwardLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBREForwardLogs', function() {
      it('should call getBREForwardLogs successfully', function(done) {
        //uncomment below and update the code to test getBREForwardLogs
        //instance.getBREForwardLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserLog', function() {
      it('should call getUserLog successfully', function(done) {
        //uncomment below and update the code to test getUserLog
        //instance.getUserLog(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserLogs', function() {
      it('should call getUserLogs successfully', function(done) {
        //uncomment below and update the code to test getUserLogs
        //instance.getUserLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
