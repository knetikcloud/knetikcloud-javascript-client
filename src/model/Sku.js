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
    root.KnetikCloud.Sku = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The Sku model module.
   * @module model/Sku
   * @version 3.0.274
   */

  /**
   * Constructs a new <code>Sku</code>.
   * @alias module:model/Sku
   * @class
   * @param currencyCode {String} The currency code for the SKU, a three letter string (ISO3)
   * @param description {String} The friendly name of the SKU as it will appear on invoices and reports. Typically represents the option name like red, large, etc
   * @param originalPrice {Number} The base price before any sale
   * @param sku {String} The stock keeping unit (SKU), a unique identifier for a given product.  Max 40 characters
   */
  var exports = function(currencyCode, description, originalPrice, sku) {
    var _this = this;


    _this['currency_code'] = currencyCode;
    _this['description'] = description;


    _this['original_price'] = originalPrice;




    _this['sku'] = sku;


  };

  /**
   * Constructs a <code>Sku</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sku} obj Optional instance to populate.
   * @return {module:model/Sku} The populated <code>Sku</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('inventory')) {
        obj['inventory'] = ApiClient.convertToType(data['inventory'], 'Number');
      }
      if (data.hasOwnProperty('min_inventory_threshold')) {
        obj['min_inventory_threshold'] = ApiClient.convertToType(data['min_inventory_threshold'], 'Number');
      }
      if (data.hasOwnProperty('original_price')) {
        obj['original_price'] = ApiClient.convertToType(data['original_price'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('sale_id')) {
        obj['sale_id'] = ApiClient.convertToType(data['sale_id'], 'Number');
      }
      if (data.hasOwnProperty('sale_name')) {
        obj['sale_name'] = ApiClient.convertToType(data['sale_name'], 'String');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
      if (data.hasOwnProperty('stop_date')) {
        obj['stop_date'] = ApiClient.convertToType(data['stop_date'], 'Number');
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
  
  var discriminatorValue = 'Sku';


  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type, or be an extra not from the template
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The currency code for the SKU, a three letter string (ISO3)
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The friendly name of the SKU as it will appear on invoices and reports. Typically represents the option name like red, large, etc
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The number of SKUs currently in stock
   * @member {Number} inventory
   */
  exports.prototype['inventory'] = undefined;
  /**
   * Alerts vendor when SKU inventory drops below this value
   * @member {Number} min_inventory_threshold
   */
  exports.prototype['min_inventory_threshold'] = undefined;
  /**
   * The base price before any sale
   * @member {Number} original_price
   */
  exports.prototype['original_price'] = undefined;
  /**
   * The current price of the SKU with sales, if any. Set original_price for the base
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Whether or not the SKU is currently visible to users. This will not block users from purchase. Use start_date or stop_date to prevent purchase. Default: true
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;
  /**
   * The id of a sale affecting the price, if any
   * @member {Number} sale_id
   */
  exports.prototype['sale_id'] = undefined;
  /**
   * The name of a sale affecting the price, if any
   * @member {String} sale_name
   */
  exports.prototype['sale_name'] = undefined;
  /**
   * The stock keeping unit (SKU), a unique identifier for a given product.  Max 40 characters
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;
  /**
   * The date the sku becomes visible (if published) and available for purchase, unix timestamp in seconds.  If set to null, sku will become available immediately
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The date the sku becomes hidden and unavailable for purchase, unix timestamp in seconds.  If set to null, sku is always available
   * @member {Number} stop_date
   */
  exports.prototype['stop_date'] = undefined;



  return exports;
}));


