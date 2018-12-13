# KnetikCloud.AuthProvidersApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProvider**](AuthProvidersApi.md#createProvider) | **POST** /auth/providers | Create a new OAuth 2 provider
[**deleteProvider**](AuthProvidersApi.md#deleteProvider) | **DELETE** /auth/providers/{provider_id} | Delete an existing OAuth 2 provider
[**getProvider**](AuthProvidersApi.md#getProvider) | **GET** /auth/providers/{provider_id} | Get an existing OAuth 2 provider
[**getProviders**](AuthProvidersApi.md#getProviders) | **GET** /auth/providers | List OAuth 2 providers
[**updateProvider**](AuthProvidersApi.md#updateProvider) | **PUT** /auth/providers/{provider_id} | Update an existing OAuth 2 provider


<a name="createProvider"></a>
# **createProvider**
> OAuth2ProviderResource createProvider(providerResource)

Create a new OAuth 2 provider

&lt;b&gt;Permissions Needed:&lt;/b&gt; POST

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

var apiInstance = new KnetikCloud.AuthProvidersApi();

var providerResource = new KnetikCloud.OAuth2ProviderResource(); // OAuth2ProviderResource | providerResource

apiInstance.createProvider(providerResource).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerResource** | [**OAuth2ProviderResource**](OAuth2ProviderResource.md)| providerResource | 

### Return type

[**OAuth2ProviderResource**](OAuth2ProviderResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProvider"></a>
# **deleteProvider**
> deleteProvider(providerId)

Delete an existing OAuth 2 provider

&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE

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

var apiInstance = new KnetikCloud.AuthProvidersApi();

var providerId = "providerId_example"; // String | provider_id

apiInstance.deleteProvider(providerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**| provider_id | 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProvider"></a>
# **getProvider**
> OAuth2ProviderResource getProvider(providerId)

Get an existing OAuth 2 provider

&lt;b&gt;Permissions Needed:&lt;/b&gt; GET

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

var apiInstance = new KnetikCloud.AuthProvidersApi();

var providerId = "providerId_example"; // String | provider_id

apiInstance.getProvider(providerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**| provider_id | 

### Return type

[**OAuth2ProviderResource**](OAuth2ProviderResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviders"></a>
# **getProviders**
> PageResourceOAuth2ProviderResource getProviders()

List OAuth 2 providers

&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST

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

var apiInstance = new KnetikCloud.AuthProvidersApi();
apiInstance.getProviders().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PageResourceOAuth2ProviderResource**](PageResourceOAuth2ProviderResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateProvider"></a>
# **updateProvider**
> updateProvider(providerId, providerResource)

Update an existing OAuth 2 provider

&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT

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

var apiInstance = new KnetikCloud.AuthProvidersApi();

var providerId = "providerId_example"; // String | provider_id

var providerResource = new KnetikCloud.OAuth2ProviderResource(); // OAuth2ProviderResource | providerResource

apiInstance.updateProvider(providerId, providerResource).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**| provider_id | 
 **providerResource** | [**OAuth2ProviderResource**](OAuth2ProviderResource.md)| providerResource | 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

