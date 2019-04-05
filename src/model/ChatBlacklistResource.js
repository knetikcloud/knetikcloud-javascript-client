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
    define(['ApiClient', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ChatBlacklistResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, SimpleUserResource) {
  'use strict';




  /**
   * The ChatBlacklistResource model module.
   * @module model/ChatBlacklistResource
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>ChatBlacklistResource</code>.
   * @alias module:model/ChatBlacklistResource
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ChatBlacklistResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatBlacklistResource} obj Optional instance to populate.
   * @return {module:model/ChatBlacklistResource} The populated <code>ChatBlacklistResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('blacklisted_user')) {
        obj['blacklisted_user'] = SimpleUserResource.constructFromObject(data['blacklisted_user']);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
  
  var discriminatorValue = 'ChatBlacklistResource';


  /**
   * The user that is blacklisted
   * @member {module:model/SimpleUserResource} blacklisted_user
   */
  exports.prototype['blacklisted_user'] = undefined;
  /**
   * The date the user was blacklisted
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The unique ID for this chat message blacklist
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The user that has blacklisted someone
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


