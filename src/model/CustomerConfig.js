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
    define(['ApiClient', 'model/DatabaseConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DatabaseConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.CustomerConfig = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.DatabaseConfig);
  }
}(this, function(ApiClient, DatabaseConfig) {
  'use strict';




  /**
   * The CustomerConfig model module.
   * @module model/CustomerConfig
   * @version Latest
   */

  /**
   * Constructs a new <code>CustomerConfig</code>.
   * @alias module:model/CustomerConfig
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CustomerConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerConfig} obj Optional instance to populate.
   * @return {module:model/CustomerConfig} The populated <code>CustomerConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aliases')) {
        obj['aliases'] = ApiClient.convertToType(data['aliases'], 'String');
      }
      if (data.hasOwnProperty('database')) {
        obj['database'] = DatabaseConfig.constructFromObject(data['database']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('upload_bucket')) {
        obj['upload_bucket'] = ApiClient.convertToType(data['upload_bucket'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} aliases
   */
  exports.prototype['aliases'] = undefined;
  /**
   * @member {module:model/DatabaseConfig} database
   */
  exports.prototype['database'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} upload_bucket
   */
  exports.prototype['upload_bucket'] = undefined;



  return exports;
}));

