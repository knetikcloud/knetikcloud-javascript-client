# KnetikCloud.MonitoringIncidentResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert** | [**SimpleReferenceResourcestring**](SimpleReferenceResourcestring.md) | The alert this incident is for | 
**current_level** | **String** | The name of the current alert level | 
**end_date** | **Number** | The endDate as a unix timestamp in seconds the incident was manually ended. Null if still open | [optional] 
**id** | **String** | The id of the incident. Cannot be changed | 
**insufficient_data** | **Boolean** | Whether the most recent check for any level had too little data to determine status, and alert level missing_data_policy is &#39;missing&#39; | [optional] 
**levels** | [**[MonitoringIncidentLevelResource]**](MonitoringIncidentLevelResource.md) | The statuses of each level | 
**merge_value** | **String** | The value of the merge_label from the alert | [optional] 
**start_date** | **Number** | The startDate as a unix timestamp in seconds the incident first started | [optional] 


