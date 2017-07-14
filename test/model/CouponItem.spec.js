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
    instance = new knetikcloud-sdk.CouponItem();
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

  describe('CouponItem', function() {
    it('should create an instance of CouponItem', function() {
      // uncomment below and update the code to test CouponItem
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be.a(knetikcloud-sdk.CouponItem);
    });

    it('should have the property couponTypeHint (base name: "coupon_type_hint")', function() {
      // uncomment below and update the code to test the property couponTypeHint
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property discountMax (base name: "discount_max")', function() {
      // uncomment below and update the code to test the property discountMax
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property discountMinCartValue (base name: "discount_min_cart_value")', function() {
      // uncomment below and update the code to test the property discountMinCartValue
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property discountType (base name: "discount_type")', function() {
      // uncomment below and update the code to test the property discountType
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property discountValue (base name: "discount_value")', function() {
      // uncomment below and update the code to test the property discountValue
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property exclusive (base name: "exclusive")', function() {
      // uncomment below and update the code to test the property exclusive
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "item_id")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property maxQuantity (base name: "max_quantity")', function() {
      // uncomment below and update the code to test the property maxQuantity
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property selfExclusive (base name: "self_exclusive")', function() {
      // uncomment below and update the code to test the property selfExclusive
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

    it('should have the property validForTags (base name: "valid_for_tags")', function() {
      // uncomment below and update the code to test the property validForTags
      //var instane = new knetikcloud-sdk.CouponItem();
      //expect(instance).to.be();
    });

  });

}));
