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
    define(['ApiClient', 'model/FattMerchantPaymentMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FattMerchantPaymentMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.FattMerchantPaymentMethodRequest = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FattMerchantPaymentMethod);
  }
}(this, function(ApiClient, FattMerchantPaymentMethod) {
  'use strict';




  /**
   * The FattMerchantPaymentMethodRequest model module.
   * @module model/FattMerchantPaymentMethodRequest
   * @version 3.0.270
   */

  /**
   * Constructs a new <code>FattMerchantPaymentMethodRequest</code>.
   * @alias module:model/FattMerchantPaymentMethodRequest
   * @class
   * @param method {module:model/FattMerchantPaymentMethod} The FattMerchant payment method being created/updated
   */
  var exports = function(method) {
    var _this = this;

    _this['method'] = method;

  };

  /**
   * Constructs a <code>FattMerchantPaymentMethodRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FattMerchantPaymentMethodRequest} obj Optional instance to populate.
   * @return {module:model/FattMerchantPaymentMethodRequest} The populated <code>FattMerchantPaymentMethodRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('method')) {
        obj['method'] = FattMerchantPaymentMethod.constructFromObject(data['method']);
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
  
  var discriminatorValue = 'FattMerchantPaymentMethodRequest';


  /**
   * The FattMerchant payment method being created/updated
   * @member {module:model/FattMerchantPaymentMethod} method
   */
  exports.prototype['method'] = undefined;
  /**
   * ID of the JSAPI user for whom the payment method is being created/updated. If ID is not that of the currently logged in user, FATMMERCHANT_ADMIN privilege is required. If ID is null, will use the currently logged in user's ID.
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


