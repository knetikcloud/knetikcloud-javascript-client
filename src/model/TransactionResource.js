/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.TransactionResource = factory(root.KnetikcloudSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TransactionResource model module.
   * @module model/TransactionResource
   * @version latest

   */

  /**
   * Constructs a new <code>TransactionResource</code>.
   * @alias module:model/TransactionResource
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>TransactionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionResource} obj Optional instance to populate.
   * @return {module:model/TransactionResource} The populated <code>TransactionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Number');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('is_refunded')) {
        obj['is_refunded'] = ApiClient.convertToType(data['is_refunded'], 'Boolean');
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('successful')) {
        obj['successful'] = ApiClient.convertToType(data['successful'], 'Boolean');
      }
      if (data.hasOwnProperty('transaction_id')) {
        obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('type_hint')) {
        obj['type_hint'] = ApiClient.convertToType(data['type_hint'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The unix timestamp in seconds of the transaction
   * @member {Number} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * The code of the currency for the transaction
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The specific details of the transaction, such as a message from the admin that created it
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * The id of the transaction
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the invoice that spawned the transaction, if any
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * Whether the transaction has been refunded
   * @member {Boolean} is_refunded
   */
  exports.prototype['is_refunded'] = undefined;
  /**
   * The response
   * @member {String} response
   */
  exports.prototype['response'] = undefined;
  /**
   * The root source of the transaction
   * @member {module:model/TransactionResource.SourceEnum} source
   */
  exports.prototype['source'] = undefined;
  /**
   * If the transaction was successful
   * @member {Boolean} successful
   */
  exports.prototype['successful'] = undefined;
  /**
   * The payment gateway (external) transaction ID
   * @member {String} transaction_id
   */
  exports.prototype['transaction_id'] = undefined;
  /**
   * The general type of the transaction
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The table name of the subclass
   * @member {String} type_hint
   */
  exports.prototype['type_hint'] = undefined;
  /**
   * The amount of the transaction, positive if a gain, negative if an expenditure
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;


  /**
   * Allowed values for the <code>source</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceEnum = {
    /**
     * value: "digital"
     * @const
     */
    "digital": "digital",
    /**
     * value: "physical"
     * @const
     */
    "physical": "physical"  };


  return exports;
}));


