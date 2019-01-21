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
    define(['ApiClient', 'model/ClientCustomizationResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientCustomizationResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ClientResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ClientCustomizationResource);
  }
}(this, function(ApiClient, ClientCustomizationResource) {
  'use strict';




  /**
   * The ClientResource model module.
   * @module model/ClientResource
   * @version 3.0.12
   */

  /**
   * Constructs a new <code>ClientResource</code>.
   * @alias module:model/ClientResource
   * @class
   * @param clientKey {String} The client_id field of the oauth token request
   * @param name {String} The friendly name of the client
   * @param secret {String} The client-secret field of the oauth request when creating a private client
   */
  var exports = function(clientKey, name, secret) {
    var _this = this;



    _this['client_key'] = clientKey;




    _this['name'] = name;


    _this['secret'] = secret;
  };

  /**
   * Constructs a <code>ClientResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientResource} obj Optional instance to populate.
   * @return {module:model/ClientResource} The populated <code>ClientResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token_validity_seconds')) {
        obj['access_token_validity_seconds'] = ApiClient.convertToType(data['access_token_validity_seconds'], 'Number');
      }
      if (data.hasOwnProperty('client_customization')) {
        obj['client_customization'] = ClientCustomizationResource.constructFromObject(data['client_customization']);
      }
      if (data.hasOwnProperty('client_key')) {
        obj['client_key'] = ApiClient.convertToType(data['client_key'], 'String');
      }
      if (data.hasOwnProperty('grant_types')) {
        obj['grant_types'] = ApiClient.convertToType(data['grant_types'], ['String']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('is_public')) {
        obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('redirect_uris')) {
        obj['redirect_uris'] = ApiClient.convertToType(data['redirect_uris'], ['String']);
      }
      if (data.hasOwnProperty('refresh_token_validity_seconds')) {
        obj['refresh_token_validity_seconds'] = ApiClient.convertToType(data['refresh_token_validity_seconds'], 'Number');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
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
  
  var discriminatorValue = 'ClientResource';


  /**
   * The expiration time of an initial oauth token in seconds
   * @member {Number} access_token_validity_seconds
   */
  exports.prototype['access_token_validity_seconds'] = undefined;
  /**
   * The customizable fields for the login page
   * @member {module:model/ClientCustomizationResource} client_customization
   */
  exports.prototype['client_customization'] = undefined;
  /**
   * The client_id field of the oauth token request
   * @member {String} client_key
   */
  exports.prototype['client_key'] = undefined;
  /**
   * The oauth grant type as in: password (username/password auth), client_credentials (server-to-server, private clients), refresh_token (to allow clients to refresh their initial token), facebook, google, etc) See documentation for a complete list. Use dedicated endpoint PUT /grant-types to edit this list
   * @member {Array.<String>} grant_types
   */
  exports.prototype['grant_types'] = undefined;
  /**
   * Generated unique ID for the client
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Set to true if the client is public i.e the secret key can be secured
   * @member {Boolean} is_public
   */
  exports.prototype['is_public'] = undefined;
  /**
   * Used to flag system clients that are not meant to be tinkered with
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * The friendly name of the client
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A redirection URL to use when granting access to third-parties (seldomly used)
   * @member {Array.<String>} redirect_uris
   */
  exports.prototype['redirect_uris'] = undefined;
  /**
   * The expiration time of a refresh oauth token in seconds
   * @member {Number} refresh_token_validity_seconds
   */
  exports.prototype['refresh_token_validity_seconds'] = undefined;
  /**
   * The client-secret field of the oauth request when creating a private client
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;



  return exports;
}));


