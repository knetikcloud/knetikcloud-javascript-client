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
    define(['ApiClient', 'model/Behavior', 'model/BundledSku', 'model/Property', 'model/Sku', 'model/StoreItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./BundledSku'), require('./Property'), require('./Sku'), require('./StoreItem'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.BundleItem = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.Behavior, root.knetikcloud-sdk.BundledSku, root.knetikcloud-sdk.Property, root.knetikcloud-sdk.Sku, root.knetikcloud-sdk.StoreItem);
  }
}(this, function(ApiClient, Behavior, BundledSku, Property, Sku, StoreItem) {
  'use strict';




  /**
   * The BundleItem model module.
   * @module model/BundleItem
   * @version latest

   */

  /**
   * Constructs a new <code>BundleItem</code>.
   * @alias module:model/BundleItem
   * @class
   * @extends module:model/StoreItem
   * @param name {String} The name of the item
   * @param typeHint {String} The type of the item
   * @param skus {Array.<module:model/Sku>} The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
   * @param vendorId {Number} The vendor who provides the item
   * @param bundledSkus {Array.<module:model/BundledSku>} The skus of items to be included in this bundle, and how they influence the bundle total price.  Must have at least one SKU
   */
  var exports = function(name, typeHint, skus, vendorId, bundledSkus) {
    var _this = this;
    StoreItem.call(_this, name, typeHint, skus, vendorId);
    _this['bundled_skus'] = bundledSkus;
  };

  /**
   * Constructs a <code>BundleItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BundleItem} obj Optional instance to populate.
   * @return {module:model/BundleItem} The populated <code>BundleItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StoreItem.constructFromObject(data, obj);
      if (data.hasOwnProperty('bundled_skus')) {
        obj['bundled_skus'] = ApiClient.convertToType(data['bundled_skus'], [BundledSku]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(StoreItem.prototype);
  exports.prototype.constructor = exports;

  /**
   * The skus of items to be included in this bundle, and how they influence the bundle total price.  Must have at least one SKU
   * @member {Array.<module:model/BundledSku>} bundled_skus
   */
  exports.prototype['bundled_skus'] = undefined;



  return exports;
}));


