# KnetikCloud.AccessEntryResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **[String]** | The actions that users with the sid can take on this resource. Must match with actions available for the type of resource | 
**field_blacklist** | **[String]** | Optional list of fields, in JSON Pointer notation (RFC 6901), that are not to be granted the associated actions for. Specifically, this affects LIST, GET, PUT, and POST by not allowing retrieval, edit, or creation of the field. For LIST the fields stripped from return objects based on parent ACL. The ACL is always additive, thus other access entries may grant these actions on these fields anyways | [optional] 
**sid** | **String** | The security id that gets this level of access. Security ids are prefixed with a type, foollowed by a hyphen, then an id. Formats: user-ID, group-UNIQUE_NAME, friend-USER_ID and role-ROLE | 


