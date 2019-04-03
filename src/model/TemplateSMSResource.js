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
    root.KnetikCloud.TemplateSMSResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TemplateSMSResource model module.
   * @module model/TemplateSMSResource
   * @version 3.0.18
   */

  /**
   * Constructs a new <code>TemplateSMSResource</code>.
   * @alias module:model/TemplateSMSResource
   * @class
   * @param recipients {Array.<Number>} A list of user ids to send the message to.
   * @param template {String} A mustache template
   */
  var exports = function(recipients, template) {
    var _this = this;


    _this['recipients'] = recipients;
    _this['template'] = template;

  };

  /**
   * Constructs a <code>TemplateSMSResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateSMSResource} obj Optional instance to populate.
   * @return {module:model/TemplateSMSResource} The populated <code>TemplateSMSResource</code> instance.
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
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('template_vars')) {
        obj['template_vars'] = ApiClient.convertToType(data['template_vars'], Object);
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
  
  var discriminatorValue = 'TemplateSMSResource';


  /**
   * The phone number to attribute the outgoing message to. Optional if the config text.out_number is set.
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * A list of user ids to send the message to.
   * @member {Array.<Number>} recipients
   */
  exports.prototype['recipients'] = undefined;
  /**
   * A mustache template
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * A map of values to fill in the template
   * @member {Object} template_vars
   */
  exports.prototype['template_vars'] = undefined;



  return exports;
}));


