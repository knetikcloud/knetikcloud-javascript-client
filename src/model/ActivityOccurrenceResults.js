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
    define(['ApiClient', 'model/UserActivityResults'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserActivityResults'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ActivityOccurrenceResults = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.UserActivityResults);
  }
}(this, function(ApiClient, UserActivityResults) {
  'use strict';




  /**
   * The ActivityOccurrenceResults model module.
   * @module model/ActivityOccurrenceResults
   * @version 3.0.268
   */

  /**
   * Constructs a new <code>ActivityOccurrenceResults</code>.
   * @alias module:model/ActivityOccurrenceResults
   * @class
   * @param users {Array.<module:model/UserActivityResults>} The game results for each user. Include all users that played (paid to get in) even if they were eliminated without a result. A null metric is allowed
   */
  var exports = function(users) {
    var _this = this;

    _this['users'] = users;
  };

  /**
   * Constructs a <code>ActivityOccurrenceResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityOccurrenceResults} obj Optional instance to populate.
   * @return {module:model/ActivityOccurrenceResults} The populated <code>ActivityOccurrenceResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UserActivityResults]);
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
  
  var discriminatorValue = 'ActivityOccurrenceResults';


  /**
   * The game results for each user. Include all users that played (paid to get in) even if they were eliminated without a result. A null metric is allowed
   * @member {Array.<module:model/UserActivityResults>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


