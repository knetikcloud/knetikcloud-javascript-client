# KnetikCloud.MonitoringAlertResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** | Whether the alert is live and should be evaluated. Default: true | [optional] 
**id** | **String** | The id of the alert. Cannot be changed | 
**levels** | [**[MonitoringAlertLevel]**](MonitoringAlertLevel.md) | The levels of alert to raise. Minimum 1 and maximum 10 entries. The alert level will be the one with the last one in the list that is passed its threshold | 
**metric** | [**SimpleReferenceResourcestring**](SimpleReferenceResourcestring.md) | The id of the metric the alert is monitoring | 
**name** | **String** | The name of the alert, for display purposes | 


