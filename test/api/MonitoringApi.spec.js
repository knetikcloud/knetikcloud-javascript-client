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
    instance = new KnetikCloud.MonitoringApi();
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

  describe('MonitoringApi', function() {
    describe('createAlert', function() {
      it('should call createAlert successfully', function(done) {
        //uncomment below and update the code to test createAlert
        //instance.createAlert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMetric', function() {
      it('should call createMetric successfully', function(done) {
        //uncomment below and update the code to test createMetric
        //instance.createMetric(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAlert', function() {
      it('should call deleteAlert successfully', function(done) {
        //uncomment below and update the code to test deleteAlert
        //instance.deleteAlert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteIncident', function() {
      it('should call deleteIncident successfully', function(done) {
        //uncomment below and update the code to test deleteIncident
        //instance.deleteIncident(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMetric', function() {
      it('should call deleteMetric successfully', function(done) {
        //uncomment below and update the code to test deleteMetric
        //instance.deleteMetric(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAlert', function() {
      it('should call getAlert successfully', function(done) {
        //uncomment below and update the code to test getAlert
        //instance.getAlert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAlerts', function() {
      it('should call getAlerts successfully', function(done) {
        //uncomment below and update the code to test getAlerts
        //instance.getAlerts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIncident', function() {
      it('should call getIncident successfully', function(done) {
        //uncomment below and update the code to test getIncident
        //instance.getIncident(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIncidentEvents', function() {
      it('should call getIncidentEvents successfully', function(done) {
        //uncomment below and update the code to test getIncidentEvents
        //instance.getIncidentEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIncidents', function() {
      it('should call getIncidents successfully', function(done) {
        //uncomment below and update the code to test getIncidents
        //instance.getIncidents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetric', function() {
      it('should call getMetric successfully', function(done) {
        //uncomment below and update the code to test getMetric
        //instance.getMetric(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMetrics', function() {
      it('should call getMetrics successfully', function(done) {
        //uncomment below and update the code to test getMetrics
        //instance.getMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postDatapoint', function() {
      it('should call postDatapoint successfully', function(done) {
        //uncomment below and update the code to test postDatapoint
        //instance.postDatapoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('receiveEvent', function() {
      it('should call receiveEvent successfully', function(done) {
        //uncomment below and update the code to test receiveEvent
        //instance.receiveEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startRecordMetric', function() {
      it('should call startRecordMetric successfully', function(done) {
        //uncomment below and update the code to test startRecordMetric
        //instance.startRecordMetric(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopRecordMetric', function() {
      it('should call stopRecordMetric successfully', function(done) {
        //uncomment below and update the code to test stopRecordMetric
        //instance.stopRecordMetric(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAlert', function() {
      it('should call updateAlert successfully', function(done) {
        //uncomment below and update the code to test updateAlert
        //instance.updateAlert(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMetric', function() {
      it('should call updateMetric successfully', function(done) {
        //uncomment below and update the code to test updateMetric
        //instance.updateMetric(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
