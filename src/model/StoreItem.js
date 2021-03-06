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
    define(['ApiClient', 'model/Behavior', 'model/Item', 'model/Property', 'model/Sku'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./Item'), require('./Property'), require('./Sku'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.StoreItem = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior, root.KnetikCloud.Item, root.KnetikCloud.Property, root.KnetikCloud.Sku);
  }
}(this, function(ApiClient, Behavior, Item, Property, Sku) {
  'use strict';




  /**
   * The StoreItem model module.
   * @module model/StoreItem
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>StoreItem</code>.
   * @alias module:model/StoreItem
   * @class
   * @extends module:model/Item
   * @param name {String} The name of the item
   * @param typeHint {String} The type of the item
   * @param skus {Array.<module:model/Sku>} The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
   * @param vendorId {Number} The vendor who provides the item
   */
  var exports = function(name, typeHint, skus, vendorId) {
    var _this = this;
    Item.call(_this, name, typeHint);




    _this['skus'] = skus;


    _this['vendor_id'] = vendorId;
  };

  /**
   * Constructs a <code>StoreItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreItem} obj Optional instance to populate.
   * @return {module:model/StoreItem} The populated <code>StoreItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Item.constructFromObject(data, obj);
      if (data.hasOwnProperty('displayable')) {
        obj['displayable'] = ApiClient.convertToType(data['displayable'], 'Boolean');
      }
      if (data.hasOwnProperty('geo_country_list')) {
        obj['geo_country_list'] = ApiClient.convertToType(data['geo_country_list'], ['String']);
      }
      if (data.hasOwnProperty('geo_policy_type')) {
        obj['geo_policy_type'] = ApiClient.convertToType(data['geo_policy_type'], 'String');
      }
      if (data.hasOwnProperty('shipping_tier')) {
        obj['shipping_tier'] = ApiClient.convertToType(data['shipping_tier'], 'Number');
      }
      if (data.hasOwnProperty('skus')) {
        obj['skus'] = ApiClient.convertToType(data['skus'], [Sku]);
      }
      if (data.hasOwnProperty('store_end')) {
        obj['store_end'] = ApiClient.convertToType(data['store_end'], 'Number');
      }
      if (data.hasOwnProperty('store_start')) {
        obj['store_start'] = ApiClient.convertToType(data['store_start'], 'Number');
      }
      if (data.hasOwnProperty('vendor_id')) {
        obj['vendor_id'] = ApiClient.convertToType(data['vendor_id'], 'Number');
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
  
  var discriminatorValue = 'item';
  Item.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Item.prototype);
  exports.prototype.constructor = exports;


  /**
   * Whether or not the item is currently visible to users. Does not block purchase; Use store_start or store_end to block purchase.  Default = true
   * @member {Boolean} displayable
   */
  exports.prototype['displayable'] = undefined;
  /**
   * A list of country ID to include in the blacklist/whitelist geo policy
   * @member {Array.<String>} geo_country_list
   */
  exports.prototype['geo_country_list'] = undefined;
  /**
   * Whether to use the geo_country_list as a black list or white list for item geographical availability
   * @member {module:model/StoreItem.GeoPolicyTypeEnum} geo_policy_type
   */
  exports.prototype['geo_policy_type'] = undefined;
  /**
   * Provides the abstract shipping needs if this item is physical and can be shipped.  A value of zero means no shipping needed.  Default = 0
   * @member {Number} shipping_tier
   */
  exports.prototype['shipping_tier'] = undefined;
  /**
   * The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
   * @member {Array.<module:model/Sku>} skus
   */
  exports.prototype['skus'] = undefined;
  /**
   * The date the item will become hidden and unavailable for purchase, unix timestamp in seconds.  If set to null, item will never leave the store
   * @member {Number} store_end
   */
  exports.prototype['store_end'] = undefined;
  /**
   * The date the item will become visible (if displayable) and available for purchase, unix timestamp in seconds.  If set to null, item will appear in store immediately
   * @member {Number} store_start
   */
  exports.prototype['store_start'] = undefined;
  /**
   * The vendor who provides the item
   * @member {Number} vendor_id
   */
  exports.prototype['vendor_id'] = undefined;


  /**
   * Allowed values for the <code>geo_policy_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GeoPolicyTypeEnum = {
    /**
     * value: "whitelist"
     * @const
     */
    "whitelist": "whitelist",
    /**
     * value: "blacklist"
     * @const
     */
    "blacklist": "blacklist"  };


  return exports;
}));


