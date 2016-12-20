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
    instance = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
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

  describe('CouponDefinition', function() {
    it('should create an instance of CouponDefinition', function() {
      // uncomment below and update the code to test CouponDefinition
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.CouponDefinition);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property discountType (base name: "discount_type")', function() {
      // uncomment below and update the code to test the property discountType
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property exclusive (base name: "exclusive")', function() {
      // uncomment below and update the code to test the property exclusive
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property maxDiscount (base name: "max_discount")', function() {
      // uncomment below and update the code to test the property maxDiscount
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property maxQuantity (base name: "max_quantity")', function() {
      // uncomment below and update the code to test the property maxQuantity
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property minCartTotal (base name: "min_cart_total")', function() {
      // uncomment below and update the code to test the property minCartTotal
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property selfExclusive (base name: "self_exclusive")', function() {
      // uncomment below and update the code to test the property selfExclusive
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property targetItemId (base name: "target_item_id")', function() {
      // uncomment below and update the code to test the property targetItemId
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property validForTags (base name: "valid_for_tags")', function() {
      // uncomment below and update the code to test the property validForTags
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

    it('should have the property vendorId (base name: "vendor_id")', function() {
      // uncomment below and update the code to test the property vendorId
      //var instane = new KnetikPlatformApiDocumentationLatest.CouponDefinition();
      //expect(instance).to.be();
    });

  });

}));