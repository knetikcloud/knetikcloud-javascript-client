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
    root.KnetikCloud.OAuth2Resource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OAuth2Resource model module.
   * @module model/OAuth2Resource
   * @version 3.0.274
   */

  /**
   * Constructs a new <code>OAuth2Resource</code>.
   * @alias module:model/OAuth2Resource
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>OAuth2Resource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OAuth2Resource} obj Optional instance to populate.
   * @return {module:model/OAuth2Resource} The populated <code>OAuth2Resource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'String');
      }
      if (data.hasOwnProperty('refresh_token')) {
        obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
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
  
  var discriminatorValue = 'OAuth2Resource';


  /**
   * The access token issued by the authorization server
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * The lifetime in seconds of the access token
   * @member {String} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * The refresh token issued by the authorization server
   * @member {String} refresh_token
   */
  exports.prototype['refresh_token'] = undefined;
  /**
   * The scope of the access token. Currently these values can be ignored, as security defaults to roles and permissions
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * The type of the token issued
   * @member {String} token_type
   */
  exports.prototype['token_type'] = undefined;



  return exports;
}));


