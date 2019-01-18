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
    root.KnetikCloud.MonitoringIncidentLevelResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MonitoringIncidentLevelResource model module.
   * @module model/MonitoringIncidentLevelResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>MonitoringIncidentLevelResource</code>.
   * @alias module:model/MonitoringIncidentLevelResource
   * @class
   * @param name {String} The name of the level
   * @param status {module:model/MonitoringIncidentLevelResource.StatusEnum} The current status of the level
   */
  var exports = function(name, status) {
    var _this = this;

    _this['name'] = name;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>MonitoringIncidentLevelResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringIncidentLevelResource} obj Optional instance to populate.
   * @return {module:model/MonitoringIncidentLevelResource} The populated <code>MonitoringIncidentLevelResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
  
  var discriminatorValue = 'MonitoringIncidentLevelResource';


  /**
   * The name of the level
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The current status of the level
   * @member {module:model/MonitoringIncidentLevelResource.StatusEnum} status
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


