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
    root.KnetikCloud.SimpleReferenceResourcestring = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SimpleReferenceResourcestring model module.
   * @module model/SimpleReferenceResourcestring
   * @version 3.0.264
   */

  /**
   * Constructs a new <code>SimpleReferenceResourcestring</code>.
   * @alias module:model/SimpleReferenceResourcestring
   * @class
   * @param id {String} The id of the referenced object
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;

  };

  /**
   * Constructs a <code>SimpleReferenceResourcestring</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimpleReferenceResourcestring} obj Optional instance to populate.
   * @return {module:model/SimpleReferenceResourcestring} The populated <code>SimpleReferenceResourcestring</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
  
  var discriminatorValue = 'SimpleReferenceResource«string»';


  /**
   * The id of the referenced object
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the referenced object
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


