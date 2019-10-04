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
    root.KnetikCloud.ClientCustomizationResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientCustomizationResource model module.
   * @module model/ClientCustomizationResource
   * @version 3.0.272
   */

  /**
   * Constructs a new <code>ClientCustomizationResource</code>.
   * @alias module:model/ClientCustomizationResource
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>ClientCustomizationResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCustomizationResource} obj Optional instance to populate.
   * @return {module:model/ClientCustomizationResource} The populated <code>ClientCustomizationResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('credential_text')) {
        obj['credential_text'] = ApiClient.convertToType(data['credential_text'], 'String');
      }
      if (data.hasOwnProperty('custom_css_url')) {
        obj['custom_css_url'] = ApiClient.convertToType(data['custom_css_url'], 'String');
      }
      if (data.hasOwnProperty('favicon_url')) {
        obj['favicon_url'] = ApiClient.convertToType(data['favicon_url'], 'String');
      }
      if (data.hasOwnProperty('footer')) {
        obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
      }
      if (data.hasOwnProperty('forgot_password_text')) {
        obj['forgot_password_text'] = ApiClient.convertToType(data['forgot_password_text'], 'String');
      }
      if (data.hasOwnProperty('forgot_password_url')) {
        obj['forgot_password_url'] = ApiClient.convertToType(data['forgot_password_url'], 'String');
      }
      if (data.hasOwnProperty('forgot_username_text')) {
        obj['forgot_username_text'] = ApiClient.convertToType(data['forgot_username_text'], 'String');
      }
      if (data.hasOwnProperty('forgot_username_url')) {
        obj['forgot_username_url'] = ApiClient.convertToType(data['forgot_username_url'], 'String');
      }
      if (data.hasOwnProperty('header')) {
        obj['header'] = ApiClient.convertToType(data['header'], 'String');
      }
      if (data.hasOwnProperty('invalid_login_text')) {
        obj['invalid_login_text'] = ApiClient.convertToType(data['invalid_login_text'], 'String');
      }
      if (data.hasOwnProperty('login_button_text')) {
        obj['login_button_text'] = ApiClient.convertToType(data['login_button_text'], 'String');
      }
      if (data.hasOwnProperty('logout_text')) {
        obj['logout_text'] = ApiClient.convertToType(data['logout_text'], 'String');
      }
      if (data.hasOwnProperty('password_placeholder')) {
        obj['password_placeholder'] = ApiClient.convertToType(data['password_placeholder'], 'String');
      }
      if (data.hasOwnProperty('provider_text')) {
        obj['provider_text'] = ApiClient.convertToType(data['provider_text'], 'String');
      }
      if (data.hasOwnProperty('sign_up_text')) {
        obj['sign_up_text'] = ApiClient.convertToType(data['sign_up_text'], 'String');
      }
      if (data.hasOwnProperty('sign_up_url')) {
        obj['sign_up_url'] = ApiClient.convertToType(data['sign_up_url'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('username_placeholder')) {
        obj['username_placeholder'] = ApiClient.convertToType(data['username_placeholder'], 'String');
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
  
  var discriminatorValue = 'ClientCustomizationResource';


  /**
   * The text displayed above the login form for the login page.  Default: Enter your credentials
   * @member {String} credential_text
   */
  exports.prototype['credential_text'] = undefined;
  /**
   * The link to a custom css file for the login page.  If not using, keep it set as null.
   * @member {String} custom_css_url
   */
  exports.prototype['custom_css_url'] = undefined;
  /**
   * The link to a favicon ico for the login page.  If not using, keep it set as null.
   * @member {String} favicon_url
   */
  exports.prototype['favicon_url'] = undefined;
  /**
   * The HTML inside the header for the login page.  If not using, keep it set as null.
   * @member {String} footer
   */
  exports.prototype['footer'] = undefined;
  /**
   * The text provided for the link for a forgotten username for the login page.  Default: Forgot password?
   * @member {String} forgot_password_text
   */
  exports.prototype['forgot_password_text'] = undefined;
  /**
   * The link to a forgot password page for the login page.  If not using, keep it set as null.
   * @member {String} forgot_password_url
   */
  exports.prototype['forgot_password_url'] = undefined;
  /**
   * The text provided for the link for a forgotten username for the login page.  Default: Forgot username?
   * @member {String} forgot_username_text
   */
  exports.prototype['forgot_username_text'] = undefined;
  /**
   * The link to a forgot username page for the login page.  If not using, keep it set as null.
   * @member {String} forgot_username_url
   */
  exports.prototype['forgot_username_url'] = undefined;
  /**
   * The HTML inside the header for the login page.  If not using, keep it set as null.
   * @member {String} header
   */
  exports.prototype['header'] = undefined;
  /**
   * The text displayed when inputting an invalid user/pass for the login page.  Default: Invalid username or password.
   * @member {String} invalid_login_text
   */
  exports.prototype['invalid_login_text'] = undefined;
  /**
   * The text displayed on the login button for the login page.  Default: Log In
   * @member {String} login_button_text
   */
  exports.prototype['login_button_text'] = undefined;
  /**
   * The text displayed when logging out for the login page.  Default: You have been logged out.
   * @member {String} logout_text
   */
  exports.prototype['logout_text'] = undefined;
  /**
   * The placeholder text in the password entry for the login page.  Default: Password
   * @member {String} password_placeholder
   */
  exports.prototype['password_placeholder'] = undefined;
  /**
   * The text displayed when there are auth providers to select from for the login page.  Default: Or use your favorite identity provider
   * @member {String} provider_text
   */
  exports.prototype['provider_text'] = undefined;
  /**
   * The text provided for the link to sign up for the login page.  Default: Sign up
   * @member {String} sign_up_text
   */
  exports.prototype['sign_up_text'] = undefined;
  /**
   * The link to a sign up url for the login page.  If not using, keep it set as null.
   * @member {String} sign_up_url
   */
  exports.prototype['sign_up_url'] = undefined;
  /**
   * The title of the login page.  If not using, keep it set as null.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The placeholder text in the username entry for the login page.  Default: Username
   * @member {String} username_placeholder
   */
  exports.prototype['username_placeholder'] = undefined;



  return exports;
}));


