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
    root.KnetikCloud.PatchActionResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PatchActionResource model module.
   * @module model/PatchActionResource
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>PatchActionResource</code>.
   * @alias module:model/PatchActionResource
   * @class
   * @param op {module:model/PatchActionResource.OpEnum} The action you wish to perform on the resource
   * @param path {String} The JSON Pointer (JSON key) you wish to patch
   */
  var exports = function(op, path) {
    var _this = this;

    _this['op'] = op;
    _this['path'] = path;

  };

  /**
   * Constructs a <code>PatchActionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatchActionResource} obj Optional instance to populate.
   * @return {module:model/PatchActionResource} The populated <code>PatchActionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('op')) {
        obj['op'] = ApiClient.convertToType(data['op'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
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
  
  var discriminatorValue = 'PatchActionResource';


  /**
   * The action you wish to perform on the resource
   * @member {module:model/PatchActionResource.OpEnum} op
   */
  exports.prototype['op'] = undefined;
  /**
   * The JSON Pointer (JSON key) you wish to patch
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * The new value for the JSON path
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;


  /**
   * Allowed values for the <code>op</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OpEnum = {
    /**
     * value: "replace"
     * @const
     */
    "replace": "replace",
    /**
     * value: "add"
     * @const
     */
    "add": "add",
    /**
     * value: "remove"
     * @const
     */
    "remove": "remove",
    /**
     * value: "test"
     * @const
     */
    "test": "test"  };


  return exports;
}));


