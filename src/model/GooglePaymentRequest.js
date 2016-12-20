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
    root.KnetikPlatformApiDocumentationLatest.GooglePaymentRequest = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GooglePaymentRequest model module.
   * @module model/GooglePaymentRequest
   * @version Latest
   */

  /**
   * Constructs a new <code>GooglePaymentRequest</code>.
   * @alias module:model/GooglePaymentRequest
   * @class
   * @param jsonPayload {String} The json payload exactly as sent from Google
   * @param signature {String} The signature from Google to verify the payload
   */
  var exports = function(jsonPayload, signature) {
    var _this = this;

    _this['json_payload'] = jsonPayload;
    _this['signature'] = signature;
  };

  /**
   * Constructs a <code>GooglePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GooglePaymentRequest} obj Optional instance to populate.
   * @return {module:model/GooglePaymentRequest} The populated <code>GooglePaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('json_payload')) {
        obj['json_payload'] = ApiClient.convertToType(data['json_payload'], 'String');
      }
      if (data.hasOwnProperty('signature')) {
        obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
      }
    }
    return obj;
  }

  /**
   * The json payload exactly as sent from Google
   * @member {String} json_payload
   */
  exports.prototype['json_payload'] = undefined;
  /**
   * The signature from Google to verify the payload
   * @member {String} signature
   */
  exports.prototype['signature'] = undefined;



  return exports;
}));

