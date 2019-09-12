# KnetikCloud.VerificationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type | [optional] 
**code** | **String** | A unique code to identify the request. May be publically known and use ACL to require the correct user to respond, or private and the ACL allows anyone with the code to verify. default: random | [optional] 
**codelength** | **Number** | The intended length of the code, if auto-generated. Minimum 3, default 16 | [optional] 
**created_date** | **Number** | The date/time this resource was created in seconds since unix epoch | [optional] 
**expiration_date** | **Number** | The date, as a unix timestamp in seconds, that the request expires | [optional] 
**include_letters** | **Boolean** | Whether to include letters, if the code is auto-generated. Default: true | [optional] 
**include_numbers** | **Boolean** | Whether to include numbers, if the code is auto-generated. Default: true | [optional] 
**originator** | [**SimpleUserResource**](SimpleUserResource.md) | The originating user of the request, filled at  | [optional] 
**target_user** | [**SimpleUserResource**](SimpleUserResource.md) | An optional user that is expected to respond | [optional] 
**template** | **String** | A template this verification request is validated against. Filled from url | [optional] 
**updated_date** | **Number** | The date/time this resource was last updated in seconds since unix epoch | [optional] 


