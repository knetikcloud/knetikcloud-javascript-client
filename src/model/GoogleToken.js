/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
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
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.GoogleToken = factory(root.KnetikcloudSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GoogleToken model module.
   * @module model/GoogleToken
   * @version latest

   */

  /**
   * Constructs a new <code>GoogleToken</code>.
   * @alias module:model/GoogleToken
   * @class
   * @param authorizationCode {String} A valid authorization code from google. See google documention for how to obtain one.
   */
  var exports = function(authorizationCode) {
    var _this = this;

    _this['authorization_code'] = authorizationCode;
  };

  /**
   * Constructs a <code>GoogleToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoogleToken} obj Optional instance to populate.
   * @return {module:model/GoogleToken} The populated <code>GoogleToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorization_code')) {
        obj['authorization_code'] = ApiClient.convertToType(data['authorization_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * A valid authorization code from google. See google documention for how to obtain one.
   * @member {String} authorization_code
   */
  exports.prototype['authorization_code'] = undefined;



  return exports;
}));


