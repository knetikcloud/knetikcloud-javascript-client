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
    root.KnetikCloud.CoreActivityOccurrenceSettings = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CoreActivityOccurrenceSettings model module.
   * @module model/CoreActivityOccurrenceSettings
   * @version 3.0.21
   */

  /**
   * Constructs a new <code>CoreActivityOccurrenceSettings</code>.
   * @alias module:model/CoreActivityOccurrenceSettings
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>CoreActivityOccurrenceSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoreActivityOccurrenceSettings} obj Optional instance to populate.
   * @return {module:model/CoreActivityOccurrenceSettings} The populated <code>CoreActivityOccurrenceSettings</code> instance.
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
      if (data.hasOwnProperty('non_host_status_control')) {
        obj['non_host_status_control'] = ApiClient.convertToType(data['non_host_status_control'], 'Boolean');
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
  
  var discriminatorValue = 'CoreActivityOccurrenceSettings';


  /**
   * Whether the host can boot another user while the status is PLAYING. Must be false or null unless this setting is true in activity (or challenge if applicable). Null to inherit
   * @member {Boolean} boot_in_play
   */
  exports.prototype['boot_in_play'] = undefined;
  /**
   * A custom address (url, ip or whatever is needed in your game) that users should connect to to play in this occurrence rather than the usual game server. Could be the ip address of the host for peer-to-peer play. Can only be set if the activity/challenge custom_launch_address_allowed is true. Max length: 255
   * @member {String} custom_launch_address
   */
  exports.prototype['custom_launch_address'] = undefined;
  /**
   * Restriction for whether the host has control of the status once the game launches. If false they can only manage the game before (when setup and open). Cannot be true if activity/challenge has it false. Null to inherit
   * @member {Boolean} host_status_control
   */
  exports.prototype['host_status_control'] = undefined;
  /**
   * Whether users can join while the status is PLAYING. Must be false or null unless this setting is true in activity (or challenge if applicable). Null to inherit
   * @member {Boolean} join_in_play
   */
  exports.prototype['join_in_play'] = undefined;
  /**
   * Whether users can leave while the status is PLAYING. Must be false or null unless this setting is true in activity (or challenge if applicable). Null to inherit
   * @member {Boolean} leave_in_play
   */
  exports.prototype['leave_in_play'] = undefined;
  /**
   * The maximum number of players the game can hold. Must be equal or less than activity (or must match challenge if applicable)
   * @member {Number} max_players
   */
  exports.prototype['max_players'] = undefined;
  /**
   * The minimum number of players the game can hold. Must be equal or greater than activity (or must match challenge if applicable)
   * @member {Number} min_players
   */
  exports.prototype['min_players'] = undefined;
  /**
   * Restriction for whether the non-host players can control of the status in place of the host. Default: false
   * @member {Boolean} non_host_status_control
   */
  exports.prototype['non_host_status_control'] = undefined;
  /**
   * Restriction for who is able to report game end and results. Admin is always able to send results as well. Must be equal or more restrictive than activity (or must match challenge if applicable). Default inherits
   * @member {module:model/CoreActivityOccurrenceSettings.ResultsTrustEnum} results_trust
   */
  exports.prototype['results_trust'] = undefined;


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


