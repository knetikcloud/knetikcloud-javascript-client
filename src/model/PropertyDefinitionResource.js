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
    root.KnetikCloud.PropertyDefinitionResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PropertyDefinitionResource model module.
   * @module model/PropertyDefinitionResource
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>PropertyDefinitionResource</code>.
   * @alias module:model/PropertyDefinitionResource
   * @class
   * @param name {String} The name of the property. Must start with a letter
   * @param required {Boolean} Whether the property is required
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(name, required, type) {
    var _this = this;



    _this['name'] = name;



    _this['required'] = required;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>PropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertyDefinitionResource} obj Optional instance to populate.
   * @return {module:model/PropertyDefinitionResource} The populated <code>PropertyDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('friendly_name')) {
        obj['friendly_name'] = ApiClient.convertToType(data['friendly_name'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('option_label_path')) {
        obj['option_label_path'] = ApiClient.convertToType(data['option_label_path'], 'String');
      }
      if (data.hasOwnProperty('option_value_path')) {
        obj['option_value_path'] = ApiClient.convertToType(data['option_value_path'], 'String');
      }
      if (data.hasOwnProperty('options_url')) {
        obj['options_url'] = ApiClient.convertToType(data['options_url'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
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
  
  var discriminatorValue = 'PropertyDefinitionResource';

exports.discriminatorField = 'type';
  /**
   * The description of the property
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The friendly front-facing name of the property
   * @member {String} friendly_name
   */
  exports.prototype['friendly_name'] = undefined;
  /**
   * The name of the property. Must start with a letter
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The JSON path to the option label
   * @member {String} option_label_path
   */
  exports.prototype['option_label_path'] = undefined;
  /**
   * The JSON path to the option value
   * @member {String} option_value_path
   */
  exports.prototype['option_value_path'] = undefined;
  /**
   * URL of service containing the property options (assumed JSON array)
   * @member {String} options_url
   */
  exports.prototype['options_url'] = undefined;
  /**
   * Whether the property is required
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;
  /**
   * The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


