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
    root.KnetikCloud.UserNotificationResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserNotificationResource model module.
   * @module model/UserNotificationResource
   * @version 3.0.269
   */

  /**
   * Constructs a new <code>UserNotificationResource</code>.
   * @alias module:model/UserNotificationResource
   * @class
   * @param notificationId {String} The id of the notification
   * @param notificationTypeId {String} The id of the notification type
   * @param recipient {String} The id of the recipient, dependent on the recipient_type. The user's id or the topic's id
   * @param recipientType {module:model/UserNotificationResource.RecipientTypeEnum} The type of recipient for the notification. Either a user, or all users in a topic
   * @param userId {Number} The id of the user
   */
  var exports = function(notificationId, notificationTypeId, recipient, recipientType, userId) {
    var _this = this;



    _this['notification_id'] = notificationId;
    _this['notification_type_id'] = notificationTypeId;
    _this['recipient'] = recipient;
    _this['recipient_type'] = recipientType;



    _this['user_id'] = userId;
  };

  /**
   * Constructs a <code>UserNotificationResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserNotificationResource} obj Optional instance to populate.
   * @return {module:model/UserNotificationResource} The populated <code>UserNotificationResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], Object);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('notification_id')) {
        obj['notification_id'] = ApiClient.convertToType(data['notification_id'], 'String');
      }
      if (data.hasOwnProperty('notification_type_id')) {
        obj['notification_type_id'] = ApiClient.convertToType(data['notification_type_id'], 'String');
      }
      if (data.hasOwnProperty('recipient')) {
        obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
      }
      if (data.hasOwnProperty('recipient_type')) {
        obj['recipient_type'] = ApiClient.convertToType(data['recipient_type'], 'String');
      }
      if (data.hasOwnProperty('retrieve_date')) {
        obj['retrieve_date'] = ApiClient.convertToType(data['retrieve_date'], 'Number');
      }
      if (data.hasOwnProperty('send_date')) {
        obj['send_date'] = ApiClient.convertToType(data['send_date'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
  
  var discriminatorValue = 'UserNotificationResource';


  /**
   * The data to send and fill templates
   * @member {Object} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The resolved message, if template provided in the notification ype
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The id of the notification
   * @member {String} notification_id
   */
  exports.prototype['notification_id'] = undefined;
  /**
   * The id of the notification type
   * @member {String} notification_type_id
   */
  exports.prototype['notification_type_id'] = undefined;
  /**
   * The id of the recipient, dependent on the recipient_type. The user's id or the topic's id
   * @member {String} recipient
   */
  exports.prototype['recipient'] = undefined;
  /**
   * The type of recipient for the notification. Either a user, or all users in a topic
   * @member {module:model/UserNotificationResource.RecipientTypeEnum} recipient_type
   */
  exports.prototype['recipient_type'] = undefined;
  /**
   * The date this notification was first retrieved
   * @member {Number} retrieve_date
   */
  exports.prototype['retrieve_date'] = undefined;
  /**
   * The date this notification was sent
   * @member {Number} send_date
   */
  exports.prototype['send_date'] = undefined;
  /**
   * The user's status for this notification
   * @member {module:model/UserNotificationResource.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The id of the user
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;


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

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "read"
     * @const
     */
    "read": "read",
    /**
     * value: "hidden"
     * @const
     */
    "hidden": "hidden"  };


  return exports;
}));


