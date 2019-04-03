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
    define(['ApiClient', 'model/ErrorResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ErrorResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Result = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ErrorResource);
  }
}(this, function(ApiClient, ErrorResource) {
  'use strict';




  /**
   * The Result model module.
   * @module model/Result
   * @version 3.0.17
   */

  /**
   * Constructs a new <code>Result</code>.
   * @alias module:model/Result
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Result} obj Optional instance to populate.
   * @return {module:model/Result} The populated <code>Result</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('request_id')) {
        obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], [ErrorResource]);
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
  
  var discriminatorValue = 'Result';


  /**
   * The JSAPI error code
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The id used for debugging lookup
   * @member {String} request_id
   */
  exports.prototype['request_id'] = undefined;
  /**
   * The error object
   * @member {Array.<module:model/ErrorResource>} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));


