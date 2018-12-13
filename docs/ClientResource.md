# KnetikCloud.ClientResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token_validity_seconds** | **Number** | The expiration time of an initial oauth token in seconds | [optional] 
**client_customization** | [**ClientCustomizationResource**](ClientCustomizationResource.md) | The customizable fields for the login page | [optional] 
**client_key** | **String** | The client_id field of the oauth token request | 
**grant_types** | **[String]** | The oauth grant type as in: password (username/password auth), client_credentials (server-to-server, private clients), refresh_token (to allow clients to refresh their initial token), facebook, google, etc) See documentation for a complete list. Use dedicated endpoint PUT /grant-types to edit this list | [optional] 
**id** | **Number** | Generated unique ID for the client | [optional] 
**is_public** | **Boolean** | Set to true if the client is public i.e the secret key can be secured | [optional] 
**locked** | **Boolean** | Used to flag system clients that are not meant to be tinkered with | [optional] 
**name** | **String** | The friendly name of the client | 
**redirect_uris** | **[String]** | A redirection URL to use when granting access to third-parties (seldomly used) | [optional] 
**refresh_token_validity_seconds** | **Number** | The expiration time of a refresh oauth token in seconds | [optional] 
**secret** | **String** | The client-secret field of the oauth request when creating a private client | 


