/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
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
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.CurrencyResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CurrencyResource model module.
   * @module model/CurrencyResource
   * @version Latest
   */

  /**
   * Constructs a new <code>CurrencyResource</code>.
   * @alias module:model/CurrencyResource
   * @class
   * @param code {String} The unique id code for the currency. Maximum 5 characters
   * @param factor {Number} The decimal to multiply the system base currency (from config 'currency') to localize to this one. Should be 1 for the base currency itself.
   * @param name {String} The name of the currency
   */
  var exports = function(code, factor, name) {
    var _this = this;


    _this['code'] = code;

    _this['factor'] = factor;

    _this['name'] = name;


  };

  /**
   * Constructs a <code>CurrencyResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrencyResource} obj Optional instance to populate.
   * @return {module:model/CurrencyResource} The populated <code>CurrencyResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('factor')) {
        obj['factor'] = ApiClient.convertToType(data['factor'], 'Number');
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Whether the currency is active. Default true
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * The unique id code for the currency. Maximum 5 characters
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The unix timestamp in seconds the currency was added to the system
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The decimal to multiply the system base currency (from config 'currency') to localize to this one. Should be 1 for the base currency itself.
   * @member {Number} factor
   */
  exports.prototype['factor'] = undefined;
  /**
   * The url for an icon of the currency
   * @member {String} icon
   */
  exports.prototype['icon'] = undefined;
  /**
   * The name of the currency
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The type of currency. Default 'real'
   * @member {module:model/CurrencyResource.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The unix timestamp in seconds the currency was last updated in the system.
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "real"
     * @const
     */
    "real": "real",
    /**
     * value: "virtual"
     * @const
     */
    "virtual": "virtual"  };


  return exports;
}));

