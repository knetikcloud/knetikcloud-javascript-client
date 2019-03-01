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
    define(['ApiClient', 'model/DeviceResource', 'model/Property', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceResource'), require('./Property'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MobileDeviceResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.DeviceResource, root.KnetikCloud.Property, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, DeviceResource, Property, SimpleUserResource) {
  'use strict';




  /**
   * The MobileDeviceResource model module.
   * @module model/MobileDeviceResource
   * @version 3.0.15
   */

  /**
   * Constructs a new <code>MobileDeviceResource</code>.
   * @alias module:model/MobileDeviceResource
   * @class
   * @extends module:model/DeviceResource
   */
  var exports = function() {
    var _this = this;
    DeviceResource.call(_this);




  };

  /**
   * Constructs a <code>MobileDeviceResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MobileDeviceResource} obj Optional instance to populate.
   * @return {module:model/MobileDeviceResource} The populated <code>MobileDeviceResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      DeviceResource.constructFromObject(data, obj);
      if (data.hasOwnProperty('authorization')) {
        obj['authorization'] = ApiClient.convertToType(data['authorization'], 'String');
      }
      if (data.hasOwnProperty('imei')) {
        obj['imei'] = ApiClient.convertToType(data['imei'], 'String');
      }
      if (data.hasOwnProperty('notification_platform')) {
        obj['notification_platform'] = ApiClient.convertToType(data['notification_platform'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
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
  
  var discriminatorValue = 'mobile_device';
  DeviceResource.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(DeviceResource.prototype);
  exports.prototype.constructor = exports;


  /**
   * The authorization code for push notifications provided by the provider platform (APNS, GCM, etc).
   * @member {String} authorization
   */
  exports.prototype['authorization'] = undefined;
  /**
   * @member {String} imei
   */
  exports.prototype['imei'] = undefined;
  /**
   * The platform used for push notifications. Only Apple and Android are supported at the moment.
   * @member {module:model/MobileDeviceResource.NotificationPlatformEnum} notification_platform
   */
  exports.prototype['notification_platform'] = undefined;
  /**
   * The phone number associated with this device if applicable, in international format
   * @member {String} number
   */
  exports.prototype['number'] = undefined;


  /**
   * Allowed values for the <code>notification_platform</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NotificationPlatformEnum = {
    /**
     * value: "APNS"
     * @const
     */
    "APNS": "APNS",
    /**
     * value: "GCM"
     * @const
     */
    "GCM": "GCM"  };


  return exports;
}));


