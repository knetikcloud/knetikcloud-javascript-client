/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BroadcastableEvent', 'model/CustomerConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BroadcastableEvent'), require('./CustomerConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.RemoveCustomerEvent = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.BroadcastableEvent, root.KnetikcloudSdk.CustomerConfig);
  }
}(this, function(ApiClient, BroadcastableEvent, CustomerConfig) {
  'use strict';




  /**
   * The RemoveCustomerEvent model module.
   * @module model/RemoveCustomerEvent
   * @version latest

   */

  /**
   * Constructs a new <code>RemoveCustomerEvent</code>.
   * @alias module:model/RemoveCustomerEvent
   * @class
   * @extends module:model/BroadcastableEvent
   * @param type {String} The type of the event. Used for polymorphic type recognition and thus must match an expected type
   */
  var exports = function(type) {
    var _this = this;
    BroadcastableEvent.call(_this, type);

  };

  /**
   * Constructs a <code>RemoveCustomerEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RemoveCustomerEvent} obj Optional instance to populate.
   * @return {module:model/RemoveCustomerEvent} The populated <code>RemoveCustomerEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      BroadcastableEvent.constructFromObject(data, obj);
      if (data.hasOwnProperty('customer_config')) {
        obj['customer_config'] = CustomerConfig.constructFromObject(data['customer_config']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(BroadcastableEvent.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/CustomerConfig} customer_config
   */
  exports.prototype['customer_config'] = undefined;



  return exports;
}));

