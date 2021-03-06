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
    define(['ApiClient', 'model/Property', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.VerificationRequest = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, Property, SimpleUserResource) {
  'use strict';




  /**
   * The VerificationRequest model module.
   * @module model/VerificationRequest
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>VerificationRequest</code>.
   * @alias module:model/VerificationRequest
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>VerificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerificationRequest} obj Optional instance to populate.
   * @return {module:model/VerificationRequest} The populated <code>VerificationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('codelength')) {
        obj['codelength'] = ApiClient.convertToType(data['codelength'], 'Number');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('expiration_date')) {
        obj['expiration_date'] = ApiClient.convertToType(data['expiration_date'], 'Number');
      }
      if (data.hasOwnProperty('include_letters')) {
        obj['include_letters'] = ApiClient.convertToType(data['include_letters'], 'Boolean');
      }
      if (data.hasOwnProperty('include_numbers')) {
        obj['include_numbers'] = ApiClient.convertToType(data['include_numbers'], 'Boolean');
      }
      if (data.hasOwnProperty('originator')) {
        obj['originator'] = SimpleUserResource.constructFromObject(data['originator']);
      }
      if (data.hasOwnProperty('target_user')) {
        obj['target_user'] = SimpleUserResource.constructFromObject(data['target_user']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
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
  
  var discriminatorValue = 'VerificationRequest';


  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * A unique code to identify the request. May be publically known and use ACL to require the correct user to respond, or private and the ACL allows anyone with the code to verify. default: random
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * The intended length of the code, if auto-generated. Minimum 3, default 16
   * @member {Number} codelength
   */
  exports.prototype['codelength'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The date, as a unix timestamp in seconds, that the request expires
   * @member {Number} expiration_date
   */
  exports.prototype['expiration_date'] = undefined;
  /**
   * Whether to include letters, if the code is auto-generated. Default: true
   * @member {Boolean} include_letters
   */
  exports.prototype['include_letters'] = undefined;
  /**
   * Whether to include numbers, if the code is auto-generated. Default: true
   * @member {Boolean} include_numbers
   */
  exports.prototype['include_numbers'] = undefined;
  /**
   * The originating user of the request, filled at 
   * @member {module:model/SimpleUserResource} originator
   */
  exports.prototype['originator'] = undefined;
  /**
   * An optional user that is expected to respond
   * @member {module:model/SimpleUserResource} target_user
   */
  exports.prototype['target_user'] = undefined;
  /**
   * A template this verification request is validated against. Filled from url
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


