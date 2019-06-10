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
    root.KnetikCloud.S3Config = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The S3Config model module.
   * @module model/S3Config
   * @version 3.0.263
   */

  /**
   * Constructs a new <code>S3Config</code>.
   * @alias module:model/S3Config
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>S3Config</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/S3Config} obj Optional instance to populate.
   * @return {module:model/S3Config} The populated <code>S3Config</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bucket_name')) {
        obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
      }
      if (data.hasOwnProperty('cdn_url')) {
        obj['cdn_url'] = ApiClient.convertToType(data['cdn_url'], 'String');
      }
      if (data.hasOwnProperty('region')) {
        obj['region'] = ApiClient.convertToType(data['region'], 'String');
      }
      if (data.hasOwnProperty('upload_prefix')) {
        obj['upload_prefix'] = ApiClient.convertToType(data['upload_prefix'], 'String');
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
  
  var discriminatorValue = 'S3Config';


  /**
   * @member {String} bucket_name
   */
  exports.prototype['bucket_name'] = undefined;
  /**
   * @member {String} cdn_url
   */
  exports.prototype['cdn_url'] = undefined;
  /**
   * @member {String} region
   */
  exports.prototype['region'] = undefined;
  /**
   * @member {String} upload_prefix
   */
  exports.prototype['upload_prefix'] = undefined;



  return exports;
}));


