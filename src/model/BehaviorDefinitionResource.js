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
    define(['ApiClient', 'model/Behavior', 'model/PropertyFieldResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./PropertyFieldResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.BehaviorDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior, root.KnetikCloud.PropertyFieldResource);
  }
}(this, function(ApiClient, Behavior, PropertyFieldResource) {
  'use strict';




  /**
   * The BehaviorDefinitionResource model module.
   * @module model/BehaviorDefinitionResource
   * @version 3.0.272
   */

  /**
   * Constructs a new <code>BehaviorDefinitionResource</code>.
   * @alias module:model/BehaviorDefinitionResource
   * @class
   * @param properties {Array.<module:model/PropertyFieldResource>} Configurable properties of the behavior
   * @param typeHint {String} The behavior type
   */
  var exports = function(properties, typeHint) {
    var _this = this;



    _this['properties'] = properties;
    _this['type_hint'] = typeHint;
  };

  /**
   * Constructs a <code>BehaviorDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BehaviorDefinitionResource} obj Optional instance to populate.
   * @return {module:model/BehaviorDefinitionResource} The populated <code>BehaviorDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('prerequisite_behaviors')) {
        obj['prerequisite_behaviors'] = ApiClient.convertToType(data['prerequisite_behaviors'], [Behavior]);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], [PropertyFieldResource]);
      }
      if (data.hasOwnProperty('type_hint')) {
        obj['type_hint'] = ApiClient.convertToType(data['type_hint'], 'String');
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
  
  var discriminatorValue = 'BehaviorDefinitionResource';


  /**
   * Description of the behavior
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Pre-requisite behaviors that an item must have in order to also have this behavior
   * @member {Array.<module:model/Behavior>} prerequisite_behaviors
   */
  exports.prototype['prerequisite_behaviors'] = undefined;
  /**
   * Configurable properties of the behavior
   * @member {Array.<module:model/PropertyFieldResource>} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * The behavior type
   * @member {String} type_hint
   */
  exports.prototype['type_hint'] = undefined;



  return exports;
}));


