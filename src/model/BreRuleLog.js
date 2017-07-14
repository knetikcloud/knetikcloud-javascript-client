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
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.BreRuleLog = factory(root.KnetikcloudSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BreRuleLog model module.
   * @module model/BreRuleLog
   * @version latest

   */

  /**
   * Constructs a new <code>BreRuleLog</code>.
   * @alias module:model/BreRuleLog
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>BreRuleLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreRuleLog} obj Optional instance to populate.
   * @return {module:model/BreRuleLog} The populated <code>BreRuleLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ran')) {
        obj['ran'] = ApiClient.convertToType(data['ran'], 'Boolean');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('rule_end_date')) {
        obj['rule_end_date'] = ApiClient.convertToType(data['rule_end_date'], 'Number');
      }
      if (data.hasOwnProperty('rule_id')) {
        obj['rule_id'] = ApiClient.convertToType(data['rule_id'], 'String');
      }
      if (data.hasOwnProperty('rule_name')) {
        obj['rule_name'] = ApiClient.convertToType(data['rule_name'], 'String');
      }
      if (data.hasOwnProperty('rule_start_date')) {
        obj['rule_start_date'] = ApiClient.convertToType(data['rule_start_date'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Whether the rule ran
   * @member {Boolean} ran
   */
  exports.prototype['ran'] = undefined;
  /**
   * The reason for the rule
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The end date of the rule in seconds
   * @member {Number} rule_end_date
   */
  exports.prototype['rule_end_date'] = undefined;
  /**
   * The id of the rule
   * @member {String} rule_id
   */
  exports.prototype['rule_id'] = undefined;
  /**
   * The name of the rule
   * @member {String} rule_name
   */
  exports.prototype['rule_name'] = undefined;
  /**
   * The start date of the rule in seconds
   * @member {Number} rule_start_date
   */
  exports.prototype['rule_start_date'] = undefined;



  return exports;
}));


