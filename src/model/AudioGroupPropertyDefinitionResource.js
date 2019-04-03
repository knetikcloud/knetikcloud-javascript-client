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
    root.KnetikCloud.AudioGroupPropertyDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FileGroupPropertyDefinitionResource);
  }
}(this, function(ApiClient, FileGroupPropertyDefinitionResource) {
  'use strict';




  /**
   * The AudioGroupPropertyDefinitionResource model module.
   * @module model/AudioGroupPropertyDefinitionResource
   * @version 3.0.18
   */

  /**
   * Constructs a new <code>AudioGroupPropertyDefinitionResource</code>.
   * @alias module:model/AudioGroupPropertyDefinitionResource
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
   * Constructs a <code>AudioGroupPropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioGroupPropertyDefinitionResource} obj Optional instance to populate.
   * @return {module:model/AudioGroupPropertyDefinitionResource} The populated <code>AudioGroupPropertyDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      FileGroupPropertyDefinitionResource.constructFromObject(data, obj);
      if (data.hasOwnProperty('max_length')) {
        obj['max_length'] = ApiClient.convertToType(data['max_length'], 'Number');
      }
      if (data.hasOwnProperty('min_length')) {
        obj['min_length'] = ApiClient.convertToType(data['min_length'], 'Number');
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
  
  var discriminatorValue = 'audio_group';
  FileGroupPropertyDefinitionResource.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(FileGroupPropertyDefinitionResource.prototype);
  exports.prototype.constructor = exports;


  /**
   * If provided, the maximum length of the audio
   * @member {Number} max_length
   */
  exports.prototype['max_length'] = undefined;
  /**
   * If provided, the minimum length of the audio
   * @member {Number} min_length
   */
  exports.prototype['min_length'] = undefined;



  return exports;
}));


