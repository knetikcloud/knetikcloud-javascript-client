# KnetikCloud.MonitoringMetricDatapointResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **{String: String}** | Dimensions giving context to the datapoint. Map of keys to values (example: {\&quot;location\&quot;: \&quot;USA\&quot;, \&quot;user\&quot;: \&quot;75\&quot;}). Cannot include the | symbol | [optional] 
**id** | **String** | The id of the metric. Required for batch endpoint | [optional] 
**timestamp** | **Number** | The unix timestamp in seconds the datapoint occurred, default: now | [optional] 
**value** | **Number** | The value of the datapoint | 


