# KnetikCloud.TemplatesApi

All URIs are relative to *https://devsandbox.knetikcloud.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTemplate**](TemplatesApi.md#createTemplate) | **POST** /templates/{type_hint} | Create a template
[**deleteTemplate**](TemplatesApi.md#deleteTemplate) | **DELETE** /templates/{type_hint}/{id} | Delete a template
[**getTemplate**](TemplatesApi.md#getTemplate) | **GET** /templates/{type_hint}/{id} | Get a template
[**getTemplates**](TemplatesApi.md#getTemplates) | **GET** /templates/{type_hint} | List and search templates
[**patchTemplate**](TemplatesApi.md#patchTemplate) | **PATCH** /templates/{type_hint}/{id} | Patch a template
[**validate**](TemplatesApi.md#validate) | **POST** /templates/{type_hint}/validate | Validate a templated resource


<a name="createTemplate"></a>
# **createTemplate**
> TemplateResource createTemplate(typeHint, opts)

Create a template

&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST

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

var apiInstance = new KnetikCloud.TemplatesApi();

var typeHint = "typeHint_example"; // String | The type for the resource this template applies to

var opts = { 
  'template': new KnetikCloud.TemplateResource() // TemplateResource | The template
};
apiInstance.createTemplate(typeHint, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeHint** | **String**| The type for the resource this template applies to | 
 **template** | [**TemplateResource**](TemplateResource.md)| The template | [optional] 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTemplate"></a>
# **deleteTemplate**
> deleteTemplate(typeHint, id, opts)

Delete a template

&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE

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

var apiInstance = new KnetikCloud.TemplatesApi();

var typeHint = "typeHint_example"; // String | The type for the resource this template applies to

var id = "id_example"; // String | The id of the template

var opts = { 
  'cascade': "cascade_example" // String | How to cascade the delete
};
apiInstance.deleteTemplate(typeHint, id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeHint** | **String**| The type for the resource this template applies to | 
 **id** | **String**| The id of the template | 
 **cascade** | **String**| How to cascade the delete | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTemplate"></a>
# **getTemplate**
> TemplateResource getTemplate(typeHint, id)

Get a template

&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET

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

var apiInstance = new KnetikCloud.TemplatesApi();

var typeHint = "typeHint_example"; // String | The type for the resource this template applies to

var id = "id_example"; // String | The id of the template

apiInstance.getTemplate(typeHint, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeHint** | **String**| The type for the resource this template applies to | 
 **id** | **String**| The id of the template | 

### Return type

[**TemplateResource**](TemplateResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTemplates"></a>
# **getTemplates**
> PageResourceTemplateResource getTemplates(typeHint, opts)

List and search templates

&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST

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

var apiInstance = new KnetikCloud.TemplatesApi();

var typeHint = "typeHint_example"; // String | The type for the resource this template applies to

var opts = { 
  'size': 25, // Number | The number of objects returned per page
  'page': 1, // Number | The number of the page returned, starting with 1
  'order': "id:ASC" // String | A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
};
apiInstance.getTemplates(typeHint, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeHint** | **String**| The type for the resource this template applies to | 
 **size** | **Number**| The number of objects returned per page | [optional] [default to 25]
 **page** | **Number**| The number of the page returned, starting with 1 | [optional] [default to 1]
 **order** | **String**| A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] | [optional] [default to id:ASC]

### Return type

[**PageResourceTemplateResource**](PageResourceTemplateResource.md)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchTemplate"></a>
# **patchTemplate**
> patchTemplate(typeHint, id, opts)

Patch a template

&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT

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

var apiInstance = new KnetikCloud.TemplatesApi();

var typeHint = "typeHint_example"; // String | The type for the resource this template applies to

var id = "id_example"; // String | The id of the template

var opts = { 
  'templatePatchResource': new KnetikCloud.PatchResource(), // PatchResource | The patch resource object
  'testValidation': true // Boolean | If true, this will test validation but not submit the patch request
};
apiInstance.patchTemplate(typeHint, id, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeHint** | **String**| The type for the resource this template applies to | 
 **id** | **String**| The id of the template | 
 **templatePatchResource** | [**PatchResource**](PatchResource.md)| The patch resource object | [optional] 
 **testValidation** | **Boolean**| If true, this will test validation but not submit the patch request | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validate"></a>
# **validate**
> validate(typeHint, opts)

Validate a templated resource

Error code thrown if invalid.&lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET

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

var apiInstance = new KnetikCloud.TemplatesApi();

var typeHint = "typeHint_example"; // String | The type for the resource this template applies to

var opts = { 
  'resource': new KnetikCloud.BasicTemplatedResource() // BasicTemplatedResource | The resource to validate
};
apiInstance.validate(typeHint, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeHint** | **String**| The type for the resource this template applies to | 
 **resource** | [**BasicTemplatedResource**](BasicTemplatedResource.md)| The resource to validate | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_client_credentials_grant](../README.md#oauth2_client_credentials_grant), [oauth2_password_grant](../README.md#oauth2_password_grant)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

