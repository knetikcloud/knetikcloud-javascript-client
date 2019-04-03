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
    root.KnetikCloud.WalletAlterRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WalletAlterRequest model module.
   * @module model/WalletAlterRequest
   * @version 3.0.18
   */

  /**
   * Constructs a new <code>WalletAlterRequest</code>.
   * @alias module:model/WalletAlterRequest
   * @class
   * @param delta {Number} The amount of currency to add/remove. positive to add, negative to remove
   * @param reason {String} The admin entered or system generated reason
   */
  var exports = function(delta, reason) {
    var _this = this;

    _this['delta'] = delta;

    _this['reason'] = reason;

  };

  /**
   * Constructs a <code>WalletAlterRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WalletAlterRequest} obj Optional instance to populate.
   * @return {module:model/WalletAlterRequest} The populated <code>WalletAlterRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('delta')) {
        obj['delta'] = ApiClient.convertToType(data['delta'], 'Number');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
  
  var discriminatorValue = 'WalletAlterRequest';


  /**
   * The amount of currency to add/remove. positive to add, negative to remove
   * @member {Number} delta
   */
  exports.prototype['delta'] = undefined;
  /**
   * The id of an invoice to attribute the transaction to
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * The admin entered or system generated reason
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The transaction type to allow for search/etc
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


