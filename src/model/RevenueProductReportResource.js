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
    root.KnetikCloud.RevenueProductReportResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RevenueProductReportResource model module.
   * @module model/RevenueProductReportResource
   * @version 3.0.18
   */

  /**
   * Constructs a new <code>RevenueProductReportResource</code>.
   * @alias module:model/RevenueProductReportResource
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RevenueProductReportResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RevenueProductReportResource} obj Optional instance to populate.
   * @return {module:model/RevenueProductReportResource} The populated <code>RevenueProductReportResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
      }
      if (data.hasOwnProperty('item_name')) {
        obj['item_name'] = ApiClient.convertToType(data['item_name'], 'String');
      }
      if (data.hasOwnProperty('revenue')) {
        obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
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
  
  var discriminatorValue = 'RevenueProductReportResource';


  /**
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * @member {String} item_name
   */
  exports.prototype['item_name'] = undefined;
  /**
   * @member {Number} revenue
   */
  exports.prototype['revenue'] = undefined;
  /**
   * @member {Number} volume
   */
  exports.prototype['volume'] = undefined;



  return exports;
}));


