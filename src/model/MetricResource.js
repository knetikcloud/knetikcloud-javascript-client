/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.MetricResource = factory(root.knetikcloud-sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MetricResource model module.
   * @module model/MetricResource
   * @version latest

   */

  /**
   * Constructs a new <code>MetricResource</code>.
   * @alias module:model/MetricResource
   * @class
   * @param activityOccurenceId {Number} The id of the activity occurence where this score/metric occurred
   * @param value {Number} The value/score of the metric
   */
  var exports = function(activityOccurenceId, value) {
    var _this = this;

    _this['activity_occurence_id'] = activityOccurenceId;

    _this['value'] = value;
  };

  /**
   * Constructs a <code>MetricResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricResource} obj Optional instance to populate.
   * @return {module:model/MetricResource} The populated <code>MetricResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activity_occurence_id')) {
        obj['activity_occurence_id'] = ApiClient.convertToType(data['activity_occurence_id'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The id of the activity occurence where this score/metric occurred
   * @member {Number} activity_occurence_id
   */
  exports.prototype['activity_occurence_id'] = undefined;
  /**
   * Any tags for the metric. Each unique tag will translate into a unique leaderboard. Maximum 5 tags and 50 characters each
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * The value/score of the metric
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


