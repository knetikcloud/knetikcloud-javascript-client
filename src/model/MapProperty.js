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
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MapProperty = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The MapProperty model module.
   * @module model/MapProperty
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>MapProperty</code>.
   * @alias module:model/MapProperty
   * @class
   * @extends module:model/Property
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   * @param map {Object.<String, module:model/Property>} A map/object of string to sub-property
   */
  var exports = function(type, map) {
    var _this = this;
    Property.call(_this, type);
    _this['map'] = map;
  };

  /**
   * Constructs a <code>MapProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MapProperty} obj Optional instance to populate.
   * @return {module:model/MapProperty} The populated <code>MapProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Property.constructFromObject(data, obj);
      if (data.hasOwnProperty('map')) {
        obj['map'] = ApiClient.convertToType(data['map'], {'String': Property});
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
  
  var discriminatorValue = 'map';
  Property.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Property.prototype);
  exports.prototype.constructor = exports;


  /**
   * A map/object of string to sub-property
   * @member {Object.<String, module:model/Property>} map
   */
  exports.prototype['map'] = undefined;



  return exports;
}));


