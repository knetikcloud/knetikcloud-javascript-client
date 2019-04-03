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
    define(['ApiClient', 'model/PropertyDefinitionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyDefinitionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ImagePropertyDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PropertyDefinitionResource);
  }
}(this, function(ApiClient, PropertyDefinitionResource) {
  'use strict';




  /**
   * The ImagePropertyDefinitionResource model module.
   * @module model/ImagePropertyDefinitionResource
   * @version 3.0.17
   */

  /**
   * Constructs a new <code>ImagePropertyDefinitionResource</code>.
   * @alias module:model/ImagePropertyDefinitionResource
   * @class
   * @extends module:model/PropertyDefinitionResource
   * @param name {String} The name of the property. Must start with a letter
   * @param required {Boolean} Whether the property is required
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(name, required, type) {
    var _this = this;
    PropertyDefinitionResource.call(_this, name, required, type);





  };

  /**
   * Constructs a <code>ImagePropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImagePropertyDefinitionResource} obj Optional instance to populate.
   * @return {module:model/ImagePropertyDefinitionResource} The populated <code>ImagePropertyDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      PropertyDefinitionResource.constructFromObject(data, obj);
      if (data.hasOwnProperty('file_type')) {
        obj['file_type'] = ApiClient.convertToType(data['file_type'], 'String');
      }
      if (data.hasOwnProperty('max_height')) {
        obj['max_height'] = ApiClient.convertToType(data['max_height'], 'Number');
      }
      if (data.hasOwnProperty('max_width')) {
        obj['max_width'] = ApiClient.convertToType(data['max_width'], 'Number');
      }
      if (data.hasOwnProperty('min_height')) {
        obj['min_height'] = ApiClient.convertToType(data['min_height'], 'Number');
      }
      if (data.hasOwnProperty('min_width')) {
        obj['min_width'] = ApiClient.convertToType(data['min_width'], 'Number');
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
  
  var discriminatorValue = 'image';
  PropertyDefinitionResource.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(PropertyDefinitionResource.prototype);
  exports.prototype.constructor = exports;


  /**
   * If provided, a file type that the property must match
   * @member {String} file_type
   */
  exports.prototype['file_type'] = undefined;
  /**
   * If provided, the maximum height of the image
   * @member {Number} max_height
   */
  exports.prototype['max_height'] = undefined;
  /**
   * If provided, the maximum width of the image
   * @member {Number} max_width
   */
  exports.prototype['max_width'] = undefined;
  /**
   * If provided, the minimum height of the image
   * @member {Number} min_height
   */
  exports.prototype['min_height'] = undefined;
  /**
   * If provided, the minimum width of the image
   * @member {Number} min_width
   */
  exports.prototype['min_width'] = undefined;



  return exports;
}));


