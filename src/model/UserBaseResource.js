/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UserBaseResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserBaseResource model module.
   * @module model/UserBaseResource
   * @version Latest
   */

  /**
   * Constructs a new <code>UserBaseResource</code>.
   * @alias module:model/UserBaseResource
   * @class
   * @param email {String} The user's email address (private). May be required and/or unique depending on system configuration (both on by default). Must match standard email requirements if provided (RFC 2822)
   * @param username {String} The login username for the user (private). May be set to match email if system does not require usernames separately.
   */
  var exports = function(email, username) {
    var _this = this;



    _this['email'] = email;


    _this['username'] = username;
  };

  /**
   * Constructs a <code>UserBaseResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserBaseResource} obj Optional instance to populate.
   * @return {module:model/UserBaseResource} The populated <code>UserBaseResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('avatar_url')) {
        obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fullname')) {
        obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * The url of the user's avatar image
   * @member {String} avatar_url
   */
  exports.prototype['avatar_url'] = undefined;
  /**
   * The chosen display name of the user, defaults to username if not present
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * The user's email address (private). May be required and/or unique depending on system configuration (both on by default). Must match standard email requirements if provided (RFC 2822)
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The user's full name (private)
   * @member {String} fullname
   */
  exports.prototype['fullname'] = undefined;
  /**
   * The id of the user
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The login username for the user (private). May be set to match email if system does not require usernames separately.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


