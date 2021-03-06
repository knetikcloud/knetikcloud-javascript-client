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
    define(['ApiClient', 'model/BreTriggerResource', 'model/BroadcastableEvent', 'model/ResourceTypeDescription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BreTriggerResource'), require('./BroadcastableEvent'), require('./ResourceTypeDescription'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ServiceDeployedEvent = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BreTriggerResource, root.KnetikCloud.BroadcastableEvent, root.KnetikCloud.ResourceTypeDescription);
  }
}(this, function(ApiClient, BreTriggerResource, BroadcastableEvent, ResourceTypeDescription) {
  'use strict';




  /**
   * The ServiceDeployedEvent model module.
   * @module model/ServiceDeployedEvent
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>ServiceDeployedEvent</code>.
   * @alias module:model/ServiceDeployedEvent
   * @class
   * @extends module:model/BroadcastableEvent
   * @param type {String} The type of the event. Used for polymorphic type recognition and thus must match an expected type
   * @param events {Array.<module:model/BreTriggerResource>} The events fired by this service
   * @param resources {Array.<module:model/ResourceTypeDescription>} The resources managed by this service
   * @param serviceName {String} The unique name for the service. This serves as the unique identifier. Cannot be changed after creation
   * @param swaggerUrl {String} The url of the swagger doc
   */
  var exports = function(type, events, resources, serviceName, swaggerUrl) {
    var _this = this;
    BroadcastableEvent.call(_this, type);
    _this['events'] = events;
    _this['resources'] = resources;
    _this['service_name'] = serviceName;
    _this['swagger_url'] = swaggerUrl;
  };

  /**
   * Constructs a <code>ServiceDeployedEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceDeployedEvent} obj Optional instance to populate.
   * @return {module:model/ServiceDeployedEvent} The populated <code>ServiceDeployedEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BroadcastableEvent.constructFromObject(data, obj);
      if (data.hasOwnProperty('events')) {
        obj['events'] = ApiClient.convertToType(data['events'], [BreTriggerResource]);
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], [ResourceTypeDescription]);
      }
      if (data.hasOwnProperty('service_name')) {
        obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
      }
      if (data.hasOwnProperty('swagger_url')) {
        obj['swagger_url'] = ApiClient.convertToType(data['swagger_url'], 'String');
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
  
  var discriminatorValue = 'service_deployed';
  BroadcastableEvent.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(BroadcastableEvent.prototype);
  exports.prototype.constructor = exports;


  /**
   * The events fired by this service
   * @member {Array.<module:model/BreTriggerResource>} events
   */
  exports.prototype['events'] = undefined;
  /**
   * The resources managed by this service
   * @member {Array.<module:model/ResourceTypeDescription>} resources
   */
  exports.prototype['resources'] = undefined;
  /**
   * The unique name for the service. This serves as the unique identifier. Cannot be changed after creation
   * @member {String} service_name
   */
  exports.prototype['service_name'] = undefined;
  /**
   * The url of the swagger doc
   * @member {String} swagger_url
   */
  exports.prototype['swagger_url'] = undefined;



  return exports;
}));


