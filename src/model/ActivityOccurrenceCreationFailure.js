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
    define(['ApiClient', 'model/ActivityOccurrenceJoinResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityOccurrenceJoinResult'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ActivityOccurrenceCreationFailure = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ActivityOccurrenceJoinResult);
  }
}(this, function(ApiClient, ActivityOccurrenceJoinResult) {
  'use strict';




  /**
   * The ActivityOccurrenceCreationFailure model module.
   * @module model/ActivityOccurrenceCreationFailure
   * @version 3.0.16
   */

  /**
   * Constructs a new <code>ActivityOccurrenceCreationFailure</code>.
   * @alias module:model/ActivityOccurrenceCreationFailure
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ActivityOccurrenceCreationFailure</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityOccurrenceCreationFailure} obj Optional instance to populate.
   * @return {module:model/ActivityOccurrenceCreationFailure} The populated <code>ActivityOccurrenceCreationFailure</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_results')) {
        obj['user_results'] = ApiClient.convertToType(data['user_results'], [ActivityOccurrenceJoinResult]);
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
  
  var discriminatorValue = 'ActivityOccurrenceCreationFailure';


  /**
   * The details of each user's entry, or just the current user's if not run with ACTIVITIES_ADMIN permission
   * @member {Array.<module:model/ActivityOccurrenceJoinResult>} user_results
   */
  exports.prototype['user_results'] = undefined;



  return exports;
}));


