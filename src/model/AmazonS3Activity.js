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
    root.KnetikCloud.AmazonS3Activity = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AmazonS3Activity model module.
   * @module model/AmazonS3Activity
   * @version 3.0.10
   */

  /**
   * Constructs a new <code>AmazonS3Activity</code>.
   * @alias module:model/AmazonS3Activity
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>AmazonS3Activity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AmazonS3Activity} obj Optional instance to populate.
   * @return {module:model/AmazonS3Activity} The populated <code>AmazonS3Activity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('cdn_url')) {
        obj['cdn_url'] = ApiClient.convertToType(data['cdn_url'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('object_key')) {
        obj['object_key'] = ApiClient.convertToType(data['object_key'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
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
  
  var discriminatorValue = 'AmazonS3Activity';


  /**
   * S3 action (i.e., 'PUT') associated with the activity
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * URL for accessing the resource. Will use a CDN if configured, or direct to S3 if not
   * @member {String} cdn_url
   */
  exports.prototype['cdn_url'] = undefined;
  /**
   * Date the resource was created in S3
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * Name of the file being processed as a resource in S3
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * Unique id of the S3 activity
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * S3 object key for the resource
   * @member {String} object_key
   */
  exports.prototype['object_key'] = undefined;
  /**
   * URL that one can PUT the file to, to upload it to S3
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The id of the user that created this S3 activity
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


