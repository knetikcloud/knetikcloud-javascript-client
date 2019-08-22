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
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UserResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The UserResource model module.
   * @module model/UserResource
   * @version 3.0.264
   */

  /**
   * Constructs a new <code>UserResource</code>.
   * @alias module:model/UserResource
   * @class
   * @param email {String} The user's email address (private). May be required and/or unique depending on system configuration (both on by default). Must match standard email requirements if provided (RFC 2822)
   * @param username {String} The login username for the user (private). May be set to match email if system does not require usernames separately.
   */
  var exports = function(email, username) {
    var _this = this;









    _this['email'] = email;














    _this['username'] = username;
  };

  /**
   * Constructs a <code>UserResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserResource} obj Optional instance to populate.
   * @return {module:model/UserResource} The populated <code>UserResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('avatar_url')) {
        obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('date_of_birth')) {
        obj['date_of_birth'] = ApiClient.convertToType(data['date_of_birth'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('fullname')) {
        obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('last_activity')) {
        obj['last_activity'] = ApiClient.convertToType(data['last_activity'], 'Number');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('last_updated')) {
        obj['last_updated'] = ApiClient.convertToType(data['last_updated'], 'Number');
      }
      if (data.hasOwnProperty('member_since')) {
        obj['member_since'] = ApiClient.convertToType(data['member_since'], 'Number');
      }
      if (data.hasOwnProperty('mobile_number')) {
        obj['mobile_number'] = ApiClient.convertToType(data['mobile_number'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
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
  
  var discriminatorValue = 'UserResource';


  /**
   * A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this user type, or be an extra not from the template
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The first line of the user's address (private)
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * The second line of user's address (private)
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * The url of the user's avatar image
   * @member {String} avatar_url
   */
  exports.prototype['avatar_url'] = undefined;
  /**
   * The user's city (private)
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The user's date of birth (private) as a unix timestamp
   * @member {Number} date_of_birth
   */
  exports.prototype['date_of_birth'] = undefined;
  /**
   * The user's self description (private)
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The chosen display name of the user, defaults to username if not present
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * The user's email address (private). May be required and/or unique depending on system configuration (both on by default). Must match standard email requirements if provided (RFC 2822)
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The user's first name (private)
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * The user's full name (private)
   * @member {String} fullname
   */
  exports.prototype['fullname'] = undefined;
  /**
   * The user's gender (private)
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * The id of the user
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date the user last interacted with the API (private)
   * @member {Number} last_activity
   */
  exports.prototype['last_activity'] = undefined;
  /**
   * The user's last name (private)
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * The date the user's info was last updated as a unix timestamp
   * @member {Number} last_updated
   */
  exports.prototype['last_updated'] = undefined;
  /**
   * The user's date of registration as a unix timestamp
   * @member {Number} member_since
   */
  exports.prototype['member_since'] = undefined;
  /**
   * The user's mobile phone number (private)
   * @member {String} mobile_number
   */
  exports.prototype['mobile_number'] = undefined;
  /**
   * The plain text password for the new user account. Required for registration; ignored on profile update.  Use password specific endpoints for editing
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The user's postal code (private)
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * The user's state (private)
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Tags on the user. Can only be set by admin. Max length per tag is 64 characters
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A user template this user is validated against (private). May be null and no validation of properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The login username for the user (private). May be set to match email if system does not require usernames separately.
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


