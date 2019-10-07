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
    root.KnetikCloud.WebsocketMessageResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WebsocketMessageResource model module.
   * @module model/WebsocketMessageResource
   * @version 3.0.273
   */

  /**
   * Constructs a new <code>WebsocketMessageResource</code>.
   * @alias module:model/WebsocketMessageResource
   * @class
   * @param content {Object} The body of the outgoing message.
   * @param recipients {Array.<Number>} A list of user ids to send the message to.
   */
  var exports = function(content, recipients) {
    var _this = this;

    _this['content'] = content;

    _this['recipients'] = recipients;
  };

  /**
   * Constructs a <code>WebsocketMessageResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebsocketMessageResource} obj Optional instance to populate.
   * @return {module:model/WebsocketMessageResource} The populated <code>WebsocketMessageResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], Object);
      }
      if (data.hasOwnProperty('message_type')) {
        obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], ['Number']);
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
  
  var discriminatorValue = 'WebsocketMessageResource';


  /**
   * The body of the outgoing message.
   * @member {Object} content
   */
  exports.prototype['content'] = undefined;
  /**
   * A message type to inform websocket recipient how to parse content
   * @member {String} message_type
   */
  exports.prototype['message_type'] = undefined;
  /**
   * A list of user ids to send the message to.
   * @member {Array.<Number>} recipients
   */
  exports.prototype['recipients'] = undefined;



  return exports;
}));


