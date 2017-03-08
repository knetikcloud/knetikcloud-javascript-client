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
    instance = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
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

  describe('CartShippingAddressRequest', function() {
    it('should create an instance of CartShippingAddressRequest', function() {
      // uncomment below and update the code to test CartShippingAddressRequest
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest);
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property countryCodeIso3 (base name: "country_code_iso3")', function() {
      // uncomment below and update the code to test the property countryCodeIso3
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property namePrefix (base name: "name_prefix")', function() {
      // uncomment below and update the code to test the property namePrefix
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderNotes (base name: "order_notes")', function() {
      // uncomment below and update the code to test the property orderNotes
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property postalStateCode (base name: "postal_state_code")', function() {
      // uncomment below and update the code to test the property postalStateCode
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddressLine1 (base name: "shipping_address_line1")', function() {
      // uncomment below and update the code to test the property shippingAddressLine1
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddressLine2 (base name: "shipping_address_line2")', function() {
      // uncomment below and update the code to test the property shippingAddressLine2
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instane = new KnetikPlatformApiDocumentationLatest.CartShippingAddressRequest();
      //expect(instance).to.be();
    });

  });

}));
