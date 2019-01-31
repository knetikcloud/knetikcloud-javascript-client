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
    root.KnetikCloud.RefundResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RefundResource model module.
   * @module model/RefundResource
   * @version 3.0.14
   */

  /**
   * Constructs a new <code>RefundResource</code>.
   * @alias module:model/RefundResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RefundResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefundResource} obj Optional instance to populate.
   * @return {module:model/RefundResource} The populated <code>RefundResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('refund_transaction_id')) {
        obj['refund_transaction_id'] = ApiClient.convertToType(data['refund_transaction_id'], 'Number');
      }
      if (data.hasOwnProperty('transaction_id')) {
        obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'Number');
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
  
  var discriminatorValue = 'RefundResource';


  /**
   * The amount refunded
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * The id of the refund transaction
   * @member {Number} refund_transaction_id
   */
  exports.prototype['refund_transaction_id'] = undefined;
  /**
   * The id of the original transaction
   * @member {Number} transaction_id
   */
  exports.prototype['transaction_id'] = undefined;



  return exports;
}));


