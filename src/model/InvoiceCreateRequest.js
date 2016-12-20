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
    root.KnetikPlatformApiDocumentationLatest.InvoiceCreateRequest = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvoiceCreateRequest model module.
   * @module model/InvoiceCreateRequest
   * @version Latest
   */

  /**
   * Constructs a new <code>InvoiceCreateRequest</code>.
   * @alias module:model/InvoiceCreateRequest
   * @class
   * @param cartGuid {String} The guid of a cart to create a new invoice for
   */
  var exports = function(cartGuid) {
    var _this = this;

    _this['cart_guid'] = cartGuid;
  };

  /**
   * Constructs a <code>InvoiceCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceCreateRequest} obj Optional instance to populate.
   * @return {module:model/InvoiceCreateRequest} The populated <code>InvoiceCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cart_guid')) {
        obj['cart_guid'] = ApiClient.convertToType(data['cart_guid'], 'String');
      }
    }
    return obj;
  }

  /**
   * The guid of a cart to create a new invoice for
   * @member {String} cart_guid
   */
  exports.prototype['cart_guid'] = undefined;



  return exports;
}));

