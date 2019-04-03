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
    define(['ApiClient', 'model/RewardCurrencyResource', 'model/RewardItemResource', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RewardCurrencyResource'), require('./RewardItemResource'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UserActivityResults = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.RewardCurrencyResource, root.KnetikCloud.RewardItemResource, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, RewardCurrencyResource, RewardItemResource, SimpleUserResource) {
  'use strict';




  /**
   * The UserActivityResults model module.
   * @module model/UserActivityResults
   * @version 3.0.18
   */

  /**
   * Constructs a new <code>UserActivityResults</code>.
   * @alias module:model/UserActivityResults
   * @class
   * @param user {module:model/SimpleUserResource} The player for this entry
   */
  var exports = function(user) {
    var _this = this;








    _this['user'] = user;
  };

  /**
   * Constructs a <code>UserActivityResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserActivityResults} obj Optional instance to populate.
   * @return {module:model/UserActivityResults} The populated <code>UserActivityResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency_rewards')) {
        obj['currency_rewards'] = ApiClient.convertToType(data['currency_rewards'], [RewardCurrencyResource]);
      }
      if (data.hasOwnProperty('item_rewards')) {
        obj['item_rewards'] = ApiClient.convertToType(data['item_rewards'], [RewardItemResource]);
      }
      if (data.hasOwnProperty('rank')) {
        obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
      }
      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('ties')) {
        obj['ties'] = ApiClient.convertToType(data['ties'], 'Number');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUserResource.constructFromObject(data['user']);
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
  
  var discriminatorValue = 'UserActivityResults';


  /**
   * Any currency rewarded to this user
   * @member {Array.<module:model/RewardCurrencyResource>} currency_rewards
   */
  exports.prototype['currency_rewards'] = undefined;
  /**
   * Any items rewarded to this user
   * @member {Array.<module:model/RewardItemResource>} item_rewards
   */
  exports.prototype['item_rewards'] = undefined;
  /**
   * The position of the user in the leaderboard. Null means non-compete or disqualification
   * @member {Number} rank
   */
  exports.prototype['rank'] = undefined;
  /**
   * The raw score in this leaderboard. Null means non-compete or disqualification
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * Any tags for the metric. Each unique tag will translate into a unique leaderboard. Maximum 10 tags and 50 characters each
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * The number of users tied at this rank, including this user. 1 means no tie
   * @member {Number} ties
   */
  exports.prototype['ties'] = undefined;
  /**
   * The date this score was recorded or updated. Unix timestamp in seconds
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The player for this entry
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


