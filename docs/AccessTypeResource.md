# KnetikCloud.AccessTypeResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**[AccessEntryResource]**](AccessEntryResource.md) | The access list. Combines with parent access to determine permission | 
**actions** | **[String]** | The actions that are possible for the resource type | [optional] 
**id** | **String** | The id of the resource we are defining access for (null for top level) | [optional] 
**parent_id** | **String** | The id of the parent resource (null if parent top level) | [optional] 
**parent_type** | **String** | The type of the parent resource (null for top level) | [optional] 
**sub_types** | [**[AccessSubTypeResource]**](AccessSubTypeResource.md) | List of resource types that can inherit from this one, to define default access lists on creation | 
**type** | **String** | The resource type we are defining access for | 


