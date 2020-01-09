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
    define(['ApiClient', 'model/PaymentMethodResource', 'model/SimpleUserResource', 'model/SubscriptionCreditResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentMethodResource'), require('./SimpleUserResource'), require('./SubscriptionCreditResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.InventorySubscriptionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PaymentMethodResource, root.KnetikCloud.SimpleUserResource, root.KnetikCloud.SubscriptionCreditResource);
  }
}(this, function(ApiClient, PaymentMethodResource, SimpleUserResource, SubscriptionCreditResource) {
  'use strict';




  /**
   * The InventorySubscriptionResource model module.
   * @module model/InventorySubscriptionResource
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>InventorySubscriptionResource</code>.
   * @alias module:model/InventorySubscriptionResource
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>InventorySubscriptionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InventorySubscriptionResource} obj Optional instance to populate.
   * @return {module:model/InventorySubscriptionResource} The populated <code>InventorySubscriptionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bill_date')) {
        obj['bill_date'] = ApiClient.convertToType(data['bill_date'], 'Number');
      }
      if (data.hasOwnProperty('credit')) {
        obj['credit'] = ApiClient.convertToType(data['credit'], 'Number');
      }
      if (data.hasOwnProperty('credit_log')) {
        obj['credit_log'] = ApiClient.convertToType(data['credit_log'], [SubscriptionCreditResource]);
      }
      if (data.hasOwnProperty('grace_end')) {
        obj['grace_end'] = ApiClient.convertToType(data['grace_end'], 'Number');
      }
      if (data.hasOwnProperty('inventory_id')) {
        obj['inventory_id'] = ApiClient.convertToType(data['inventory_id'], 'Number');
      }
      if (data.hasOwnProperty('inventory_status')) {
        obj['inventory_status'] = ApiClient.convertToType(data['inventory_status'], 'String');
      }
      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
      }
      if (data.hasOwnProperty('payment_method')) {
        obj['payment_method'] = PaymentMethodResource.constructFromObject(data['payment_method']);
      }
      if (data.hasOwnProperty('price_override')) {
        obj['price_override'] = ApiClient.convertToType(data['price_override'], 'Number');
      }
      if (data.hasOwnProperty('price_override_reason')) {
        obj['price_override_reason'] = ApiClient.convertToType(data['price_override_reason'], 'String');
      }
      if (data.hasOwnProperty('recurring_price')) {
        obj['recurring_price'] = ApiClient.convertToType(data['recurring_price'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
      if (data.hasOwnProperty('subscription_status')) {
        obj['subscription_status'] = ApiClient.convertToType(data['subscription_status'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUserResource.constructFromObject(data['user']);
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
  
  var discriminatorValue = 'InventorySubscriptionResource';


  /**
   * The date the subscription will be billed
   * @member {Number} bill_date
   */
  exports.prototype['bill_date'] = undefined;
  /**
   * A credit of money already applied to a subscription for the next bill, or a debt if negative
   * @member {Number} credit
   */
  exports.prototype['credit'] = undefined;
  /**
   * A record of past and present credit/debt changes
   * @member {Array.<module:model/SubscriptionCreditResource>} credit_log
   */
  exports.prototype['credit_log'] = undefined;
  /**
   * The date the grace period ends
   * @member {Number} grace_end
   */
  exports.prototype['grace_end'] = undefined;
  /**
   * The id of the inventory
   * @member {Number} inventory_id
   */
  exports.prototype['inventory_id'] = undefined;
  /**
   * The inventory status object
   * @member {module:model/InventorySubscriptionResource.InventoryStatusEnum} inventory_status
   */
  exports.prototype['inventory_status'] = undefined;
  /**
   * The id of the item
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * The payment method object
   * @member {module:model/PaymentMethodResource} payment_method
   */
  exports.prototype['payment_method'] = undefined;
  /**
   * The recurring price that has been set to override the base price. Null if not overriding
   * @member {Number} price_override
   */
  exports.prototype['price_override'] = undefined;
  /**
   * An explanation for the reason the price is being overridden
   * @member {String} price_override_reason
   */
  exports.prototype['price_override_reason'] = undefined;
  /**
   * The default recurring price
   * @member {Number} recurring_price
   */
  exports.prototype['recurring_price'] = undefined;
  /**
   * The recurring sku of the subscription
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * The date the subscription will start
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The status of the subscription
   * @member {Number} subscription_status
   */
  exports.prototype['subscription_status'] = undefined;
  /**
   * The user
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;


  /**
   * Allowed values for the <code>inventory_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InventoryStatusEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"  };


  return exports;
}));


