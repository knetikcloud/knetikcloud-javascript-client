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
    define(['ApiClient', 'model/Property', 'model/TierResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'), require('./TierResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.LevelingResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property, root.KnetikCloud.TierResource);
  }
}(this, function(ApiClient, Property, TierResource) {
  'use strict';




  /**
   * The LevelingResource model module.
   * @module model/LevelingResource
   * @version 3.0.269
   */

  /**
   * Constructs a new <code>LevelingResource</code>.
   * @alias module:model/LevelingResource
   * @class
   * @param name {String} The name of the leveling schema.  IMMUTABLE
   */
  var exports = function(name) {
    var _this = this;




    _this['name'] = name;




  };

  /**
   * Constructs a <code>LevelingResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LevelingResource} obj Optional instance to populate.
   * @return {module:model/LevelingResource} The populated <code>LevelingResource</code> instance.
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
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('tiers')) {
        obj['tiers'] = ApiClient.convertToType(data['tiers'], [TierResource]);
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
  
  var discriminatorValue = 'LevelingResource';


  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The date the leveling schema was created
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The description of the leveling schema
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The name of the leveling schema.  IMMUTABLE
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The template being used
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * A set of tiers that contain experience boundaries
   * @member {Array.<module:model/TierResource>} tiers
   */
  exports.prototype['tiers'] = undefined;
  /**
   * The name of an event that will add one progress to this level when fired
   * @member {String} trigger_event_name
   */
  exports.prototype['trigger_event_name'] = undefined;
  /**
   * The date the leveling schema was updated
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


