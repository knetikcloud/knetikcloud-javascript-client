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
    define(['ApiClient', 'model/BatchRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BatchRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Batch = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BatchRequest);
  }
}(this, function(ApiClient, BatchRequest) {
  'use strict';




  /**
   * The Batch model module.
   * @module model/Batch
   * @version 3.0.13
   */

  /**
   * Constructs a new <code>Batch</code>.
   * @alias module:model/Batch
   * @class
   * @param batch {Array.<module:model/BatchRequest>} The list of batch requests
   * @param timeout {Number} The amount of time before a request token is returned instead of the batch result.  Default is 60.  Range is 0-300
   */
  var exports = function(batch, timeout) {
    var _this = this;

    _this['batch'] = batch;
    _this['timeout'] = timeout;
  };

  /**
   * Constructs a <code>Batch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Batch} obj Optional instance to populate.
   * @return {module:model/Batch} The populated <code>Batch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('batch')) {
        obj['batch'] = ApiClient.convertToType(data['batch'], [BatchRequest]);
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
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
  
  var discriminatorValue = 'Batch';


  /**
   * The list of batch requests
   * @member {Array.<module:model/BatchRequest>} batch
   */
  exports.prototype['batch'] = undefined;
  /**
   * The amount of time before a request token is returned instead of the batch result.  Default is 60.  Range is 0-300
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;



  return exports;
}));


