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
    define(['ApiClient', 'model/CoreActivityOccurrenceSettings', 'model/ItemIdRequest', 'model/Participant', 'model/SelectedSettingRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CoreActivityOccurrenceSettings'), require('./ItemIdRequest'), require('./Participant'), require('./SelectedSettingRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.CreateActivityOccurrenceRequest = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CoreActivityOccurrenceSettings, root.KnetikCloud.ItemIdRequest, root.KnetikCloud.Participant, root.KnetikCloud.SelectedSettingRequest);
  }
}(this, function(ApiClient, CoreActivityOccurrenceSettings, ItemIdRequest, Participant, SelectedSettingRequest) {
  'use strict';




  /**
   * The CreateActivityOccurrenceRequest model module.
   * @module model/CreateActivityOccurrenceRequest
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>CreateActivityOccurrenceRequest</code>.
   * A occurrence of an activity (the actual game for example). Used to track scores, participants, and provide settings
   * @alias module:model/CreateActivityOccurrenceRequest
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>CreateActivityOccurrenceRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateActivityOccurrenceRequest} obj Optional instance to populate.
   * @return {module:model/CreateActivityOccurrenceRequest} The populated <code>CreateActivityOccurrenceRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activity_id')) {
        obj['activity_id'] = ApiClient.convertToType(data['activity_id'], 'Number');
      }
      if (data.hasOwnProperty('challenge_activity_id')) {
        obj['challenge_activity_id'] = ApiClient.convertToType(data['challenge_activity_id'], 'Number');
      }
      if (data.hasOwnProperty('core_settings')) {
        obj['core_settings'] = CoreActivityOccurrenceSettings.constructFromObject(data['core_settings']);
      }
      if (data.hasOwnProperty('entitlement')) {
        obj['entitlement'] = ItemIdRequest.constructFromObject(data['entitlement']);
      }
      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'Number');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'Number');
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = ApiClient.convertToType(data['settings'], [SelectedSettingRequest]);
      }
      if (data.hasOwnProperty('simulated')) {
        obj['simulated'] = ApiClient.convertToType(data['simulated'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [Participant]);
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
  
  var discriminatorValue = 'CreateActivityOccurrenceRequest';


  /**
   * The id of the activity, only needed when outside of challenge/event
   * @member {Number} activity_id
   */
  exports.prototype['activity_id'] = undefined;
  /**
   * The id of the challenge activity (required if playing in a challenge/event). Note that this is the challenge_activity_id in case the same activity apears twice in the challenge.
   * @member {Number} challenge_activity_id
   */
  exports.prototype['challenge_activity_id'] = undefined;
  /**
   * Defines core settings about the activity that affect how it can be created/played by users.
   * @member {module:model/CoreActivityOccurrenceSettings} core_settings
   */
  exports.prototype['core_settings'] = undefined;
  /**
   * The entitlement item required to enter the occurrence. Required if not part of an event. Must come from the set of entitlement items listed in the activity
   * @member {module:model/ItemIdRequest} entitlement
   */
  exports.prototype['entitlement'] = undefined;
  /**
   * The id of the event this occurence is a part of, if any
   * @member {Number} event_id
   */
  exports.prototype['event_id'] = undefined;
  /**
   * The host of the occurrence, if not a participant (will be left out of users array). Must be the caller that creates the occurrence unless admin. Requires activity/challenge to allow host_option of 'non_player' if not admin as well
   * @member {Number} host
   */
  exports.prototype['host'] = undefined;
  /**
   * The values selected from the available settings defined for the activity. Ex: difficulty: hard. Can be left out if the activity is played during an event and the settings are already set at the event level. Ex: every monday, difficulty: hard, number of questions: 10, category: sport. Otherwise, the set must exactly match those of the activity.
   * @member {Array.<module:model/SelectedSettingRequest>} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * Whether this occurrence will be ran as a simulation. Simulations will not be rewarded. Useful for bot play or trials
   * @member {Boolean} simulated
   */
  exports.prototype['simulated'] = undefined;
  /**
   * The current status of the occurrence (default: SETUP).
   * @member {module:model/CreateActivityOccurrenceRequest.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The list of users participating in this occurrence. Can only be set directly with ACTIVITIES_ADMIN permission
   * @member {Array.<module:model/Participant>} users
   */
  exports.prototype['users'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "SETUP"
     * @const
     */
    "SETUP": "SETUP",
    /**
     * value: "OPEN"
     * @const
     */
    "OPEN": "OPEN",
    /**
     * value: "LAUNCHING"
     * @const
     */
    "LAUNCHING": "LAUNCHING",
    /**
     * value: "PLAYING"
     * @const
     */
    "PLAYING": "PLAYING",
    /**
     * value: "FINISHED"
     * @const
     */
    "FINISHED": "FINISHED",
    /**
     * value: "ABANDONED"
     * @const
     */
    "ABANDONED": "ABANDONED"  };


  return exports;
}));


