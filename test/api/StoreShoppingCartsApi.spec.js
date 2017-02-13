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
    describe('addDiscountToCart', function() {
      it('should call addDiscountToCart successfully', function(done) {
        //uncomment below and update the code to test addDiscountToCart
        //instance.addDiscountToCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addItemToCart', function() {
      it('should call addItemToCart successfully', function(done) {
        //uncomment below and update the code to test addItemToCart
        //instance.addItemToCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCart', function() {
      it('should call createCart successfully', function(done) {
        //uncomment below and update the code to test createCart
        //instance.createCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCart', function() {
      it('should call getCart successfully', function(done) {
        //uncomment below and update the code to test getCart
        //instance.getCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCarts', function() {
      it('should call getCarts successfully', function(done) {
        //uncomment below and update the code to test getCarts
        //instance.getCarts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShippable', function() {
      it('should call getShippable successfully', function(done) {
        //uncomment below and update the code to test getShippable
        //instance.getShippable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShippingCountries', function() {
      it('should call getShippingCountries successfully', function(done) {
        //uncomment below and update the code to test getShippingCountries
        //instance.getShippingCountries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDiscountFromCart', function() {
      it('should call removeDiscountFromCart successfully', function(done) {
        //uncomment below and update the code to test removeDiscountFromCart
        //instance.removeDiscountFromCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setCartCurrency', function() {
      it('should call setCartCurrency successfully', function(done) {
        //uncomment below and update the code to test setCartCurrency
        //instance.setCartCurrency(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setCartOwner', function() {
      it('should call setCartOwner successfully', function(done) {
        //uncomment below and update the code to test setCartOwner
        //instance.setCartOwner(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateItemInCart', function() {
      it('should call updateItemInCart successfully', function(done) {
        //uncomment below and update the code to test updateItemInCart
        //instance.updateItemInCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateShippingAddress', function() {
      it('should call updateShippingAddress successfully', function(done) {
        //uncomment below and update the code to test updateShippingAddress
        //instance.updateShippingAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
