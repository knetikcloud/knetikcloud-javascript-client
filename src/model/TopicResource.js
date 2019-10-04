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
    root.KnetikCloud.TopicResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TopicResource model module.
   * @module model/TopicResource
   * @version 3.0.272
   */

  /**
   * Constructs a new <code>TopicResource</code>.
   * @alias module:model/TopicResource
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TopicResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopicResource} obj Optional instance to populate.
   * @return {module:model/TopicResource} The populated <code>TopicResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('user_count')) {
        obj['user_count'] = ApiClient.convertToType(data['user_count'], 'Number');
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
  
  var discriminatorValue = 'TopicResource';


  /**
   * The created date of the topic
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The display name of the topic
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * The unique ID for this topic
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Whether this topic is locked or not.
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * Random tags to facilitate search
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * The last time the topic was updated
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The subscribed user count of the topic
   * @member {Number} user_count
   */
  exports.prototype['user_count'] = undefined;



  return exports;
}));


