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
    root.KnetikCloud.NotificationTypeResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotificationTypeResource model module.
   * @module model/NotificationTypeResource
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>NotificationTypeResource</code>.
   * @alias module:model/NotificationTypeResource
   * @class
   * @param name {String} The name of the notification type
   */
  var exports = function(name) {
    var _this = this;






    _this['name'] = name;


  };

  /**
   * Constructs a <code>NotificationTypeResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationTypeResource} obj Optional instance to populate.
   * @return {module:model/NotificationTypeResource} The populated <code>NotificationTypeResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('email_body_template_external')) {
        obj['email_body_template_external'] = ApiClient.convertToType(data['email_body_template_external'], 'Boolean');
      }
      if (data.hasOwnProperty('email_body_template_id')) {
        obj['email_body_template_id'] = ApiClient.convertToType(data['email_body_template_id'], 'String');
      }
      if (data.hasOwnProperty('email_subject_template_id')) {
        obj['email_subject_template_id'] = ApiClient.convertToType(data['email_subject_template_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('sms_template_id')) {
        obj['sms_template_id'] = ApiClient.convertToType(data['sms_template_id'], 'String');
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
  
  var discriminatorValue = 'NotificationTypeResource';


  /**
   * The date the type was created, as a unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * Whether the email body should be resolved. If true, the external email delivery system will be expected to handle the templating (Mandrill/Mailchimp). default: false
   * @member {Boolean} email_body_template_external
   */
  exports.prototype['email_body_template_external'] = undefined;
  /**
   * The id of a message template to resolve the email body. If null, no websocket message wil be sent
   * @member {String} email_body_template_id
   */
  exports.prototype['email_body_template_id'] = undefined;
  /**
   * The id of a message template to resolve the email subject. If null, no websocket message wil be sent
   * @member {String} email_subject_template_id
   */
  exports.prototype['email_subject_template_id'] = undefined;
  /**
   * The id of the notification type. Default: random
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the notification type
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The id of a message template to resolve the SMS message. If null, no sms message wil be sent
   * @member {String} sms_template_id
   */
  exports.prototype['sms_template_id'] = undefined;
  /**
   * The date the type was last updated, as a unix timestamp in seconds
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


