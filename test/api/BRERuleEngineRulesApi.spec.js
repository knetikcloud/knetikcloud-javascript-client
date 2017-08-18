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
    instance = new KnetikCloud.BRERuleEngineRulesApi();
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

  describe('BRERuleEngineRulesApi', function() {
    describe('createBRERule', function() {
      it('should call createBRERule successfully', function(done) {
        //uncomment below and update the code to test createBRERule
        //instance.createBRERule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBRERule', function() {
      it('should call deleteBRERule successfully', function(done) {
        //uncomment below and update the code to test deleteBRERule
        //instance.deleteBRERule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBREExpressionAsString', function() {
      it('should call getBREExpressionAsString successfully', function(done) {
        //uncomment below and update the code to test getBREExpressionAsString
        //instance.getBREExpressionAsString(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBRERule', function() {
      it('should call getBRERule successfully', function(done) {
        //uncomment below and update the code to test getBRERule
        //instance.getBRERule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBRERules', function() {
      it('should call getBRERules successfully', function(done) {
        //uncomment below and update the code to test getBRERules
        //instance.getBRERules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setBRERule', function() {
      it('should call setBRERule successfully', function(done) {
        //uncomment below and update the code to test setBRERule
        //instance.setBRERule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBRERule', function() {
      it('should call updateBRERule successfully', function(done) {
        //uncomment below and update the code to test updateBRERule
        //instance.updateBRERule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
