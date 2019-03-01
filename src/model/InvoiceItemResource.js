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
    root.KnetikCloud.InvoiceItemResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Discount);
  }
}(this, function(ApiClient, Discount) {
  'use strict';




  /**
   * The InvoiceItemResource model module.
   * @module model/InvoiceItemResource
   * @version 3.0.15
   */

  /**
   * Constructs a new <code>InvoiceItemResource</code>.
   * @alias module:model/InvoiceItemResource
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>InvoiceItemResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceItemResource} obj Optional instance to populate.
   * @return {module:model/InvoiceItemResource} The populated <code>InvoiceItemResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bundle_sku')) {
        obj['bundle_sku'] = ApiClient.convertToType(data['bundle_sku'], 'String');
      }
      if (data.hasOwnProperty('current_fulfillment_status')) {
        obj['current_fulfillment_status'] = ApiClient.convertToType(data['current_fulfillment_status'], 'String');
      }
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = Discount.constructFromObject(data['discount']);
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
      if (data.hasOwnProperty('original_total_price')) {
        obj['original_total_price'] = ApiClient.convertToType(data['original_total_price'], 'Number');
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
      if (data.hasOwnProperty('system_price')) {
        obj['system_price'] = ApiClient.convertToType(data['system_price'], 'Number');
      }
      if (data.hasOwnProperty('total_price')) {
        obj['total_price'] = ApiClient.convertToType(data['total_price'], 'Number');
      }
      if (data.hasOwnProperty('type_hint')) {
        obj['type_hint'] = ApiClient.convertToType(data['type_hint'], 'String');
      }
      if (data.hasOwnProperty('unit_price')) {
        obj['unit_price'] = ApiClient.convertToType(data['unit_price'], 'Number');
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
  
  var discriminatorValue = 'InvoiceItemResource';


  /**
   * @member {String} bundle_sku
   */
  exports.prototype['bundle_sku'] = undefined;
  /**
   * @member {String} current_fulfillment_status
   */
  exports.prototype['current_fulfillment_status'] = undefined;
  /**
   * @member {module:model/Discount} discount
   */
  exports.prototype['discount'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * @member {String} item_name
   */
  exports.prototype['item_name'] = undefined;
  /**
   * @member {Number} original_total_price
   */
  exports.prototype['original_total_price'] = undefined;
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
   * @member {Number} system_price
   */
  exports.prototype['system_price'] = undefined;
  /**
   * @member {Number} total_price
   */
  exports.prototype['total_price'] = undefined;
  /**
   * @member {String} type_hint
   */
  exports.prototype['type_hint'] = undefined;
  /**
   * @member {Number} unit_price
   */
  exports.prototype['unit_price'] = undefined;



  return exports;
}));


