# KnetikCloud.Reporting_UsageApi

All URIs are relative to *https://jsapi-integration.us-east-1.elasticbeanstalk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsageByDay**](Reporting_UsageApi.md#getUsageByDay) | **GET** /reporting/usage/day | Returns aggregated endpoint usage information by day
[**getUsageByHour**](Reporting_UsageApi.md#getUsageByHour) | **GET** /reporting/usage/hour | Returns aggregated endpoint usage information by hour
[**getUsageByMinute**](Reporting_UsageApi.md#getUsageByMinute) | **GET** /reporting/usage/minute | Returns aggregated endpoint usage information by minute
[**getUsageByMonth**](Reporting_UsageApi.md#getUsageByMonth) | **GET** /reporting/usage/month | Returns aggregated endpoint usage information by month
[**getUsageByYear**](Reporting_UsageApi.md#getUsageByYear) | **GET** /reporting/usage/year | Returns aggregated endpoint usage information by year
[**getUsageEndpoints**](Reporting_UsageApi.md#getUsageEndpoints) | **GET** /reporting/usage/endpoints | Returns list of endpoints called (method and url)


<a name="getUsageByDay"></a>
# **getUsageByDay**
> PageResourceUsageInfo getUsageByDay(startDate, endDate, opts)

Returns aggregated endpoint usage information by day

&lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN

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

var apiInstance = new KnetikCloud.Reporting_UsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getUsageByDay(startDate, endDate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsageByHour"></a>
# **getUsageByHour**
> PageResourceUsageInfo getUsageByHour(startDate, endDate, opts)

Returns aggregated endpoint usage information by hour

&lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN

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

var apiInstance = new KnetikCloud.Reporting_UsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getUsageByHour(startDate, endDate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsageByMinute"></a>
# **getUsageByMinute**
> PageResourceUsageInfo getUsageByMinute(startDate, endDate, opts)

Returns aggregated endpoint usage information by minute

&lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN

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

var apiInstance = new KnetikCloud.Reporting_UsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getUsageByMinute(startDate, endDate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsageByMonth"></a>
# **getUsageByMonth**
> PageResourceUsageInfo getUsageByMonth(startDate, endDate, opts)

Returns aggregated endpoint usage information by month

&lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN

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

var apiInstance = new KnetikCloud.Reporting_UsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoint. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getUsageByMonth(startDate, endDate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoint. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsageByYear"></a>
# **getUsageByYear**
> PageResourceUsageInfo getUsageByYear(startDate, endDate, opts)

Returns aggregated endpoint usage information by year

&lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN

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

var apiInstance = new KnetikCloud.Reporting_UsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

var opts = { 
  'combineEndpoints': false, // Boolean | Whether to combine counts from different endpoints. Removes the url and method from the result object
  'method': "method_example", // String | Filter for a certain endpoint method.  Must include url as well to work
  'url': "url_example", // String | Filter for a certain endpoint.  Must include method as well to work
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getUsageByYear(startDate, endDate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 
 **combineEndpoints** | **Boolean**| Whether to combine counts from different endpoints. Removes the url and method from the result object | [optional] [default to false]
 **method** | **String**| Filter for a certain endpoint method.  Must include url as well to work | [optional] 
 **url** | **String**| Filter for a certain endpoint.  Must include method as well to work | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceUsageInfo**](PageResourceUsageInfo.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsageEndpoints"></a>
# **getUsageEndpoints**
> [&#39;String&#39;] getUsageEndpoints(startDate, endDate)

Returns list of endpoints called (method and url)

&lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN

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

var apiInstance = new KnetikCloud.Reporting_UsageApi();

var startDate = 789; // Number | The beginning of the range being requested, unix timestamp in seconds

var endDate = 789; // Number | The ending of the range being requested, unix timestamp in seconds

apiInstance.getUsageEndpoints(startDate, endDate).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Number**| The beginning of the range being requested, unix timestamp in seconds | 
 **endDate** | **Number**| The ending of the range being requested, unix timestamp in seconds | 

### Return type

**[&#39;String&#39;]**

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

