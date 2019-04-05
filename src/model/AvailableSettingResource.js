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
    define(['ApiClient', 'model/SettingOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingOption'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AvailableSettingResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SettingOption);
  }
}(this, function(ApiClient, SettingOption) {
  'use strict';




  /**
   * The AvailableSettingResource model module.
   * @module model/AvailableSettingResource
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>AvailableSettingResource</code>.
   * The definition of an activity parameters: ex: difficulty level
   * @alias module:model/AvailableSettingResource
   * @class
   * @param key {String} The unique ID for the setting: Ex: difficulty
   * @param name {String} The textual name of the setting: Ex: Difficulty Level
   * @param type {String} The type of the setting value: Ex: TEXT
   */
  var exports = function(key, name, type) {
    var _this = this;




    _this['key'] = key;
    _this['name'] = name;

    _this['type'] = type;
  };

  /**
   * Constructs a <code>AvailableSettingResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableSettingResource} obj Optional instance to populate.
   * @return {module:model/AvailableSettingResource} The populated <code>AvailableSettingResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('advanced_option')) {
        obj['advanced_option'] = ApiClient.convertToType(data['advanced_option'], 'Boolean');
      }
      if (data.hasOwnProperty('default_value')) {
        obj['default_value'] = ApiClient.convertToType(data['default_value'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [SettingOption]);
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
  
  var discriminatorValue = 'AvailableSettingResource';


  /**
   * Whether the setting is advanced. Default: false
   * @member {Boolean} advanced_option
   */
  exports.prototype['advanced_option'] = undefined;
  /**
   * The default value of the setting (must be in options array). Ex: easy
   * @member {String} default_value
   */
  exports.prototype['default_value'] = undefined;
  /**
   * The description of the setting: Ex: Choose the difficulty level to show more or less complicated questions (for a trivia activity)
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The unique ID for the setting: Ex: difficulty
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The textual name of the setting: Ex: Difficulty Level
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The set of options available for this setting, Ex: easy, medium, hard
   * @member {Array.<module:model/SettingOption>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * The type of the setting value: Ex: TEXT
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


