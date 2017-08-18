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
    root.KnetikCloud.ForwardLog = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ForwardLog model module.
   * @module model/ForwardLog
   * @version 3.0.7
   */

  /**
   * Constructs a new <code>ForwardLog</code>.
   * @alias module:model/ForwardLog
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ForwardLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForwardLog} obj Optional instance to populate.
   * @return {module:model/ForwardLog} The populated <code>ForwardLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Number');
      }
      if (data.hasOwnProperty('error_msg')) {
        obj['error_msg'] = ApiClient.convertToType(data['error_msg'], 'String');
      }
      if (data.hasOwnProperty('http_status_code')) {
        obj['http_status_code'] = ApiClient.convertToType(data['http_status_code'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], Object);
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], 'String');
      }
      if (data.hasOwnProperty('retry_count')) {
        obj['retry_count'] = ApiClient.convertToType(data['retry_count'], 'Number');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
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
  
  var discriminatorValue = 'ForwardLog';


  /**
   * The end date of the forward log entry
   * @member {Number} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {String} error_msg
   */
  exports.prototype['error_msg'] = undefined;
  /**
   * The http status code the forward log entry
   * @member {Number} http_status_code
   */
  exports.prototype['http_status_code'] = undefined;
  /**
   * The id of the forward log entry
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The payload of the forward log entry
   * @member {Object} payload
   */
  exports.prototype['payload'] = undefined;
  /**
   * The response string of the forward log entry
   * @member {String} response
   */
  exports.prototype['response'] = undefined;
  /**
   * The retry count of the forward log entry
   * @member {Number} retry_count
   */
  exports.prototype['retry_count'] = undefined;
  /**
   * The start date of the forward log entry
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The endpoint url of the forward log entry
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


