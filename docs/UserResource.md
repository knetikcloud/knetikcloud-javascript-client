# KnetikCloud.UserResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this user type, or be an extra not from the template | [optional] 
**address** | **String** | The first line of the user&#39;s address (private) | [optional] 
**address2** | **String** | The second line of user&#39;s address (private) | [optional] 
**avatar_url** | **String** | The url of the user&#39;s avatar image | [optional] 
**city** | **String** | The user&#39;s city (private) | [optional] 
**date_of_birth** | **Number** | The user&#39;s date of birth (private) as a unix timestamp | [optional] 
**description** | **String** | The user&#39;s self description (private) | [optional] 
**display_name** | **String** | The chosen display name of the user, defaults to username if not present | [optional] 
**email** | **String** | The user&#39;s email address (private). May be required and/or unique depending on system configuration (both on by default). Must match standard email requirements if provided (RFC 2822) | 
**first_name** | **String** | The user&#39;s first name (private) | [optional] 
**fullname** | **String** | The user&#39;s full name (private) | [optional] 
**gender** | **String** | The user&#39;s gender (private) | [optional] 
**id** | **Number** | The id of the user | [optional] 
**last_activity** | **Number** | The date the user last interacted with the API (private) | [optional] 
**last_name** | **String** | The user&#39;s last name (private) | [optional] 
**last_updated** | **Number** | The date the user&#39;s info was last updated as a unix timestamp | [optional] 
**member_since** | **Number** | The user&#39;s date of registration as a unix timestamp | [optional] 
**mobile_number** | **String** | The user&#39;s mobile phone number (private) | [optional] 
**password** | **String** | The plain text password for the new user account. Required for registration; ignored on profile update.  Use password specific endpoints for editing | [optional] 
**postal_code** | **String** | The user&#39;s postal code (private) | [optional] 
**state** | **String** | The user&#39;s state (private) | [optional] 
**tags** | **[String]** | Tags on the user. Can only be set by admin. Max length per tag is 64 characters | [optional] 
**template** | **String** | A user template this user is validated against (private). May be null and no validation of properties will be done | [optional] 
**username** | **String** | The login username for the user (private). May be set to match email if system does not require usernames separately. | 


