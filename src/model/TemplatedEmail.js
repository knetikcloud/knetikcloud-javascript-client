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
    root.KnetikCloud.TemplatedEmail = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TemplatedEmail model module.
   * @module model/TemplatedEmail
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>TemplatedEmail</code>.
   * @alias module:model/TemplatedEmail
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TemplatedEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplatedEmail} obj Optional instance to populate.
   * @return {module:model/TemplatedEmail} The populated <code>TemplatedEmail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('external_template_id')) {
        obj['external_template_id'] = ApiClient.convertToType(data['external_template_id'], 'String');
      }
      if (data.hasOwnProperty('template_data')) {
        obj['template_data'] = ApiClient.convertToType(data['template_data'], Object);
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
  
  var discriminatorValue = 'TemplatedEmail';


  /**
   * The external template ID used by the email provider
   * @member {String} external_template_id
   */
  exports.prototype['external_template_id'] = undefined;
  /**
   * The map of data used by the template
   * @member {Object} template_data
   */
  exports.prototype['template_data'] = undefined;



  return exports;
}));


