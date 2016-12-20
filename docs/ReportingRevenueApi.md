# KnetikPlatformApiDocumentationLatest.ReportingRevenueApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executiveRevenueCountrySalesUsingGET**](ReportingRevenueApi.md#executiveRevenueCountrySalesUsingGET) | **GET** /reporting/revenue/countries/{currency_code} | Get revenue info by country
[**executiveRevenueItemSalesUsingGET**](ReportingRevenueApi.md#executiveRevenueItemSalesUsingGET) | **GET** /reporting/revenue/item-sales/{currency_code} | Get item revenue info
[**executiveRevenueProductSalesUsingGET**](ReportingRevenueApi.md#executiveRevenueProductSalesUsingGET) | **GET** /reporting/revenue/products/{currency_code} | Get revenue info by item
[**executiveRevenueRefundsUsingGET**](ReportingRevenueApi.md#executiveRevenueRefundsUsingGET) | **GET** /reporting/revenue/refunds/{currency_code} | Get refund revenue info
[**executiveRevenueSubscriptionSalesUsingGET**](ReportingRevenueApi.md#executiveRevenueSubscriptionSalesUsingGET) | **GET** /reporting/revenue/subscription-sales/{currency_code} | Get subscription revenue info


<a name="executiveRevenueCountrySalesUsingGET"></a>
# **executiveRevenueCountrySalesUsingGET**
> PageResourceRevenueCountryReportResource executiveRevenueCountrySalesUsingGET(currencyCode, opts)

Get revenue info by country

Get basic info about revenue from sales of all types, summed up within a time range and split out by country. Sorted for largest revenue at the top

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingRevenueApi();

var currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

var opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789, // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executiveRevenueCountrySalesUsingGET(currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceRevenueCountryReportResource**](PageResourceRevenueCountryReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="executiveRevenueItemSalesUsingGET"></a>
# **executiveRevenueItemSalesUsingGET**
> RevenueReportResource executiveRevenueItemSalesUsingGET(currencyCode, opts)

Get item revenue info

Get basic info about revenue from sales of items and bundles (not subscriptions, shipping, etc), summed up within a time range

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingRevenueApi();

var currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

var opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789 // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executiveRevenueItemSalesUsingGET(currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 

### Return type

[**RevenueReportResource**](RevenueReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="executiveRevenueProductSalesUsingGET"></a>
# **executiveRevenueProductSalesUsingGET**
> PageResourceRevenueProductReportResource executiveRevenueProductSalesUsingGET(currencyCode, opts)

Get revenue info by item

Get basic info about revenue from sales of all types, summed up within a time range and split out by specific item. Sorted for largest revenue at the top

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingRevenueApi();

var currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

var opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789, // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executiveRevenueProductSalesUsingGET(currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceRevenueProductReportResource**](PageResourceRevenueProductReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="executiveRevenueRefundsUsingGET"></a>
# **executiveRevenueRefundsUsingGET**
> RevenueReportResource executiveRevenueRefundsUsingGET(currencyCode, opts)

Get refund revenue info

Get basic info about revenue loss from refunds (for all item types), summed up within a time range.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingRevenueApi();

var currencyCode = "currencyCode_example"; // String | The code for a currency to get refund data for

var opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789 // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executiveRevenueRefundsUsingGET(currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get refund data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 

### Return type

[**RevenueReportResource**](RevenueReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="executiveRevenueSubscriptionSalesUsingGET"></a>
# **executiveRevenueSubscriptionSalesUsingGET**
> RevenueReportResource executiveRevenueSubscriptionSalesUsingGET(currencyCode, opts)

Get subscription revenue info

Get basic info about revenue from sales of new subscriptions as well as recurring payemnts, summed up within a time range

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingRevenueApi();

var currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

var opts = { 
  'startDate': 789, // Number | The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
  'endDate': 789 // Number | The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executiveRevenueSubscriptionSalesUsingGET(currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **startDate** | **Number**| The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to aggregate, unix timestamp in seconds. Default is end of time | [optional] 

### Return type

[**RevenueReportResource**](RevenueReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
