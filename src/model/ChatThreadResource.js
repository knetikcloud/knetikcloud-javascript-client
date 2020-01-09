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
    root.KnetikCloud.ChatThreadResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChatThreadResource model module.
   * @module model/ChatThreadResource
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>ChatThreadResource</code>.
   * @alias module:model/ChatThreadResource
   * @class
   * @param recipientId {String} The id of the recipient
   * @param recipientType {module:model/ChatThreadResource.RecipientTypeEnum} The recipient type of the thread
   */
  var exports = function(recipientId, recipientType) {
    var _this = this;





    _this['recipient_id'] = recipientId;
    _this['recipient_type'] = recipientType;


  };

  /**
   * Constructs a <code>ChatThreadResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatThreadResource} obj Optional instance to populate.
   * @return {module:model/ChatThreadResource} The populated <code>ChatThreadResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active_users')) {
        obj['active_users'] = ApiClient.convertToType(data['active_users'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('recipient_id')) {
        obj['recipient_id'] = ApiClient.convertToType(data['recipient_id'], 'String');
      }
      if (data.hasOwnProperty('recipient_type')) {
        obj['recipient_type'] = ApiClient.convertToType(data['recipient_type'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'ChatThreadResource';


  /**
   * The number of active users in the thread
   * @member {Number} active_users
   */
  exports.prototype['active_users'] = undefined;
  /**
   * The number of messages in the thread
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The date the thread was created
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The id for this thread
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the recipient
   * @member {String} recipient_id
   */
  exports.prototype['recipient_id'] = undefined;
  /**
   * The recipient type of the thread
   * @member {module:model/ChatThreadResource.RecipientTypeEnum} recipient_type
   */
  exports.prototype['recipient_type'] = undefined;
  /**
   * The subject of the thread
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * The date the thread was updated
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;


  /**
   * Allowed values for the <code>recipient_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RecipientTypeEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "topic"
     * @const
     */
    "topic": "topic"  };


  return exports;
}));


