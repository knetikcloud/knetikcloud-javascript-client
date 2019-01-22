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
    define(['ApiClient', 'model/MetricResource', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MetricResource'), require('./SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ActivityUserResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.MetricResource, root.KnetikCloud.SimpleUserResource);
  }
}(this, function(ApiClient, MetricResource, SimpleUserResource) {
  'use strict';




  /**
   * The ActivityUserResource model module.
   * @module model/ActivityUserResource
   * @version 3.0.13
   */

  /**
   * Constructs a new <code>ActivityUserResource</code>.
   * @alias module:model/ActivityUserResource
   * @class
   * @param user {module:model/SimpleUserResource} The user
   */
  var exports = function(user) {
    var _this = this;







    _this['user'] = user;
  };

  /**
   * Constructs a <code>ActivityUserResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityUserResource} obj Optional instance to populate.
   * @return {module:model/ActivityUserResource} The populated <code>ActivityUserResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('joined_date')) {
        obj['joined_date'] = ApiClient.convertToType(data['joined_date'], 'Number');
      }
      if (data.hasOwnProperty('left_date')) {
        obj['left_date'] = ApiClient.convertToType(data['left_date'], 'Number');
      }
      if (data.hasOwnProperty('metric')) {
        obj['metric'] = MetricResource.constructFromObject(data['metric']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
  
  var discriminatorValue = 'ActivityUserResource';


  /**
   * Whether this user is the 'host' of the occurrence and has increased access to settings/etc (default: false)
   * @member {Boolean} host
   */
  exports.prototype['host'] = undefined;
  /**
   * The id of the activity user entry
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The date this user last joined the occurrence, unix timestamp in seconds
   * @member {Number} joined_date
   */
  exports.prototype['joined_date'] = undefined;
  /**
   * The date this user last left the occurrence, unix timestamp in seconds. Null if still present
   * @member {Number} left_date
   */
  exports.prototype['left_date'] = undefined;
  /**
   * The metric for the user's results, after the game is over
   * @member {module:model/MetricResource} metric
   */
  exports.prototype['metric'] = undefined;
  /**
   * The current status of the user in the occurrence (default: present)
   * @member {module:model/ActivityUserResource.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The user
   * @member {module:model/SimpleUserResource} user
   */
  exports.prototype['user'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "present"
     * @const
     */
    "present": "present",
    /**
     * value: "ready"
     * @const
     */
    "ready": "ready",
    /**
     * value: "left"
     * @const
     */
    "left": "left",
    /**
     * value: "surrendered"
     * @const
     */
    "surrendered": "surrendered",
    /**
     * value: "disconnected"
     * @const
     */
    "disconnected": "disconnected"  };


  return exports;
}));


