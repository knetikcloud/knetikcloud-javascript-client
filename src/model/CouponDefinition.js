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
    root.KnetikcloudSdk.CouponDefinition = factory(root.KnetikcloudSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CouponDefinition model module.
   * @module model/CouponDefinition
   * @version latest

   */

  /**
   * Constructs a new <code>CouponDefinition</code>.
   * @alias module:model/CouponDefinition
   * @class
   * @param code {String} A unique identifier for the discount. Can be used to remove the discount, and uniqueness within the cart will be enforced.
   * @param discountType {module:model/CouponDefinition.DiscountTypeEnum} The type of discount in terms of how it deducts price.
   * @param name {String} A name for the discount.
   * @param type {module:model/CouponDefinition.TypeEnum} The type of discount in terms of what it applies to. coupon_cart applies to the cart as a whole, other types apply to specific items based on different criteria.
   * @param uniqueKey {String} A unique identifier string for the discount.
   * @param value {Number} The amount of the discount. If discount_type is value then this is the raw currency amount to remove. If discount_type is percentage then this will be multiplied by the cart total or item price to get the discount amount (0.5 is half price).
   */
  var exports = function(code, discountType, name, type, uniqueKey, value) {
    var _this = this;

    _this['code'] = code;

    _this['discount_type'] = discountType;




    _this['name'] = name;


    _this['type'] = type;
    _this['unique_key'] = uniqueKey;

    _this['value'] = value;

  };

  /**
   * Constructs a <code>CouponDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CouponDefinition} obj Optional instance to populate.
   * @return {module:model/CouponDefinition} The populated <code>CouponDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('discount_type')) {
        obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
      }
      if (data.hasOwnProperty('exclusive')) {
        obj['exclusive'] = ApiClient.convertToType(data['exclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('max_discount')) {
        obj['max_discount'] = ApiClient.convertToType(data['max_discount'], 'Number');
      }
      if (data.hasOwnProperty('max_quantity')) {
        obj['max_quantity'] = ApiClient.convertToType(data['max_quantity'], 'Number');
      }
      if (data.hasOwnProperty('min_cart_total')) {
        obj['min_cart_total'] = ApiClient.convertToType(data['min_cart_total'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('self_exclusive')) {
        obj['self_exclusive'] = ApiClient.convertToType(data['self_exclusive'], 'Boolean');
      }
      if (data.hasOwnProperty('target_item_id')) {
        obj['target_item_id'] = ApiClient.convertToType(data['target_item_id'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
      }
      if (data.hasOwnProperty('valid_for_tags')) {
        obj['valid_for_tags'] = ApiClient.convertToType(data['valid_for_tags'], ['String']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('vendor_id')) {
        obj['vendor_id'] = ApiClient.convertToType(data['vendor_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A unique identifier for the discount. Can be used to remove the discount, and uniqueness within the cart will be enforced.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * A description for the discount.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The type of discount in terms of how it deducts price.
   * @member {module:model/CouponDefinition.DiscountTypeEnum} discount_type
   */
  exports.prototype['discount_type'] = undefined;
  /**
   * Whether this discount is exclusive and cannot be used in conjunction with other discounts/coupons. default=false
   * @member {Boolean} exclusive
   */
  exports.prototype['exclusive'] = undefined;
  /**
   * For coupon_cart, a minimum total price that the cart must meet to be valid.
   * @member {Number} max_discount
   */
  exports.prototype['max_discount'] = undefined;
  /**
   * The maximum number of items to count this discount for (not for cart_coupon).
   * @member {Number} max_quantity
   */
  exports.prototype['max_quantity'] = undefined;
  /**
   * For coupon_cart, a minimum total price that the cart must meet to be valid.
   * @member {Number} min_cart_total
   */
  exports.prototype['min_cart_total'] = undefined;
  /**
   * A name for the discount.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Whether this coupon is exclusive to itself or not (true means cannot add two of this same coupon to the same cart).  Default = false
   * @member {Boolean} self_exclusive
   */
  exports.prototype['self_exclusive'] = undefined;
  /**
   * The id of the item this discount applies to, which must be present in the cart. Applies if coupon_type_hint is coupon_single_item or coupon_voucher.
   * @member {Number} target_item_id
   */
  exports.prototype['target_item_id'] = undefined;
  /**
   * The type of discount in terms of what it applies to. coupon_cart applies to the cart as a whole, other types apply to specific items based on different criteria.
   * @member {module:model/CouponDefinition.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A unique identifier string for the discount.
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * Which tags this applies for (item must have at least one of them), if coupon_type is coupon_tag.
   * @member {Array.<String>} valid_for_tags
   */
  exports.prototype['valid_for_tags'] = undefined;
  /**
   * The amount of the discount. If discount_type is value then this is the raw currency amount to remove. If discount_type is percentage then this will be multiplied by the cart total or item price to get the discount amount (0.5 is half price).
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Which vendor this applies for, if coupon_type is coupon_vendor.
   * @member {Number} vendor_id
   */
  exports.prototype['vendor_id'] = undefined;


  /**
   * Allowed values for the <code>discount_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DiscountTypeEnum = {
    /**
     * value: "value"
     * @const
     */
    "value": "value",
    /**
     * value: "percentage"
     * @const
     */
    "percentage": "percentage"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "coupon_cart"
     * @const
     */
    "cart": "coupon_cart",
    /**
     * value: "coupon_single_item"
     * @const
     */
    "single_item": "coupon_single_item",
    /**
     * value: "coupon_voucher"
     * @const
     */
    "voucher": "coupon_voucher",
    /**
     * value: "coupon_vendor"
     * @const
     */
    "vendor": "coupon_vendor",
    /**
     * value: "coupon_tag"
     * @const
     */
    "tag": "coupon_tag"  };


  return exports;
}));


