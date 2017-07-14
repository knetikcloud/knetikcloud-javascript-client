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
    instance = new knetikcloud-sdk.StoreSalesApi();
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

  describe('StoreSalesApi', function() {
    describe('createCatalogSale', function() {
      it('should call createCatalogSale successfully', function(done) {
        //uncomment below and update the code to test createCatalogSale
        //instance.createCatalogSale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCatalogSale', function() {
      it('should call deleteCatalogSale successfully', function(done) {
        //uncomment below and update the code to test deleteCatalogSale
        //instance.deleteCatalogSale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCatalogSale', function() {
      it('should call getCatalogSale successfully', function(done) {
        //uncomment below and update the code to test getCatalogSale
        //instance.getCatalogSale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCatalogSales', function() {
      it('should call getCatalogSales successfully', function(done) {
        //uncomment below and update the code to test getCatalogSales
        //instance.getCatalogSales(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCatalogSale', function() {
      it('should call updateCatalogSale successfully', function(done) {
        //uncomment below and update the code to test updateCatalogSale
        //instance.updateCatalogSale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
