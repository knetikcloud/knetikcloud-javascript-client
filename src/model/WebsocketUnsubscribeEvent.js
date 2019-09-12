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
    define(['ApiClient', 'model/BroadcastableEvent', 'model/Topic', 'model/TopicSubscriber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastableEvent'), require('./Topic'), require('./TopicSubscriber'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.WebsocketUnsubscribeEvent = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BroadcastableEvent, root.KnetikCloud.Topic, root.KnetikCloud.TopicSubscriber);
  }
}(this, function(ApiClient, BroadcastableEvent, Topic, TopicSubscriber) {
  'use strict';




  /**
   * The WebsocketUnsubscribeEvent model module.
   * @module model/WebsocketUnsubscribeEvent
   * @version 3.0.270
   */

  /**
   * Constructs a new <code>WebsocketUnsubscribeEvent</code>.
   * @alias module:model/WebsocketUnsubscribeEvent
   * @class
   * @extends module:model/BroadcastableEvent
   * @param type {String} The type of the event. Used for polymorphic type recognition and thus must match an expected type
   */
  var exports = function(type) {
    var _this = this;
    BroadcastableEvent.call(_this, type);


  };

  /**
   * Constructs a <code>WebsocketUnsubscribeEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebsocketUnsubscribeEvent} obj Optional instance to populate.
   * @return {module:model/WebsocketUnsubscribeEvent} The populated <code>WebsocketUnsubscribeEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BroadcastableEvent.constructFromObject(data, obj);
      if (data.hasOwnProperty('topic')) {
        obj['topic'] = Topic.constructFromObject(data['topic']);
      }
      if (data.hasOwnProperty('topic_subscriber')) {
        obj['topic_subscriber'] = TopicSubscriber.constructFromObject(data['topic_subscriber']);
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
  
  var discriminatorValue = 'websocket_unsubscribe';
  BroadcastableEvent.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(BroadcastableEvent.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/Topic} topic
   */
  exports.prototype['topic'] = undefined;
  /**
   * @member {module:model/TopicSubscriber} topic_subscriber
   */
  exports.prototype['topic_subscriber'] = undefined;



  return exports;
}));


