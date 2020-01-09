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
    define(['ApiClient', 'model/UserActivityResultsResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserActivityResultsResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ActivityOccurrenceResultsResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.UserActivityResultsResource);
  }
}(this, function(ApiClient, UserActivityResultsResource) {
  'use strict';




  /**
   * The ActivityOccurrenceResultsResource model module.
   * @module model/ActivityOccurrenceResultsResource
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>ActivityOccurrenceResultsResource</code>.
   * @alias module:model/ActivityOccurrenceResultsResource
   * @class
   * @param users {Array.<module:model/UserActivityResultsResource>} The game results for each user. Include all users that played (paid to get in) even if they were eliminated without a result. A null metric is allowed
   */
  var exports = function(users) {
    var _this = this;

    _this['users'] = users;
  };

  /**
   * Constructs a <code>ActivityOccurrenceResultsResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityOccurrenceResultsResource} obj Optional instance to populate.
   * @return {module:model/ActivityOccurrenceResultsResource} The populated <code>ActivityOccurrenceResultsResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UserActivityResultsResource]);
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
  
  var discriminatorValue = 'ActivityOccurrenceResultsResource';


  /**
   * The game results for each user. Include all users that played (paid to get in) even if they were eliminated without a result. A null metric is allowed
   * @member {Array.<module:model/UserActivityResultsResource>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


