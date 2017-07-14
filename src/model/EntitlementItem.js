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
    define(['ApiClient', 'model/Behavior', 'model/Item', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./Item'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.EntitlementItem = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.Behavior, root.knetikcloud-sdk.Item, root.knetikcloud-sdk.Property);
  }
}(this, function(ApiClient, Behavior, Item, Property) {
  'use strict';




  /**
   * The EntitlementItem model module.
   * @module model/EntitlementItem
   * @version latest

   */

  /**
   * Constructs a new <code>EntitlementItem</code>.
   * @alias module:model/EntitlementItem
   * @class
   * @extends module:model/Item
   * @param name {String} The name of the item
   * @param typeHint {String} The type of the item
   */
  var exports = function(name, typeHint) {
    var _this = this;
    Item.call(_this, name, typeHint);
  };

  /**
   * Constructs a <code>EntitlementItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntitlementItem} obj Optional instance to populate.
   * @return {module:model/EntitlementItem} The populated <code>EntitlementItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Item.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(Item.prototype);
  exports.prototype.constructor = exports;




  return exports;
}));


