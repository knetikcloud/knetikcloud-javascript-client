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
    root.KnetikCloud.CreatePayPalPaymentRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreatePayPalPaymentRequest model module.
   * @module model/CreatePayPalPaymentRequest
   * @version 3.0.16
   */

  /**
   * Constructs a new <code>CreatePayPalPaymentRequest</code>.
   * @alias module:model/CreatePayPalPaymentRequest
   * @class
   * @param cancelUrl {String} The endpoint URL to which PayPal should forward the user to if they cancel the checkout process
   * @param invoiceId {Number} The ID of an invoice to pay
   * @param returnUrl {String} The endpoint URL to which PayPal should forward the user after they accept. This endpoint will receive information needed for the next step
   */
  var exports = function(cancelUrl, invoiceId, returnUrl) {
    var _this = this;

    _this['cancel_url'] = cancelUrl;
    _this['invoice_id'] = invoiceId;
    _this['return_url'] = returnUrl;
  };

  /**
   * Constructs a <code>CreatePayPalPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePayPalPaymentRequest} obj Optional instance to populate.
   * @return {module:model/CreatePayPalPaymentRequest} The populated <code>CreatePayPalPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cancel_url')) {
        obj['cancel_url'] = ApiClient.convertToType(data['cancel_url'], 'String');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('return_url')) {
        obj['return_url'] = ApiClient.convertToType(data['return_url'], 'String');
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
  
  var discriminatorValue = 'CreatePayPalPaymentRequest';


  /**
   * The endpoint URL to which PayPal should forward the user to if they cancel the checkout process
   * @member {String} cancel_url
   */
  exports.prototype['cancel_url'] = undefined;
  /**
   * The ID of an invoice to pay
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * The endpoint URL to which PayPal should forward the user after they accept. This endpoint will receive information needed for the next step
   * @member {String} return_url
   */
  exports.prototype['return_url'] = undefined;



  return exports;
}));


