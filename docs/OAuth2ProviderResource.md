# KnetikCloud.OAuth2ProviderResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_grant_type** | **String** | The grant type chosen when creating your client with the provider. Typically authorization_code for maximum security. | [optional] 
**authorization_uri** | **String** | The provider&#39;s sign-in page URL. Typically something like oauth/authorize | [optional] 
**client_authentication_method** | **String** | The method used by the provider to capture the credentials. See the provider&#39;s documentation for details | [optional] 
**client_id** | **String** | The oauth client ID from the provider. This is used to exchange codes for tokens. | [optional] 
**client_name** | **String** | The user-friendly name of this provider | [optional] 
**client_secret** | **String** | The oauth client secret from the provider. This is used to exchange codes for tokens. | [optional] 
**color** | **String** | Applied to the sign-in button.  EX: #FF0033 | [optional] 
**icon** | **String** | The Font Awesome classes to be applied to the sign-in button. Ex: fab fa-facebook | [optional] 
**jwk_set_uri** | **String** | The provider&#39;s URL that allows decoding JWT oauth tokens | [optional] 
**oidc_compliant** | **Boolean** | Whether this provider follows OIDC standards.  If not, you must provide the required mapping in provider_details | [optional] 
**provider_details** | **{String: String}** | A map of keys and the keys they translate to for non-OIDC complient providers.  The &#39;email&#39; key is required if emails are set to required in the config service.  Optional keys are other keys in the user object, currently ignoring lists and maps. | [optional] 
**provider_id** | **String** | The unique ID given to this provider | [optional] 
**scopes** | **String** | The list of permissions to request the provider when signing-in (Allow MyApp to access x, y, z information). Comma-separated strings without spaces | [optional] 
**token_uri** | **String** | The provider&#39;s token URL used to exchange the authorization code for a token. Typically something like oauth/token | [optional] 
**user_info_endpoint_uri** | **String** | The provider&#39;s user info URL AKA \&quot;me endpoint\&quot; used to load the user&#39;s details associated with the oauth token | [optional] 
**user_info_endpoint_user_name_attribute_name** | **String** | The name of the field in the provider&#39;s User Info Endpoint that provides a unique identifier for the connected user.  Defaults to &#39;id&#39;. | [optional] 


<a name="AuthorizationGrantTypeEnum"></a>
## Enum: AuthorizationGrantTypeEnum


* `authorization_code` (value: `"authorization_code"`)

* `implicit` (value: `"implicit"`)




<a name="ClientAuthenticationMethodEnum"></a>
## Enum: ClientAuthenticationMethodEnum


* `basic` (value: `"basic"`)

* `post` (value: `"post"`)




