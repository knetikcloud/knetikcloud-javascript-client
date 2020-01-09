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
    define(['ApiClient', 'model/PaymentMethodDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentMethodDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.StripeCreatePaymentMethod = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PaymentMethodDetails);
  }
}(this, function(ApiClient, PaymentMethodDetails) {
  'use strict';




  /**
   * The StripeCreatePaymentMethod model module.
   * @module model/StripeCreatePaymentMethod
   * @version 3.0.2
   */

  /**
   * Constructs a new <code>StripeCreatePaymentMethod</code>.
   * @alias module:model/StripeCreatePaymentMethod
   * @class
   * @param token {String} A token from Stripe to identify payment info to be tied to the customer
   */
  var exports = function(token) {
    var _this = this;


    _this['token'] = token;

  };

  /**
   * Constructs a <code>StripeCreatePaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StripeCreatePaymentMethod} obj Optional instance to populate.
   * @return {module:model/StripeCreatePaymentMethod} The populated <code>StripeCreatePaymentMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('details')) {
        obj['details'] = PaymentMethodDetails.constructFromObject(data['details']);
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
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
  
  var discriminatorValue = 'StripeCreatePaymentMethod';


  /**
   * Additional optional details to store on the payment method. If included, all fields in the details will override any defaults
   * @member {module:model/PaymentMethodDetails} details
   */
  exports.prototype['details'] = undefined;
  /**
   * A token from Stripe to identify payment info to be tied to the customer
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * The id of the user, if null the logged in user is used. Admin privilege need to specify other users
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


