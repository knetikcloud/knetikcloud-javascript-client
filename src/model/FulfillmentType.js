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
    root.KnetikCloud.FulfillmentType = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FulfillmentType model module.
   * @module model/FulfillmentType
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>FulfillmentType</code>.
   * @alias module:model/FulfillmentType
   * @class
   * @param name {String} The name of the type
   */
  var exports = function(name) {
    var _this = this;




    _this['name'] = name;
  };

  /**
   * Constructs a <code>FulfillmentType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FulfillmentType} obj Optional instance to populate.
   * @return {module:model/FulfillmentType} The populated <code>FulfillmentType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('core')) {
        obj['core'] = ApiClient.convertToType(data['core'], 'Boolean');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
  
  var discriminatorValue = 'FulfillmentType';


  /**
   * Whether the type is core and cannot be altered/deleted, read-only
   * @member {Boolean} core
   */
  exports.prototype['core'] = undefined;
  /**
   * A description of the type
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The unique id of the type, read-only
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the type
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


