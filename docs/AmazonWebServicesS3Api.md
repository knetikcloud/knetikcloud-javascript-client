# KnetikCloud.AmazonWebServicesS3Api

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDownloadURL**](AmazonWebServicesS3Api.md#getDownloadURL) | **GET** /amazon/s3/download-url | Get a temporary signed S3 URL for download
[**getSignedS3URL**](AmazonWebServicesS3Api.md#getSignedS3URL) | **GET** /amazon/s3/signed-post-url | Get a signed S3 URL for upload


<a name="getDownloadURL"></a>
# **getDownloadURL**
> StringWrapper getDownloadURL(opts)

Get a temporary signed S3 URL for download

To give access to files in your own S3 account, you will need to grant KnetikcCloud access to the file by adjusting your bucket policy accordingly. See S3 documentation for details. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; S3_ADMIN

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

var apiInstance = new KnetikCloud.AmazonWebServicesS3Api();

var opts = { 
  'bucket': "bucket_example", // String | S3 bucket name
  'path': "path_example", // String | The path to the file relative the bucket (the s3 object key)
  'expiration': 60 // Number | The number of seconds this URL will be valid. Default to 60
};
apiInstance.getDownloadURL(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket** | **String**| S3 bucket name | [optional] 
 **path** | **String**| The path to the file relative the bucket (the s3 object key) | [optional] 
 **expiration** | **Number**| The number of seconds this URL will be valid. Default to 60 | [optional] [default to 60]

### Return type

[**StringWrapper**](StringWrapper.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSignedS3URL"></a>
# **getSignedS3URL**
> AmazonS3Activity getSignedS3URL(opts)

Get a signed S3 URL for upload

Requires the file name and file content type (i.e., &#39;video/mpeg&#39;). Make a PUT to the resulting url to upload the file and use the cdn_url to retrieve it after. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; S3_USER or S3_ADMIN

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

var apiInstance = new KnetikCloud.AmazonWebServicesS3Api();

var opts = { 
  'filename': "filename_example", // String | The file name
  'contentType': "contentType_example" // String | The content type
};
apiInstance.getSignedS3URL(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | **String**| The file name | [optional] 
 **contentType** | **String**| The content type | [optional] 

### Return type

[**AmazonS3Activity**](AmazonS3Activity.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

