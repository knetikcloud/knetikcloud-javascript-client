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
    define(['ApiClient', 'model/Property', 'model/RewardSetResource', 'model/Schedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'), require('./RewardSetResource'), require('./Schedule'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ChallengeResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Property, root.KnetikPlatformApiDocumentationLatest.RewardSetResource, root.KnetikPlatformApiDocumentationLatest.Schedule);
  }
}(this, function(ApiClient, Property, RewardSetResource, Schedule) {
  'use strict';




  /**
   * The ChallengeResource model module.
   * @module model/ChallengeResource
   * @version latest

   */

  /**
   * Constructs a new <code>ChallengeResource</code>.
   * @alias module:model/ChallengeResource
   * @class
   * @param name {String} The user friendly name of that resource
   */
  var exports = function(name) {
    var _this = this;










    _this['name'] = name;








  };

  /**
   * Constructs a <code>ChallengeResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChallengeResource} obj Optional instance to populate.
   * @return {module:model/ChallengeResource} The populated <code>ChallengeResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activities')) {
        obj['activities'] = ApiClient.convertToType(data['activities'], 'Number');
      }
      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('campaign_id')) {
        obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'Number');
      }
      if (data.hasOwnProperty('copy_of')) {
        obj['copy_of'] = ApiClient.convertToType(data['copy_of'], 'Number');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('leaderboard_strategy')) {
        obj['leaderboard_strategy'] = ApiClient.convertToType(data['leaderboard_strategy'], 'String');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('next_event_date')) {
        obj['next_event_date'] = ApiClient.convertToType(data['next_event_date'], 'Number');
      }
      if (data.hasOwnProperty('reward_lag_minutes')) {
        obj['reward_lag_minutes'] = ApiClient.convertToType(data['reward_lag_minutes'], 'Number');
      }
      if (data.hasOwnProperty('reward_set')) {
        obj['reward_set'] = RewardSetResource.constructFromObject(data['reward_set']);
      }
      if (data.hasOwnProperty('schedule')) {
        obj['schedule'] = Schedule.constructFromObject(data['schedule']);
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The number of activities allowed to this challenge
   * @member {Number} activities
   */
  exports.prototype['activities'] = undefined;
  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The id of the campaign this challenge is a part of. The challenge must be tied to an active campaign before it will spawn events
   * @member {Number} campaign_id
   */
  exports.prototype['campaign_id'] = undefined;
  /**
   * The ID of the original challenge it was copied from
   * @member {Number} copy_of
   */
  exports.prototype['copy_of'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The end date of this challenge in seconds since epoch. required if part of a campaign
   * @member {Number} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The unique ID for that resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The strategy for calculating the leaderboard. Defaults to highest score. Value MUST come from the list of available strategies from the Leaderboard Service.
   * @member {String} leaderboard_strategy
   */
  exports.prototype['leaderboard_strategy'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The user friendly name of that resource
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The next date this challenge will be occur in seconds since epoch
   * @member {Number} next_event_date
   */
  exports.prototype['next_event_date'] = undefined;
  /**
   * The number of minutes minimum to wait at the end of this challenge before running rewards, to allow activities to complete
   * @member {Number} reward_lag_minutes
   */
  exports.prototype['reward_lag_minutes'] = undefined;
  /**
   * The rewards to give at the end of the challenge. When creating/updating only id is used. Reward set must be pre-existing
   * @member {module:model/RewardSetResource} reward_set
   */
  exports.prototype['reward_set'] = undefined;
  /**
   * The repeat schedule for the challenge
   * @member {module:model/Schedule} schedule
   */
  exports.prototype['schedule'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * The start date of this challenge in seconds since epoch. required if part of a campaign
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * A challenge template this challenge is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));

