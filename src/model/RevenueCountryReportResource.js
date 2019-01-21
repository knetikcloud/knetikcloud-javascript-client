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
    root.KnetikCloud.RevenueCountryReportResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RevenueCountryReportResource model module.
   * @module model/RevenueCountryReportResource
   * @version 3.0.12
   */

  /**
   * Constructs a new <code>RevenueCountryReportResource</code>.
   * @alias module:model/RevenueCountryReportResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RevenueCountryReportResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RevenueCountryReportResource} obj Optional instance to populate.
   * @return {module:model/RevenueCountryReportResource} The populated <code>RevenueCountryReportResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
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
  
  var discriminatorValue = 'RevenueCountryReportResource';


  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
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


