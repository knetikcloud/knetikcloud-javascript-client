/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.OAuth2ProviderResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OAuth2ProviderResource model module.
   * @module model/OAuth2ProviderResource
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>OAuth2ProviderResource</code>.
   * @alias module:model/OAuth2ProviderResource
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>OAuth2ProviderResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuth2ProviderResource} obj Optional instance to populate.
   * @return {module:model/OAuth2ProviderResource} The populated <code>OAuth2ProviderResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorization_grant_type')) {
        obj['authorization_grant_type'] = ApiClient.convertToType(data['authorization_grant_type'], 'String');
      }
      if (data.hasOwnProperty('authorization_uri')) {
        obj['authorization_uri'] = ApiClient.convertToType(data['authorization_uri'], 'String');
      }
      if (data.hasOwnProperty('client_authentication_method')) {
        obj['client_authentication_method'] = ApiClient.convertToType(data['client_authentication_method'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('client_name')) {
        obj['client_name'] = ApiClient.convertToType(data['client_name'], 'String');
      }
      if (data.hasOwnProperty('client_secret')) {
        obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('jwk_set_uri')) {
        obj['jwk_set_uri'] = ApiClient.convertToType(data['jwk_set_uri'], 'String');
      }
      if (data.hasOwnProperty('oidc_compliant')) {
        obj['oidc_compliant'] = ApiClient.convertToType(data['oidc_compliant'], 'Boolean');
      }
      if (data.hasOwnProperty('provider_details')) {
        obj['provider_details'] = ApiClient.convertToType(data['provider_details'], {'String': 'String'});
      }
      if (data.hasOwnProperty('provider_id')) {
        obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'String');
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], 'String');
      }
      if (data.hasOwnProperty('token_uri')) {
        obj['token_uri'] = ApiClient.convertToType(data['token_uri'], 'String');
      }
      if (data.hasOwnProperty('user_info_endpoint_uri')) {
        obj['user_info_endpoint_uri'] = ApiClient.convertToType(data['user_info_endpoint_uri'], 'String');
      }
      if (data.hasOwnProperty('user_info_endpoint_user_name_attribute_name')) {
        obj['user_info_endpoint_user_name_attribute_name'] = ApiClient.convertToType(data['user_info_endpoint_user_name_attribute_name'], 'String');
      }
    }
    return obj;
  }

  exports.registerChild = function(child, discriminatorValue) {
	  child.discriminatorField = exports.discriminatorField;
	  child.discriminatorValue = discriminatorValue;
	  child.parent = exports;
	  if(exports.children == null)
		  exports.children = {};
	  exports.children[discriminatorValue] = child;
	  if(exports.parent != null)
		  exports.parent.registerChild(child, discriminatorValue);
  }
  
  var discriminatorValue = 'OAuth2ProviderResource';


  /**
   * The grant type chosen when creating your client with the provider. Typically authorization_code for maximum security.
   * @member {module:model/OAuth2ProviderResource.AuthorizationGrantTypeEnum} authorization_grant_type
   */
  exports.prototype['authorization_grant_type'] = undefined;
  /**
   * The provider's sign-in page URL. Typically something like oauth/authorize
   * @member {String} authorization_uri
   */
  exports.prototype['authorization_uri'] = undefined;
  /**
   * The method used by the provider to capture the credentials. See the provider's documentation for details
   * @member {module:model/OAuth2ProviderResource.ClientAuthenticationMethodEnum} client_authentication_method
   */
  exports.prototype['client_authentication_method'] = undefined;
  /**
   * The oauth client ID from the provider. This is used to exchange codes for tokens.
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * The user-friendly name of this provider
   * @member {String} client_name
   */
  exports.prototype['client_name'] = undefined;
  /**
   * The oauth client secret from the provider. This is used to exchange codes for tokens.
   * @member {String} client_secret
   */
  exports.prototype['client_secret'] = undefined;
  /**
   * Applied to the sign-in button.  EX: #FF0033
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * The Font Awesome classes to be applied to the sign-in button. Ex: fab fa-facebook
   * @member {String} icon
   */
  exports.prototype['icon'] = undefined;
  /**
   * The provider's URL that allows decoding JWT oauth tokens
   * @member {String} jwk_set_uri
   */
  exports.prototype['jwk_set_uri'] = undefined;
  /**
   * Whether this provider follows OIDC standards.  If not, you must provide the required mapping in provider_details
   * @member {Boolean} oidc_compliant
   */
  exports.prototype['oidc_compliant'] = undefined;
  /**
   * A map of keys and the keys they translate to for non-OIDC complient providers.  The 'email' key is required if emails are set to required in the config service.  Optional keys are other keys in the user object, currently ignoring lists and maps.
   * @member {Object.<String, String>} provider_details
   */
  exports.prototype['provider_details'] = undefined;
  /**
   * The unique ID given to this provider
   * @member {String} provider_id
   */
  exports.prototype['provider_id'] = undefined;
  /**
   * The list of permissions to request the provider when signing-in (Allow MyApp to access x, y, z information). Comma-separated strings without spaces
   * @member {String} scopes
   */
  exports.prototype['scopes'] = undefined;
  /**
   * The provider's token URL used to exchange the authorization code for a token. Typically something like oauth/token
   * @member {String} token_uri
   */
  exports.prototype['token_uri'] = undefined;
  /**
   * The provider's user info URL AKA \"me endpoint\" used to load the user's details associated with the oauth token
   * @member {String} user_info_endpoint_uri
   */
  exports.prototype['user_info_endpoint_uri'] = undefined;
  /**
   * The name of the field in the provider's User Info Endpoint that provides a unique identifier for the connected user.  Defaults to 'id'.
   * @member {String} user_info_endpoint_user_name_attribute_name
   */
  exports.prototype['user_info_endpoint_user_name_attribute_name'] = undefined;


  /**
   * Allowed values for the <code>authorization_grant_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthorizationGrantTypeEnum = {
    /**
     * value: "authorization_code"
     * @const
     */
    "authorization_code": "authorization_code",
    /**
     * value: "implicit"
     * @const
     */
    "implicit": "implicit"  };

  /**
   * Allowed values for the <code>client_authentication_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ClientAuthenticationMethodEnum = {
    /**
     * value: "basic"
     * @const
     */
    "basic": "basic",
    /**
     * value: "post"
     * @const
     */
    "post": "post"  };


  return exports;
}));


