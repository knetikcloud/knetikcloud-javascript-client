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
    root.KnetikCloud.TopicSubscriberResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TopicSubscriberResource model module.
   * @module model/TopicSubscriberResource
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>TopicSubscriberResource</code>.
   * @alias module:model/TopicSubscriberResource
   * @class
   * @param topicId {String} The ID for this topic
   */
  var exports = function(topicId) {
    var _this = this;


    _this['topic_id'] = topicId;


  };

  /**
   * Constructs a <code>TopicSubscriberResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopicSubscriberResource} obj Optional instance to populate.
   * @return {module:model/TopicSubscriberResource} The populated <code>TopicSubscriberResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('topic_id')) {
        obj['topic_id'] = ApiClient.convertToType(data['topic_id'], 'String');
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
  
  var discriminatorValue = 'TopicSubscriberResource';


  /**
   * Whether the user has disabled messages from the topic
   * @member {Boolean} disabled
   */
  exports.prototype['disabled'] = undefined;
  /**
   * The ID for this topic
   * @member {String} topic_id
   */
  exports.prototype['topic_id'] = undefined;
  /**
   * The user ID subscribed to the topic
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * The username subscribed to the topic
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


