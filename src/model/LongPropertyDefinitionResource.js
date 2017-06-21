/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PropertyDefinitionResource', 'model/PropertyFieldListResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyDefinitionResource'), require('./PropertyFieldListResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.LongPropertyDefinitionResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PropertyDefinitionResource, root.KnetikPlatformApiDocumentationLatest.PropertyFieldListResource);
  }
}(this, function(ApiClient, PropertyDefinitionResource, PropertyFieldListResource) {
  'use strict';




  /**
   * The LongPropertyDefinitionResource model module.
   * @module model/LongPropertyDefinitionResource
   * @version latest

   */

  /**
   * Constructs a new <code>LongPropertyDefinitionResource</code>.
   * @alias module:model/LongPropertyDefinitionResource
   * @class
   * @extends module:model/PropertyDefinitionResource
   * @param name {String} The name of the property
   * @param required {Boolean} Whether the property is required
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   */
  var exports = function(name, required, type) {
    var _this = this;
    PropertyDefinitionResource.call(_this, name, required, type);


  };

  /**
   * Constructs a <code>LongPropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LongPropertyDefinitionResource} obj Optional instance to populate.
   * @return {module:model/LongPropertyDefinitionResource} The populated <code>LongPropertyDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      PropertyDefinitionResource.constructFromObject(data, obj);
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'Number');
      }
      if (data.hasOwnProperty('min')) {
        obj['min'] = ApiClient.convertToType(data['min'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(PropertyDefinitionResource.prototype);
  exports.prototype.constructor = exports;

  /**
   * If provided, the maximum value
   * @member {Number} max
   */
  exports.prototype['max'] = undefined;
  /**
   * If provided, the minimum value
   * @member {Number} min
   */
  exports.prototype['min'] = undefined;



  return exports;
}));


