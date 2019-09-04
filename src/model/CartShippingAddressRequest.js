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
    root.KnetikCloud.CartShippingAddressRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartShippingAddressRequest model module.
   * @module model/CartShippingAddressRequest
   * @version 3.0.266
   */

  /**
   * Constructs a new <code>CartShippingAddressRequest</code>.
   * @alias module:model/CartShippingAddressRequest
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>CartShippingAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartShippingAddressRequest} obj Optional instance to populate.
   * @return {module:model/CartShippingAddressRequest} The populated <code>CartShippingAddressRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country_code_iso3')) {
        obj['country_code_iso3'] = ApiClient.convertToType(data['country_code_iso3'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('name_prefix')) {
        obj['name_prefix'] = ApiClient.convertToType(data['name_prefix'], 'String');
      }
      if (data.hasOwnProperty('order_notes')) {
        obj['order_notes'] = ApiClient.convertToType(data['order_notes'], 'String');
      }
      if (data.hasOwnProperty('phone_number')) {
        obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
      }
      if (data.hasOwnProperty('postal_state_code')) {
        obj['postal_state_code'] = ApiClient.convertToType(data['postal_state_code'], 'String');
      }
      if (data.hasOwnProperty('shipping_address_line1')) {
        obj['shipping_address_line1'] = ApiClient.convertToType(data['shipping_address_line1'], 'String');
      }
      if (data.hasOwnProperty('shipping_address_line2')) {
        obj['shipping_address_line2'] = ApiClient.convertToType(data['shipping_address_line2'], 'String');
      }
      if (data.hasOwnProperty('zip')) {
        obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
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
  
  var discriminatorValue = 'CartShippingAddressRequest';


  /**
   * The city of the user
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The country code of the user
   * @member {String} country_code_iso3
   */
  exports.prototype['country_code_iso3'] = undefined;
  /**
   * The email of the user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The first name of the user
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The last name of the user
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * @member {String} name_prefix
   */
  exports.prototype['name_prefix'] = undefined;
  /**
   * The order notes the user
   * @member {String} order_notes
   */
  exports.prototype['order_notes'] = undefined;
  /**
   * The phone number of the user
   * @member {String} phone_number
   */
  exports.prototype['phone_number'] = undefined;
  /**
   * The postal state code of the user
   * @member {String} postal_state_code
   */
  exports.prototype['postal_state_code'] = undefined;
  /**
   * The shipping address of the user, first line
   * @member {String} shipping_address_line1
   */
  exports.prototype['shipping_address_line1'] = undefined;
  /**
   * The shipping address of the user, second line
   * @member {String} shipping_address_line2
   */
  exports.prototype['shipping_address_line2'] = undefined;
  /**
   * The zipcode of the user
   * @member {String} zip
   */
  exports.prototype['zip'] = undefined;



  return exports;
}));


