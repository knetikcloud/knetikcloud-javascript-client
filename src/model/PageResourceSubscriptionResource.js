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
    define(['ApiClient', 'model/SubscriptionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubscriptionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PageResourceSubscriptionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SubscriptionResource);
  }
}(this, function(ApiClient, SubscriptionResource) {
  'use strict';




  /**
   * The PageResourceSubscriptionResource model module.
   * @module model/PageResourceSubscriptionResource
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>PageResourceSubscriptionResource</code>.
   * @alias module:model/PageResourceSubscriptionResource
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PageResourceSubscriptionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageResourceSubscriptionResource} obj Optional instance to populate.
   * @return {module:model/PageResourceSubscriptionResource} The populated <code>PageResourceSubscriptionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [SubscriptionResource]);
      }
      if (data.hasOwnProperty('first')) {
        obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Number');
      }
      if (data.hasOwnProperty('number_of_elements')) {
        obj['number_of_elements'] = ApiClient.convertToType(data['number_of_elements'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('total_elements')) {
        obj['total_elements'] = ApiClient.convertToType(data['total_elements'], 'Number');
      }
      if (data.hasOwnProperty('total_pages')) {
        obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
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
  
  var discriminatorValue = 'PageResource«SubscriptionResource»';


  /**
   * @member {Array.<module:model/SubscriptionResource>} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Boolean} first
   */
  exports.prototype['first'] = undefined;
  /**
   * @member {Boolean} last
   */
  exports.prototype['last'] = undefined;
  /**
   * @member {Number} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {Number} number_of_elements
   */
  exports.prototype['number_of_elements'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {Number} total_elements
   */
  exports.prototype['total_elements'] = undefined;
  /**
   * @member {Number} total_pages
   */
  exports.prototype['total_pages'] = undefined;



  return exports;
}));


