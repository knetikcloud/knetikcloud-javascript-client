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
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AchievementDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The AchievementDefinitionResource model module.
   * @module model/AchievementDefinitionResource
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>AchievementDefinitionResource</code>.
   * @alias module:model/AchievementDefinitionResource
   * @class
   * @param hidden {Boolean} Whether the achievement is hidden from the user
   * @param name {String} The name of the achievement. Must be at least 6 characters in length. IMMUTABLE
   * @param requiredProgress {Number} The required progress for the achievement definition
   */
  var exports = function(hidden, name, requiredProgress) {
    var _this = this;




    _this['hidden'] = hidden;
    _this['name'] = name;
    _this['required_progress'] = requiredProgress;





  };

  /**
   * Constructs a <code>AchievementDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AchievementDefinitionResource} obj Optional instance to populate.
   * @return {module:model/AchievementDefinitionResource} The populated <code>AchievementDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('hidden')) {
        obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('required_progress')) {
        obj['required_progress'] = ApiClient.convertToType(data['required_progress'], 'Number');
      }
      if (data.hasOwnProperty('rule_id')) {
        obj['rule_id'] = ApiClient.convertToType(data['rule_id'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('trigger_event_name')) {
        obj['trigger_event_name'] = ApiClient.convertToType(data['trigger_event_name'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'AchievementDefinitionResource';


  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this resource type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The description of the achievement
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Whether the achievement is hidden from the user
   * @member {Boolean} hidden
   */
  exports.prototype['hidden'] = undefined;
  /**
   * The name of the achievement. Must be at least 6 characters in length. IMMUTABLE
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The required progress for the achievement definition
   * @member {Number} required_progress
   */
  exports.prototype['required_progress'] = undefined;
  /**
   * The id of the rule generated for this achievement
   * @member {String} rule_id
   */
  exports.prototype['rule_id'] = undefined;
  /**
   * The tags for the achievement definition
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * An achievement template this achievement is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The name of the trigger event associated with this achievement
   * @member {String} trigger_event_name
   */
  exports.prototype['trigger_event_name'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


