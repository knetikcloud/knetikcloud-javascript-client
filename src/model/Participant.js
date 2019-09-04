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
    define(['ApiClient', 'model/IdRef'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IdRef'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.Participant = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.IdRef);
  }
}(this, function(ApiClient, IdRef) {
  'use strict';




  /**
   * The Participant model module.
   * @module model/Participant
   * @version 3.0.266
   */

  /**
   * Constructs a new <code>Participant</code>.
   * @alias module:model/Participant
   * @class
   * @param user {module:model/IdRef} The user
   */
  var exports = function(user) {
    var _this = this;



    _this['user'] = user;
  };

  /**
   * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Participant} obj Optional instance to populate.
   * @return {module:model/Participant} The populated <code>Participant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = IdRef.constructFromObject(data['user']);
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
  
  var discriminatorValue = 'Participant';


  /**
   * Whether this user is the 'host' of the occurrence and has increased access to settings/etc (default: false)
   * @member {Boolean} host
   */
  exports.prototype['host'] = undefined;
  /**
   * The current status of the user in the occurrence (default: present)
   * @member {module:model/Participant.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The user
   * @member {module:model/IdRef} user
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


