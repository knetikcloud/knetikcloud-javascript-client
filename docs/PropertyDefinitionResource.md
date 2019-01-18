# KnetikCloud.PropertyDefinitionResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description of the property | [optional] 
**friendly_name** | **String** | The friendly front-facing name of the property | [optional] 
**name** | **String** | The name of the property. Must start with a letter | 
**option_label_path** | **String** | The JSON path to the option label | [optional] 
**option_value_path** | **String** | The JSON path to the option value | [optional] 
**options_url** | **String** | URL of service containing the property options (assumed JSON array) | [optional] 
**required** | **Boolean** | Whether the property is required | 
**type** | **String** | The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties. | 


