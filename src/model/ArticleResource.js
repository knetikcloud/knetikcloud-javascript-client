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
    define(['ApiClient', 'model/NestedCategory', 'model/Property', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedCategory'), require('./Property'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ArticleResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.NestedCategory, root.KnetikCloud.Property, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, NestedCategory, Property, SimpleUserResource) {
  'use strict';




  /**
   * The ArticleResource model module.
   * @module model/ArticleResource
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>ArticleResource</code>.
   * @alias module:model/ArticleResource
   * @class
   * @param active {Boolean} Whether the article is active
   * @param body {String} The body of the article
   * @param category {module:model/NestedCategory} The category for the article
   * @param title {String} The title of the article
   */
  var exports = function(active, body, category, title) {
    var _this = this;

    _this['active'] = active;

    _this['body'] = body;
    _this['category'] = category;





    _this['title'] = title;


  };

  /**
   * Constructs a <code>ArticleResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArticleResource} obj Optional instance to populate.
   * @return {module:model/ArticleResource} The populated <code>ArticleResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = NestedCategory.constructFromObject(data['category']);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('creator')) {
        obj['creator'] = SimpleUserResource.constructFromObject(data['creator']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
      if (data.hasOwnProperty('view_count')) {
        obj['view_count'] = ApiClient.convertToType(data['view_count'], 'Number');
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
  
  var discriminatorValue = 'ArticleResource';


  /**
   * Whether the article is active
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The body of the article
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * The category for the article
   * @member {module:model/NestedCategory} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * The creator of the article. Default: caller
   * @member {module:model/SimpleUserResource} creator
   */
  exports.prototype['creator'] = undefined;
  /**
   * The id of the article. Default: random
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The tags for the article
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * An article template this article is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The title of the article
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The view count of the article
   * @member {Number} view_count
   */
  exports.prototype['view_count'] = undefined;



  return exports;
}));


