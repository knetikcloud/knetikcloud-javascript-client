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
    root.KnetikCloud.SavedAddressResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SavedAddressResource model module.
   * @module model/SavedAddressResource
   * @version 3.0.15
   */

  /**
   * Constructs a new <code>SavedAddressResource</code>.
   * @alias module:model/SavedAddressResource
   * @class
   * @param address1 {String} The first line of the address
   * @param city {String} The city
   * @param countryCode {String} The iso3 code for the country
   * @param firstName {String} The first name of the user
   * @param lastName {String} The last name of the user
   * @param name {String} The name of the address
   */
  var exports = function(address1, city, countryCode, firstName, lastName, name) {
    var _this = this;

    _this['address1'] = address1;

    _this['city'] = city;
    _this['country_code'] = countryCode;

    _this['first_name'] = firstName;

    _this['last_name'] = lastName;
    _this['name'] = name;




  };

  /**
   * Constructs a <code>SavedAddressResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SavedAddressResource} obj Optional instance to populate.
   * @return {module:model/SavedAddressResource} The populated <code>SavedAddressResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('phone1')) {
        obj['phone1'] = ApiClient.convertToType(data['phone1'], 'String');
      }
      if (data.hasOwnProperty('phone2')) {
        obj['phone2'] = ApiClient.convertToType(data['phone2'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('state_code')) {
        obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
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
  
  var discriminatorValue = 'SavedAddressResource';


  /**
   * The first line of the address
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * A second line of the address
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * The city
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The iso3 code for the country
   * @member {String} country_code
   */
  exports.prototype['country_code'] = undefined;
  /**
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * The first name of the user
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The id of the address
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The last name of the user
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The name of the address
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The first phone number of the user
   * @member {String} phone1
   */
  exports.prototype['phone1'] = undefined;
  /**
   * The second phone number of the user
   * @member {String} phone2
   */
  exports.prototype['phone2'] = undefined;
  /**
   * The postal code
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * The code for the state. Required if the country has states/provinces/equivalent
   * @member {String} state_code
   */
  exports.prototype['state_code'] = undefined;



  return exports;
}));


