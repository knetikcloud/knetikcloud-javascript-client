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
    define(['ApiClient', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UserRelationshipResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, SimpleUserResource) {
  'use strict';




  /**
   * The UserRelationshipResource model module.
   * @module model/UserRelationshipResource
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>UserRelationshipResource</code>.
   * @alias module:model/UserRelationshipResource
   * @class
   * @param child {module:model/SimpleUserResource} The child in the relationship
   * @param parent {module:model/SimpleUserResource} The parent in the relationship
   */
  var exports = function(child, parent) {
    var _this = this;

    _this['child'] = child;


    _this['parent'] = parent;
  };

  /**
   * Constructs a <code>UserRelationshipResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRelationshipResource} obj Optional instance to populate.
   * @return {module:model/UserRelationshipResource} The populated <code>UserRelationshipResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('child')) {
        obj['child'] = SimpleUserResource.constructFromObject(data['child']);
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = SimpleUserResource.constructFromObject(data['parent']);
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
  
  var discriminatorValue = 'UserRelationshipResource';


  /**
   * The child in the relationship
   * @member {module:model/SimpleUserResource} child
   */
  exports.prototype['child'] = undefined;
  /**
   * Context about the relationship or its type
   * @member {String} context
   */
  exports.prototype['context'] = undefined;
  /**
   * A generated unique id. Read-Only
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The parent in the relationship
   * @member {module:model/SimpleUserResource} parent
   */
  exports.prototype['parent'] = undefined;



  return exports;
}));


