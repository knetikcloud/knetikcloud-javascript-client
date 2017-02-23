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
    define(['ApiClient', 'model/SimpleReferenceResourceint'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleReferenceResourceint'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PaymentAuthorizationResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.SimpleReferenceResourceint);
  }
}(this, function(ApiClient, SimpleReferenceResourceint) {
  'use strict';




  /**
   * The PaymentAuthorizationResource model module.
   * @module model/PaymentAuthorizationResource
   * @version latest

   */

  /**
   * Constructs a new <code>PaymentAuthorizationResource</code>.
   * @alias module:model/PaymentAuthorizationResource
   * @class
   * @param paymentType {module:model/SimpleReferenceResourceint} The payment type (which provider) this payment is through
   */
  var exports = function(paymentType) {
    var _this = this;






    _this['payment_type'] = paymentType;
  };

  /**
   * Constructs a <code>PaymentAuthorizationResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentAuthorizationResource} obj Optional instance to populate.
   * @return {module:model/PaymentAuthorizationResource} The populated <code>PaymentAuthorizationResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('captured')) {
        obj['captured'] = ApiClient.convertToType(data['captured'], 'Boolean');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], Object);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('invoice')) {
        obj['invoice'] = ApiClient.convertToType(data['invoice'], 'Number');
      }
      if (data.hasOwnProperty('payment_type')) {
        obj['payment_type'] = SimpleReferenceResourceint.constructFromObject(data['payment_type']);
      }
    }
    return obj;
  }

  /**
   * Whether this authorization has been captured
   * @member {Boolean} captured
   */
  exports.prototype['captured'] = undefined;
  /**
   * The date this authorization was received, unix timestamp in seconds
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The details for this authorization. Format dependent on payment provider
   * @member {Object} details
   */
  exports.prototype['details'] = undefined;
  /**
   * The id of the authorization
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The invoice this authorization is intended to pay
   * @member {Number} invoice
   */
  exports.prototype['invoice'] = undefined;
  /**
   * The payment type (which provider) this payment is through
   * @member {module:model/SimpleReferenceResourceint} payment_type
   */
  exports.prototype['payment_type'] = undefined;



  return exports;
}));


