/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.FinalizePayPalPaymentRequest = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FinalizePayPalPaymentRequest model module.
   * @module model/FinalizePayPalPaymentRequest
   * @version latest

   */

  /**
   * Constructs a new <code>FinalizePayPalPaymentRequest</code>.
   * @alias module:model/FinalizePayPalPaymentRequest
   * @class
   * @param invoiceId {Number} The ID of the invoice that is being paid. Must match the invoice sent in originally
   * @param payerId {String} The ID of the payer that PayPal returned with the user at the return URL
   * @param token {String} The token that PayPal returned with the user in the return URL
   */
  var exports = function(invoiceId, payerId, token) {
    var _this = this;

    _this['invoice_id'] = invoiceId;
    _this['payer_id'] = payerId;
    _this['token'] = token;
  };

  /**
   * Constructs a <code>FinalizePayPalPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinalizePayPalPaymentRequest} obj Optional instance to populate.
   * @return {module:model/FinalizePayPalPaymentRequest} The populated <code>FinalizePayPalPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('payer_id')) {
        obj['payer_id'] = ApiClient.convertToType(data['payer_id'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the invoice that is being paid. Must match the invoice sent in originally
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * The ID of the payer that PayPal returned with the user at the return URL
   * @member {String} payer_id
   */
  exports.prototype['payer_id'] = undefined;
  /**
   * The token that PayPal returned with the user in the return URL
   * @member {String} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));

