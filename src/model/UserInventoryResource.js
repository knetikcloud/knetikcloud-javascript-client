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
    define(['ApiClient', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UserInventoryResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, SimpleUserResource) {
  'use strict';




  /**
   * The UserInventoryResource model module.
   * @module model/UserInventoryResource
   * @version 3.0.272
   */

  /**
   * Constructs a new <code>UserInventoryResource</code>.
   * @alias module:model/UserInventoryResource
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>UserInventoryResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInventoryResource} obj Optional instance to populate.
   * @return {module:model/UserInventoryResource} The populated <code>UserInventoryResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('behavior_data')) {
        obj['behavior_data'] = ApiClient.convertToType(data['behavior_data'], Object);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('expires')) {
        obj['expires'] = ApiClient.convertToType(data['expires'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
      }
      if (data.hasOwnProperty('item_name')) {
        obj['item_name'] = ApiClient.convertToType(data['item_name'], 'String');
      }
      if (data.hasOwnProperty('item_type_hint')) {
        obj['item_type_hint'] = ApiClient.convertToType(data['item_type_hint'], 'String');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'UserInventoryResource';


  /**
   * A map of data for behaviors
   * @member {Object} behavior_data
   */
  exports.prototype['behavior_data'] = undefined;
  /**
   * The date/time this resource was created in seconds since epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The date/time this resource exires in seconds since epoch. Null for no expiration. For subscriptions, this is the end of the 'grace period' if left unpaid
   * @member {Number} expires
   */
  exports.prototype['expires'] = undefined;
  /**
   * The id of the inventory
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the invoice that resulted in this inventory, if any
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * The id of the item
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * The name of the item
   * @member {String} item_name
   */
  exports.prototype['item_name'] = undefined;
  /**
   * The type hint of the item
   * @member {String} item_type_hint
   */
  exports.prototype['item_type_hint'] = undefined;
  /**
   * Optional notes about the item
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
  /**
   * The status of the inventory. Pending inventory is not yet ready for use. Inactive inventory has expired or been used up
   * @member {module:model/UserInventoryResource.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The id of the user this inventory belongs to
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
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


