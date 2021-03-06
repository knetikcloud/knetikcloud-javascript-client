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
    root.KnetikCloud.QuickBuyRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QuickBuyRequest model module.
   * @module model/QuickBuyRequest
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>QuickBuyRequest</code>.
   * @alias module:model/QuickBuyRequest
   * @class
   * @param sku {String} SKU of item being purchased
   */
  var exports = function(sku) {
    var _this = this;















    _this['sku'] = sku;


  };

  /**
   * Constructs a <code>QuickBuyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuickBuyRequest} obj Optional instance to populate.
   * @return {module:model/QuickBuyRequest} The populated <code>QuickBuyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('billing_address1')) {
        obj['billing_address1'] = ApiClient.convertToType(data['billing_address1'], 'String');
      }
      if (data.hasOwnProperty('billing_address2')) {
        obj['billing_address2'] = ApiClient.convertToType(data['billing_address2'], 'String');
      }
      if (data.hasOwnProperty('billing_city_name')) {
        obj['billing_city_name'] = ApiClient.convertToType(data['billing_city_name'], 'String');
      }
      if (data.hasOwnProperty('billing_country_name')) {
        obj['billing_country_name'] = ApiClient.convertToType(data['billing_country_name'], 'String');
      }
      if (data.hasOwnProperty('billing_full_name')) {
        obj['billing_full_name'] = ApiClient.convertToType(data['billing_full_name'], 'String');
      }
      if (data.hasOwnProperty('billing_postal_code')) {
        obj['billing_postal_code'] = ApiClient.convertToType(data['billing_postal_code'], 'String');
      }
      if (data.hasOwnProperty('billing_state_name')) {
        obj['billing_state_name'] = ApiClient.convertToType(data['billing_state_name'], 'String');
      }
      if (data.hasOwnProperty('city_name')) {
        obj['city_name'] = ApiClient.convertToType(data['city_name'], 'String');
      }
      if (data.hasOwnProperty('country_name')) {
        obj['country_name'] = ApiClient.convertToType(data['country_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('name_prefix')) {
        obj['name_prefix'] = ApiClient.convertToType(data['name_prefix'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('state_name')) {
        obj['state_name'] = ApiClient.convertToType(data['state_name'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
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
  
  var discriminatorValue = 'QuickBuyRequest';


  /**
   * Line one of the customer's shipping address
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Line two of the customer's shipping address
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * Line one of the customer's billing address
   * @member {String} billing_address1
   */
  exports.prototype['billing_address1'] = undefined;
  /**
   * Line two of the customer's billing address
   * @member {String} billing_address2
   */
  exports.prototype['billing_address2'] = undefined;
  /**
   * The city for the customer's billing address
   * @member {String} billing_city_name
   */
  exports.prototype['billing_city_name'] = undefined;
  /**
   * The country for the customer's billing address
   * @member {String} billing_country_name
   */
  exports.prototype['billing_country_name'] = undefined;
  /**
   * The customer's name for the billing address
   * @member {String} billing_full_name
   */
  exports.prototype['billing_full_name'] = undefined;
  /**
   * The postal code for the customer's billing address
   * @member {String} billing_postal_code
   */
  exports.prototype['billing_postal_code'] = undefined;
  /**
   * The state for the customer's billing address
   * @member {String} billing_state_name
   */
  exports.prototype['billing_state_name'] = undefined;
  /**
   * The city for the customer's shipping address
   * @member {String} city_name
   */
  exports.prototype['city_name'] = undefined;
  /**
   * The country for the customer's shipping address
   * @member {String} country_name
   */
  exports.prototype['country_name'] = undefined;
  /**
   * The customer's email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The customer's name prefix
   * @member {String} name_prefix
   */
  exports.prototype['name_prefix'] = undefined;
  /**
   * The postal code for the customer's shipping address
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * SKU of item being purchased
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * The state for the customer's shipping address
   * @member {String} state_name
   */
  exports.prototype['state_name'] = undefined;
  /**
   * ID of the user making the purchase. If null, currently logged in user will be used.
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


