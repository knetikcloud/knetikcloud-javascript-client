# KnetikCloud.RuleEngineActionsApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBREActions**](RuleEngineActionsApi.md#getBREActions) | **GET** /bre/actions | Get a list of available actions


<a name="getBREActions"></a>
# **getBREActions**
> PageResourceActionResource getBREActions(opts)

Get a list of available actions

&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_ACTIONS_USER

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

var apiInstance = new KnetikCloud.RuleEngineActionsApi();

var opts = { 
  'filterCategory': "filterCategory_example", // String | Filter for actions that are within a specific category
  'filterName': "filterName_example", // String | Filter for actions that have names containing the given string
  'filterTags': "filterTags_example", // String | Filter for actions that have all of the given tags (comma separated list)
  'filterSearch': "filterSearch_example", // String | Filter for actions containing the given words somewhere within name, description and tags
  'size': 25, // Number | The number of objects returned per page
  'page': 1 // Number | The number of the page returned, starting with 1
};
apiInstance.getBREActions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCategory** | **String**| Filter for actions that are within a specific category | [optional] 
 **filterName** | **String**| Filter for actions that have names containing the given string | [optional] 
 **filterTags** | **String**| Filter for actions that have all of the given tags (comma separated list) | [optional] 
 **filterSearch** | **String**| Filter for actions containing the given words somewhere within name, description and tags | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]

### Return type

[**PageResourceActionResource**](PageResourceActionResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

