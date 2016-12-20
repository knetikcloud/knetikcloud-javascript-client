/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
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
    define(['ApiClient', 'model/ActivityEntitlementResource', 'model/AvailableSettingResource', 'model/RewardSetResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityEntitlementResource'), require('./AvailableSettingResource'), require('./RewardSetResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ActivityResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ActivityEntitlementResource, root.KnetikPlatformApiDocumentationLatest.AvailableSettingResource, root.KnetikPlatformApiDocumentationLatest.RewardSetResource);
  }
}(this, function(ApiClient, ActivityEntitlementResource, AvailableSettingResource, RewardSetResource) {
  'use strict';




  /**
   * The ActivityResource model module.
   * @module model/ActivityResource
   * @version Latest
   */

  /**
   * Constructs a new <code>ActivityResource</code>.
   * @alias module:model/ActivityResource
   * @class
   * @param name {String} The user friendly name of that resource
   * @param type {String} The type of the activity
   */
  var exports = function(name, type) {
    var _this = this;






    _this['name'] = name;




    _this['type'] = type;


  };

  /**
   * Constructs a <code>ActivityResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityResource} obj Optional instance to populate.
   * @return {module:model/ActivityResource} The populated <code>ActivityResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('entitlements')) {
        obj['entitlements'] = ApiClient.convertToType(data['entitlements'], [ActivityEntitlementResource]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('launch')) {
        obj['launch'] = ApiClient.convertToType(data['launch'], 'String');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('reward_set')) {
        obj['reward_set'] = RewardSetResource.constructFromObject(data['reward_set']);
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = ApiClient.convertToType(data['settings'], [AvailableSettingResource]);
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('unique_key')) {
        obj['unique_key'] = ApiClient.convertToType(data['unique_key'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The list of items that can be used for entitlement (wager amounts/etc)
   * @member {Array.<module:model/ActivityEntitlementResource>} entitlements
   */
  exports.prototype['entitlements'] = undefined;
  /**
   * The unique ID for that resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Details about how to launch the activity
   * @member {String} launch
   */
  exports.prototype['launch'] = undefined;
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
   * The rewards to give at the end of each occurence of the activity. When creating/updating only id is used. Reward set must be pre-existing
   * @member {module:model/RewardSetResource} reward_set
   */
  exports.prototype['reward_set'] = undefined;
  /**
   * The list of settings and their options available for this activity. Not populated when getting listing
   * @member {Array.<module:model/AvailableSettingResource>} settings
   */
  exports.prototype['settings'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * Whether this activity is a template for other activities. Default: false
   * @member {Boolean} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The type of the activity
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The unique key (for static reference in code) of the activity
   * @member {String} unique_key
   */
  exports.prototype['unique_key'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


