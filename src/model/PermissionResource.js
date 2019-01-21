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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PermissionResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PermissionResource model module.
   * @module model/PermissionResource
   * @version 3.0.12
   */

  /**
   * Constructs a new <code>PermissionResource</code>.
   * @alias module:model/PermissionResource
   * @class
   * @param name {String} The name of the permission used for display purposes
   * @param permission {String} The keyword that defines the permission
   */
  var exports = function(name, permission) {
    var _this = this;




    _this['name'] = name;

    _this['permission'] = permission;

  };

  /**
   * Constructs a <code>PermissionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionResource} obj Optional instance to populate.
   * @return {module:model/PermissionResource} The populated <code>PermissionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
      }
      if (data.hasOwnProperty('permission')) {
        obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'PermissionResource';


  /**
   * The date the permission was added. Unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The description of the permission
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Whether a permission is locked from being deleted
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * The name of the permission used for display purposes
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The name of the parent of the permission
   * @member {String} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * The keyword that defines the permission
   * @member {String} permission
   */
  exports.prototype['permission'] = undefined;
  /**
   * The date the permission was updated. Unix timestamp in seconds
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


