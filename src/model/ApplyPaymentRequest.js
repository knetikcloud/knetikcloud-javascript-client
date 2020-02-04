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
    root.KnetikCloud.ApplyPaymentRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplyPaymentRequest model module.
   * @module model/ApplyPaymentRequest
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>ApplyPaymentRequest</code>.
   * @alias module:model/ApplyPaymentRequest
   * @class
   * @param invoiceId {Number} The id of the local invoice being paid.
   * @param receipt {String} The encoded receipt string from Apple's services.
   * @param transactionId {String} The id of the specific transaction from Apple's services.
   */
  var exports = function(invoiceId, receipt, transactionId) {
    var _this = this;

    _this['invoice_id'] = invoiceId;
    _this['receipt'] = receipt;
    _this['transaction_id'] = transactionId;
  };

  /**
   * Constructs a <code>ApplyPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplyPaymentRequest} obj Optional instance to populate.
   * @return {module:model/ApplyPaymentRequest} The populated <code>ApplyPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('receipt')) {
        obj['receipt'] = ApiClient.convertToType(data['receipt'], 'String');
      }
      if (data.hasOwnProperty('transaction_id')) {
        obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
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
  
  var discriminatorValue = 'ApplyPaymentRequest';


  /**
   * The id of the local invoice being paid.
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * The encoded receipt string from Apple's services.
   * @member {String} receipt
   */
  exports.prototype['receipt'] = undefined;
  /**
   * The id of the specific transaction from Apple's services.
   * @member {String} transaction_id
   */
  exports.prototype['transaction_id'] = undefined;



  return exports;
}));


