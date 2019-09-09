# KnetikCloud.UserInventoryAddRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_id** | **Number** | An invoice id to link the inventory to (skip_invoice should be true) | [optional] 
**note** | **String** | A note to be passed to the invoice or transaction | 
**overrides** | **[String]** | A list of behaviors to ignore explicitely.  Ex: &#39;limited_gettable&#39; | [optional] 
**skip_invoice** | **Boolean** | If set to true will cause the endpoint to skip creation of cart and invoice to track the inventory change | 
**sku** | **String** | The specific SKU of the item to be added to the inventory | 


