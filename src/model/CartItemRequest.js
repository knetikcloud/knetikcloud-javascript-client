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
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.CartItemRequest = factory(root.KnetikcloudSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartItemRequest model module.
   * @module model/CartItemRequest
   * @version latest

   */

  /**
   * Constructs a new <code>CartItemRequest</code>.
   * @alias module:model/CartItemRequest
   * @class
   * @param catalogSku {String} The catalog SKU of the item
   * @param priceOverride {Number} Allows to override the price of an item, if the behavior configuration permits it
   * @param quantity {Number} The quantity of the item
   */
  var exports = function(catalogSku, priceOverride, quantity) {
    var _this = this;


    _this['catalog_sku'] = catalogSku;
    _this['price_override'] = priceOverride;
    _this['quantity'] = quantity;
  };

  /**
   * Constructs a <code>CartItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartItemRequest} obj Optional instance to populate.
   * @return {module:model/CartItemRequest} The populated <code>CartItemRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('affiliate_key')) {
        obj['affiliate_key'] = ApiClient.convertToType(data['affiliate_key'], 'String');
      }
      if (data.hasOwnProperty('catalog_sku')) {
        obj['catalog_sku'] = ApiClient.convertToType(data['catalog_sku'], 'String');
      }
      if (data.hasOwnProperty('price_override')) {
        obj['price_override'] = ApiClient.convertToType(data['price_override'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The affiliate key of the item
   * @member {String} affiliate_key
   */
  exports.prototype['affiliate_key'] = undefined;
  /**
   * The catalog SKU of the item
   * @member {String} catalog_sku
   */
  exports.prototype['catalog_sku'] = undefined;
  /**
   * Allows to override the price of an item, if the behavior configuration permits it
   * @member {Number} price_override
   */
  exports.prototype['price_override'] = undefined;
  /**
   * The quantity of the item
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;



  return exports;
}));


