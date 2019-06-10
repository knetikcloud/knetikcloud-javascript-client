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
    root.KnetikCloud.TextPropertyDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PropertyDefinitionResource);
  }
}(this, function(ApiClient, PropertyDefinitionResource) {
  'use strict';




  /**
   * The TextPropertyDefinitionResource model module.
   * @module model/TextPropertyDefinitionResource
   * @version 3.0.263
   */

  /**
   * Constructs a new <code>TextPropertyDefinitionResource</code>.
   * @alias module:model/TextPropertyDefinitionResource
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
   * Constructs a <code>TextPropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TextPropertyDefinitionResource} obj Optional instance to populate.
   * @return {module:model/TextPropertyDefinitionResource} The populated <code>TextPropertyDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      PropertyDefinitionResource.constructFromObject(data, obj);
      if (data.hasOwnProperty('max_length')) {
        obj['max_length'] = ApiClient.convertToType(data['max_length'], 'Number');
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
  
  var discriminatorValue = 'text';
  PropertyDefinitionResource.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(PropertyDefinitionResource.prototype);
  exports.prototype.constructor = exports;


  /**
   * If provided, the maximum length of the text
   * @member {Number} max_length
   */
  exports.prototype['max_length'] = undefined;



  return exports;
}));


