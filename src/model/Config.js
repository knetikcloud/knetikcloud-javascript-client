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
    root.KnetikCloud.Config = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Config model module.
   * @module model/Config
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>Config</code>.
   * @alias module:model/Config
   * @class
   * @param name {String} The name of the config
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;


  };

  /**
   * Constructs a <code>Config</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Config} obj Optional instance to populate.
   * @return {module:model/Config} The populated <code>Config</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('public_read')) {
        obj['public_read'] = ApiClient.convertToType(data['public_read'], 'Boolean');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
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
  
  var discriminatorValue = 'Config';


  /**
   * The description of the config.  Max 255 characters
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The name of the config
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Whether the config is public for viewing. True means that it can be publicly viewed by all. Default: false
   * @member {Boolean} public_read
   */
  exports.prototype['public_read'] = undefined;
  /**
   * The value of the config
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


