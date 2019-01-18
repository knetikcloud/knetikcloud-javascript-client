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
    define(['ApiClient', 'model/BroadcastableEvent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastableEvent'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.LogLevelEvent = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BroadcastableEvent);
  }
}(this, function(ApiClient, BroadcastableEvent) {
  'use strict';




  /**
   * The LogLevelEvent model module.
   * @module model/LogLevelEvent
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>LogLevelEvent</code>.
   * @alias module:model/LogLevelEvent
   * @class
   * @extends module:model/BroadcastableEvent
   * @param type {String} The type of the event. Used for polymorphic type recognition and thus must match an expected type
   */
  var exports = function(type) {
    var _this = this;
    BroadcastableEvent.call(_this, type);


  };

  /**
   * Constructs a <code>LogLevelEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LogLevelEvent} obj Optional instance to populate.
   * @return {module:model/LogLevelEvent} The populated <code>LogLevelEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BroadcastableEvent.constructFromObject(data, obj);
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'String');
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
  
  var discriminatorValue = 'log_level';
  BroadcastableEvent.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(BroadcastableEvent.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {String} level
   */
  exports.prototype['level'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


