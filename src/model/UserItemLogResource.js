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
    define(['ApiClient', 'model/SimpleReferenceResourceint', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleReferenceResourceint'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UserItemLogResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SimpleReferenceResourceint, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, SimpleReferenceResourceint, SimpleUserResource) {
  'use strict';




  /**
   * The UserItemLogResource model module.
   * @module model/UserItemLogResource
   * @version 3.0.13
   */

  /**
   * Constructs a new <code>UserItemLogResource</code>.
   * @alias module:model/UserItemLogResource
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>UserItemLogResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserItemLogResource} obj Optional instance to populate.
   * @return {module:model/UserItemLogResource} The populated <code>UserItemLogResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('info')) {
        obj['info'] = ApiClient.convertToType(data['info'], 'String');
      }
      if (data.hasOwnProperty('item')) {
        obj['item'] = SimpleReferenceResourceint.constructFromObject(data['item']);
      }
      if (data.hasOwnProperty('log_date')) {
        obj['log_date'] = ApiClient.convertToType(data['log_date'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUserResource.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('user_inventory')) {
        obj['user_inventory'] = ApiClient.convertToType(data['user_inventory'], 'Number');
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
  
  var discriminatorValue = 'UserItemLogResource';


  /**
   * The log entry id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Additional information defined by the type
   * @member {String} info
   */
  exports.prototype['info'] = undefined;
  /**
   * The item interacted with
   * @member {module:model/SimpleReferenceResourceint} item
   */
  exports.prototype['item'] = undefined;
  /**
   * The date/time this event occurred in seconds since epoch
   * @member {Number} log_date
   */
  exports.prototype['log_date'] = undefined;
  /**
   * The type of event
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The user making the interaction
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The id of the inventory entry this event is related to, if any
   * @member {Number} user_inventory
   */
  exports.prototype['user_inventory'] = undefined;



  return exports;
}));


