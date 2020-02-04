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
    define(['ApiClient', 'model/AccessEntryResource', 'model/AccessSubTypeResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccessEntryResource'), require('./AccessSubTypeResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AccessSubTypeResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.AccessEntryResource, root.KnetikCloud.AccessSubTypeResource);
  }
}(this, function(ApiClient, AccessEntryResource, AccessSubTypeResource) {
  'use strict';




  /**
   * The AccessSubTypeResource model module.
   * @module model/AccessSubTypeResource
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>AccessSubTypeResource</code>.
   * @alias module:model/AccessSubTypeResource
   * @class
   * @param actions {Array.<String>} The actions that are possible for the resource type
   * @param defaultAccess {Array.<module:model/AccessEntryResource>} An access list to be copied into new resources of this sub type under this parent. Can include SIDs from the replacement_sid list, which will be replaced when the sub resource if first created
   * @param inheritedAccess {Array.<module:model/AccessEntryResource>} An access list to provide blanket access to all sub resources of this type under this parent
   * @param subTypes {Array.<module:model/AccessSubTypeResource>} List of resource types that can inherit from this one, to define default access lists on creation
   * @param type {String} The sub type we are defining access for
   */
  var exports = function(actions, defaultAccess, inheritedAccess, subTypes, type) {
    var _this = this;

    _this['actions'] = actions;
    _this['default_access'] = defaultAccess;
    _this['inherited_access'] = inheritedAccess;

    _this['sub_types'] = subTypes;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>AccessSubTypeResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessSubTypeResource} obj Optional instance to populate.
   * @return {module:model/AccessSubTypeResource} The populated <code>AccessSubTypeResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
      }
      if (data.hasOwnProperty('default_access')) {
        obj['default_access'] = ApiClient.convertToType(data['default_access'], [AccessEntryResource]);
      }
      if (data.hasOwnProperty('inherited_access')) {
        obj['inherited_access'] = ApiClient.convertToType(data['inherited_access'], [AccessEntryResource]);
      }
      if (data.hasOwnProperty('replacement_sids')) {
        obj['replacement_sids'] = ApiClient.convertToType(data['replacement_sids'], ['String']);
      }
      if (data.hasOwnProperty('sub_types')) {
        obj['sub_types'] = ApiClient.convertToType(data['sub_types'], [AccessSubTypeResource]);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
  
  var discriminatorValue = 'AccessSubTypeResource';


  /**
   * The actions that are possible for the resource type
   * @member {Array.<String>} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * An access list to be copied into new resources of this sub type under this parent. Can include SIDs from the replacement_sid list, which will be replaced when the sub resource if first created
   * @member {Array.<module:model/AccessEntryResource>} default_access
   */
  exports.prototype['default_access'] = undefined;
  /**
   * An access list to provide blanket access to all sub resources of this type under this parent
   * @member {Array.<module:model/AccessEntryResource>} inherited_access
   */
  exports.prototype['inherited_access'] = undefined;
  /**
   * A list of placeholder sids that can be included in the access list to be replaced when a resource is first created
   * @member {Array.<String>} replacement_sids
   */
  exports.prototype['replacement_sids'] = undefined;
  /**
   * List of resource types that can inherit from this one, to define default access lists on creation
   * @member {Array.<module:model/AccessSubTypeResource>} sub_types
   */
  exports.prototype['sub_types'] = undefined;
  /**
   * The sub type we are defining access for
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


