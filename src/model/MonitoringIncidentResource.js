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
    define(['ApiClient', 'model/MonitoringIncidentLevelResource', 'model/SimpleReferenceResourcestring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MonitoringIncidentLevelResource'), require('./SimpleReferenceResourcestring'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MonitoringIncidentResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.MonitoringIncidentLevelResource, root.KnetikCloud.SimpleReferenceResourcestring);
  }
}(this, function(ApiClient, MonitoringIncidentLevelResource, SimpleReferenceResourcestring) {
  'use strict';




  /**
   * The MonitoringIncidentResource model module.
   * @module model/MonitoringIncidentResource
   * @version 3.0.13
   */

  /**
   * Constructs a new <code>MonitoringIncidentResource</code>.
   * @alias module:model/MonitoringIncidentResource
   * @class
   * @param alert {module:model/SimpleReferenceResourcestring} The alert this incident is for
   * @param currentLevel {String} The name of the current alert level
   * @param id {String} The id of the incident. Cannot be changed
   * @param levels {Array.<module:model/MonitoringIncidentLevelResource>} The statuses of each level
   * @param triggerValue {String} The value that triggered the incident
   */
  var exports = function(alert, currentLevel, id, levels, triggerValue) {
    var _this = this;

    _this['alert'] = alert;
    _this['current_level'] = currentLevel;

    _this['id'] = id;

    _this['levels'] = levels;

    _this['trigger_value'] = triggerValue;
  };

  /**
   * Constructs a <code>MonitoringIncidentResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringIncidentResource} obj Optional instance to populate.
   * @return {module:model/MonitoringIncidentResource} The populated <code>MonitoringIncidentResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alert')) {
        obj['alert'] = SimpleReferenceResourcestring.constructFromObject(data['alert']);
      }
      if (data.hasOwnProperty('current_level')) {
        obj['current_level'] = ApiClient.convertToType(data['current_level'], 'String');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('insufficient_data')) {
        obj['insufficient_data'] = ApiClient.convertToType(data['insufficient_data'], 'Boolean');
      }
      if (data.hasOwnProperty('levels')) {
        obj['levels'] = ApiClient.convertToType(data['levels'], [MonitoringIncidentLevelResource]);
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
      if (data.hasOwnProperty('trigger_value')) {
        obj['trigger_value'] = ApiClient.convertToType(data['trigger_value'], 'String');
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
  
  var discriminatorValue = 'MonitoringIncidentResource';


  /**
   * The alert this incident is for
   * @member {module:model/SimpleReferenceResourcestring} alert
   */
  exports.prototype['alert'] = undefined;
  /**
   * The name of the current alert level
   * @member {String} current_level
   */
  exports.prototype['current_level'] = undefined;
  /**
   * The endDate as a unix timestamp in seconds the incident was manually ended. Null if still open
   * @member {Number} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The id of the incident. Cannot be changed
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Whether the most recent check for any level had too little data to determine status, and alert level missing_data_policy is 'missing'
   * @member {Boolean} insufficient_data
   */
  exports.prototype['insufficient_data'] = undefined;
  /**
   * The statuses of each level
   * @member {Array.<module:model/MonitoringIncidentLevelResource>} levels
   */
  exports.prototype['levels'] = undefined;
  /**
   * The startDate as a unix timestamp in seconds the incident first started
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The value that triggered the incident
   * @member {String} trigger_value
   */
  exports.prototype['trigger_value'] = undefined;



  return exports;
}));


