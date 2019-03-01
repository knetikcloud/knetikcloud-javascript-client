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
    define(['ApiClient', 'model/PropertyFieldResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyFieldResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PropertyFieldListResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PropertyFieldResource);
  }
}(this, function(ApiClient, PropertyFieldResource) {
  'use strict';




  /**
   * The PropertyFieldListResource model module.
   * @module model/PropertyFieldListResource
   * @version 3.0.15
   */

  /**
   * Constructs a new <code>PropertyFieldListResource</code>.
   * @alias module:model/PropertyFieldListResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PropertyFieldListResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertyFieldListResource} obj Optional instance to populate.
   * @return {module:model/PropertyFieldListResource} The populated <code>PropertyFieldListResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('property_definition_fields')) {
        obj['property_definition_fields'] = ApiClient.convertToType(data['property_definition_fields'], [PropertyFieldResource]);
      }
      if (data.hasOwnProperty('property_fields')) {
        obj['property_fields'] = ApiClient.convertToType(data['property_fields'], [PropertyFieldResource]);
      }
      if (data.hasOwnProperty('property_type')) {
        obj['property_type'] = ApiClient.convertToType(data['property_type'], 'String');
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
  
  var discriminatorValue = 'PropertyFieldListResource';


  /**
   * A list of fields for the property definition.
   * @member {Array.<module:model/PropertyFieldResource>} property_definition_fields
   */
  exports.prototype['property_definition_fields'] = undefined;
  /**
   * A list of fields for the property.
   * @member {Array.<module:model/PropertyFieldResource>} property_fields
   */
  exports.prototype['property_fields'] = undefined;
  /**
   * The type for the property this describes.
   * @member {String} property_type
   */
  exports.prototype['property_type'] = undefined;



  return exports;
}));


