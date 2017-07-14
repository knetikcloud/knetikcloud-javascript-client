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
    define(['ApiClient', 'model/ExpressionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExpressionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.GlobalResource = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.ExpressionResource);
  }
}(this, function(ApiClient, ExpressionResource) {
  'use strict';




  /**
   * The GlobalResource model module.
   * @module model/GlobalResource
   * @version latest

   */

  /**
   * Constructs a new <code>GlobalResource</code>.
   * @alias module:model/GlobalResource
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GlobalResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GlobalResource} obj Optional instance to populate.
   * @return {module:model/GlobalResource} The populated <code>GlobalResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('global_def_id')) {
        obj['global_def_id'] = ApiClient.convertToType(data['global_def_id'], 'String');
      }
      if (data.hasOwnProperty('scopes')) {
        obj['scopes'] = ApiClient.convertToType(data['scopes'], {'String': ExpressionResource});
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} global_def_id
   */
  exports.prototype['global_def_id'] = undefined;
  /**
   * @member {Object.<String, module:model/ExpressionResource>} scopes
   */
  exports.prototype['scopes'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


