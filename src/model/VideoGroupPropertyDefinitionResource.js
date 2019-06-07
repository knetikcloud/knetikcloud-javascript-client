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
    define(['ApiClient', 'model/FileGroupPropertyDefinitionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileGroupPropertyDefinitionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.VideoGroupPropertyDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FileGroupPropertyDefinitionResource);
  }
}(this, function(ApiClient, FileGroupPropertyDefinitionResource) {
  'use strict';




  /**
   * The VideoGroupPropertyDefinitionResource model module.
   * @module model/VideoGroupPropertyDefinitionResource
   * @version 3.0.21
   */

  /**
   * Constructs a new <code>VideoGroupPropertyDefinitionResource</code>.
   * @alias module:model/VideoGroupPropertyDefinitionResource
   * @class
   * @extends module:model/FileGroupPropertyDefinitionResource
   * @param name {String} The name of the property. Must start with a letter
   * @param required {Boolean} Whether the property is required
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(name, required, type) {
    var _this = this;
    FileGroupPropertyDefinitionResource.call(_this, name, required, type);






  };

  /**
   * Constructs a <code>VideoGroupPropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoGroupPropertyDefinitionResource} obj Optional instance to populate.
   * @return {module:model/VideoGroupPropertyDefinitionResource} The populated <code>VideoGroupPropertyDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      FileGroupPropertyDefinitionResource.constructFromObject(data, obj);
      if (data.hasOwnProperty('max_height')) {
        obj['max_height'] = ApiClient.convertToType(data['max_height'], 'Number');
      }
      if (data.hasOwnProperty('max_length')) {
        obj['max_length'] = ApiClient.convertToType(data['max_length'], 'Number');
      }
      if (data.hasOwnProperty('max_width')) {
        obj['max_width'] = ApiClient.convertToType(data['max_width'], 'Number');
      }
      if (data.hasOwnProperty('min_height')) {
        obj['min_height'] = ApiClient.convertToType(data['min_height'], 'Number');
      }
      if (data.hasOwnProperty('min_length')) {
        obj['min_length'] = ApiClient.convertToType(data['min_length'], 'Number');
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
  
  var discriminatorValue = 'video_group';
  FileGroupPropertyDefinitionResource.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(FileGroupPropertyDefinitionResource.prototype);
  exports.prototype.constructor = exports;


  /**
   * If provided, the maximum height of each video
   * @member {Number} max_height
   */
  exports.prototype['max_height'] = undefined;
  /**
   * If provided, the maximum length of each video
   * @member {Number} max_length
   */
  exports.prototype['max_length'] = undefined;
  /**
   * If provided, the maximum width of each video
   * @member {Number} max_width
   */
  exports.prototype['max_width'] = undefined;
  /**
   * If provided, the minimum height of each video
   * @member {Number} min_height
   */
  exports.prototype['min_height'] = undefined;
  /**
   * If provided, the minimum length of each video
   * @member {Number} min_length
   */
  exports.prototype['min_length'] = undefined;
  /**
   * If provided, the minimum width of each video
   * @member {Number} min_width
   */
  exports.prototype['min_width'] = undefined;



  return exports;
}));


