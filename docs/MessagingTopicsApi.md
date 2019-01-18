# KnetikCloud.MessagingTopicsApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disableTopicSubscriber**](MessagingTopicsApi.md#disableTopicSubscriber) | **PUT** /messaging/topics/{id}/subscribers/{user_id}/disabled | Enable or disable messages for a user
[**getTopicSubscriber**](MessagingTopicsApi.md#getTopicSubscriber) | **GET** /messaging/topics/{id}/subscribers/{user_id} | Get a subscriber to a topic
[**getUserTopics**](MessagingTopicsApi.md#getUserTopics) | **GET** /users/{id}/topics | Get all messaging topics for a given user


<a name="disableTopicSubscriber"></a>
# **disableTopicSubscriber**
> disableTopicSubscriber(id, userId, disabled)

Enable or disable messages for a user

Useful for opt-out options on a single topic. Consider multiple topics for multiple opt-out options. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self

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

var apiInstance = new KnetikCloud.MessagingTopicsApi();

var id = "id_example"; // String | The id of the topic

var userId = "userId_example"; // String | The id of the subscriber or 'me'

var disabled = new KnetikCloud.ValueWrapperboolean(); // ValueWrapperboolean | disabled

apiInstance.disableTopicSubscriber(id, userId, disabled).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the topic | 
 **userId** | **String**| The id of the subscriber or &#39;me&#39; | 
 **disabled** | [**ValueWrapperboolean**](ValueWrapperboolean.md)| disabled | 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopicSubscriber"></a>
# **getTopicSubscriber**
> TopicSubscriberResource getTopicSubscriber(id, userId)

Get a subscriber to a topic

&lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self

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

var apiInstance = new KnetikCloud.MessagingTopicsApi();

var id = "id_example"; // String | The id of the topic

var userId = "userId_example"; // String | The id of the subscriber or 'me'

apiInstance.getTopicSubscriber(id, userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the topic | 
 **userId** | **String**| The id of the subscriber or &#39;me&#39; | 

### Return type

[**TopicSubscriberResource**](TopicSubscriberResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserTopics"></a>
# **getUserTopics**
> PageResourceTopicResource getUserTopics(id)

Get all messaging topics for a given user

&lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self

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

var apiInstance = new KnetikCloud.MessagingTopicsApi();

var id = "id_example"; // String | The id of the user or 'me'

apiInstance.getUserTopics(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the user or &#39;me&#39; | 

### Return type

[**PageResourceTopicResource**](PageResourceTopicResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

