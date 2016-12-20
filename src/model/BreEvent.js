/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.BreEvent = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BreEvent model module.
   * @module model/BreEvent
   * @version Latest
   */

  /**
   * Constructs a new <code>BreEvent</code>.
   * @alias module:model/BreEvent
   * @class
   * @param eventName {String} The event name of the trigger to be fired
   * @param params {Object} The parameters to the event. A Map (assosiative array) with a key for each trigger parameter name and a corrosponding value.
   */
  var exports = function(eventName, params) {
    var _this = this;

    _this['event_name'] = eventName;
    _this['params'] = params;
  };

  /**
   * Constructs a <code>BreEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreEvent} obj Optional instance to populate.
   * @return {module:model/BreEvent} The populated <code>BreEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], Object);
      }
    }
    return obj;
  }

  /**
   * The event name of the trigger to be fired
   * @member {String} event_name
   */
  exports.prototype['event_name'] = undefined;
  /**
   * The parameters to the event. A Map (assosiative array) with a key for each trigger parameter name and a corrosponding value.
   * @member {Object} params
   */
  exports.prototype['params'] = undefined;



  return exports;
}));

