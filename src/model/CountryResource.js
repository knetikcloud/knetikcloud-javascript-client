/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.CountryResource = factory(root.KnetikcloudSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CountryResource model module.
   * @module model/CountryResource
   * @version latest

   */

  /**
   * Constructs a new <code>CountryResource</code>.
   * @alias module:model/CountryResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CountryResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryResource} obj Optional instance to populate.
   * @return {module:model/CountryResource} The populated <code>CountryResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('iso2')) {
        obj['iso2'] = ApiClient.convertToType(data['iso2'], 'String');
      }
      if (data.hasOwnProperty('iso3')) {
        obj['iso3'] = ApiClient.convertToType(data['iso3'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The iso2 of the country
   * @member {String} iso2
   */
  exports.prototype['iso2'] = undefined;
  /**
   * The iso3 of the country
   * @member {String} iso3
   */
  exports.prototype['iso3'] = undefined;
  /**
   * The name of the country resource
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


