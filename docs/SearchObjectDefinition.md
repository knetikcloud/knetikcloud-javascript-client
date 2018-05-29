# KnetikCloud.SearchObjectDefinition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_supplier_url** | **String** | The relative URL of the service that will provide the initial data to index. Assumed to be compliant with KnetikCloud pagination standards. Ex: /locations. | [optional] 
**id_field** | **String** | The name of the field representing the unique identifier of the document. Ex: UserResource -&gt; id | [optional] 
**mappings** | [**[SearchReferenceMapping]**](SearchReferenceMapping.md) | Describe how nested resources should be mapped to documents if needed. Search service will copy the already indexed dependant documents and use them to replace the listed fields at runtime. Ex: comment.user is a user document | [optional] 
**template_field** | **String** | The name of the property that holds the template ID for custom objects. (ex: template or template_id) | [optional] 
**type** | **String** | The name of the index where the documents will be stored. Be convention, the name of the resource w/o suffix. Ex: UserResource -&gt; users | [optional] 


