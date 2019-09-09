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
    root.KnetikCloud.ActivityOccurrenceStatusWrapper = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ActivityOccurrenceStatusWrapper model module.
   * @module model/ActivityOccurrenceStatusWrapper
   * @version 3.0.269
   */

  /**
   * Constructs a new <code>ActivityOccurrenceStatusWrapper</code>.
   * @alias module:model/ActivityOccurrenceStatusWrapper
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ActivityOccurrenceStatusWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityOccurrenceStatusWrapper} obj Optional instance to populate.
   * @return {module:model/ActivityOccurrenceStatusWrapper} The populated <code>ActivityOccurrenceStatusWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
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
  
  var discriminatorValue = 'ActivityOccurrenceStatusWrapper';


  /**
   * @member {module:model/ActivityOccurrenceStatusWrapper.ValueEnum} value
   */
  exports.prototype['value'] = undefined;


  /**
   * Allowed values for the <code>value</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ValueEnum = {
    /**
     * value: "SETUP"
     * @const
     */
    "SETUP": "SETUP",
    /**
     * value: "OPEN"
     * @const
     */
    "OPEN": "OPEN",
    /**
     * value: "LAUNCHING"
     * @const
     */
    "LAUNCHING": "LAUNCHING",
    /**
     * value: "PLAYING"
     * @const
     */
    "PLAYING": "PLAYING",
    /**
     * value: "FINISHED"
     * @const
     */
    "FINISHED": "FINISHED",
    /**
     * value: "ABANDONED"
     * @const
     */
    "ABANDONED": "ABANDONED"  };


  return exports;
}));


