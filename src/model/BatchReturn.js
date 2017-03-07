/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.BatchReturn = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BatchReturn model module.
   * @module model/BatchReturn
   * @version latest

   */

  /**
   * Constructs a new <code>BatchReturn</code>.
   * @alias module:model/BatchReturn
   * @class
   * @param body {Object} The result body
   * @param code {Number} The HTTP response code
   * @param uri {String} Full URI of REST call
   */
  var exports = function(body, code, uri) {
    var _this = this;

    _this['body'] = body;
    _this['code'] = code;
    _this['uri'] = uri;
  };

  /**
   * Constructs a <code>BatchReturn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchReturn} obj Optional instance to populate.
   * @return {module:model/BatchReturn} The populated <code>BatchReturn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], Object);
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * The result body
   * @member {Object} body
   */
  exports.prototype['body'] = undefined;
  /**
   * The HTTP response code
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Full URI of REST call
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


