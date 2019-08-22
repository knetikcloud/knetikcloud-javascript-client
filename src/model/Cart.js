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
    define(['ApiClient', 'model/CartLineItem', 'model/CartShippingAddressRequest', 'model/CartShippingOption', 'model/CouponDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartLineItem'), require('./CartShippingAddressRequest'), require('./CartShippingOption'), require('./CouponDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Cart = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CartLineItem, root.KnetikCloud.CartShippingAddressRequest, root.KnetikCloud.CartShippingOption, root.KnetikCloud.CouponDefinition);
  }
}(this, function(ApiClient, CartLineItem, CartShippingAddressRequest, CartShippingOption, CouponDefinition) {
  'use strict';




  /**
   * The Cart model module.
   * @module model/Cart
   * @version 3.0.264
   */

  /**
   * Constructs a new <code>Cart</code>.
   * @alias module:model/Cart
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>Cart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cart} obj Optional instance to populate.
   * @return {module:model/Cart} The populated <code>Cart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('available_shipping_options')) {
        obj['available_shipping_options'] = ApiClient.convertToType(data['available_shipping_options'], [CartShippingOption]);
      }
      if (data.hasOwnProperty('country_tax')) {
        obj['country_tax'] = ApiClient.convertToType(data['country_tax'], 'Number');
      }
      if (data.hasOwnProperty('coupons')) {
        obj['coupons'] = ApiClient.convertToType(data['coupons'], [CouponDefinition]);
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('discount_total')) {
        obj['discount_total'] = ApiClient.convertToType(data['discount_total'], 'Number');
      }
      if (data.hasOwnProperty('error_code')) {
        obj['error_code'] = ApiClient.convertToType(data['error_code'], 'Number');
      }
      if (data.hasOwnProperty('error_message')) {
        obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
      }
      if (data.hasOwnProperty('grand_total')) {
        obj['grand_total'] = ApiClient.convertToType(data['grand_total'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [CartLineItem]);
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'Number');
      }
      if (data.hasOwnProperty('selected_shipping_options')) {
        obj['selected_shipping_options'] = ApiClient.convertToType(data['selected_shipping_options'], [CartShippingOption]);
      }
      if (data.hasOwnProperty('shippable')) {
        obj['shippable'] = ApiClient.convertToType(data['shippable'], 'Boolean');
      }
      if (data.hasOwnProperty('shipping_address')) {
        obj['shipping_address'] = CartShippingAddressRequest.constructFromObject(data['shipping_address']);
      }
      if (data.hasOwnProperty('shipping_cost')) {
        obj['shipping_cost'] = ApiClient.convertToType(data['shipping_cost'], 'Number');
      }
      if (data.hasOwnProperty('state_tax')) {
        obj['state_tax'] = ApiClient.convertToType(data['state_tax'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('subtotal')) {
        obj['subtotal'] = ApiClient.convertToType(data['subtotal'], 'Number');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
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
  
  var discriminatorValue = 'Cart';


  /**
   * @member {Array.<module:model/CartShippingOption>} available_shipping_options
   */
  exports.prototype['available_shipping_options'] = undefined;
  /**
   * @member {Number} country_tax
   */
  exports.prototype['country_tax'] = undefined;
  /**
   * @member {Array.<module:model/CouponDefinition>} coupons
   */
  exports.prototype['coupons'] = undefined;
  /**
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * @member {Number} discount_total
   */
  exports.prototype['discount_total'] = undefined;
  /**
   * @member {Number} error_code
   */
  exports.prototype['error_code'] = undefined;
  /**
   * @member {String} error_message
   */
  exports.prototype['error_message'] = undefined;
  /**
   * @member {Number} grand_total
   */
  exports.prototype['grand_total'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * @member {Array.<module:model/CartLineItem>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {Number} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {Array.<module:model/CartShippingOption>} selected_shipping_options
   */
  exports.prototype['selected_shipping_options'] = undefined;
  /**
   * @member {Boolean} shippable
   */
  exports.prototype['shippable'] = undefined;
  /**
   * @member {module:model/CartShippingAddressRequest} shipping_address
   */
  exports.prototype['shipping_address'] = undefined;
  /**
   * @member {Number} shipping_cost
   */
  exports.prototype['shipping_cost'] = undefined;
  /**
   * @member {Number} state_tax
   */
  exports.prototype['state_tax'] = undefined;
  /**
   * @member {module:model/Cart.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} subtotal
   */
  exports.prototype['subtotal'] = undefined;
  /**
   * @member {Number} updated
   */
  exports.prototype['updated'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "processing"
     * @const
     */
    "processing": "processing",
    /**
     * value: "closed"
     * @const
     */
    "closed": "closed",
    /**
     * value: "onhold"
     * @const
     */
    "onhold": "onhold"  };


  return exports;
}));


