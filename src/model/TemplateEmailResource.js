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
    define(['ApiClient', 'model/KeyValuePairstringstring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KeyValuePairstringstring'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.TemplateEmailResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.KeyValuePairstringstring);
  }
}(this, function(ApiClient, KeyValuePairstringstring) {
  'use strict';




  /**
   * The TemplateEmailResource model module.
   * @module model/TemplateEmailResource
   * @version 3.0.271
   */

  /**
   * Constructs a new <code>TemplateEmailResource</code>.
   * @alias module:model/TemplateEmailResource
   * @class
   * @param recipients {Array.<Number>} A list of user ids to send the message to.
   * @param templateKey {String} The key for the template
   */
  var exports = function(recipients, templateKey) {
    var _this = this;


    _this['recipients'] = recipients;

    _this['template_key'] = templateKey;

  };

  /**
   * Constructs a <code>TemplateEmailResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateEmailResource} obj Optional instance to populate.
   * @return {module:model/TemplateEmailResource} The populated <code>TemplateEmailResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('recipients')) {
        obj['recipients'] = ApiClient.convertToType(data['recipients'], ['Number']);
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('template_key')) {
        obj['template_key'] = ApiClient.convertToType(data['template_key'], 'String');
      }
      if (data.hasOwnProperty('template_vars')) {
        obj['template_vars'] = ApiClient.convertToType(data['template_vars'], [KeyValuePairstringstring]);
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
  
  var discriminatorValue = 'TemplateEmailResource';


  /**
   * Address to attribute the outgoing message to. Optional if the config email.out_address is set.
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * A list of user ids to send the message to.
   * @member {Array.<Number>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * The subject for email
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * The key for the template
   * @member {String} template_key
   */
  exports.prototype['template_key'] = undefined;
  /**
   * A list of variables to fill in the template
   * @member {Array.<module:model/KeyValuePairstringstring>} template_vars
   */
  exports.prototype['template_vars'] = undefined;



  return exports;
}));


