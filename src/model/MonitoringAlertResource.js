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
    define(['ApiClient', 'model/MonitoringAlertLevel', 'model/SimpleReferenceResourcestring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MonitoringAlertLevel'), require('./SimpleReferenceResourcestring'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MonitoringAlertResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.MonitoringAlertLevel, root.KnetikCloud.SimpleReferenceResourcestring);
  }
}(this, function(ApiClient, MonitoringAlertLevel, SimpleReferenceResourcestring) {
  'use strict';




  /**
   * The MonitoringAlertResource model module.
   * @module model/MonitoringAlertResource
   * @version 3.0.266
   */

  /**
   * Constructs a new <code>MonitoringAlertResource</code>.
   * @alias module:model/MonitoringAlertResource
   * @class
   * @param id {String} The id of the alert. Cannot be changed
   * @param levels {Array.<module:model/MonitoringAlertLevel>} The levels of alert to raise. Minimum 1 and maximum 10 entries. The alert level will be the one with the last one in the list that is passed its threshold
   * @param name {String} The name of the alert, for display purposes
   */
  var exports = function(id, levels, name) {
    var _this = this;


    _this['id'] = id;
    _this['levels'] = levels;


    _this['name'] = name;
  };

  /**
   * Constructs a <code>MonitoringAlertResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringAlertResource} obj Optional instance to populate.
   * @return {module:model/MonitoringAlertResource} The populated <code>MonitoringAlertResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('levels')) {
        obj['levels'] = ApiClient.convertToType(data['levels'], [MonitoringAlertLevel]);
      }
      if (data.hasOwnProperty('merge_label')) {
        obj['merge_label'] = ApiClient.convertToType(data['merge_label'], 'String');
      }
      if (data.hasOwnProperty('metric')) {
        obj['metric'] = SimpleReferenceResourcestring.constructFromObject(data['metric']);
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
  
  var discriminatorValue = 'MonitoringAlertResource';


  /**
   * Whether the alert is live and should be evaluated. Default: true
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * The id of the alert. Cannot be changed
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The levels of alert to raise. Minimum 1 and maximum 10 entries. The alert level will be the one with the last one in the list that is passed its threshold
   * @member {Array.<module:model/MonitoringAlertLevel>} levels
   */
  exports.prototype['levels'] = undefined;
  /**
   * The name of a label returned in the alert query that is used to merge multiple incidents when they match
   * @member {String} merge_label
   */
  exports.prototype['merge_label'] = undefined;
  /**
   * The id of the metric the alert is monitoring
   * @member {module:model/SimpleReferenceResourcestring} metric
   */
  exports.prototype['metric'] = undefined;
  /**
   * The name of the alert, for display purposes
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


