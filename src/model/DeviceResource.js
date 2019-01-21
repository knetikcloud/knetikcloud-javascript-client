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
    define(['ApiClient', 'model/Property', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.DeviceResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, Property, SimpleUserResource) {
  'use strict';




  /**
   * The DeviceResource model module.
   * @module model/DeviceResource
   * @version 3.0.12
   */

  /**
   * Constructs a new <code>DeviceResource</code>.
   * @alias module:model/DeviceResource
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>DeviceResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceResource} obj Optional instance to populate.
   * @return {module:model/DeviceResource} The populated <code>DeviceResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('device_type')) {
        obj['device_type'] = ApiClient.convertToType(data['device_type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('mac_address')) {
        obj['mac_address'] = ApiClient.convertToType(data['mac_address'], 'String');
      }
      if (data.hasOwnProperty('make')) {
        obj['make'] = ApiClient.convertToType(data['make'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('os')) {
        obj['os'] = ApiClient.convertToType(data['os'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = SimpleUserResource.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('serial')) {
        obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [SimpleUserResource]);
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
  
  var discriminatorValue = 'DeviceResource';

exports.discriminatorField = 'device_type';
  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template if one is specified
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The date the device log was created
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The description of the device
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The type of device. Use mobile_device to specifically register mobile devices. This particular type will be used to send and receive notifications
   * @member {String} device_type
   */
  exports.prototype['device_type'] = undefined;
  /**
   * The unique ID for this device. Cannot be changed after creation. Default: random
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The physical location of the device, coordinates or named place (office, living room, etc)
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * The MAC (media access control) address of the device
   * @member {String} mac_address
   */
  exports.prototype['mac_address'] = undefined;
  /**
   * The make of the device
   * @member {String} make
   */
  exports.prototype['make'] = undefined;
  /**
   * The model of the device
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * The name of the device
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The OS (operating system) on the device
   * @member {String} os
   */
  exports.prototype['os'] = undefined;
  /**
   * The user that owns the device
   * @member {module:model/SimpleUserResource} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The serial number of the device
   * @member {String} serial
   */
  exports.prototype['serial'] = undefined;
  /**
   * Random tags to facilitate search
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * Use to describe and validate custom properties (custom schema). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The date the device log was updated
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The users currently using the device
   * @member {Array.<module:model/SimpleUserResource>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


