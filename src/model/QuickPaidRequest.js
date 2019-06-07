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
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.QuickPaidRequest = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The QuickPaidRequest model module.
   * @module model/QuickPaidRequest
   * @version 3.0.20
   */

  /**
   * Constructs a new <code>QuickPaidRequest</code>.
   * @alias module:model/QuickPaidRequest
   * @class
   * @param giftTarget {Number} An optional target user to give the item to as a gift
   * @param paidAmount {Number} The amount already paid. Must match final price to complete purchase. Minimum 0
   * @param sku {String} SKU of item being purchased
   * @param transactionType {String} Transaction type
   */
  var exports = function(giftTarget, paidAmount, sku, transactionType) {
    var _this = this;


    _this['gift_target'] = giftTarget;

    _this['paid_amount'] = paidAmount;

    _this['sku'] = sku;


    _this['transaction_type'] = transactionType;

  };

  /**
   * Constructs a <code>QuickPaidRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuickPaidRequest} obj Optional instance to populate.
   * @return {module:model/QuickPaidRequest} The populated <code>QuickPaidRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('gift_target')) {
        obj['gift_target'] = ApiClient.convertToType(data['gift_target'], 'Number');
      }
      if (data.hasOwnProperty('item_notes')) {
        obj['item_notes'] = ApiClient.convertToType(data['item_notes'], 'String');
      }
      if (data.hasOwnProperty('paid_amount')) {
        obj['paid_amount'] = ApiClient.convertToType(data['paid_amount'], 'Number');
      }
      if (data.hasOwnProperty('price_override')) {
        obj['price_override'] = ApiClient.convertToType(data['price_override'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('transaction_details')) {
        obj['transaction_details'] = ApiClient.convertToType(data['transaction_details'], 'String');
      }
      if (data.hasOwnProperty('transaction_type')) {
        obj['transaction_type'] = ApiClient.convertToType(data['transaction_type'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
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
  
  var discriminatorValue = 'QuickPaidRequest';


  /**
   * A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this invoice type, or be an extra not from the template
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * An optional target user to give the item to as a gift
   * @member {Number} gift_target
   */
  exports.prototype['gift_target'] = undefined;
  /**
   * An optional note to add to the item
   * @member {String} item_notes
   */
  exports.prototype['item_notes'] = undefined;
  /**
   * The amount already paid. Must match final price to complete purchase. Minimum 0
   * @member {Number} paid_amount
   */
  exports.prototype['paid_amount'] = undefined;
  /**
   * Override the price of an item, if the behavior configuration permits it. Do not send if taking standard pricing. Minimum 0
   * @member {Number} price_override
   */
  exports.prototype['price_override'] = undefined;
  /**
   * SKU of item being purchased
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * An invoice template this invoice is validated against (private). May be null and no validation of properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * Transaction details
   * @member {String} transaction_details
   */
  exports.prototype['transaction_details'] = undefined;
  /**
   * Transaction type
   * @member {String} transaction_type
   */
  exports.prototype['transaction_type'] = undefined;
  /**
   * ID of the user making the purchase. If null, currently logged in user will be used.
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));

