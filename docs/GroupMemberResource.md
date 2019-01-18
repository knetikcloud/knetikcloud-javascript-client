# KnetikCloud.GroupMemberResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this type, or be an extra not from the template | [optional] 
**group** | [**SimpleGroupResource**](SimpleGroupResource.md) | The group. Id is the unique name | [optional] 
**implicit** | **Boolean** | Whether this membership is explicit (the user was added directly to the group) or implicit (the user was added only to one or more child groups) | [optional] 
**member_since** | **Number** | The group member&#39;s membership date as a unix timestamp | [optional] 
**membership_id** | **Number** | The id of the membership entry | [optional] 
**order** | **String** | The position of the member in the group if applicable. Read notes for details | [optional] 
**status** | **String** | The member&#39;s status. Max size 50. Default: member | [optional] 
**template** | **String** | A template this member additional properties are validated against (private). May be null and no validation of properties will be done | [optional] 
**updated_date** | **Number** | The date the group member&#39;s info was updated as a unix timestamp | [optional] 
**user** | [**SimpleUserResource**](SimpleUserResource.md) | The user | 


