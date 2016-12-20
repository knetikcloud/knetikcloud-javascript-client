# KnetikPlatformApiDocumentationLatest.ReportingOrdersApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDailyInvoicesUsingGET**](ReportingOrdersApi.md#getDailyInvoicesUsingGET) | **GET** /reporting/orders/count/{currency_code} | Retrieve invoice counts aggregated by time ranges


<a name="getDailyInvoicesUsingGET"></a>
# **getDailyInvoicesUsingGET**
> PageResourceAggregateInvoiceReportResource getDailyInvoicesUsingGET(currencyCode, opts)

Retrieve invoice counts aggregated by time ranges

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.ReportingOrdersApi();

var currencyCode = "currencyCode_example"; // String | The code for a currency to get sales data for

var opts = { 
  'granularity': "day", // String | The time duration to aggregate by
  'filterPaymentStatus': "filterPaymentStatus_example", // String | A payment status to filter results by, can be a comma separated list
  'filterFulfillmentStatus': "filterFulfillmentStatus_example", // String | An invoice fulfillment status to filter results by, can be a comma separated list
  'startDate': 789, // Number | The start of the time range to return, unix timestamp in seconds. Default is beginning of time
  'endDate': 789 // Number | The end of the time range to return, unix timestamp in seconds. Default is end of time
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDailyInvoicesUsingGET(currencyCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **String**| The code for a currency to get sales data for | 
 **granularity** | **String**| The time duration to aggregate by | [optional] [default to day]
 **filterPaymentStatus** | **String**| A payment status to filter results by, can be a comma separated list | [optional] 
 **filterFulfillmentStatus** | **String**| An invoice fulfillment status to filter results by, can be a comma separated list | [optional] 
 **startDate** | **Number**| The start of the time range to return, unix timestamp in seconds. Default is beginning of time | [optional] 
 **endDate** | **Number**| The end of the time range to return, unix timestamp in seconds. Default is end of time | [optional] 

### Return type

[**PageResourceAggregateInvoiceReportResource**](PageResourceAggregateInvoiceReportResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
