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
    instance = new KnetikPlatformApiDocumentationLatest.CatalogSale();
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

  describe('CatalogSale', function() {
    it('should create an instance of CatalogSale', function() {
      // uncomment below and update the code to test CatalogSale
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be.a(KnetikPlatformApiDocumentationLatest.CatalogSale);
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property discountType (base name: "discount_type")', function() {
      // uncomment below and update the code to test the property discountType
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property discountValue (base name: "discount_value")', function() {
      // uncomment below and update the code to test the property discountValue
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property item (base name: "item")', function() {
      // uncomment below and update the code to test the property item
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property saleEndDate (base name: "sale_end_date")', function() {
      // uncomment below and update the code to test the property saleEndDate
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property saleStartDate (base name: "sale_start_date")', function() {
      // uncomment below and update the code to test the property saleStartDate
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

    it('should have the property vendor (base name: "vendor")', function() {
      // uncomment below and update the code to test the property vendor
      //var instane = new KnetikPlatformApiDocumentationLatest.CatalogSale();
      //expect(instance).to.be();
    });

  });

}));
