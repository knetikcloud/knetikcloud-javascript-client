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
    root.KnetikCloud.ListProperty = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The ListProperty model module.
   * @module model/ListProperty
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>ListProperty</code>.
   * @alias module:model/ListProperty
   * @class
   * @extends module:model/Property
   * @param type {String} The type of the property. Used for polymorphic type recognition and thus must match an expected type with additional properties.
   * @param values {Array.<module:model/Property>} The list of properties
   */
  var exports = function(type, values) {
    var _this = this;
    Property.call(_this, type);
    _this['values'] = values;
  };

  /**
   * Constructs a <code>ListProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListProperty} obj Optional instance to populate.
   * @return {module:model/ListProperty} The populated <code>ListProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Property.constructFromObject(data, obj);
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [Property]);
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
  
  var discriminatorValue = 'list';
  Property.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Property.prototype);
  exports.prototype.constructor = exports;


  /**
   * The list of properties
   * @member {Array.<module:model/Property>} values
   */
  exports.prototype['values'] = undefined;



  return exports;
}));


