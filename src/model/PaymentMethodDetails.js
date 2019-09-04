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
    root.KnetikCloud.PaymentMethodDetails = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentMethodDetails model module.
   * @module model/PaymentMethodDetails
   * @version 3.0.266
   */

  /**
   * Constructs a new <code>PaymentMethodDetails</code>.
   * @alias module:model/PaymentMethodDetails
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PaymentMethodDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentMethodDetails} obj Optional instance to populate.
   * @return {module:model/PaymentMethodDetails} The populated <code>PaymentMethodDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('expiration_date')) {
        obj['expiration_date'] = ApiClient.convertToType(data['expiration_date'], 'Number');
      }
      if (data.hasOwnProperty('expiration_month')) {
        obj['expiration_month'] = ApiClient.convertToType(data['expiration_month'], 'Number');
      }
      if (data.hasOwnProperty('expiration_year')) {
        obj['expiration_year'] = ApiClient.convertToType(data['expiration_year'], 'Number');
      }
      if (data.hasOwnProperty('last4')) {
        obj['last4'] = ApiClient.convertToType(data['last4'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'Number');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
      }
      if (data.hasOwnProperty('verified')) {
        obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
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
  
  var discriminatorValue = 'PaymentMethodDetails';


  /**
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * The expiration date for the payment method, expressed as seconds since epoch. Typically used for credit card payment methods
   * @member {Number} expiration_date
   */
  exports.prototype['expiration_date'] = undefined;
  /**
   * The expiration month (1 - 12) for the payment method. Typically used for credit card payment methods
   * @member {Number} expiration_month
   */
  exports.prototype['expiration_month'] = undefined;
  /**
   * The expiration year for the payment method. Typically used for credit card payment methods
   * @member {Number} expiration_year
   */
  exports.prototype['expiration_year'] = undefined;
  /**
   * The last 4 digits of the account number for the payment method. Typically used for credit card payment methods
   * @member {String} last4
   */
  exports.prototype['last4'] = undefined;
  /**
   * The sort value for the payment method
   * @member {Number} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * An optional unique identifier
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * @member {Boolean} verified
   */
  exports.prototype['verified'] = undefined;



  return exports;
}));


