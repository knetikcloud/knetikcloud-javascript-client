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
    define(['ApiClient', 'model/Behavior', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Item = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Behavior, Property) {
  'use strict';




  /**
   * The Item model module.
   * @module model/Item
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>Item</code>.
   * @alias module:model/Item
   * @class
   * @param name {String} The name of the item
   * @param typeHint {String} The type of the item
   */
  var exports = function(name, typeHint) {
    var _this = this;







    _this['name'] = name;




    _this['type_hint'] = typeHint;


  };

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item} obj Optional instance to populate.
   * @return {module:model/Item} The populated <code>Item</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('behaviors')) {
        obj['behaviors'] = ApiClient.convertToType(data['behaviors'], [Behavior]);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('type_hint')) {
        obj['type_hint'] = ApiClient.convertToType(data['type_hint'], 'String');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
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
  
  var discriminatorValue = 'Item';

exports.discriminatorField = 'type_hint';
  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type, or be an extra not from the template
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The behaviors linked to the item, describing various options and interactions. May not be included in item lists
   * @member {Array.<module:model/Behavior>} behaviors
   */
  exports.prototype['behaviors'] = undefined;
  /**
   * A category for filtering items
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The date the item was created, unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The id of the item
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A long description of the item
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The name of the item
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A short description of the item, max 255 chars
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * A number to use in sorting items.  Default 500
   * @member {Number} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * List of tags used for filtering items
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * An item template this item is validated against.  May be null and no validation of additional_properties will be done.  Default = null
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The type of the item
   * @member {String} type_hint
   */
  exports.prototype['type_hint'] = undefined;
  /**
   * The unique key for the item
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * The date the item was last updated, unix timestamp in seconds
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


