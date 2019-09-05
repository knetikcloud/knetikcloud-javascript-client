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
    root.KnetikCloud.BatchRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BatchRequest model module.
   * @module model/BatchRequest
   * @version 3.0.268
   */

  /**
   * Constructs a new <code>BatchRequest</code>.
   * @alias module:model/BatchRequest
   * @class
   * @param body {Object} The request body as would be passed to the URI
   * @param contentType {String} Content type used, Ex:(application/json)
   * @param method {String} The HTTP method used, Ex: (GET)
   * @param timeout {Number} Time in seconds before process will timeout.  Default is 60.  Range is 1-300
   * @param uri {String} Full URI of REST call
   */
  var exports = function(body, contentType, method, timeout, uri) {
    var _this = this;

    _this['body'] = body;
    _this['content_type'] = contentType;
    _this['method'] = method;
    _this['timeout'] = timeout;

    _this['uri'] = uri;
  };

  /**
   * Constructs a <code>BatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchRequest} obj Optional instance to populate.
   * @return {module:model/BatchRequest} The populated <code>BatchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], Object);
      }
      if (data.hasOwnProperty('content_type')) {
        obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
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
  
  var discriminatorValue = 'BatchRequest';


  /**
   * The request body as would be passed to the URI
   * @member {Object} body
   */
  exports.prototype['body'] = undefined;
  /**
   * Content type used, Ex:(application/json)
   * @member {String} content_type
   */
  exports.prototype['content_type'] = undefined;
  /**
   * The HTTP method used, Ex: (GET)
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * Time in seconds before process will timeout.  Default is 60.  Range is 1-300
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;
  /**
   * The oauth token only
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * Full URI of REST call
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;



  return exports;
}));


