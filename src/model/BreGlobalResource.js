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
    define(['ApiClient', 'model/BreGlobalScopeDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BreGlobalScopeDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.BreGlobalResource = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.BreGlobalScopeDefinition);
  }
}(this, function(ApiClient, BreGlobalScopeDefinition) {
  'use strict';




  /**
   * The BreGlobalResource model module.
   * @module model/BreGlobalResource
   * @version latest

   */

  /**
   * Constructs a new <code>BreGlobalResource</code>.
   * @alias module:model/BreGlobalResource
   * @class
   * @param key {String} The key for the global. Must be unique when combined with scope names. Usually a single descriptive word like 'purchases' or 'logins'
   * @param type {String} The variable type the global stores. See the See Bre Variables enpoint for list
   */
  var exports = function(key, type) {
    var _this = this;



    _this['key'] = key;



    _this['type'] = type;
  };

  /**
   * Constructs a <code>BreGlobalResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreGlobalResource} obj Optional instance to populate.
   * @return {module:model/BreGlobalResource} The populated <code>BreGlobalResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], [BreGlobalScopeDefinition]);
      }
      if (data.hasOwnProperty('system_global')) {
        obj['system_global'] = ApiClient.convertToType(data['system_global'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * A human readable description for display in admin pages
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The id of the global definition. Default is a random guid. Cannot be updated
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The key for the global. Must be unique when combined with scope names. Usually a single descriptive word like 'purchases' or 'logins'
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * A human readable name for display in admin pages
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A list of scoping parameters. Allows the global to have a different value in different context such as a count of purchases for each user (by putting a 'user' scope in this list). When using this global in a rule these scopes will need to be mapped with an expression to provide a value, similar to the parameters in an action
   * @member {Array.<module:model/BreGlobalScopeDefinition>} scopes
   */
  exports.prototype['scopes'] = undefined;
  /**
   * Where this global came from. System globals cannot be removed or updated
   * @member {Boolean} system_global
   */
  exports.prototype['system_global'] = undefined;
  /**
   * The variable type the global stores. See the See Bre Variables enpoint for list
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


