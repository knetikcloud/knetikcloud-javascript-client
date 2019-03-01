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
    root.KnetikCloud.ActionContextobject = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ActionContextobject model module.
   * @module model/ActionContextobject
   * @version 3.0.15
   */

  /**
   * Constructs a new <code>ActionContextobject</code>.
   * @alias module:model/ActionContextobject
   * @class
   * @param mapping {Object} The mapping of the action context
   * @param type {String} The name of the action
   */
  var exports = function(mapping, type) {
    var _this = this;

    _this['mapping'] = mapping;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>ActionContextobject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionContextobject} obj Optional instance to populate.
   * @return {module:model/ActionContextobject} The populated <code>ActionContextobject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mapping')) {
        obj['mapping'] = ApiClient.convertToType(data['mapping'], Object);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
  
  var discriminatorValue = 'ActionContext«object»';


  /**
   * The mapping of the action context
   * @member {Object} mapping
   */
  exports.prototype['mapping'] = undefined;
  /**
   * The name of the action
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


