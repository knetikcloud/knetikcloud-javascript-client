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
    define(['ApiClient', 'model/InnerQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InnerQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.SearchQuery = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.InnerQuery);
  }
}(this, function(ApiClient, InnerQuery) {
  'use strict';




  /**
   * The SearchQuery model module.
   * @module model/SearchQuery
   * @version 3.0.13
   */

  /**
   * Constructs a new <code>SearchQuery</code>.
   * @alias module:model/SearchQuery
   * @class
   * @param query {module:model/InnerQuery} The query body
   */
  var exports = function(query) {
    var _this = this;


    _this['query'] = query;



  };

  /**
   * Constructs a <code>SearchQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchQuery} obj Optional instance to populate.
   * @return {module:model/SearchQuery} The populated <code>SearchQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Number');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = InnerQuery.constructFromObject(data['query']);
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], Object);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], Object);
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
  
  var discriminatorValue = 'SearchQuery';


  /**
   * Index of the first result to be returned for pagination
   * @member {Number} from
   */
  exports.prototype['from'] = undefined;
  /**
   * The query body
   * @member {module:model/InnerQuery} query
   */
  exports.prototype['query'] = undefined;
  /**
   * The maximum number of results to be returned for pagination
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Elasticsearch sort
   * @member {Object} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * Elasticsearch source
   * @member {Object} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


