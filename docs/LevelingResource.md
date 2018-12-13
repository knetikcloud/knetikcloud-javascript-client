# KnetikCloud.LevelingResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | [**{String: Property}**](Property.md) | A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type | [optional] 
**created_date** | **Number** | The date the leveling schema was created | [optional] 
**description** | **String** | The description of the leveling schema | [optional] 
**name** | **String** | The name of the leveling schema.  IMMUTABLE | 
**template** | **String** | The template being used | [optional] 
**tiers** | [**[TierResource]**](TierResource.md) | A set of tiers that contain experience boundaries | [optional] 
**trigger_event_name** | **String** | The name of an event that will add one progress to this level when fired | [optional] 
**updated_date** | **Number** | The date the leveling schema was updated | [optional] 


