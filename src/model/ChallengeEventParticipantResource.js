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
    root.KnetikCloud.ChallengeEventParticipantResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChallengeEventParticipantResource model module.
   * @module model/ChallengeEventParticipantResource
   * @version 3.0.21
   */

  /**
   * Constructs a new <code>ChallengeEventParticipantResource</code>.
   * @alias module:model/ChallengeEventParticipantResource
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ChallengeEventParticipantResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChallengeEventParticipantResource} obj Optional instance to populate.
   * @return {module:model/ChallengeEventParticipantResource} The populated <code>ChallengeEventParticipantResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fullname')) {
        obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
  
  var discriminatorValue = 'ChallengeEventParticipantResource';


  /**
   * The email address of the user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The full name of the user
   * @member {String} fullname
   */
  exports.prototype['fullname'] = undefined;
  /**
   * The user's score
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * The id of the user
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * The username of the user
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


