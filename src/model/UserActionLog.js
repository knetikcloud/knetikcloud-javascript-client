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
    root.KnetikCloud.UserActionLog = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserActionLog model module.
   * @module model/UserActionLog
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>UserActionLog</code>.
   * @alias module:model/UserActionLog
   * @class
   * @param actionDescription {String} A description of the action taken
   * @param actionName {String} The name of the action taken
   */
  var exports = function(actionDescription, actionName) {
    var _this = this;

    _this['action_description'] = actionDescription;
    _this['action_name'] = actionName;





  };

  /**
   * Constructs a <code>UserActionLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserActionLog} obj Optional instance to populate.
   * @return {module:model/UserActionLog} The populated <code>UserActionLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action_description')) {
        obj['action_description'] = ApiClient.convertToType(data['action_description'], 'String');
      }
      if (data.hasOwnProperty('action_name')) {
        obj['action_name'] = ApiClient.convertToType(data['action_name'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], {'String': 'String'});
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('request_id')) {
        obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
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
  
  var discriminatorValue = 'UserActionLog';


  /**
   * A description of the action taken
   * @member {String} action_description
   */
  exports.prototype['action_description'] = undefined;
  /**
   * The name of the action taken
   * @member {String} action_name
   */
  exports.prototype['action_name'] = undefined;
  /**
   * The date of the action, unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * A map of additional details such as the target of the action
   * @member {Object.<String, String>} details
   */
  exports.prototype['details'] = undefined;
  /**
   * The id of the log entry
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the api request that spawned the action, if generated internally
   * @member {String} request_id
   */
  exports.prototype['request_id'] = undefined;
  /**
   * The id of the user that took the action, if any. Read-only if not posting with LOGS_ADMIN
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


