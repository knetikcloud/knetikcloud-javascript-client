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
    define(['ApiClient', 'model/Behavior'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PreReqEntitlement = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior);
  }
}(this, function(ApiClient, Behavior) {
  'use strict';




  /**
   * The PreReqEntitlement model module.
   * @module model/PreReqEntitlement
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>PreReqEntitlement</code>.
   * @alias module:model/PreReqEntitlement
   * @class
   * @extends module:model/Behavior
   * @param itemIds {Array.<Number>} The item ids that must already be in the user's inventory
   */
  var exports = function(itemIds) {
    var _this = this;
    Behavior.call(_this);
    _this['item_ids'] = itemIds;
  };

  /**
   * Constructs a <code>PreReqEntitlement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreReqEntitlement} obj Optional instance to populate.
   * @return {module:model/PreReqEntitlement} The populated <code>PreReqEntitlement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Behavior.constructFromObject(data, obj);
      if (data.hasOwnProperty('item_ids')) {
        obj['item_ids'] = ApiClient.convertToType(data['item_ids'], ['Number']);
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
  
  var discriminatorValue = 'pre_req_entitlement';
  Behavior.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Behavior.prototype);
  exports.prototype.constructor = exports;


  /**
   * The item ids that must already be in the user's inventory
   * @member {Array.<Number>} item_ids
   */
  exports.prototype['item_ids'] = undefined;



  return exports;
}));


