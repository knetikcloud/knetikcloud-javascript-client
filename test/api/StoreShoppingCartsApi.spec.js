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
    instance = new KnetikPlatformApiDocumentationLatest.StoreShoppingCartsApi();
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

  describe('StoreShoppingCartsApi', function() {
    describe('addDiscountUsingPOST', function() {
      it('should call addDiscountUsingPOST successfully', function(done) {
        //uncomment below and update the code to test addDiscountUsingPOST
        //instance.addDiscountUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemUsingPOST', function() {
      it('should call addItemUsingPOST successfully', function(done) {
        //uncomment below and update the code to test addItemUsingPOST
        //instance.addItemUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assignCartUsingPUT', function() {
      it('should call assignCartUsingPUT successfully', function(done) {
        //uncomment below and update the code to test assignCartUsingPUT
        //instance.assignCartUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkShippableUsingGET', function() {
      it('should call checkShippableUsingGET successfully', function(done) {
        //uncomment below and update the code to test checkShippableUsingGET
        //instance.checkShippableUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCartUsingPOST', function() {
      it('should call createCartUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createCartUsingPOST
        //instance.createCartUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartUsingGET', function() {
      it('should call getCartUsingGET successfully', function(done) {
        //uncomment below and update the code to test getCartUsingGET
        //instance.getCartUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCountriesUsingGET', function() {
      it('should call getCountriesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getCountriesUsingGET
        //instance.getCountriesUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyShippingAddressUsingPUT', function() {
      it('should call modifyShippingAddressUsingPUT successfully', function(done) {
        //uncomment below and update the code to test modifyShippingAddressUsingPUT
        //instance.modifyShippingAddressUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDiscountUsingDELETE', function() {
      it('should call removeDiscountUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test removeDiscountUsingDELETE
        //instance.removeDiscountUsingDELETE(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchCartsUsingGET', function() {
      it('should call searchCartsUsingGET successfully', function(done) {
        //uncomment below and update the code to test searchCartsUsingGET
        //instance.searchCartsUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setCartCurrencyUsingPUT', function() {
      it('should call setCartCurrencyUsingPUT successfully', function(done) {
        //uncomment below and update the code to test setCartCurrencyUsingPUT
        //instance.setCartCurrencyUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemUsingPUT', function() {
      it('should call updateItemUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateItemUsingPUT
        //instance.updateItemUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
