# KnetikCloud.MonitoringApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlert**](MonitoringApi.md#createAlert) | **POST** /monitoring/alerts | Create a new alert
[**createMetric**](MonitoringApi.md#createMetric) | **POST** /monitoring/metrics | Create a new metric
[**deleteAlert**](MonitoringApi.md#deleteAlert) | **DELETE** /monitoring/alerts/{id} | Delete an existing alert
[**deleteDatapoint**](MonitoringApi.md#deleteDatapoint) | **DELETE** /monitoring/metrics/{id}/datapoints | Delete a metric datapoint
[**deleteIncident**](MonitoringApi.md#deleteIncident) | **DELETE** /monitoring/incidents/{id} | End an existing incident
[**deleteMetric**](MonitoringApi.md#deleteMetric) | **DELETE** /monitoring/metrics/{id} | Delete an existing metric
[**getAlert**](MonitoringApi.md#getAlert) | **GET** /monitoring/alerts/{id} | Get a single alert
[**getAlerts**](MonitoringApi.md#getAlerts) | **GET** /monitoring/alerts | List and search alerts
[**getIncident**](MonitoringApi.md#getIncident) | **GET** /monitoring/incidents/{id} | Get a single incident
[**getIncidentEvents**](MonitoringApi.md#getIncidentEvents) | **GET** /monitoring/incidents/{id}/events | Get the events of an incident
[**getIncidents**](MonitoringApi.md#getIncidents) | **GET** /monitoring/incidents | List and search incidents
[**getMetric**](MonitoringApi.md#getMetric) | **GET** /monitoring/metrics/{id} | Get a single metric
[**getMetrics**](MonitoringApi.md#getMetrics) | **GET** /monitoring/metrics | List and search metrics
[**postBatch**](MonitoringApi.md#postBatch) | **POST** /monitoring/metrics/datapoints | Post a metric datapoint batch
[**postDatapoint**](MonitoringApi.md#postDatapoint) | **POST** /monitoring/metrics/{id}/datapoints | Post a metric datapoint
[**receiveEvent**](MonitoringApi.md#receiveEvent) | **POST** /monitoring/incidents | Report an incident event
[**startRecordMetric**](MonitoringApi.md#startRecordMetric) | **POST** /monitoring/metrics/{id}/start | Start recording a metric
[**stopRecordMetric**](MonitoringApi.md#stopRecordMetric) | **POST** /monitoring/metrics/{id}/stop | Stop recording a metric
[**updateAlert**](MonitoringApi.md#updateAlert) | **PUT** /monitoring/alerts/{id} | Update an existing alert
[**updateMetric**](MonitoringApi.md#updateMetric) | **PUT** /monitoring/metrics/{id} | Update an existing metric


<a name="createAlert"></a>
# **createAlert**
> MonitoringAlertResource createAlert(opts)

Create a new alert

&lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var opts = { 
  'alertResource': new KnetikCloud.MonitoringAlertResource() // MonitoringAlertResource | The alert object
};
apiInstance.createAlert(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertResource** | [**MonitoringAlertResource**](MonitoringAlertResource.md)| The alert object | [optional] 

### Return type

[**MonitoringAlertResource**](MonitoringAlertResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMetric"></a>
# **createMetric**
> MonitoringMetricResource createMetric(opts)

Create a new metric

&lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var opts = { 
  'metricResource': new KnetikCloud.MonitoringMetricResource() // MonitoringMetricResource | The new metric
};
apiInstance.createMetric(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricResource** | [**MonitoringMetricResource**](MonitoringMetricResource.md)| The new metric | [optional] 

### Return type

[**MonitoringMetricResource**](MonitoringMetricResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAlert"></a>
# **deleteAlert**
> deleteAlert(id)

Delete an existing alert

&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The alert id

apiInstance.deleteAlert(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The alert id | 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDatapoint"></a>
# **deleteDatapoint**
> deleteDatapoint(id, opts)

Delete a metric datapoint

Only works for counter and guage type. &lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The metric id

var opts = { 
  'dimensions': "dimensions_example" // String | The dimensions of the specific datapoint to delete, in the form key1:value1,key2:val2
};
apiInstance.deleteDatapoint(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The metric id | 
 **dimensions** | **String**| The dimensions of the specific datapoint to delete, in the form key1:value1,key2:val2 | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteIncident"></a>
# **deleteIncident**
> deleteIncident(id)

End an existing incident

Does not delete the incident, but marks it as resolved by setting the end date.&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The incident id

apiInstance.deleteIncident(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The incident id | 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteMetric"></a>
# **deleteMetric**
> deleteMetric(id)

Delete an existing metric

This will delete all metrics referencing this metric as its parent.  &lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The metric id

apiInstance.deleteMetric(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The metric id | 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlert"></a>
# **getAlert**
> MonitoringAlertResource getAlert(id)

Get a single alert

&lt;b&gt;Permissions Needed:&lt;/b&gt; GET&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The alert id

apiInstance.getAlert(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The alert id | 

### Return type

[**MonitoringAlertResource**](MonitoringAlertResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAlerts"></a>
# **getAlerts**
> PageResourceMonitoringAlertResource getAlerts(opts)

List and search alerts

Get a list of alerts with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getAlerts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceMonitoringAlertResource**](PageResourceMonitoringAlertResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIncident"></a>
# **getIncident**
> MonitoringIncidentResource getIncident(id)

Get a single incident

&lt;b&gt;Permissions Needed:&lt;/b&gt; GET&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The incident id

apiInstance.getIncident(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The incident id | 

### Return type

[**MonitoringIncidentResource**](MonitoringIncidentResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIncidentEvents"></a>
# **getIncidentEvents**
> PageResourceMonitoringIncidentEventResource getIncidentEvents(id, opts)

Get the events of an incident

&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The incident id

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getIncidentEvents(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The incident id | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceMonitoringIncidentEventResource**](PageResourceMonitoringIncidentEventResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIncidents"></a>
# **getIncidents**
> PageResourceMonitoringIncidentResource getIncidents(opts)

List and search incidents

Get a list of incidents with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getIncidents(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceMonitoringIncidentResource**](PageResourceMonitoringIncidentResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMetric"></a>
# **getMetric**
> MonitoringMetricResource getMetric(id)

Get a single metric

&lt;b&gt;Permissions Needed:&lt;/b&gt; GET&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The metric id

apiInstance.getMetric(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The metric id | 

### Return type

[**MonitoringMetricResource**](MonitoringMetricResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMetrics"></a>
# **getMetrics**
> PageResourceMonitoringMetricResource getMetrics(opts)

List and search metrics

Get a list of metrics with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getMetrics(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceMonitoringMetricResource**](PageResourceMonitoringMetricResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postBatch"></a>
# **postBatch**
> postBatch(opts)

Post a metric datapoint batch

Only works with counter and gauge metrics. Re-submit the entire batch in case of failure. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var opts = { 
  'batch': [new KnetikCloud.MonitoringMetricDatapointResource()] // [MonitoringMetricDatapointResource] | The metric datapoints
};
apiInstance.postBatch(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch** | [**[MonitoringMetricDatapointResource]**](MonitoringMetricDatapointResource.md)| The metric datapoints | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postDatapoint"></a>
# **postDatapoint**
> postDatapoint(id, opts)

Post a metric datapoint

Only works with counter and gauge metrics. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The metric id

var opts = { 
  'metricDatapoint': new KnetikCloud.MonitoringMetricDatapointResource() // MonitoringMetricDatapointResource | The metric datapoint
};
apiInstance.postDatapoint(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The metric id | 
 **metricDatapoint** | [**MonitoringMetricDatapointResource**](MonitoringMetricDatapointResource.md)| The metric datapoint | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="receiveEvent"></a>
# **receiveEvent**
> MonitoringIncidentResource receiveEvent(opts)

Report an incident event

Updates the current incident for an alert or starts a new one if none current. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions:&lt;/b&gt; POST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var opts = { 
  'incidentResource': new KnetikCloud.MonitoringIncidentEventResource() // MonitoringIncidentEventResource | The new incident
};
apiInstance.receiveEvent(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentResource** | [**MonitoringIncidentEventResource**](MonitoringIncidentEventResource.md)| The new incident | [optional] 

### Return type

[**MonitoringIncidentResource**](MonitoringIncidentResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="startRecordMetric"></a>
# **startRecordMetric**
> startRecordMetric(id, opts)

Start recording a metric

Only works with delta and timer metrics. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The metric id

var opts = { 
  'metricRecord': new KnetikCloud.MonitoringMetricRecordResource() // MonitoringMetricRecordResource | The metric record
};
apiInstance.startRecordMetric(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The metric id | 
 **metricRecord** | [**MonitoringMetricRecordResource**](MonitoringMetricRecordResource.md)| The metric record | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="stopRecordMetric"></a>
# **stopRecordMetric**
> stopRecordMetric(id, opts)

Stop recording a metric

Only works with delta and timer metrics. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; RECORD

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The metric id

var opts = { 
  'metricRecord': new KnetikCloud.MonitoringMetricRecordResource() // MonitoringMetricRecordResource | The metric record
};
apiInstance.stopRecordMetric(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The metric id | 
 **metricRecord** | [**MonitoringMetricRecordResource**](MonitoringMetricRecordResource.md)| The metric record | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAlert"></a>
# **updateAlert**
> updateAlert(id, opts)

Update an existing alert

&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The alert id

var opts = { 
  'alertResource': new KnetikCloud.MonitoringAlertResource() // MonitoringAlertResource | The alert object
};
apiInstance.updateAlert(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The alert id | 
 **alertResource** | [**MonitoringAlertResource**](MonitoringAlertResource.md)| The alert object | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateMetric"></a>
# **updateMetric**
> updateMetric(id, opts)

Update an existing metric

&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');
var defaultClient = KnetikCloud.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_client_credentials_grant
var oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
oauth2_client_credentials_grant.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: oauth2_password_grant
var oauth2_password_grant = defaultClient.authentications['oauth2_password_grant'];
oauth2_password_grant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikCloud.MonitoringApi();

var id = "id_example"; // String | The metric id

var opts = { 
  'metricResource': new KnetikCloud.MonitoringMetricResource() // MonitoringMetricResource | The metric object
};
apiInstance.updateMetric(id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The metric id | 
 **metricResource** | [**MonitoringMetricResource**](MonitoringMetricResource.md)| The metric object | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

