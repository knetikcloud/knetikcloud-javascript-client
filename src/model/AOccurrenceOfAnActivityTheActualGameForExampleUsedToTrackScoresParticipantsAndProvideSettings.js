/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActivityEntitlementResource', 'model/ActivityUserResource', 'model/SelectedSettingResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityEntitlementResource'), require('./ActivityUserResource'), require('./SelectedSettingResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ActivityEntitlementResource, root.KnetikPlatformApiDocumentationLatest.ActivityUserResource, root.KnetikPlatformApiDocumentationLatest.SelectedSettingResource);
  }
}(this, function(ApiClient, ActivityEntitlementResource, ActivityUserResource, SelectedSettingResource) {
  'use strict';




  /**
   * The AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings model module.
   * @module model/AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings
   * @version latest

   */

  /**
   * Constructs a new <code>AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings</code>.
   * @alias module:model/AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings
   * @class
   * @param activityId {Number} The id of the activity
   */
  var exports = function(activityId) {
    var _this = this;

    _this['activity_id'] = activityId;












  };

  /**
   * Constructs a <code>AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings} obj Optional instance to populate.
   * @return {module:model/AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings} The populated <code>AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings</code> instance.
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
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('entitlement')) {
        obj['entitlement'] = ActivityEntitlementResource.constructFromObject(data['entitlement']);
      }
      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('reward_status')) {
        obj['reward_status'] = ApiClient.convertToType(data['reward_status'], 'String');
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = ApiClient.convertToType(data['settings'], [SelectedSettingResource]);
      }
      if (data.hasOwnProperty('simulated')) {
        obj['simulated'] = ApiClient.convertToType(data['simulated'], 'Boolean');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [ActivityUserResource]);
      }
    }
    return obj;
  }

  /**
   * The id of the activity
   * @member {Number} activity_id
   */
  exports.prototype['activity_id'] = undefined;
  /**
   * The id of the challenge activity (as part of the event, required if eventId set)
   * @member {Number} challenge_activity_id
   */
  exports.prototype['challenge_activity_id'] = undefined;
  /**
   * The date this occurrence was created, unix timestamp in seconds
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The entitlement item required to enter the occurrence. Required if not part of an event. Must come from the set of entitlement items listed in the activity
   * @member {module:model/ActivityEntitlementResource} entitlement
   */
  exports.prototype['entitlement'] = undefined;
  /**
   * The id of the event
   * @member {Number} event_id
   */
  exports.prototype['event_id'] = undefined;
  /**
   * The id of the activity occurrence
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Indicate if the rewards have been given out already
   * @member {module:model/AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings.RewardStatusEnum} reward_status
   */
  exports.prototype['reward_status'] = undefined;
  /**
   * The values selected from the available settings defined for the activity. Ex: difficulty: hard. Can be left out if the activity is played during an event and the settings are already set at the event level. Ex: every monday, difficulty: hard, number of questions: 10, category: sport. Otherwise, the set must exactly match those of the activity.
   * @member {Array.<module:model/SelectedSettingResource>} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * Whether this occurrence will be ran as a simulation. Simulations will not be rewarded. Useful for bot play or trials
   * @member {Boolean} simulated
   */
  exports.prototype['simulated'] = undefined;
  /**
   * The date this occurrence was started, unix timestamp in seconds. null if not yet started
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The current status of the occurrence (default: OPEN)
   * @member {module:model/AOccurrenceOfAnActivityTheActualGameForExampleUsedToTrackScoresParticipantsAndProvideSettings.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The date this occurrence was last updated, unix timestamp in seconds
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The list of users participating in this occurrence. Can only be set directly with ACTIVITIES_ADMIN permission
   * @member {Array.<module:model/ActivityUserResource>} users
   */
  exports.prototype['users'] = undefined;


  /**
   * Allowed values for the <code>reward_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RewardStatusEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",
    /**
     * value: "complete"
     * @const
     */
    "complete": "complete",
    /**
     * value: "partial"
     * @const
     */
    "partial": "partial"  };

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

