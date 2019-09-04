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
    define(['ApiClient', 'model/ActionVariableResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActionVariableResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ActionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ActionVariableResource);
  }
}(this, function(ApiClient, ActionVariableResource) {
  'use strict';




  /**
   * The ActionResource model module.
   * @module model/ActionResource
   * @version 3.0.266
   */

  /**
   * Constructs a new <code>ActionResource</code>.
   * @alias module:model/ActionResource
   * @class
   * @param description {String} The description of the action
   * @param name {String} The name of the action. Used as the unique id for reference
   * @param variables {Array.<module:model/ActionVariableResource>} The variables required for the action
   */
  var exports = function(description, name, variables) {
    var _this = this;


    _this['description'] = description;
    _this['name'] = name;

    _this['variables'] = variables;
  };

  /**
   * Constructs a <code>ActionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActionResource} obj Optional instance to populate.
   * @return {module:model/ActionResource} The populated <code>ActionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = ApiClient.convertToType(data['variables'], [ActionVariableResource]);
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
  
  var discriminatorValue = 'ActionResource';


  /**
   * The category the action is in. All customer specific actions are in the 'custom' category
   * @member {module:model/ActionResource.CategoryEnum} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The description of the action
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The name of the action. Used as the unique id for reference
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A list of tags for searching
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * The variables required for the action
   * @member {Array.<module:model/ActionVariableResource>} variables
   */
  exports.prototype['variables'] = undefined;


  /**
   * Allowed values for the <code>category</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CategoryEnum = {
    /**
     * value: "achievement"
     * @const
     */
    "achievement": "achievement",
    /**
     * value: "behavior"
     * @const
     */
    "behavior": "behavior",
    /**
     * value: "comment"
     * @const
     */
    "comment": "comment",
    /**
     * value: "disposition"
     * @const
     */
    "disposition": "disposition",
    /**
     * value: "device"
     * @const
     */
    "device": "device",
    /**
     * value: "entitlement"
     * @const
     */
    "entitlement": "entitlement",
    /**
     * value: "friends"
     * @const
     */
    "friends": "friends",
    /**
     * value: "fulfillment"
     * @const
     */
    "fulfillment": "fulfillment",
    /**
     * value: "gamification"
     * @const
     */
    "gamification": "gamification",
    /**
     * value: "inventory"
     * @const
     */
    "inventory": "inventory",
    /**
     * value: "invoice"
     * @const
     */
    "invoice": "invoice",
    /**
     * value: "media"
     * @const
     */
    "media": "media",
    /**
     * value: "scheduler"
     * @const
     */
    "scheduler": "scheduler",
    /**
     * value: "store"
     * @const
     */
    "store": "store",
    /**
     * value: "subscription"
     * @const
     */
    "subscription": "subscription",
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "wallet"
     * @const
     */
    "wallet": "wallet",
    /**
     * value: "custom"
     * @const
     */
    "custom": "custom",
    /**
     * value: "challenge"
     * @const
     */
    "challenge": "challenge",
    /**
     * value: "activity"
     * @const
     */
    "activity": "activity",
    /**
     * value: "campaign"
     * @const
     */
    "campaign": "campaign",
    /**
     * value: "event"
     * @const
     */
    "event": "event",
    /**
     * value: "monitoring"
     * @const
     */
    "monitoring": "monitoring",
    /**
     * value: "verification"
     * @const
     */
    "verification": "verification",
    /**
     * value: "group"
     * @const
     */
    "group": "group",
    /**
     * value: "access"
     * @const
     */
    "access": "access"  };


  return exports;
}));


