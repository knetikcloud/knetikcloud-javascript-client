# KnetikCloud.GroupResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type | [optional] 
**created_date** | **Number** | The date the group was created as a unix timestamp | [optional] 
**description** | **String** | A description of the group | [optional] 
**member_count** | **Number** | The number of users in the group | [optional] 
**message_of_the_day** | **String** | A message of the day for members of the group | [optional] 
**name** | **String** | The name of the group. Max 50 characters | 
**parent** | **String** | The unique name of another group that this group is a subset of | [optional] 
**status** | **String** | The status of the group. Max size 50 | [optional] 
**sub_member_count** | **Number** | The number of users in child groups | [optional] 
**tags** | **[String]** | Tags for search | [optional] 
**template** | **String** | A group template this group is validated against. May be null and no validation of additional_properties will be done | [optional] 
**unique_name** | **String** | Unique name used in url and references. Uppercase, lowercase, numbers and hyphens only. Max 50 characters. Cannot be altered once created. Default: random UUID | [optional] 
**updated_date** | **Number** | The date the group&#39;s info was last updated as a unix timestamp | [optional] 


