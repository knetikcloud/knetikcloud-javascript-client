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
    define(['ApiClient', 'model/Behavior', 'model/Property', 'model/Sku', 'model/StoreItem', 'model/SubscriptionPlan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./Property'), require('./Sku'), require('./StoreItem'), require('./SubscriptionPlan'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Subscription = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior, root.KnetikCloud.Property, root.KnetikCloud.Sku, root.KnetikCloud.StoreItem, root.KnetikCloud.SubscriptionPlan);
  }
}(this, function(ApiClient, Behavior, Property, Sku, StoreItem, SubscriptionPlan) {
  'use strict';




  /**
   * The Subscription model module.
   * @module model/Subscription
   * @version 3.0.271
   */

  /**
   * Constructs a new <code>Subscription</code>.
   * @alias module:model/Subscription
   * @class
   * @extends module:model/StoreItem
   * @param name {String} The name of the item
   * @param typeHint {String} The type of the item
   * @param skus {Array.<module:model/Sku>} The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
   * @param vendorId {Number} The vendor who provides the item
   */
  var exports = function(name, typeHint, skus, vendorId) {
    var _this = this;
    StoreItem.call(_this, name, typeHint, skus, vendorId);



  };

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StoreItem.constructFromObject(data, obj);
      if (data.hasOwnProperty('availability')) {
        obj['availability'] = ApiClient.convertToType(data['availability'], 'String');
      }
      if (data.hasOwnProperty('consolidation_day_of_month')) {
        obj['consolidation_day_of_month'] = ApiClient.convertToType(data['consolidation_day_of_month'], 'Number');
      }
      if (data.hasOwnProperty('subscription_plans')) {
        obj['subscription_plans'] = ApiClient.convertToType(data['subscription_plans'], [SubscriptionPlan]);
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
  
  var discriminatorValue = 'subscription';
  StoreItem.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(StoreItem.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/Subscription.AvailabilityEnum} availability
   */
  exports.prototype['availability'] = undefined;
  /**
   * @member {Number} consolidation_day_of_month
   */
  exports.prototype['consolidation_day_of_month'] = undefined;
  /**
   * @member {Array.<module:model/SubscriptionPlan>} subscription_plans
   */
  exports.prototype['subscription_plans'] = undefined;


  /**
   * Allowed values for the <code>availability</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AvailabilityEnum = {
    /**
     * value: "all"
     * @const
     */
    "all": "all",
    /**
     * value: "new_subscribers"
     * @const
     */
    "new_subscribers": "new_subscribers"  };


  return exports;
}));


