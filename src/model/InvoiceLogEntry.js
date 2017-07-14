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
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.InvoiceLogEntry = factory(root.knetikcloud-sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvoiceLogEntry model module.
   * @module model/InvoiceLogEntry
   * @version latest

   */

  /**
   * Constructs a new <code>InvoiceLogEntry</code>.
   * @alias module:model/InvoiceLogEntry
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InvoiceLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceLogEntry} obj Optional instance to populate.
   * @return {module:model/InvoiceLogEntry} The populated <code>InvoiceLogEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Number');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date this event occurred as a unix timestamp in seconds
   * @member {Number} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The ID of the invoice
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * A message describing the event
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The type of event
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


