# KnetikCloud.CouponItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coupon_type_hint** | **String** | The type of coupon | 
**discount_max** | **Number** | The amount this coupon is maxed out at.  Applies if coupon_type_hint is coupon_cart | [optional] 
**discount_min_cart_value** | **Number** | The minimium amount needed in the cart for the coupon to apply.  Applies if coupon_type_hint is coupon_cart | [optional] 
**discount_type** | **String** | The type of discount in terms of how it deducts price. Value based discount not available for coupon_cart type coupons | 
**discount_value** | **Number** | The amount the coupon will discount the item. If discount_type is &#39;value&#39; this will be a flat amount of currency. If discount type is &#39;percentage&#39; this will be a fraction (0.2 for 20% off) multiplied by the price of the matching item or items. | 
**exclusive** | **Boolean** | Whether this coupon is exclusive or not (true means cannot be in same cart as another).  Default &#x3D; false | [optional] 
**item_id** | **Number** | The id of the item the coupon is applied to.  Applies if coupon_type_hint is coupon_single_item or coupon_voucher | [optional] 
**max_quantity** | **Number** | The maximum quantity of items the coupon can apply to, null if no limit and minimum 1 otherwise.  Applies if coupon_type_hint is coupon_single_item or coupon_voucher | [optional] 
**self_exclusive** | **Boolean** | Whether this coupon is exclusive to itself or not (true means cannot add two of this same coupon to the same cart).  Default &#x3D; false | [optional] 
**valid_for_tags** | **[String]** | A list of tags for a coupon.  The coupon can only apply to an item that has at least one of these tags.  Applies if coupon_type_hint is coupon_tag | [optional] 


<a name="CouponTypeHintEnum"></a>
## Enum: CouponTypeHintEnum


* `cart` (value: `"coupon_cart"`)

* `single_item` (value: `"coupon_single_item"`)

* `voucher` (value: `"coupon_voucher"`)

* `vendor` (value: `"coupon_vendor"`)

* `tag` (value: `"coupon_tag"`)




<a name="DiscountTypeEnum"></a>
## Enum: DiscountTypeEnum


* `value` (value: `"value"`)

* `percentage` (value: `"percentage"`)




