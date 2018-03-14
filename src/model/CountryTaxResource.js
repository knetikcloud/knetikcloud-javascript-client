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
    root.KnetikCloud.CountryTaxResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CountryTaxResource model module.
   * @module model/CountryTaxResource
   * @version 3.0.9
   */

  /**
   * Constructs a new <code>CountryTaxResource</code>.
   * @alias module:model/CountryTaxResource
   * @class
   * @param countryIso3 {String} The iso3 code of the country, cannot be changed
   * @param name {String} The name of the tax
   * @param rate {Number} The tax rate as a percentage to a maximum of two decimal places (1.5 means 1.5%)
   * @param taxShipping {Boolean} Whether the tax applies to shipping costs
   */
  var exports = function(countryIso3, name, rate, taxShipping) {
    var _this = this;

    _this['country_iso3'] = countryIso3;
    _this['name'] = name;
    _this['rate'] = rate;
    _this['tax_shipping'] = taxShipping;
  };

  /**
   * Constructs a <code>CountryTaxResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryTaxResource} obj Optional instance to populate.
   * @return {module:model/CountryTaxResource} The populated <code>CountryTaxResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('country_iso3')) {
        obj['country_iso3'] = ApiClient.convertToType(data['country_iso3'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('rate')) {
        obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
      }
      if (data.hasOwnProperty('tax_shipping')) {
        obj['tax_shipping'] = ApiClient.convertToType(data['tax_shipping'], 'Boolean');
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
  
  var discriminatorValue = 'CountryTaxResource';


  /**
   * The iso3 code of the country, cannot be changed
   * @member {String} country_iso3
   */
  exports.prototype['country_iso3'] = undefined;
  /**
   * The name of the tax
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The tax rate as a percentage to a maximum of two decimal places (1.5 means 1.5%)
   * @member {Number} rate
   */
  exports.prototype['rate'] = undefined;
  /**
   * Whether the tax applies to shipping costs
   * @member {Boolean} tax_shipping
   */
  exports.prototype['tax_shipping'] = undefined;



  return exports;
}));


