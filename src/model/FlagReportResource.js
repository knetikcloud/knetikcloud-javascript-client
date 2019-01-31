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
    root.KnetikCloud.FlagReportResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FlagReportResource model module.
   * @module model/FlagReportResource
   * @version 3.0.14
   */

  /**
   * Constructs a new <code>FlagReportResource</code>.
   * @alias module:model/FlagReportResource
   * @class
   * @param resolution {module:model/FlagReportResource.ResolutionEnum} The resolution of that resource
   */
  var exports = function(resolution) {
    var _this = this;






    _this['resolution'] = resolution;


  };

  /**
   * Constructs a <code>FlagReportResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlagReportResource} obj Optional instance to populate.
   * @return {module:model/FlagReportResource} The populated <code>FlagReportResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('context_id')) {
        obj['context_id'] = ApiClient.convertToType(data['context_id'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('resolution')) {
        obj['resolution'] = ApiClient.convertToType(data['resolution'], 'String');
      }
      if (data.hasOwnProperty('resolved')) {
        obj['resolved'] = ApiClient.convertToType(data['resolved'], 'Number');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'FlagReportResource';


  /**
   * The context of that resource 
   * @member {String} context
   */
  exports.prototype['context'] = undefined;
  /**
   * The context ID of that resource
   * @member {String} context_id
   */
  exports.prototype['context_id'] = undefined;
  /**
   * The date/time this resource was created in seconds since epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The unique ID for that resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The reason of that resource required only in case of active resolution
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The resolution of that resource
   * @member {module:model/FlagReportResource.ResolutionEnum} resolution
   */
  exports.prototype['resolution'] = undefined;
  /**
   * The date/time this report was resolved in seconds since epoch. Null if not resolved yet
   * @member {Number} resolved
   */
  exports.prototype['resolved'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;


  /**
   * Allowed values for the <code>resolution</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResolutionEnum = {
    /**
     * value: "banned"
     * @const
     */
    "banned": "banned",
    /**
     * value: "ignored"
     * @const
     */
    "ignored": "ignored"  };


  return exports;
}));


