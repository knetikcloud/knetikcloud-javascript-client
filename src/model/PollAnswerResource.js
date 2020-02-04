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
    root.KnetikCloud.PollAnswerResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PollAnswerResource model module.
   * @module model/PollAnswerResource
   * @version 3.0.3
   */

  /**
   * Constructs a new <code>PollAnswerResource</code>.
   * @alias module:model/PollAnswerResource
   * @class
   * @param key {String} The key to the answer (for code reference)
   * @param text {String} The text of the answer (for user display)
   */
  var exports = function(key, text) {
    var _this = this;


    _this['key'] = key;
    _this['text'] = text;
  };

  /**
   * Constructs a <code>PollAnswerResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PollAnswerResource} obj Optional instance to populate.
   * @return {module:model/PollAnswerResource} The populated <code>PollAnswerResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
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
  
  var discriminatorValue = 'PollAnswerResource';


  /**
   * The number of users that selected this answer
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The key to the answer (for code reference)
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The text of the answer (for user display)
   * @member {String} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


