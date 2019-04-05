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
    define(['ApiClient', 'model/ImportJobOutputResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImportJobOutputResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ImportJobResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ImportJobOutputResource);
  }
}(this, function(ApiClient, ImportJobOutputResource) {
  'use strict';




  /**
   * The ImportJobResource model module.
   * @module model/ImportJobResource
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>ImportJobResource</code>.
   * @alias module:model/ImportJobResource
   * @class
   * @param categoryId {String} The id of the category to assign all questions in the import to
   * @param name {String} A name for this import for later reference
   * @param url {String} The url of a CSV file to pull trivia questions from. Cannot be changed after initial POST
   * @param vendor {String} The vendor who supplied this set of questions
   */
  var exports = function(categoryId, name, url, vendor) {
    var _this = this;

    _this['category_id'] = categoryId;


    _this['name'] = name;




    _this['url'] = url;
    _this['vendor'] = vendor;
  };

  /**
   * Constructs a <code>ImportJobResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImportJobResource} obj Optional instance to populate.
   * @return {module:model/ImportJobResource} The populated <code>ImportJobResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category_id')) {
        obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = ApiClient.convertToType(data['output'], [ImportJobOutputResource]);
      }
      if (data.hasOwnProperty('record_count')) {
        obj['record_count'] = ApiClient.convertToType(data['record_count'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('vendor')) {
        obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
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
  
  var discriminatorValue = 'ImportJobResource';


  /**
   * The id of the category to assign all questions in the import to
   * @member {String} category_id
   */
  exports.prototype['category_id'] = undefined;
  /**
   * The date the job was created in seconds since unix epoc
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The id of the job
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A name for this import for later reference
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Error information from validation
   * @member {Array.<module:model/ImportJobOutputResource>} output
   */
  exports.prototype['output'] = undefined;
  /**
   * The number of questions form the CSV file. Filled in after validation
   * @member {Number} record_count
   */
  exports.prototype['record_count'] = undefined;
  /**
   * The status of the job
   * @member {module:model/ImportJobResource.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The date the job was last updated in seconds since unix epoc
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The url of a CSV file to pull trivia questions from. Cannot be changed after initial POST
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The vendor who supplied this set of questions
   * @member {String} vendor
   */
  exports.prototype['vendor'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PENDING_VALIDATION"
     * @const
     */
    "PENDING_VALIDATION": "PENDING_VALIDATION",
    /**
     * value: "VALIDATING"
     * @const
     */
    "VALIDATING": "VALIDATING",
    /**
     * value: "VALID"
     * @const
     */
    "VALID": "VALID",
    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",
    /**
     * value: "PENDING_PROCESS"
     * @const
     */
    "PENDING_PROCESS": "PENDING_PROCESS",
    /**
     * value: "PROCESSING"
     * @const
     */
    "PROCESSING": "PROCESSING",
    /**
     * value: "PROCESSED"
     * @const
     */
    "PROCESSED": "PROCESSED",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"  };


  return exports;
}));


