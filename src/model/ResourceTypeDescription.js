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
    root.KnetikCloud.ResourceTypeDescription = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceTypeDescription model module.
   * @module model/ResourceTypeDescription
   * @version 3.0.12
   */

  /**
   * Constructs a new <code>ResourceTypeDescription</code>.
   * @alias module:model/ResourceTypeDescription
   * @class
   * @param idField {String} The field on the resource that the id is in
   * @param name {String} The unique name for the resource in swagger. This serves as the unique identifier. Cannot be changed after creation
   * @param servicePath {String} The base path of the service
   */
  var exports = function(idField, name, servicePath) {
    var _this = this;

    _this['id_field'] = idField;
    _this['name'] = name;
    _this['service_path'] = servicePath;
  };

  /**
   * Constructs a <code>ResourceTypeDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceTypeDescription} obj Optional instance to populate.
   * @return {module:model/ResourceTypeDescription} The populated <code>ResourceTypeDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id_field')) {
        obj['id_field'] = ApiClient.convertToType(data['id_field'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('service_path')) {
        obj['service_path'] = ApiClient.convertToType(data['service_path'], 'String');
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
  
  var discriminatorValue = 'ResourceTypeDescription';


  /**
   * The field on the resource that the id is in
   * @member {String} id_field
   */
  exports.prototype['id_field'] = undefined;
  /**
   * The unique name for the resource in swagger. This serves as the unique identifier. Cannot be changed after creation
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The base path of the service
   * @member {String} service_path
   */
  exports.prototype['service_path'] = undefined;



  return exports;
}));


