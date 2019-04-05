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
    define(['ApiClient', 'model/Discount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Discount'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.CartLineItem = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Discount);
  }
}(this, function(ApiClient, Discount) {
  'use strict';




  /**
   * The CartLineItem model module.
   * @module model/CartLineItem
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>CartLineItem</code>.
   * @alias module:model/CartLineItem
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>CartLineItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartLineItem} obj Optional instance to populate.
   * @return {module:model/CartLineItem} The populated <code>CartLineItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = Discount.constructFromObject(data['discount']);
      }
      if (data.hasOwnProperty('gift_target')) {
        obj['gift_target'] = ApiClient.convertToType(data['gift_target'], 'Number');
      }
      if (data.hasOwnProperty('line_total')) {
        obj['line_total'] = ApiClient.convertToType(data['line_total'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
      }
      if (data.hasOwnProperty('original_line_total')) {
        obj['original_line_total'] = ApiClient.convertToType(data['original_line_total'], 'Number');
      }
      if (data.hasOwnProperty('original_unit_price')) {
        obj['original_unit_price'] = ApiClient.convertToType(data['original_unit_price'], 'Number');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
      }
      if (data.hasOwnProperty('sale_name')) {
        obj['sale_name'] = ApiClient.convertToType(data['sale_name'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('sku_description')) {
        obj['sku_description'] = ApiClient.convertToType(data['sku_description'], 'String');
      }
      if (data.hasOwnProperty('store_item_id')) {
        obj['store_item_id'] = ApiClient.convertToType(data['store_item_id'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('thumb_url')) {
        obj['thumb_url'] = ApiClient.convertToType(data['thumb_url'], 'String');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
      }
      if (data.hasOwnProperty('unit_price')) {
        obj['unit_price'] = ApiClient.convertToType(data['unit_price'], 'Number');
      }
      if (data.hasOwnProperty('vendor_id')) {
        obj['vendor_id'] = ApiClient.convertToType(data['vendor_id'], 'Number');
      }
      if (data.hasOwnProperty('vendor_name')) {
        obj['vendor_name'] = ApiClient.convertToType(data['vendor_name'], 'String');
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
  
  var discriminatorValue = 'CartLineItem';


  /**
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/Discount} discount
   */
  exports.prototype['discount'] = undefined;
  /**
   * @member {Number} gift_target
   */
  exports.prototype['gift_target'] = undefined;
  /**
   * @member {Number} line_total
   */
  exports.prototype['line_total'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} notes
   */
  exports.prototype['notes'] = undefined;
  /**
   * @member {Number} original_line_total
   */
  exports.prototype['original_line_total'] = undefined;
  /**
   * @member {Number} original_unit_price
   */
  exports.prototype['original_unit_price'] = undefined;
  /**
   * @member {Number} qty
   */
  exports.prototype['qty'] = undefined;
  /**
   * @member {String} sale_name
   */
  exports.prototype['sale_name'] = undefined;
  /**
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * @member {String} sku_description
   */
  exports.prototype['sku_description'] = undefined;
  /**
   * @member {Number} store_item_id
   */
  exports.prototype['store_item_id'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {String} thumb_url
   */
  exports.prototype['thumb_url'] = undefined;
  /**
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * @member {Number} unit_price
   */
  exports.prototype['unit_price'] = undefined;
  /**
   * @member {Number} vendor_id
   */
  exports.prototype['vendor_id'] = undefined;
  /**
   * @member {String} vendor_name
   */
  exports.prototype['vendor_name'] = undefined;



  return exports;
}));


