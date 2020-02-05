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
    define(['ApiClient', 'model/ActivityEntitlementResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityEntitlementResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ActivityOccurrenceJoinResult = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ActivityEntitlementResource);
  }
}(this, function(ApiClient, ActivityEntitlementResource) {
  'use strict';




  /**
   * The ActivityOccurrenceJoinResult model module.
   * @module model/ActivityOccurrenceJoinResult
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>ActivityOccurrenceJoinResult</code>.
   * @alias module:model/ActivityOccurrenceJoinResult
   * @class
   * @param errorCode {Number} Zero if the user was/could be added to the occurrence. Jsapi error code indicating the reason of the failure otherwise
   * @param userId {Number} The user's id
   */
  var exports = function(errorCode, userId) {
    var _this = this;


    _this['error_code'] = errorCode;

    _this['user_id'] = userId;
  };

  /**
   * Constructs a <code>ActivityOccurrenceJoinResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityOccurrenceJoinResult} obj Optional instance to populate.
   * @return {module:model/ActivityOccurrenceJoinResult} The populated <code>ActivityOccurrenceJoinResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entitlement')) {
        obj['entitlement'] = ActivityEntitlementResource.constructFromObject(data['entitlement']);
      }
      if (data.hasOwnProperty('error_code')) {
        obj['error_code'] = ApiClient.convertToType(data['error_code'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
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
  
  var discriminatorValue = 'ActivityOccurrenceJoinResult';


  /**
   * The details on the entitlement object needed to enter the occurrence (if any)
   * @member {module:model/ActivityEntitlementResource} entitlement
   */
  exports.prototype['entitlement'] = undefined;
  /**
   * Zero if the user was/could be added to the occurrence. Jsapi error code indicating the reason of the failure otherwise
   * @member {Number} error_code
   */
  exports.prototype['error_code'] = undefined;
  /**
   * An error message if failure
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The user's id
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


