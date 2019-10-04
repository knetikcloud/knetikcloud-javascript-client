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
    root.KnetikCloud.BundledSku = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BundledSku model module.
   * @module model/BundledSku
   * @version 3.0.272
   */

  /**
   * Constructs a new <code>BundledSku</code>.
   * @alias module:model/BundledSku
   * @class
   * @param quantity {Number} The quantity of this item within the bundle
   * @param sku {String} The stock keeping unit (SKU) for an item included in the bundle
   */
  var exports = function(quantity, sku) {
    var _this = this;


    _this['quantity'] = quantity;
    _this['sku'] = sku;
  };

  /**
   * Constructs a <code>BundledSku</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BundledSku} obj Optional instance to populate.
   * @return {module:model/BundledSku} The populated <code>BundledSku</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('price_override')) {
        obj['price_override'] = ApiClient.convertToType(data['price_override'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
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
  
  var discriminatorValue = 'BundledSku';


  /**
   * The amount this item will cost inside the bundle instead of its regular price
   * @member {Number} price_override
   */
  exports.prototype['price_override'] = undefined;
  /**
   * The quantity of this item within the bundle
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * The stock keeping unit (SKU) for an item included in the bundle
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;



  return exports;
}));


