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
    define(['ApiClient', 'model/NestedCategory', 'model/PollAnswerResource', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedCategory'), require('./PollAnswerResource'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PollResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.NestedCategory, root.KnetikCloud.PollAnswerResource, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, NestedCategory, PollAnswerResource, Property) {
  'use strict';




  /**
   * The PollResource model module.
   * @module model/PollResource
   * @version 3.0.264
   */

  /**
   * Constructs a new <code>PollResource</code>.
   * @alias module:model/PollResource
   * @class
   * @param active {Boolean} Whether the poll is active
   * @param answers {Array.<module:model/PollAnswerResource>} The answers to the poll
   * @param category {module:model/NestedCategory} The category for the poll
   * @param text {String} The text of the poll
   * @param type {module:model/PollResource.TypeEnum} The media type of the poll
   */
  var exports = function(active, answers, category, text, type) {
    var _this = this;

    _this['active'] = active;

    _this['answers'] = answers;
    _this['category'] = category;




    _this['text'] = text;
    _this['type'] = type;

  };

  /**
   * Constructs a <code>PollResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PollResource} obj Optional instance to populate.
   * @return {module:model/PollResource} The populated <code>PollResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('answers')) {
        obj['answers'] = ApiClient.convertToType(data['answers'], [PollAnswerResource]);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = NestedCategory.constructFromObject(data['category']);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
  
  var discriminatorValue = 'PollResource';


  /**
   * Whether the poll is active
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The answers to the poll
   * @member {Array.<module:model/PollAnswerResource>} answers
   */
  exports.prototype['answers'] = undefined;
  /**
   * The category for the poll
   * @member {module:model/NestedCategory} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The id of the poll
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The tags for the poll
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A poll template this poll is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The text of the poll
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * The media type of the poll
   * @member {module:model/PollResource.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "TEXT"
     * @const
     */
    "TEXT": "TEXT",
    /**
     * value: "IMAGE"
     * @const
     */
    "IMAGE": "IMAGE",
    /**
     * value: "VIDEO"
     * @const
     */
    "VIDEO": "VIDEO",
    /**
     * value: "AUDIO"
     * @const
     */
    "AUDIO": "AUDIO"  };


  return exports;
}));


