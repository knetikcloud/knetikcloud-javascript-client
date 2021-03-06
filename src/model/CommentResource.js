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
    define(['ApiClient', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.CommentResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, SimpleUserResource) {
  'use strict';




  /**
   * The CommentResource model module.
   * @module model/CommentResource
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>CommentResource</code>.
   * @alias module:model/CommentResource
   * @class
   * @param content {String} The comment content of that resource
   */
  var exports = function(content) {
    var _this = this;

    _this['content'] = content;







  };

  /**
   * Constructs a <code>CommentResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentResource} obj Optional instance to populate.
   * @return {module:model/CommentResource} The populated <code>CommentResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('context_id')) {
        obj['context_id'] = ApiClient.convertToType(data['context_id'], 'Number');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = SimpleUserResource.constructFromObject(data['user']);
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
  
  var discriminatorValue = 'CommentResource';


  /**
   * The comment content of that resource
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The type of object this comment applies to (ex: video, article, etc). Required when passed to /comments
   * @member {String} context
   */
  exports.prototype['context'] = undefined;
  /**
   * The id of the object this comment applies to.  Required when passed to /comments
   * @member {Number} context_id
   */
  exports.prototype['context_id'] = undefined;
  /**
   * The date/time this resource was created in seconds since epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The unique ID for that resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The summary of that resource
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The user who created the comment
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


