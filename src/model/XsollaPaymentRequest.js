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
    root.KnetikCloud.XsollaPaymentRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XsollaPaymentRequest model module.
   * @module model/XsollaPaymentRequest
   * @version 3.0.270
   */

  /**
   * Constructs a new <code>XsollaPaymentRequest</code>.
   * @alias module:model/XsollaPaymentRequest
   * @class
   * @param invoiceId {Number} The id of an invoice to pay
   * @param returnUrl {String} The endpoint URL xsolla should forward the user to after they pay
   */
  var exports = function(invoiceId, returnUrl) {
    var _this = this;

    _this['invoice_id'] = invoiceId;
    _this['return_url'] = returnUrl;
  };

  /**
   * Constructs a <code>XsollaPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XsollaPaymentRequest} obj Optional instance to populate.
   * @return {module:model/XsollaPaymentRequest} The populated <code>XsollaPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
  
  var discriminatorValue = 'XsollaPaymentRequest';


  /**
   * The id of an invoice to pay
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * The endpoint URL xsolla should forward the user to after they pay
   * @member {String} return_url
   */
  exports.prototype['return_url'] = undefined;



  return exports;
}));


