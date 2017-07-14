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
    factory(root.expect, root.KnetikcloudSdk);
  }
}(this, function(expect, KnetikcloudSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikcloudSdk.TimePeriodGettable();
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

  describe('TimePeriodGettable', function() {
    it('should create an instance of TimePeriodGettable', function() {
      // uncomment below and update the code to test TimePeriodGettable
      //var instane = new KnetikcloudSdk.TimePeriodGettable();
      //expect(instance).to.be.a(KnetikcloudSdk.TimePeriodGettable);
    });

    it('should have the property getLimit (base name: "get_limit")', function() {
      // uncomment below and update the code to test the property getLimit
      //var instane = new KnetikcloudSdk.TimePeriodGettable();
      //expect(instance).to.be();
    });

    it('should have the property groupName (base name: "group_name")', function() {
      // uncomment below and update the code to test the property groupName
      //var instane = new KnetikcloudSdk.TimePeriodGettable();
      //expect(instance).to.be();
    });

    it('should have the property timeLength (base name: "time_length")', function() {
      // uncomment below and update the code to test the property timeLength
      //var instane = new KnetikcloudSdk.TimePeriodGettable();
      //expect(instance).to.be();
    });

    it('should have the property unitOfTime (base name: "unit_of_time")', function() {
      // uncomment below and update the code to test the property unitOfTime
      //var instane = new KnetikcloudSdk.TimePeriodGettable();
      //expect(instance).to.be();
    });

  });

}));
