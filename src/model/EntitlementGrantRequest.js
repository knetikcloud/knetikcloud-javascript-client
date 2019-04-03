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
    root.KnetikCloud.EntitlementGrantRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EntitlementGrantRequest model module.
   * @module model/EntitlementGrantRequest
   * @version 3.0.18
   */

  /**
   * Constructs a new <code>EntitlementGrantRequest</code>.
   * @alias module:model/EntitlementGrantRequest
   * @class
   * @param entitlementId {Number} The ID of the entitlement item to grant
   */
  var exports = function(entitlementId) {
    var _this = this;

    _this['entitlement_id'] = entitlementId;
  };

  /**
   * Constructs a <code>EntitlementGrantRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntitlementGrantRequest} obj Optional instance to populate.
   * @return {module:model/EntitlementGrantRequest} The populated <code>EntitlementGrantRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entitlement_id')) {
        obj['entitlement_id'] = ApiClient.convertToType(data['entitlement_id'], 'Number');
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
  
  var discriminatorValue = 'EntitlementGrantRequest';


  /**
   * The ID of the entitlement item to grant
   * @member {Number} entitlement_id
   */
  exports.prototype['entitlement_id'] = undefined;



  return exports;
}));


