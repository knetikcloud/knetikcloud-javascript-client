# KnetikCloud.BreEventLog

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **Number** | The difference between received and handlded in ms | [optional] 
**customer** | **String** | The customer | [optional] 
**event_expansion_duration** | **Number** | The time it took to expand the event parameters | [optional] 
**event_id** | **String** | The event id | [optional] 
**event_logging_duration** | **Number** | The time it took to log the event in IO | [optional] 
**event_name** | **String** | The event name | [optional] 
**event_received_date** | **Number** | The date the event was fired | [optional] 
**event_start_date** | **Number** | The date the event was handled | [optional] 
**id** | **String** | The id | [optional] 
**parameters** | **Object** | The event paramters | [optional] 
**rules** | [**[BreRuleLog]**](BreRuleLog.md) | The rules | [optional] 
**runtime** | **Number** | The time it took to run all the rules for that event | [optional] 


