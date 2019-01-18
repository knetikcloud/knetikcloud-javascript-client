# KnetikCloud.MonitoringMetricResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_keys** | **[String]** | The sets of dimensions that datapoints may be recorded with (each datapoint must have dimensions keys exactly matching this set) | [optional] 
**id** | **String** | The id of the metric. Cannot be changed | 
**metric_type** | **String** | The type of metric.  Cannot be updated once set.  counter: a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart.  delta: a metric to track the change in value of another gauge metric once started.  gauge: a metric that represents a single numerical value that can arbitrarily go up and down.  timer: a metric that functions as a running timer once started. | 
**name** | **String** | The name of the metric, for display purposes. Will default if not provided | [optional] 
**parent_metric_id** | **String** | The id of the parent metric.  Cannot be updated once set.  Needed for delta metrics only. | [optional] 


<a name="MetricTypeEnum"></a>
## Enum: MetricTypeEnum


* `counter` (value: `"counter"`)

* `delta` (value: `"delta"`)

* `gauge` (value: `"gauge"`)

* `timer` (value: `"timer"`)




