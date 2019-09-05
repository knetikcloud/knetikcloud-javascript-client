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
    root.KnetikCloud.MonitoringIncidentEventResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MonitoringIncidentEventResource model module.
   * @module model/MonitoringIncidentEventResource
   * @version 3.0.268
   */

  /**
   * Constructs a new <code>MonitoringIncidentEventResource</code>.
   * @alias module:model/MonitoringIncidentEventResource
   * @class
   * @param alertId {String} The id of the alert
   * @param levelName {String} The name of the alert level
   * @param status {module:model/MonitoringIncidentEventResource.StatusEnum} The new status of the alert level
   */
  var exports = function(alertId, levelName, status) {
    var _this = this;

    _this['alert_id'] = alertId;



    _this['level_name'] = levelName;

    _this['status'] = status;
  };

  /**
   * Constructs a <code>MonitoringIncidentEventResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringIncidentEventResource} obj Optional instance to populate.
   * @return {module:model/MonitoringIncidentEventResource} The populated <code>MonitoringIncidentEventResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alert_id')) {
        obj['alert_id'] = ApiClient.convertToType(data['alert_id'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('incident_id')) {
        obj['incident_id'] = ApiClient.convertToType(data['incident_id'], 'String');
      }
      if (data.hasOwnProperty('level_name')) {
        obj['level_name'] = ApiClient.convertToType(data['level_name'], 'String');
      }
      if (data.hasOwnProperty('merge_value')) {
        obj['merge_value'] = ApiClient.convertToType(data['merge_value'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
  
  var discriminatorValue = 'MonitoringIncidentEventResource';


  /**
   * The id of the alert
   * @member {String} alert_id
   */
  exports.prototype['alert_id'] = undefined;
  /**
   * The date as a unix timestamp in seconds for the event
   * @member {Number} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The id of the incident event
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the incident. will be added to any current incident for the alert or a new one created
   * @member {String} incident_id
   */
  exports.prototype['incident_id'] = undefined;
  /**
   * The name of the alert level
   * @member {String} level_name
   */
  exports.prototype['level_name'] = undefined;
  /**
   * The value of the label from the alert that incidents are merged on
   * @member {String} merge_value
   */
  exports.prototype['merge_value'] = undefined;
  /**
   * The new status of the alert level
   * @member {module:model/MonitoringIncidentEventResource.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",
    /**
     * value: "ALARM"
     * @const
     */
    "ALARM": "ALARM",
    /**
     * value: "INSUFFICIENT_DATA"
     * @const
     */
    "INSUFFICIENT_DATA": "INSUFFICIENT_DATA"  };


  return exports;
}));


