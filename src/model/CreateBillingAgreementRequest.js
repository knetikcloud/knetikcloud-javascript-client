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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.CreateBillingAgreementRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateBillingAgreementRequest model module.
   * @module model/CreateBillingAgreementRequest
   * @version 3.0.269
   */

  /**
   * Constructs a new <code>CreateBillingAgreementRequest</code>.
   * @alias module:model/CreateBillingAgreementRequest
   * @class
   * @param cancelUrl {String} The endpoint URL to which PayPal should forward the user if they cancel (do not accept) the agreement
   * @param returnUrl {String} The endpoint URL to which PayPal should forward the user after they accept the agreement. This endpoint will receive information needed for the next step
   */
  var exports = function(cancelUrl, returnUrl) {
    var _this = this;

    _this['cancel_url'] = cancelUrl;
    _this['return_url'] = returnUrl;

  };

  /**
   * Constructs a <code>CreateBillingAgreementRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateBillingAgreementRequest} obj Optional instance to populate.
   * @return {module:model/CreateBillingAgreementRequest} The populated <code>CreateBillingAgreementRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cancel_url')) {
        obj['cancel_url'] = ApiClient.convertToType(data['cancel_url'], 'String');
      }
      if (data.hasOwnProperty('return_url')) {
        obj['return_url'] = ApiClient.convertToType(data['return_url'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
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
  
  var discriminatorValue = 'CreateBillingAgreementRequest';


  /**
   * The endpoint URL to which PayPal should forward the user if they cancel (do not accept) the agreement
   * @member {String} cancel_url
   */
  exports.prototype['cancel_url'] = undefined;
  /**
   * The endpoint URL to which PayPal should forward the user after they accept the agreement. This endpoint will receive information needed for the next step
   * @member {String} return_url
   */
  exports.prototype['return_url'] = undefined;
  /**
   * The ID of the user. Defaults to the logged in user
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


