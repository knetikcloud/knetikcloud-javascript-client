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
    define(['ApiClient', 'model/PropertyFieldResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyFieldResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PropertyFieldResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PropertyFieldResource);
  }
}(this, function(ApiClient, PropertyFieldResource) {
  'use strict';




  /**
   * The PropertyFieldResource model module.
   * @module model/PropertyFieldResource
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>PropertyFieldResource</code>.
   * @alias module:model/PropertyFieldResource
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>PropertyFieldResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertyFieldResource} obj Optional instance to populate.
   * @return {module:model/PropertyFieldResource} The populated <code>PropertyFieldResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('inner_type')) {
        obj['inner_type'] = ApiClient.convertToType(data['inner_type'], 'String');
      }
      if (data.hasOwnProperty('inner_type_fields')) {
        obj['inner_type_fields'] = ApiClient.convertToType(data['inner_type_fields'], [PropertyFieldResource]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('valid_values')) {
        obj['valid_values'] = ApiClient.convertToType(data['valid_values'], ['String']);
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
  
  var discriminatorValue = 'PropertyFieldResource';


  /**
   * A description of the field
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The type of values within a 'list' type field
   * @member {module:model/PropertyFieldResource.InnerTypeEnum} inner_type
   */
  exports.prototype['inner_type'] = undefined;
  /**
   * A description of fields within objects within a 'list' type field, when inner_type is 'object'
   * @member {Array.<module:model/PropertyFieldResource>} inner_type_fields
   */
  exports.prototype['inner_type_fields'] = undefined;
  /**
   * The name of the field
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Whether the field is required
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;
  /**
   * The type of the field
   * @member {module:model/PropertyFieldResource.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * A list of valid values for 'enum' type fields
   * @member {Array.<String>} valid_values
   */
  exports.prototype['valid_values'] = undefined;


  /**
   * Allowed values for the <code>inner_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InnerTypeEnum = {
    /**
     * value: "integer"
     * @const
     */
    "integer": "integer",
    /**
     * value: "number"
     * @const
     */
    "number": "number",
    /**
     * value: "bool"
     * @const
     */
    "bool": "bool",
    /**
     * value: "string"
     * @const
     */
    "string": "string",
    /**
     * value: "enumeration"
     * @const
     */
    "enumeration": "enumeration",
    /**
     * value: "list"
     * @const
     */
    "list": "list",
    /**
     * value: "object"
     * @const
     */
    "object": "object",
    /**
     * value: "definition"
     * @const
     */
    "definition": "definition"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "integer"
     * @const
     */
    "integer": "integer",
    /**
     * value: "number"
     * @const
     */
    "number": "number",
    /**
     * value: "bool"
     * @const
     */
    "bool": "bool",
    /**
     * value: "string"
     * @const
     */
    "string": "string",
    /**
     * value: "enumeration"
     * @const
     */
    "enumeration": "enumeration",
    /**
     * value: "list"
     * @const
     */
    "list": "list",
    /**
     * value: "object"
     * @const
     */
    "object": "object",
    /**
     * value: "definition"
     * @const
     */
    "definition": "definition"  };


  return exports;
}));


