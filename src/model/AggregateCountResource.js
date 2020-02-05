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
    root.KnetikCloud.AggregateCountResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AggregateCountResource model module.
   * @module model/AggregateCountResource
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>AggregateCountResource</code>.
   * @alias module:model/AggregateCountResource
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AggregateCountResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregateCountResource} obj Optional instance to populate.
   * @return {module:model/AggregateCountResource} The populated <code>AggregateCountResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
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
  
  var discriminatorValue = 'AggregateCountResource';


  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;



  return exports;
}));


