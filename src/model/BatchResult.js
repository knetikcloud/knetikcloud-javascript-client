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
    define(['ApiClient', 'model/BatchReturn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BatchReturn'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.BatchResult = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BatchReturn);
  }
}(this, function(ApiClient, BatchReturn) {
  'use strict';




  /**
   * The BatchResult model module.
   * @module model/BatchResult
   * @version 3.0.274
   */

  /**
   * Constructs a new <code>BatchResult</code>.
   * @alias module:model/BatchResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>BatchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BatchResult} obj Optional instance to populate.
   * @return {module:model/BatchResult} The populated <code>BatchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('batch_return')) {
        obj['batch_return'] = ApiClient.convertToType(data['batch_return'], [BatchReturn]);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
  
  var discriminatorValue = 'BatchResult';


  /**
   * List of batch responses.  Returns in the order requested
   * @member {Array.<module:model/BatchReturn>} batch_return
   */
  exports.prototype['batch_return'] = undefined;
  /**
   * The date the batch call started processing
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The token to use at the /batch/{token} endpoint if the request times out
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date the batch call finished processing
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


