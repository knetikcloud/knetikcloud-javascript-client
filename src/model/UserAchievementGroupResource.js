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
    define(['ApiClient', 'model/UserAchievementResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserAchievementResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UserAchievementGroupResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.UserAchievementResource);
  }
}(this, function(ApiClient, UserAchievementResource) {
  'use strict';




  /**
   * The UserAchievementGroupResource model module.
   * @module model/UserAchievementGroupResource
   * @version 3.0.268
   */

  /**
   * Constructs a new <code>UserAchievementGroupResource</code>.
   * @alias module:model/UserAchievementGroupResource
   * @class
   * @param achievements {Array.<module:model/UserAchievementResource>} The list of achievements associated with the group
   * @param groupName {String} The name of the group.  If used by Leveling, this will represent the level name
   * @param progress {Number} The current progress of the user on the group
   * @param userId {Number} The id of the user whose progress is being tracked
   */
  var exports = function(achievements, groupName, progress, userId) {
    var _this = this;

    _this['achievements'] = achievements;
    _this['group_name'] = groupName;

    _this['progress'] = progress;
    _this['user_id'] = userId;
  };

  /**
   * Constructs a <code>UserAchievementGroupResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAchievementGroupResource} obj Optional instance to populate.
   * @return {module:model/UserAchievementGroupResource} The populated <code>UserAchievementGroupResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('achievements')) {
        obj['achievements'] = ApiClient.convertToType(data['achievements'], [UserAchievementResource]);
      }
      if (data.hasOwnProperty('group_name')) {
        obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
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
  
  var discriminatorValue = 'UserAchievementGroupResource';


  /**
   * The list of achievements associated with the group
   * @member {Array.<module:model/UserAchievementResource>} achievements
   */
  exports.prototype['achievements'] = undefined;
  /**
   * The name of the group.  If used by Leveling, this will represent the level name
   * @member {String} group_name
   */
  exports.prototype['group_name'] = undefined;
  /**
   * The id of the achievement progress
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The current progress of the user on the group
   * @member {Number} progress
   */
  exports.prototype['progress'] = undefined;
  /**
   * The id of the user whose progress is being tracked
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


