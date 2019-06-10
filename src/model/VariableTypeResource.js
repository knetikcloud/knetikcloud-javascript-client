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
    root.KnetikCloud.VariableTypeResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VariableTypeResource model module.
   * @module model/VariableTypeResource
   * @version 3.0.263
   */

  /**
   * Constructs a new <code>VariableTypeResource</code>.
   * @alias module:model/VariableTypeResource
   * @class
   * @param base {module:model/VariableTypeResource.BaseEnum} The base class of the type
   * @param name {String} The name of the variable type. Used as the unique id
   */
  var exports = function(base, name) {
    var _this = this;

    _this['base'] = base;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>VariableTypeResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariableTypeResource} obj Optional instance to populate.
   * @return {module:model/VariableTypeResource} The populated <code>VariableTypeResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('base')) {
        obj['base'] = ApiClient.convertToType(data['base'], 'String');
      }
      if (data.hasOwnProperty('enumerable')) {
        obj['enumerable'] = ApiClient.convertToType(data['enumerable'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
  
  var discriminatorValue = 'VariableTypeResource';


  /**
   * The base class of the type
   * @member {module:model/VariableTypeResource.BaseEnum} base
   */
  exports.prototype['base'] = undefined;
  /**
   * Whether the type comes from a set of valid values that the system can provided (such as users)
   * @member {Boolean} enumerable
   */
  exports.prototype['enumerable'] = undefined;
  /**
   * The name of the variable type. Used as the unique id
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>base</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BaseEnum = {
    /**
     * value: "NUMBER"
     * @const
     */
    "NUMBER": "NUMBER",
    /**
     * value: "INTEGER"
     * @const
     */
    "INTEGER": "INTEGER",
    /**
     * value: "STRING"
     * @const
     */
    "STRING": "STRING",
    /**
     * value: "DATE"
     * @const
     */
    "DATE": "DATE",
    /**
     * value: "BOOLEAN"
     * @const
     */
    "BOOLEAN": "BOOLEAN"  };


  return exports;
}));


