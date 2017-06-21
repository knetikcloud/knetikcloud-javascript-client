/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    define(['ApiClient', 'model/Behavior'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PriceOverridable = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Behavior);
  }
}(this, function(ApiClient, Behavior) {
  'use strict';




  /**
   * The PriceOverridable model module.
   * @module model/PriceOverridable
   * @version latest

   */

  /**
   * Constructs a new <code>PriceOverridable</code>.
   * @alias module:model/PriceOverridable
   * @class
   * @extends module:model/Behavior
   */
  var exports = function() {
    var _this = this;
    Behavior.call(_this);


  };

  /**
   * Constructs a <code>PriceOverridable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceOverridable} obj Optional instance to populate.
   * @return {module:model/PriceOverridable} The populated <code>PriceOverridable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Behavior.constructFromObject(data, obj);
      if (data.hasOwnProperty('max_price')) {
        obj['max_price'] = ApiClient.convertToType(data['max_price'], 'Number');
      }
      if (data.hasOwnProperty('min_price')) {
        obj['min_price'] = ApiClient.convertToType(data['min_price'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Behavior.prototype);
  exports.prototype.constructor = exports;

  /**
   * The maximum price allowed
   * @member {Number} max_price
   */
  exports.prototype['max_price'] = undefined;
  /**
   * The minimum price allowed
   * @member {Number} min_price
   */
  exports.prototype['min_price'] = undefined;



  return exports;
}));


