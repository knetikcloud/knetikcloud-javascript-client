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
    root.KnetikCloud.PollResponseResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, SimpleUserResource) {
  'use strict';




  /**
   * The PollResponseResource model module.
   * @module model/PollResponseResource
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>PollResponseResource</code>.
   * @alias module:model/PollResponseResource
   * @class
   * @param answer {String} The answer to the poll
   * @param pollId {String} The id of the poll
   * @param user {module:model/SimpleUserResource} The user
   */
  var exports = function(answer, pollId, user) {
    var _this = this;

    _this['answer'] = answer;


    _this['poll_id'] = pollId;
    _this['user'] = user;
  };

  /**
   * Constructs a <code>PollResponseResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PollResponseResource} obj Optional instance to populate.
   * @return {module:model/PollResponseResource} The populated <code>PollResponseResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('answer')) {
        obj['answer'] = ApiClient.convertToType(data['answer'], 'String');
      }
      if (data.hasOwnProperty('answered_date')) {
        obj['answered_date'] = ApiClient.convertToType(data['answered_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('poll_id')) {
        obj['poll_id'] = ApiClient.convertToType(data['poll_id'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUserResource.constructFromObject(data['user']);
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
  
  var discriminatorValue = 'PollResponseResource';


  /**
   * The answer to the poll
   * @member {String} answer
   */
  exports.prototype['answer'] = undefined;
  /**
   * The date the poll was answered, in seconds since unix epoc
   * @member {Number} answered_date
   */
  exports.prototype['answered_date'] = undefined;
  /**
   * The id of the poll response
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The id of the poll
   * @member {String} poll_id
   */
  exports.prototype['poll_id'] = undefined;
  /**
   * The user
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


