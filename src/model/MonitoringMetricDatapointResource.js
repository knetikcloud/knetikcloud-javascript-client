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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MonitoringMetricDatapointResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MonitoringMetricDatapointResource model module.
   * @module model/MonitoringMetricDatapointResource
   * @version 3.0.270
   */

  /**
   * Constructs a new <code>MonitoringMetricDatapointResource</code>.
   * @alias module:model/MonitoringMetricDatapointResource
   * @class
   * @param value {Number} The value of the datapoint
   */
  var exports = function(value) {
    var _this = this;




    _this['value'] = value;
  };

  /**
   * Constructs a <code>MonitoringMetricDatapointResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringMetricDatapointResource} obj Optional instance to populate.
   * @return {module:model/MonitoringMetricDatapointResource} The populated <code>MonitoringMetricDatapointResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dimensions')) {
        obj['dimensions'] = ApiClient.convertToType(data['dimensions'], {'String': 'String'});
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  exports.registerChild = function(child, discriminatorValue) {
	  child.discriminatorField = exports.discriminatorField;
	  child.discriminatorValue = discriminatorValue;
	  child.parent = exports;
	  if(exports.children == null)
		  exports.children = {};
	  exports.children[discriminatorValue] = child;
	  if(exports.parent != null)
		  exports.parent.registerChild(child, discriminatorValue);
  }
  
  var discriminatorValue = 'MonitoringMetricDatapointResource';


  /**
   * Dimensions giving context to the datapoint. Map of keys to values (example: {\"location\": \"USA\", \"user\": \"75\"}). Cannot include the | symbol
   * @member {Object.<String, String>} dimensions
   */
  exports.prototype['dimensions'] = undefined;
  /**
   * The id of the metric. Required for batch endpoint
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The unix timestamp in seconds the datapoint occurred, default: now
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The value of the datapoint
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


