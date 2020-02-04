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
    root.KnetikCloud.CartSummary = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CartSummary model module.
   * @module model/CartSummary
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>CartSummary</code>.
   * @alias module:model/CartSummary
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CartSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartSummary} obj Optional instance to populate.
   * @return {module:model/CartSummary} The populated <code>CartSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
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
      if (data.hasOwnProperty('items_in_cart')) {
        obj['items_in_cart'] = ApiClient.convertToType(data['items_in_cart'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('subtotal')) {
        obj['subtotal'] = ApiClient.convertToType(data['subtotal'], 'Number');
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
  
  var discriminatorValue = 'CartSummary';


  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The unique id code for the currency used in the cart
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * The grand total for the cart
   * @member {Number} grand_total
   */
  exports.prototype['grand_total'] = undefined;
  /**
   * The unique ID for the cart
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The ID of the invoice associated with this cart
   * @member {Number} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * The number of items in the cart
   * @member {Number} items_in_cart
   */
  exports.prototype['items_in_cart'] = undefined;
  /**
   * The status of the cart
   * @member {module:model/CartSummary.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The subtotal of all items in the cart
   * @member {Number} subtotal
   */
  exports.prototype['subtotal'] = undefined;


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


