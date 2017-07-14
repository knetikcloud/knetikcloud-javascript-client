/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.FormattedTextPropertyDefinitionResource = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.PropertyDefinitionResource, root.knetikcloud-sdk.PropertyFieldListResource);
  }
}(this, function(ApiClient, PropertyDefinitionResource, PropertyFieldListResource) {
  'use strict';




  /**
   * The FormattedTextPropertyDefinitionResource model module.
   * @module model/FormattedTextPropertyDefinitionResource
   * @version latest

   */

  /**
   * Constructs a new <code>FormattedTextPropertyDefinitionResource</code>.
   * @alias module:model/FormattedTextPropertyDefinitionResource
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
   * Constructs a <code>FormattedTextPropertyDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormattedTextPropertyDefinitionResource} obj Optional instance to populate.
   * @return {module:model/FormattedTextPropertyDefinitionResource} The populated <code>FormattedTextPropertyDefinitionResource</code> instance.
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

  exports.prototype = Object.create(PropertyDefinitionResource.prototype);
  exports.prototype.constructor = exports;

  /**
   * If provided, the maximum length of the text
   * @member {Number} max_length
   */
  exports.prototype['max_length'] = undefined;



  return exports;
}));


