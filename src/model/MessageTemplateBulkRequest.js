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
    root.KnetikCloud.MessageTemplateBulkRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageTemplateBulkRequest model module.
   * @module model/MessageTemplateBulkRequest
   * @version 3.0.21
   */

  /**
   * Constructs a new <code>MessageTemplateBulkRequest</code>.
   * @alias module:model/MessageTemplateBulkRequest
   * @class
   * @param data {Object} The data to fill the templates with
   * @param ids {Array.<String>} A list of message template ids
   */
  var exports = function(data, ids) {
    var _this = this;

    _this['data'] = data;
    _this['ids'] = ids;
  };

  /**
   * Constructs a <code>MessageTemplateBulkRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageTemplateBulkRequest} obj Optional instance to populate.
   * @return {module:model/MessageTemplateBulkRequest} The populated <code>MessageTemplateBulkRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('ids')) {
        obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
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
  
  var discriminatorValue = 'MessageTemplateBulkRequest';


  /**
   * The data to fill the templates with
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * A list of message template ids
   * @member {Array.<String>} ids
   */
  exports.prototype['ids'] = undefined;



  return exports;
}));


