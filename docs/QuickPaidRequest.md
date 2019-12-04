# KnetikCloud.QuickPaidRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this invoice type, or be an extra not from the template | [optional] 
**address1** | **String** | Line one of the customer&#39;s shipping address | [optional] 
**address2** | **String** | Line two of the customer&#39;s shipping address | [optional] 
**billing_address1** | **String** | Line one of the customer&#39;s billing address | [optional] 
**billing_address2** | **String** | Line two of the customer&#39;s billing address | [optional] 
**billing_city_name** | **String** | The city for the customer&#39;s billing address | [optional] 
**billing_country_name** | **String** | The country for the customer&#39;s billing address | [optional] 
**billing_full_name** | **String** | The customer&#39;s name for the billing address | [optional] 
**billing_postal_code** | **String** | The postal code for the customer&#39;s billing address | [optional] 
**billing_state_name** | **String** | The state for the customer&#39;s billing address | [optional] 
**city_name** | **String** | The city for the customer&#39;s shipping address | [optional] 
**country_name** | **String** | The country for the customer&#39;s shipping address | [optional] 
**email** | **String** | The customer&#39;s email address | [optional] 
**federal_tax** | **Number** | The amount of federal tax to add (increases final price of invoice even if using price override). Minimum 0 | [optional] 
**gift_target** | **Number** | An optional target user to give the item to as a gift | 
**item_notes** | **String** | An optional note to add to the item | [optional] 
**name_prefix** | **String** | The customer&#39;s name prefix | [optional] 
**paid_amount** | **Number** | The amount already paid. Must match final price to complete purchase. Ignored for non-paid endpoints. Minimum 0 | [optional] 
**postal_code** | **String** | The postal code for the customer&#39;s shipping address | [optional] 
**price_override** | **Number** | Override the price of an item, if the behavior configuration permits it. Do not send if taking standard pricing. Minimum 0 | [optional] 
**sku** | **String** | SKU of item being purchased | 
**state_name** | **String** | The state for the customer&#39;s shipping address | [optional] 
**state_tax** | **Number** | The amount of state tax to add (increases final price of invoice even if using price override). Minimum 0 | [optional] 
**template** | **String** | An invoice template this invoice is validated against (private). May be null and no validation of properties will be done | [optional] 
**transaction_details** | **String** | Transaction details | [optional] 
**transaction_type** | **String** | Transaction type | 
**user_id** | **Number** | ID of the user making the purchase. If null, currently logged in user will be used. | [optional] 


