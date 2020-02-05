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
    define(['ApiClient', 'model/Property', 'model/SimpleGroupResource', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'), require('./SimpleGroupResource'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.GroupMemberResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property, root.KnetikCloud.SimpleGroupResource, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, Property, SimpleGroupResource, SimpleUserResource) {
  'use strict';




  /**
   * The GroupMemberResource model module.
   * @module model/GroupMemberResource
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>GroupMemberResource</code>.
   * @alias module:model/GroupMemberResource
   * @class
   * @param user {module:model/SimpleUserResource} The user
   */
  var exports = function(user) {
    var _this = this;










    _this['user'] = user;
  };

  /**
   * Constructs a <code>GroupMemberResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupMemberResource} obj Optional instance to populate.
   * @return {module:model/GroupMemberResource} The populated <code>GroupMemberResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = SimpleGroupResource.constructFromObject(data['group']);
      }
      if (data.hasOwnProperty('implicit')) {
        obj['implicit'] = ApiClient.convertToType(data['implicit'], 'Boolean');
      }
      if (data.hasOwnProperty('member_since')) {
        obj['member_since'] = ApiClient.convertToType(data['member_since'], 'Number');
      }
      if (data.hasOwnProperty('membership_id')) {
        obj['membership_id'] = ApiClient.convertToType(data['membership_id'], 'Number');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
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
  
  var discriminatorValue = 'GroupMemberResource';


  /**
   * A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this type, or be an extra not from the template
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The group. Id is the unique name
   * @member {module:model/SimpleGroupResource} group
   */
  exports.prototype['group'] = undefined;
  /**
   * Whether this membership is explicit (the user was added directly to the group) or implicit (the user was added only to one or more child groups)
   * @member {Boolean} implicit
   */
  exports.prototype['implicit'] = undefined;
  /**
   * The group member's membership date as a unix timestamp
   * @member {Number} member_since
   */
  exports.prototype['member_since'] = undefined;
  /**
   * The id of the membership entry
   * @member {Number} membership_id
   */
  exports.prototype['membership_id'] = undefined;
  /**
   * The position of the member in the group if applicable. Read notes for details
   * @member {String} order
   */
  exports.prototype['order'] = undefined;
  /**
   * The member's status. Max size 50. Default: member
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * A template this member additional properties are validated against (private). May be null and no validation of properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The date the group member's info was updated as a unix timestamp
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * The user
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


