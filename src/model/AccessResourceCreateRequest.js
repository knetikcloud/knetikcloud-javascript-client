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
    define(['ApiClient', 'model/AccessEntryResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccessEntryResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AccessResourceCreateRequest = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.AccessEntryResource);
  }
}(this, function(ApiClient, AccessEntryResource) {
  'use strict';




  /**
   * The AccessResourceCreateRequest model module.
   * @module model/AccessResourceCreateRequest
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>AccessResourceCreateRequest</code>.
   * @alias module:model/AccessResourceCreateRequest
   * @class
   * @param id {String} The id of the resource we are defining access for
   * @param parentType {String} The type of the parent resource (null for top level)
   */
  var exports = function(id, parentType) {
    var _this = this;


    _this['id'] = id;

    _this['parent_type'] = parentType;

  };

  /**
   * Constructs a <code>AccessResourceCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessResourceCreateRequest} obj Optional instance to populate.
   * @return {module:model/AccessResourceCreateRequest} The populated <code>AccessResourceCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access')) {
        obj['access'] = ApiClient.convertToType(data['access'], [AccessEntryResource]);
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
      if (data.hasOwnProperty('sid_replacements')) {
        obj['sid_replacements'] = ApiClient.convertToType(data['sid_replacements'], {'String': 'String'});
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
  
  var discriminatorValue = 'AccessResourceCreateRequest';


  /**
   * The access list for the resource. If null on create, will take default from type
   * @member {Array.<module:model/AccessEntryResource>} access
   */
  exports.prototype['access'] = undefined;
  /**
   * The id of the resource we are defining access for
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
   * Sid placeholders mapped to sid replacement value. Useful for injecting owner/creator id.
   * @member {Object.<String, String>} sid_replacements
   */
  exports.prototype['sid_replacements'] = undefined;



  return exports;
}));


