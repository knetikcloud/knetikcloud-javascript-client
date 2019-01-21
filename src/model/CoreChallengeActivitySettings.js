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
    root.KnetikCloud.CoreChallengeActivitySettings = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CoreChallengeActivitySettings model module.
   * @module model/CoreChallengeActivitySettings
   * @version 3.0.12
   */

  /**
   * Constructs a new <code>CoreChallengeActivitySettings</code>.
   * @alias module:model/CoreChallengeActivitySettings
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>CoreChallengeActivitySettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoreChallengeActivitySettings} obj Optional instance to populate.
   * @return {module:model/CoreChallengeActivitySettings} The populated <code>CoreChallengeActivitySettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('boot_in_play')) {
        obj['boot_in_play'] = ApiClient.convertToType(data['boot_in_play'], 'Boolean');
      }
      if (data.hasOwnProperty('custom_launch_address')) {
        obj['custom_launch_address'] = ApiClient.convertToType(data['custom_launch_address'], 'String');
      }
      if (data.hasOwnProperty('custom_launch_address_allowed')) {
        obj['custom_launch_address_allowed'] = ApiClient.convertToType(data['custom_launch_address_allowed'], 'Boolean');
      }
      if (data.hasOwnProperty('host_option')) {
        obj['host_option'] = ApiClient.convertToType(data['host_option'], 'String');
      }
      if (data.hasOwnProperty('host_status_control')) {
        obj['host_status_control'] = ApiClient.convertToType(data['host_status_control'], 'Boolean');
      }
      if (data.hasOwnProperty('join_in_play')) {
        obj['join_in_play'] = ApiClient.convertToType(data['join_in_play'], 'Boolean');
      }
      if (data.hasOwnProperty('leave_in_play')) {
        obj['leave_in_play'] = ApiClient.convertToType(data['leave_in_play'], 'Boolean');
      }
      if (data.hasOwnProperty('max_players')) {
        obj['max_players'] = ApiClient.convertToType(data['max_players'], 'Number');
      }
      if (data.hasOwnProperty('min_players')) {
        obj['min_players'] = ApiClient.convertToType(data['min_players'], 'Number');
      }
      if (data.hasOwnProperty('results_trust')) {
        obj['results_trust'] = ApiClient.convertToType(data['results_trust'], 'String');
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
  
  var discriminatorValue = 'CoreChallengeActivitySettings';


  /**
   * Whether the host can boot a user while the status is PLAYING. Null to inherit from activity
   * @member {Boolean} boot_in_play
   */
  exports.prototype['boot_in_play'] = undefined;
  /**
   * A custom address (url, ip or whatever is needed in your game) that users should connect to to play in this challenge rather than the usual game server. Max length: 255
   * @member {String} custom_launch_address
   */
  exports.prototype['custom_launch_address'] = undefined;
  /**
   * Restriction for whether the host creating an occurrence can specify a custom launch address (such as their own ip address). Will override the challenge's custom_launch_address if they do. Null to inherit from activity
   * @member {Boolean} custom_launch_address_allowed
   */
  exports.prototype['custom_launch_address_allowed'] = undefined;
  /**
   * Restriction for who can host an occurrence. admin disallows regular users, player means the user must also be a player in the occurrence if not admin, non-player means the user has the option to host without being a player. Null to inherit
   * @member {module:model/CoreChallengeActivitySettings.HostOptionEnum} host_option
   */
  exports.prototype['host_option'] = undefined;
  /**
   * Restriction for whether the host has control of the status once the game launches. If false they can only manage the game before (when setup and open). Max length: 255. Null to inherit from activity
   * @member {Boolean} host_status_control
   */
  exports.prototype['host_status_control'] = undefined;
  /**
   * Whether users can join while the status is PLAYING. Null to inherit from activity
   * @member {Boolean} join_in_play
   */
  exports.prototype['join_in_play'] = undefined;
  /**
   * Whether users can leave while the status is PLAYING. Null to inherit from activity
   * @member {Boolean} leave_in_play
   */
  exports.prototype['leave_in_play'] = undefined;
  /**
   * The maximum number of players the game can hold. Null to inherit from activity
   * @member {Number} max_players
   */
  exports.prototype['max_players'] = undefined;
  /**
   * The minimum number of players the game can hold. Null to inherit from activity
   * @member {Number} min_players
   */
  exports.prototype['min_players'] = undefined;
  /**
   * Restriction for who is able to report game end and results. Admin is always able to send results as well. Null to inherit from activity
   * @member {module:model/CoreChallengeActivitySettings.ResultsTrustEnum} results_trust
   */
  exports.prototype['results_trust'] = undefined;


  /**
   * Allowed values for the <code>host_option</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HostOptionEnum = {
    /**
     * value: "admin_only"
     * @const
     */
    "admin_only": "admin_only",
    /**
     * value: "player"
     * @const
     */
    "player": "player",
    /**
     * value: "non_player"
     * @const
     */
    "non_player": "non_player"  };

  /**
   * Allowed values for the <code>results_trust</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResultsTrustEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "host"
     * @const
     */
    "host": "host",
    /**
     * value: "all"
     * @const
     */
    "all": "all"  };


  return exports;
}));


