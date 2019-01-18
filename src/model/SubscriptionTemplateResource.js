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
    define(['ApiClient', 'model/PropertyDefinitionResource', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertyDefinitionResource'), require('./TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.SubscriptionTemplateResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PropertyDefinitionResource, root.KnetikCloud.TemplateResource);
  }
}(this, function(ApiClient, PropertyDefinitionResource, TemplateResource) {
  'use strict';




  /**
   * The SubscriptionTemplateResource model module.
   * @module model/SubscriptionTemplateResource
   * @version 3.0.11
   */

  /**
   * Constructs a new <code>SubscriptionTemplateResource</code>.
   * @alias module:model/SubscriptionTemplateResource
   * @class
   * @param name {String} The name of the template
   */
  var exports = function(name) {
    var _this = this;



    _this['name'] = name;



  };

  /**
   * Constructs a <code>SubscriptionTemplateResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionTemplateResource} obj Optional instance to populate.
   * @return {module:model/SubscriptionTemplateResource} The populated <code>SubscriptionTemplateResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('plan_template')) {
        obj['plan_template'] = TemplateResource.constructFromObject(data['plan_template']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], [PropertyDefinitionResource]);
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
  
  var discriminatorValue = 'SubscriptionTemplateResource';


  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The id of the template
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the template
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A template to apply to all plans on a subscription using this template
   * @member {module:model/TemplateResource} plan_template
   */
  exports.prototype['plan_template'] = undefined;
  /**
   * The customized properties that are present
   * @member {Array.<module:model/PropertyDefinitionResource>} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


