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
    instance = new KnetikPlatformApiDocumentationLatest.Cart();
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

  describe('Cart', function() {
    it('should create an instance of Cart', function() {
      // uncomment below and update the code to test Cart
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.Cart);
    });

    it('should have the property countryTax (base name: "country_tax")', function() {
      // uncomment below and update the code to test the property countryTax
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property coupons (base name: "coupons")', function() {
      // uncomment below and update the code to test the property coupons
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property discountTotal (base name: "discount_total")', function() {
      // uncomment below and update the code to test the property discountTotal
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "error_code")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "error_message")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property grandTotal (base name: "grand_total")', function() {
      // uncomment below and update the code to test the property grandTotal
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoice_id")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property selectedShippingOptions (base name: "selected_shipping_options")', function() {
      // uncomment below and update the code to test the property selectedShippingOptions
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property shippable (base name: "shippable")', function() {
      // uncomment below and update the code to test the property shippable
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shipping_address")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property shippingCost (base name: "shipping_cost")', function() {
      // uncomment below and update the code to test the property shippingCost
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property shippingOptions (base name: "shipping_options")', function() {
      // uncomment below and update the code to test the property shippingOptions
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property stateTax (base name: "state_tax")', function() {
      // uncomment below and update the code to test the property stateTax
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property subtotal (base name: "subtotal")', function() {
      // uncomment below and update the code to test the property subtotal
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instane = new KnetikPlatformApiDocumentationLatest.Cart();
      //expect(instance).to.be();
    });

  });

}));
