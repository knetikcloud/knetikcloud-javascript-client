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
    root.KnetikCloud.UserInventoryAddRequest = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserInventoryAddRequest model module.
   * @module model/UserInventoryAddRequest
   * @version 3.0.12
   */

  /**
   * Constructs a new <code>UserInventoryAddRequest</code>.
   * @alias module:model/UserInventoryAddRequest
   * @class
   * @param note {String} A note to be passed to the invoice or transaction
   * @param skipInvoice {Boolean} If set to true will cause the endpoint to skip creation of cart and invoice to track the inventory change
   * @param sku {String} The specific SKU of the item to be added to the inventory
   */
  var exports = function(note, skipInvoice, sku) {
    var _this = this;

    _this['note'] = note;

    _this['skip_invoice'] = skipInvoice;
    _this['sku'] = sku;
  };

  /**
   * Constructs a <code>UserInventoryAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInventoryAddRequest} obj Optional instance to populate.
   * @return {module:model/UserInventoryAddRequest} The populated <code>UserInventoryAddRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
      if (data.hasOwnProperty('overrides')) {
        obj['overrides'] = ApiClient.convertToType(data['overrides'], ['String']);
      }
      if (data.hasOwnProperty('skip_invoice')) {
        obj['skip_invoice'] = ApiClient.convertToType(data['skip_invoice'], 'Boolean');
      }
      if (data.hasOwnProperty('sku')) {
        obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
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
  
  var discriminatorValue = 'UserInventoryAddRequest';


  /**
   * A note to be passed to the invoice or transaction
   * @member {String} note
   */
  exports.prototype['note'] = undefined;
  /**
   * A list of behaviors to ignore explicitely.  Ex: 'limited_gettable'
   * @member {Array.<String>} overrides
   */
  exports.prototype['overrides'] = undefined;
  /**
   * If set to true will cause the endpoint to skip creation of cart and invoice to track the inventory change
   * @member {Boolean} skip_invoice
   */
  exports.prototype['skip_invoice'] = undefined;
  /**
   * The specific SKU of the item to be added to the inventory
   * @member {String} sku
   */
  exports.prototype['sku'] = undefined;



  return exports;
}));


