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
    instance = new KnetikCloud.MonitoringIncidentEventResource();
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

  describe('MonitoringIncidentEventResource', function() {
    it('should create an instance of MonitoringIncidentEventResource', function() {
      // uncomment below and update the code to test MonitoringIncidentEventResource
      //var instane = new KnetikCloud.MonitoringIncidentEventResource();
      //expect(instance).to.be.a(KnetikCloud.MonitoringIncidentEventResource);
    });

    it('should have the property alertId (base name: "alert_id")', function() {
      // uncomment below and update the code to test the property alertId
      //var instane = new KnetikCloud.MonitoringIncidentEventResource();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new KnetikCloud.MonitoringIncidentEventResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KnetikCloud.MonitoringIncidentEventResource();
      //expect(instance).to.be();
    });

    it('should have the property incidentId (base name: "incident_id")', function() {
      // uncomment below and update the code to test the property incidentId
      //var instane = new KnetikCloud.MonitoringIncidentEventResource();
      //expect(instance).to.be();
    });

    it('should have the property levelName (base name: "level_name")', function() {
      // uncomment below and update the code to test the property levelName
      //var instane = new KnetikCloud.MonitoringIncidentEventResource();
      //expect(instance).to.be();
    });

    it('should have the property mergeValue (base name: "merge_value")', function() {
      // uncomment below and update the code to test the property mergeValue
      //var instane = new KnetikCloud.MonitoringIncidentEventResource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KnetikCloud.MonitoringIncidentEventResource();
      //expect(instance).to.be();
    });

  });

}));
