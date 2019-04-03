# KnetikCloud.MonitoringIncidentEventResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **String** | The id of the alert | 
**date** | **Number** | The date as a unix timestamp in seconds for the event | [optional] 
**id** | **String** | The id of the incident event | [optional] 
**incident_id** | **String** | The id of the incident. will be added to any current incident for the alert or a new one created | [optional] 
**level_name** | **String** | The name of the alert level | 
**status** | **String** | The new status of the alert level | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `OK` (value: `"OK"`)

* `ALARM` (value: `"ALARM"`)

* `INSUFFICIENT_DATA` (value: `"INSUFFICIENT_DATA"`)




