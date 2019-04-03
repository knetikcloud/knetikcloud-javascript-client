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
    root.KnetikCloud.Maintenance = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Maintenance model module.
   * @module model/Maintenance
   * @version 3.0.17
   */

  /**
   * Constructs a new <code>Maintenance</code>.
   * @alias module:model/Maintenance
   * @class
   * @param accessLocked {Boolean} Whether access to the system has been locked
   * @param message {String} User displayable message about the maintenance
   */
  var exports = function(accessLocked, message) {
    var _this = this;

    _this['access_locked'] = accessLocked;

    _this['message'] = message;
  };

  /**
   * Constructs a <code>Maintenance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Maintenance} obj Optional instance to populate.
   * @return {module:model/Maintenance} The populated <code>Maintenance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_locked')) {
        obj['access_locked'] = ApiClient.convertToType(data['access_locked'], 'Boolean');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], Object);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
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
  
  var discriminatorValue = 'Maintenance';


  /**
   * Whether access to the system has been locked
   * @member {Boolean} access_locked
   */
  exports.prototype['access_locked'] = undefined;
  /**
   * A simple object of any schema for client side use and processing
   * @member {Object} details
   */
  exports.prototype['details'] = undefined;
  /**
   * User displayable message about the maintenance
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


