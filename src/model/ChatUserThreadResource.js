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
    define(['ApiClient', 'model/ChatThreadResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChatThreadResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ChatUserThreadResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ChatThreadResource);
  }
}(this, function(ApiClient, ChatThreadResource) {
  'use strict';




  /**
   * The ChatUserThreadResource model module.
   * @module model/ChatUserThreadResource
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>ChatUserThreadResource</code>.
   * @alias module:model/ChatUserThreadResource
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ChatUserThreadResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatUserThreadResource} obj Optional instance to populate.
   * @return {module:model/ChatUserThreadResource} The populated <code>ChatUserThreadResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('read_count')) {
        obj['read_count'] = ApiClient.convertToType(data['read_count'], 'Number');
      }
      if (data.hasOwnProperty('thread')) {
        obj['thread'] = ChatThreadResource.constructFromObject(data['thread']);
      }
      if (data.hasOwnProperty('thread_id')) {
        obj['thread_id'] = ApiClient.convertToType(data['thread_id'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'ChatUserThreadResource';


  /**
   * The date the user thread was created
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The number of messages read in the thread
   * @member {Number} read_count
   */
  exports.prototype['read_count'] = undefined;
  /**
   * The details about the thread
   * @member {module:model/ChatThreadResource} thread
   */
  exports.prototype['thread'] = undefined;
  /**
   * The id of the thread
   * @member {String} thread_id
   */
  exports.prototype['thread_id'] = undefined;
  /**
   * The date the user thread was updated
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The id of the user
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


