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
    root.KnetikCloud.ActionVariableResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ActionVariableResource model module.
   * @module model/ActionVariableResource
   * @version 3.0.270
   */

  /**
   * Constructs a new <code>ActionVariableResource</code>.
   * @alias module:model/ActionVariableResource
   * @class
   * @param name {String} The name of the variable
   * @param optional {Boolean} Whether this variable is optional and can be left out/null
   * @param type {String} The type of the variable (see variable type endpoint for list)
   */
  var exports = function(name, optional, type) {
    var _this = this;

    _this['name'] = name;
    _this['optional'] = optional;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>ActionVariableResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionVariableResource} obj Optional instance to populate.
   * @return {module:model/ActionVariableResource} The populated <code>ActionVariableResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('optional')) {
        obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
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
  
  var discriminatorValue = 'ActionVariableResource';


  /**
   * The name of the variable
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Whether this variable is optional and can be left out/null
   * @member {Boolean} optional
   */
  exports.prototype['optional'] = undefined;
  /**
   * The type of the variable (see variable type endpoint for list)
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


