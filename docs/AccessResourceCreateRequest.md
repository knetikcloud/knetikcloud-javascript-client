# KnetikCloud.AccessResourceCreateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**[AccessEntryResource]**](AccessEntryResource.md) | The access list for the resource. If null on create, will take default from type | [optional] 
**id** | **String** | The id of the resource we are defining access for | 
**parent_id** | **String** | The id of the parent resource (null if parent top level) | [optional] 
**parent_type** | **String** | The type of the parent resource (null for top level) | 
**sid_replacements** | **{String: String}** | Sid placeholders mapped to sid replacement value. Useful for injecting owner/creator id. | [optional] 


