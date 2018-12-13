# KnetikCloud.AccessTokenApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOAuthToken**](AccessTokenApi.md#getOAuthToken) | **POST** /oauth/token | Get access token


<a name="getOAuthToken"></a>
# **getOAuthToken**
> OAuth2Resource getOAuthToken(grantType, clientId, opts)

Get access token

### Example
```javascript
var KnetikCloud = require('knetikcloud-sdk');

var apiInstance = new KnetikCloud.AccessTokenApi();

var grantType = "client_credentials"; // String | Grant type

var clientId = "knetik"; // String | The id of the client

var opts = { 
  'clientSecret': "clientSecret_example", // String | The secret key of the client.  Used only with a grant_type of client_credentials
  'username': "username_example", // String | The username of the client. Used only with a grant_type of password
  'password': "password_example", // String | The password of the client. Used only with a grant_type of password
  'token': "token_example", // String | The 3rd party authentication token. Used only with a grant_type of facebook, google, etc (social plugins)
  'refreshToken': "refreshToken_example" // String | The refresh token obtained during prior authentication. Used only with a grant_type of refresh_token
};
apiInstance.getOAuthToken(grantType, clientId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Grant type | [default to client_credentials]
 **clientId** | **String**| The id of the client | [default to knetik]
 **clientSecret** | **String**| The secret key of the client.  Used only with a grant_type of client_credentials | [optional] 
 **username** | **String**| The username of the client. Used only with a grant_type of password | [optional] 
 **password** | **String**| The password of the client. Used only with a grant_type of password | [optional] 
 **token** | **String**| The 3rd party authentication token. Used only with a grant_type of facebook, google, etc (social plugins) | [optional] 
 **refreshToken** | **String**| The refresh token obtained during prior authentication. Used only with a grant_type of refresh_token | [optional] 

### Return type

[**OAuth2Resource**](OAuth2Resource.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

