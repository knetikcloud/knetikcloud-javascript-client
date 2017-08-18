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
    instance = new KnetikCloud.AuthClientsApi();
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

  describe('AuthClientsApi', function() {
    describe('createClient', function() {
      it('should call createClient successfully', function(done) {
        //uncomment below and update the code to test createClient
        //instance.createClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClient', function() {
      it('should call deleteClient successfully', function(done) {
        //uncomment below and update the code to test deleteClient
        //instance.deleteClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClient', function() {
      it('should call getClient successfully', function(done) {
        //uncomment below and update the code to test getClient
        //instance.getClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientGrantTypes', function() {
      it('should call getClientGrantTypes successfully', function(done) {
        //uncomment below and update the code to test getClientGrantTypes
        //instance.getClientGrantTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClients', function() {
      it('should call getClients successfully', function(done) {
        //uncomment below and update the code to test getClients
        //instance.getClients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setClientGrantTypes', function() {
      it('should call setClientGrantTypes successfully', function(done) {
        //uncomment below and update the code to test setClientGrantTypes
        //instance.setClientGrantTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setClientRedirectUris', function() {
      it('should call setClientRedirectUris successfully', function(done) {
        //uncomment below and update the code to test setClientRedirectUris
        //instance.setClientRedirectUris(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClient', function() {
      it('should call updateClient successfully', function(done) {
        //uncomment below and update the code to test updateClient
        //instance.updateClient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
