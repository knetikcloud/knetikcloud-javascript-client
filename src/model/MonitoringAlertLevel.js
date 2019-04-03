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
    root.KnetikCloud.MonitoringAlertLevel = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MonitoringAlertLevel model module.
   * @module model/MonitoringAlertLevel
   * @version 3.0.18
   */

  /**
   * Constructs a new <code>MonitoringAlertLevel</code>.
   * @alias module:model/MonitoringAlertLevel
   * @class
   * @param duration {Number} The number of seconds to wait for a certain duration between first encountering a new expression output vector element and counting an alert as firing for this element.
   * @param expression {String} The expression to run. Docs: https://prometheus.io/docs/prometheus/latest/querying/functions/
   * @param name {String} The name of the alert level
   */
  var exports = function(duration, expression, name) {
    var _this = this;

    _this['duration'] = duration;
    _this['expression'] = expression;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>MonitoringAlertLevel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringAlertLevel} obj Optional instance to populate.
   * @return {module:model/MonitoringAlertLevel} The populated <code>MonitoringAlertLevel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('expression')) {
        obj['expression'] = ApiClient.convertToType(data['expression'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
  
  var discriminatorValue = 'MonitoringAlertLevel';


  /**
   * The number of seconds to wait for a certain duration between first encountering a new expression output vector element and counting an alert as firing for this element.
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * The expression to run. Docs: https://prometheus.io/docs/prometheus/latest/querying/functions/
   * @member {String} expression
   */
  exports.prototype['expression'] = undefined;
  /**
   * The name of the alert level
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


