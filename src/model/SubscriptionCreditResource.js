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
    root.KnetikCloud.SubscriptionCreditResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SubscriptionCreditResource model module.
   * @module model/SubscriptionCreditResource
   * @version 3.0.270
   */

  /**
   * Constructs a new <code>SubscriptionCreditResource</code>.
   * @alias module:model/SubscriptionCreditResource
   * @class
   * @param amount {Number} The amount of the credit, negative for debt
   * @param reason {String} The reason for the subscription credit
   */
  var exports = function(amount, reason) {
    var _this = this;

    _this['amount'] = amount;



    _this['reason'] = reason;
  };

  /**
   * Constructs a <code>SubscriptionCreditResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionCreditResource} obj Optional instance to populate.
   * @return {module:model/SubscriptionCreditResource} The populated <code>SubscriptionCreditResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('inventory_id')) {
        obj['inventory_id'] = ApiClient.convertToType(data['inventory_id'], 'Number');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
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
  
  var discriminatorValue = 'SubscriptionCreditResource';


  /**
   * The amount of the credit, negative for debt
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * The date this credit was added, unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The id of the credit record
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the subscription inventory entry
   * @member {Number} inventory_id
   */
  exports.prototype['inventory_id'] = undefined;
  /**
   * The reason for the subscription credit
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;



  return exports;
}));


