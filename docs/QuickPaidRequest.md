# KnetikCloud.QuickPaidRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gift_target** | **Number** | An optional target user to give the item to as a gift | 
**item_notes** | **String** | An optional note to add to the item | [optional] 
**paid_amount** | **Number** | The amount already paid. Must match final price to complete purchase. Minimum 0 | 
**price_override** | **Number** | Override the price of an item, if the behavior configuration permits it. Do not send if taking standard pricing. Minimum 0 | [optional] 
**sku** | **String** | SKU of item being purchased | 
**transaction_details** | **String** | Transaction details | [optional] 
**transaction_type** | **String** | Transaction type | 
**user_id** | **Number** | ID of the user making the purchase. If null, currently logged in user will be used. | [optional] 


