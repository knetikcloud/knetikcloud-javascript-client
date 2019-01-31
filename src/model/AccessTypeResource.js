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
    root.KnetikCloud.AccessTypeResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.AccessEntryResource, root.KnetikCloud.AccessSubTypeResource);
  }
}(this, function(ApiClient, AccessEntryResource, AccessSubTypeResource) {
  'use strict';




  /**
   * The AccessTypeResource model module.
   * @module model/AccessTypeResource
   * @version 3.0.14
   */

  /**
   * Constructs a new <code>AccessTypeResource</code>.
   * @alias module:model/AccessTypeResource
   * @class
   * @param access {Array.<module:model/AccessEntryResource>} The access list. Combines with parent access to determine permission
   * @param subTypes {Array.<module:model/AccessSubTypeResource>} List of resource types that can inherit from this one, to define default access lists on creation
   * @param type {String} The resource type we are defining access for
   */
  var exports = function(access, subTypes, type) {
    var _this = this;

    _this['access'] = access;




    _this['sub_types'] = subTypes;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>AccessTypeResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessTypeResource} obj Optional instance to populate.
   * @return {module:model/AccessTypeResource} The populated <code>AccessTypeResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access')) {
        obj['access'] = ApiClient.convertToType(data['access'], [AccessEntryResource]);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
      }
      if (data.hasOwnProperty('parent_type')) {
        obj['parent_type'] = ApiClient.convertToType(data['parent_type'], 'String');
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
  
  var discriminatorValue = 'AccessTypeResource';


  /**
   * The access list. Combines with parent access to determine permission
   * @member {Array.<module:model/AccessEntryResource>} access
   */
  exports.prototype['access'] = undefined;
  /**
   * The actions that are possible for the resource type
   * @member {Array.<String>} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * The id of the resource we are defining access for (null for top level)
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the parent resource (null if parent top level)
   * @member {String} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * The type of the parent resource (null for top level)
   * @member {String} parent_type
   */
  exports.prototype['parent_type'] = undefined;
  /**
   * List of resource types that can inherit from this one, to define default access lists on creation
   * @member {Array.<module:model/AccessSubTypeResource>} sub_types
   */
  exports.prototype['sub_types'] = undefined;
  /**
   * The resource type we are defining access for
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


