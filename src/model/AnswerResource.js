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
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AnswerResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The AnswerResource model module.
   * @module model/AnswerResource
   * @version 3.0.14
   */

  /**
   * Constructs a new <code>AnswerResource</code>.
   * @alias module:model/AnswerResource
   * @class
   * @param answer {module:model/Property} The answer to the question. Different 'type' values indicate different structures as the answer may be test, image, etc. See information on additional properties for the list and their structures
   * @param correct {Boolean} Whether the answer is correct or not
   */
  var exports = function(answer, correct) {
    var _this = this;

    _this['answer'] = answer;
    _this['correct'] = correct;

  };

  /**
   * Constructs a <code>AnswerResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnswerResource} obj Optional instance to populate.
   * @return {module:model/AnswerResource} The populated <code>AnswerResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('answer')) {
        obj['answer'] = Property.constructFromObject(data['answer']);
      }
      if (data.hasOwnProperty('correct')) {
        obj['correct'] = ApiClient.convertToType(data['correct'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
  
  var discriminatorValue = 'AnswerResource';


  /**
   * The answer to the question. Different 'type' values indicate different structures as the answer may be test, image, etc. See information on additional properties for the list and their structures
   * @member {module:model/Property} answer
   */
  exports.prototype['answer'] = undefined;
  /**
   * Whether the answer is correct or not
   * @member {Boolean} correct
   */
  exports.prototype['correct'] = undefined;
  /**
   * The unique ID for that resource
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


