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
    define(['ApiClient', 'model/InvoiceItemResource', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvoiceItemResource'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.InvoiceResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.InvoiceItemResource, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, InvoiceItemResource, SimpleUserResource) {
  'use strict';




  /**
   * The InvoiceResource model module.
   * @module model/InvoiceResource
   * @version 3.0.17
   */

  /**
   * Constructs a new <code>InvoiceResource</code>.
   * @alias module:model/InvoiceResource
   * @class
   */
  var exports = function() {
    var _this = this;











































  };

  /**
   * Constructs a <code>InvoiceResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceResource} obj Optional instance to populate.
   * @return {module:model/InvoiceResource} The populated <code>InvoiceResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billing_address1')) {
        obj['billing_address1'] = ApiClient.convertToType(data['billing_address1'], 'String');
      }
      if (data.hasOwnProperty('billing_address2')) {
        obj['billing_address2'] = ApiClient.convertToType(data['billing_address2'], 'String');
      }
      if (data.hasOwnProperty('billing_city_name')) {
        obj['billing_city_name'] = ApiClient.convertToType(data['billing_city_name'], 'String');
      }
      if (data.hasOwnProperty('billing_country_name')) {
        obj['billing_country_name'] = ApiClient.convertToType(data['billing_country_name'], 'String');
      }
      if (data.hasOwnProperty('billing_full_name')) {
        obj['billing_full_name'] = ApiClient.convertToType(data['billing_full_name'], 'String');
      }
      if (data.hasOwnProperty('billing_postal_code')) {
        obj['billing_postal_code'] = ApiClient.convertToType(data['billing_postal_code'], 'String');
      }
      if (data.hasOwnProperty('billing_state_name')) {
        obj['billing_state_name'] = ApiClient.convertToType(data['billing_state_name'], 'String');
      }
      if (data.hasOwnProperty('cart_id')) {
        obj['cart_id'] = ApiClient.convertToType(data['cart_id'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('current_fulfillment_status')) {
        obj['current_fulfillment_status'] = ApiClient.convertToType(data['current_fulfillment_status'], 'String');
      }
      if (data.hasOwnProperty('current_payment_status')) {
        obj['current_payment_status'] = ApiClient.convertToType(data['current_payment_status'], 'String');
      }
      if (data.hasOwnProperty('discount')) {
        obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('external_ref')) {
        obj['external_ref'] = ApiClient.convertToType(data['external_ref'], 'String');
      }
      if (data.hasOwnProperty('fed_tax')) {
        obj['fed_tax'] = ApiClient.convertToType(data['fed_tax'], 'Number');
      }
      if (data.hasOwnProperty('grand_total')) {
        obj['grand_total'] = ApiClient.convertToType(data['grand_total'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('invoice_number')) {
        obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [InvoiceItemResource]);
      }
      if (data.hasOwnProperty('name_prefix')) {
        obj['name_prefix'] = ApiClient.convertToType(data['name_prefix'], 'String');
      }
      if (data.hasOwnProperty('order_notes')) {
        obj['order_notes'] = ApiClient.convertToType(data['order_notes'], 'String');
      }
      if (data.hasOwnProperty('parent_invoice_id')) {
        obj['parent_invoice_id'] = ApiClient.convertToType(data['parent_invoice_id'], 'Number');
      }
      if (data.hasOwnProperty('payment_method_id')) {
        obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'Number');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('phone_number')) {
        obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
      }
      if (data.hasOwnProperty('remaining_balance')) {
        obj['remaining_balance'] = ApiClient.convertToType(data['remaining_balance'], 'Number');
      }
      if (data.hasOwnProperty('shipping')) {
        obj['shipping'] = ApiClient.convertToType(data['shipping'], 'Number');
      }
      if (data.hasOwnProperty('shipping_address1')) {
        obj['shipping_address1'] = ApiClient.convertToType(data['shipping_address1'], 'String');
      }
      if (data.hasOwnProperty('shipping_address2')) {
        obj['shipping_address2'] = ApiClient.convertToType(data['shipping_address2'], 'String');
      }
      if (data.hasOwnProperty('shipping_city_name')) {
        obj['shipping_city_name'] = ApiClient.convertToType(data['shipping_city_name'], 'String');
      }
      if (data.hasOwnProperty('shipping_country_name')) {
        obj['shipping_country_name'] = ApiClient.convertToType(data['shipping_country_name'], 'String');
      }
      if (data.hasOwnProperty('shipping_full_name')) {
        obj['shipping_full_name'] = ApiClient.convertToType(data['shipping_full_name'], 'String');
      }
      if (data.hasOwnProperty('shipping_postal_code')) {
        obj['shipping_postal_code'] = ApiClient.convertToType(data['shipping_postal_code'], 'String');
      }
      if (data.hasOwnProperty('shipping_state_name')) {
        obj['shipping_state_name'] = ApiClient.convertToType(data['shipping_state_name'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'Number');
      }
      if (data.hasOwnProperty('state_tax')) {
        obj['state_tax'] = ApiClient.convertToType(data['state_tax'], 'Number');
      }
      if (data.hasOwnProperty('subtotal')) {
        obj['subtotal'] = ApiClient.convertToType(data['subtotal'], 'Number');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUserResource.constructFromObject(data['user']);
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
  
  var discriminatorValue = 'InvoiceResource';


  /**
   * Line one of the customer's billing address
   * @member {String} billing_address1
   */
  exports.prototype['billing_address1'] = undefined;
  /**
   * Line two of the customer's billing address
   * @member {String} billing_address2
   */
  exports.prototype['billing_address2'] = undefined;
  /**
   * The city for the customer's billing address
   * @member {String} billing_city_name
   */
  exports.prototype['billing_city_name'] = undefined;
  /**
   * The country for the customer's billing address
   * @member {String} billing_country_name
   */
  exports.prototype['billing_country_name'] = undefined;
  /**
   * The customer's name for the billing address
   * @member {String} billing_full_name
   */
  exports.prototype['billing_full_name'] = undefined;
  /**
   * The postal code for the customer's billing address
   * @member {String} billing_postal_code
   */
  exports.prototype['billing_postal_code'] = undefined;
  /**
   * The state for the customer's billing address
   * @member {String} billing_state_name
   */
  exports.prototype['billing_state_name'] = undefined;
  /**
   * The guid of the cart this invoice came from
   * @member {String} cart_id
   */
  exports.prototype['cart_id'] = undefined;
  /**
   * The date the invoice was created, unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The code for the currency invoice prices are in
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * The fulfillment status of the invoice
   * @member {String} current_fulfillment_status
   */
  exports.prototype['current_fulfillment_status'] = undefined;
  /**
   * The payment status of the invoice
   * @member {String} current_payment_status
   */
  exports.prototype['current_payment_status'] = undefined;
  /**
   * The amount of money saved through coupons
   * @member {Number} discount
   */
  exports.prototype['discount'] = undefined;
  /**
   * The customer's email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * An external reference to filter on
   * @member {String} external_ref
   */
  exports.prototype['external_ref'] = undefined;
  /**
   * The amount of federal tax added
   * @member {Number} fed_tax
   */
  exports.prototype['fed_tax'] = undefined;
  /**
   * The final price of the invoice
   * @member {Number} grand_total
   */
  exports.prototype['grand_total'] = undefined;
  /**
   * The id of the invoice
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A reference number for the invoice
   * @member {String} invoice_number
   */
  exports.prototype['invoice_number'] = undefined;
  /**
   * A list of items within the invoice
   * @member {Array.<module:model/InvoiceItemResource>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * The customer's name prefix
   * @member {String} name_prefix
   */
  exports.prototype['name_prefix'] = undefined;
  /**
   * Notes about the order
   * @member {String} order_notes
   */
  exports.prototype['order_notes'] = undefined;
  /**
   * The id of an invoice this is a child of
   * @member {Number} parent_invoice_id
   */
  exports.prototype['parent_invoice_id'] = undefined;
  /**
   * The id of a saved payment method used to pay for the invoice
   * @member {Number} payment_method_id
   */
  exports.prototype['payment_method_id'] = undefined;
  /**
   * The customer's phone number
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * The customer's phone number
   * @member {String} phone_number
   */
  exports.prototype['phone_number'] = undefined;
  /**
   * The remaining price of the invoice (after any payments made so far)
   * @member {Number} remaining_balance
   */
  exports.prototype['remaining_balance'] = undefined;
  /**
   * The shipping cost
   * @member {Number} shipping
   */
  exports.prototype['shipping'] = undefined;
  /**
   * Line one of the customer's shipping address
   * @member {String} shipping_address1
   */
  exports.prototype['shipping_address1'] = undefined;
  /**
   * Line two of the customer's shipping address
   * @member {String} shipping_address2
   */
  exports.prototype['shipping_address2'] = undefined;
  /**
   * The city for the customer's shipping address
   * @member {String} shipping_city_name
   */
  exports.prototype['shipping_city_name'] = undefined;
  /**
   * The country for the customer's shipping address
   * @member {String} shipping_country_name
   */
  exports.prototype['shipping_country_name'] = undefined;
  /**
   * The customer's name for the shipping address
   * @member {String} shipping_full_name
   */
  exports.prototype['shipping_full_name'] = undefined;
  /**
   * The postal code for the customer's shipping address
   * @member {String} shipping_postal_code
   */
  exports.prototype['shipping_postal_code'] = undefined;
  /**
   * The state for the customer's shipping address
   * @member {String} shipping_state_name
   */
  exports.prototype['shipping_state_name'] = undefined;
  /**
   * A number to use in sorting items. default 500.
   * @member {Number} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * The amount of state tax added
   * @member {Number} state_tax
   */
  exports.prototype['state_tax'] = undefined;
  /**
   * The sum price of all items before shipping, coupons and tax
   * @member {Number} subtotal
   */
  exports.prototype['subtotal'] = undefined;
  /**
   * The date the invoice was last updated, unix timestamp in seconds
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The owner of the invoice
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The id of the vendor
   * @member {Number} vendor_id
   */
  exports.prototype['vendor_id'] = undefined;
  /**
   * The name of the invoice
   * @member {String} vendor_name
   */
  exports.prototype['vendor_name'] = undefined;



  return exports;
}));


