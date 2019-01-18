# KnetikCloud.NotificationsApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotificationType**](NotificationsApi.md#createNotificationType) | **POST** /notifications/types | Create a notification type
[**deleteNotificationType**](NotificationsApi.md#deleteNotificationType) | **DELETE** /notifications/types/{id} | Delete a notification type
[**getNotificationType**](NotificationsApi.md#getNotificationType) | **GET** /notifications/types/{id} | Get a single notification type
[**getNotificationTypes**](NotificationsApi.md#getNotificationTypes) | **GET** /notifications/types | List and search notification types
[**getUserNotificationInfo**](NotificationsApi.md#getUserNotificationInfo) | **GET** /users/{user_id}/notifications/types/{type_id} | View a user&#39;s notification settings for a type
[**getUserNotificationInfoList**](NotificationsApi.md#getUserNotificationInfoList) | **GET** /users/{user_id}/notifications/types | View a user&#39;s notification settings
[**getUserNotifications**](NotificationsApi.md#getUserNotifications) | **GET** /users/{id}/notifications | Get notifications
[**sendNotification**](NotificationsApi.md#sendNotification) | **POST** /notifications | Send a notification
[**setUserNotificationStatus**](NotificationsApi.md#setUserNotificationStatus) | **PUT** /users/{user_id}/notifications/{notification_id}/status | Set notification status
[**silenceDirectNotifications**](NotificationsApi.md#silenceDirectNotifications) | **PUT** /users/{user_id}/notifications/types/{type_id}/silenced | Enable or disable direct notifications for a user
[**updateNotificationType**](NotificationsApi.md#updateNotificationType) | **PUT** /notifications/types/{id} | Update a notificationType


<a name="createNotificationType"></a>
# **createNotificationType**
> NotificationTypeResource createNotificationType(opts)

Create a notification type

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN

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

var apiInstance = new KnetikCloud.NotificationsApi();

var opts = { 
  'notificationType': new KnetikCloud.NotificationTypeResource() // NotificationTypeResource | notificationType
};
apiInstance.createNotificationType(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationType** | [**NotificationTypeResource**](NotificationTypeResource.md)| notificationType | [optional] 

### Return type

[**NotificationTypeResource**](NotificationTypeResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNotificationType"></a>
# **deleteNotificationType**
> deleteNotificationType(id)

Delete a notification type

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN

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

var apiInstance = new KnetikCloud.NotificationsApi();

var id = "id_example"; // String | id

apiInstance.deleteNotificationType(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNotificationType"></a>
# **getNotificationType**
> NotificationTypeResource getNotificationType(id)

Get a single notification type

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN

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

var apiInstance = new KnetikCloud.NotificationsApi();

var id = "id_example"; // String | id

apiInstance.getNotificationType(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**NotificationTypeResource**](NotificationTypeResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNotificationTypes"></a>
# **getNotificationTypes**
> PageResourceNotificationTypeResource getNotificationTypes(opts)

List and search notification types

Get a list of notification type with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN

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

var apiInstance = new KnetikCloud.NotificationsApi();

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getNotificationTypes(opts).then(function(data) {
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

[**PageResourceNotificationTypeResource**](PageResourceNotificationTypeResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserNotificationInfo"></a>
# **getUserNotificationInfo**
> NotificationUserTypeResource getUserNotificationInfo(typeId, userId)

View a user&#39;s notification settings for a type

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self

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

var apiInstance = new KnetikCloud.NotificationsApi();

var typeId = "typeId_example"; // String | The id of the topic

var userId = "userId_example"; // String | The id of the subscriber or 'me'

apiInstance.getUserNotificationInfo(typeId, userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeId** | **String**| The id of the topic | 
 **userId** | **String**| The id of the subscriber or &#39;me&#39; | 

### Return type

[**NotificationUserTypeResource**](NotificationUserTypeResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserNotificationInfoList"></a>
# **getUserNotificationInfoList**
> PageResourceNotificationUserTypeResource getUserNotificationInfoList(userId, opts)

View a user&#39;s notification settings

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self

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

var apiInstance = new KnetikCloud.NotificationsApi();

var userId = "userId_example"; // String | The id of the subscriber or 'me'

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getUserNotificationInfoList(userId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the subscriber or &#39;me&#39; | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceNotificationUserTypeResource**](PageResourceNotificationUserTypeResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserNotifications"></a>
# **getUserNotifications**
> PageResourceUserNotificationResource getUserNotifications(id, opts)

Get notifications

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self

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

var apiInstance = new KnetikCloud.NotificationsApi();

var id = "id_example"; // String | The id of the user or 'me'

var opts = { 
  'filterStatus': "filterStatus_example", // String | filter for notifications with a given status
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getUserNotifications(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the user or &#39;me&#39; | 
 **filterStatus** | **String**| filter for notifications with a given status | [optional] 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceUserNotificationResource**](PageResourceUserNotificationResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendNotification"></a>
# **sendNotification**
> NotificationResource sendNotification(opts)

Send a notification

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN

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

var apiInstance = new KnetikCloud.NotificationsApi();

var opts = { 
  'notification': new KnetikCloud.NotificationResource() // NotificationResource | notification
};
apiInstance.sendNotification(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notification** | [**NotificationResource**](NotificationResource.md)| notification | [optional] 

### Return type

[**NotificationResource**](NotificationResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserNotificationStatus"></a>
# **setUserNotificationStatus**
> setUserNotificationStatus(userId, notificationId, opts)

Set notification status

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self

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

var apiInstance = new KnetikCloud.NotificationsApi();

var userId = "userId_example"; // String | The id of the user or 'me'

var notificationId = "notificationId_example"; // String | The id of the notification

var opts = { 
  'notification': new KnetikCloud.UserNotificationStatusWrapper() // UserNotificationStatusWrapper | status
};
apiInstance.setUserNotificationStatus(userId, notificationId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The id of the user or &#39;me&#39; | 
 **notificationId** | **String**| The id of the notification | 
 **notification** | [**UserNotificationStatusWrapper**](UserNotificationStatusWrapper.md)| status | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="silenceDirectNotifications"></a>
# **silenceDirectNotifications**
> silenceDirectNotifications(typeId, userId, silenced)

Enable or disable direct notifications for a user

Allows enabling or disabling messages for a given notification type when sent direct to the user. Notifications can still be retrieved by endpoint. For notifications broadcased to a topic, see the topic service to disable messages for the user there. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self

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

var apiInstance = new KnetikCloud.NotificationsApi();

var typeId = "typeId_example"; // String | The id of the topic

var userId = "userId_example"; // String | The id of the subscriber or 'me'

var silenced = new KnetikCloud.ValueWrapperboolean(); // ValueWrapperboolean | silenced

apiInstance.silenceDirectNotifications(typeId, userId, silenced).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeId** | **String**| The id of the topic | 
 **userId** | **String**| The id of the subscriber or &#39;me&#39; | 
 **silenced** | [**ValueWrapperboolean**](ValueWrapperboolean.md)| silenced | 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNotificationType"></a>
# **updateNotificationType**
> NotificationTypeResource updateNotificationType(id, opts)

Update a notificationType

&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN

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

var apiInstance = new KnetikCloud.NotificationsApi();

var id = "id_example"; // String | id

var opts = { 
  'notificationType': new KnetikCloud.NotificationTypeResource() // NotificationTypeResource | notificationType
};
apiInstance.updateNotificationType(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **notificationType** | [**NotificationTypeResource**](NotificationTypeResource.md)| notificationType | [optional] 

### Return type

[**NotificationTypeResource**](NotificationTypeResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

