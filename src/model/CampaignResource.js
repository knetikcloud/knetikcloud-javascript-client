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
    define(['ApiClient', 'model/Property', 'model/RewardSetResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'), require('./RewardSetResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.CampaignResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Property, root.KnetikPlatformApiDocumentationLatest.RewardSetResource);
  }
}(this, function(ApiClient, Property, RewardSetResource) {
  'use strict';




  /**
   * The CampaignResource model module.
   * @module model/CampaignResource
   * @version latest

   */

  /**
   * Constructs a new <code>CampaignResource</code>.
   * @alias module:model/CampaignResource
   * @class
   * @param name {String} The user friendly name of that resource
   */
  var exports = function(name) {
    var _this = this;







    _this['name'] = name;







  };

  /**
   * Constructs a <code>CampaignResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignResource} obj Optional instance to populate.
   * @return {module:model/CampaignResource} The populated <code>CampaignResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
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
      if (data.hasOwnProperty('next_challenge')) {
        obj['next_challenge'] = ApiClient.convertToType(data['next_challenge'], 'String');
      }
      if (data.hasOwnProperty('next_challenge_date')) {
        obj['next_challenge_date'] = ApiClient.convertToType(data['next_challenge_date'], 'Number');
      }
      if (data.hasOwnProperty('reward_set')) {
        obj['reward_set'] = RewardSetResource.constructFromObject(data['reward_set']);
      }
      if (data.hasOwnProperty('reward_status')) {
        obj['reward_status'] = ApiClient.convertToType(data['reward_status'], 'String');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
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
   * Whether the campaign is active or not.  Defaults to false
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The unique ID for that resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The strategy for calculating the leaderboard. Defaults to highest score. Value MUST come from the list of available strategies from the Leaderboard Service
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
   * The name of the next challenge coming up
   * @member {String} next_challenge
   */
  exports.prototype['next_challenge'] = undefined;
  /**
   * The date/time of the next challenge coming up
   * @member {Number} next_challenge_date
   */
  exports.prototype['next_challenge_date'] = undefined;
  /**
   * The rewards to give at the end of the campaign. When creating/updating only id is used. Reward set must be pre-existing
   * @member {module:model/RewardSetResource} reward_set
   */
  exports.prototype['reward_set'] = undefined;
  /**
   * Indicate if the rewards have been given out already
   * @member {module:model/CampaignResource.RewardStatusEnum} reward_status
   */
  exports.prototype['reward_status'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * A campaign template this campaign is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;


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


  return exports;
}));


