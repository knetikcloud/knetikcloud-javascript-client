# KnetikPlatformApiDocumentationLatest.BRERuleEngineVariablesApi

All URIs are relative to *https://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListUsingGET**](BRERuleEngineVariablesApi.md#getListUsingGET) | **GET** /bre/variable-types | Get a list of variable types available


<a name="getListUsingGET"></a>
# **getListUsingGET**
> [VariableTypeResource] getListUsingGET()

Get a list of variable types available

Types include integer, string, user and invoice. These are used to qualify trigger parameters and action variables with strong typing.

### Example
```javascript
var KnetikPlatformApiDocumentationLatest = require('knetik_platform_api_documentation_latest');
var defaultClient = KnetikPlatformApiDocumentationLatest.ApiClient.default;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new KnetikPlatformApiDocumentationLatest.BRERuleEngineVariablesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getListUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[VariableTypeResource]**](VariableTypeResource.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
