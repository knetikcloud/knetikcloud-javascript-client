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
    root.KnetikCloud.MessageTemplateResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageTemplateResource model module.
   * @module model/MessageTemplateResource
   * @version 3.0.274
   */

  /**
   * Constructs a new <code>MessageTemplateResource</code>.
   * @alias module:model/MessageTemplateResource
   * @class
   * @param content {String} The content of the template. See Apache Velocity documentation for formatting
   * @param name {String} The name of the template
   */
  var exports = function(content, name) {
    var _this = this;

    _this['content'] = content;

    _this['name'] = name;

  };

  /**
   * Constructs a <code>MessageTemplateResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageTemplateResource} obj Optional instance to populate.
   * @return {module:model/MessageTemplateResource} The populated <code>MessageTemplateResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
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
  
  var discriminatorValue = 'MessageTemplateResource';


  /**
   * The content of the template. See Apache Velocity documentation for formatting
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The id of the template. Cannot be changed after creation. default: auto generated
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the template
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A list of tags for search purposes. Will be converted to lower case
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


