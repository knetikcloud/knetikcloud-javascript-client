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
    define(['ApiClient', 'model/Behavior'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.TimePeriodGettable = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior);
  }
}(this, function(ApiClient, Behavior) {
  'use strict';




  /**
   * The TimePeriodGettable model module.
   * @module model/TimePeriodGettable
   * @version 3.0.21
   */

  /**
   * Constructs a new <code>TimePeriodGettable</code>.
   * @alias module:model/TimePeriodGettable
   * @class
   * @extends module:model/Behavior
   * @param getLimit {Number} The time period limit
   * @param timeLength {Number} The length of time
   * @param unitOfTime {String} The unit of time
   */
  var exports = function(getLimit, timeLength, unitOfTime) {
    var _this = this;
    Behavior.call(_this);
    _this['get_limit'] = getLimit;

    _this['time_length'] = timeLength;
    _this['unit_of_time'] = unitOfTime;
  };

  /**
   * Constructs a <code>TimePeriodGettable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimePeriodGettable} obj Optional instance to populate.
   * @return {module:model/TimePeriodGettable} The populated <code>TimePeriodGettable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Behavior.constructFromObject(data, obj);
      if (data.hasOwnProperty('get_limit')) {
        obj['get_limit'] = ApiClient.convertToType(data['get_limit'], 'Number');
      }
      if (data.hasOwnProperty('group_name')) {
        obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
      }
      if (data.hasOwnProperty('time_length')) {
        obj['time_length'] = ApiClient.convertToType(data['time_length'], 'Number');
      }
      if (data.hasOwnProperty('unit_of_time')) {
        obj['unit_of_time'] = ApiClient.convertToType(data['unit_of_time'], 'String');
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
  
  var discriminatorValue = 'time_period_gettable';
  Behavior.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Behavior.prototype);
  exports.prototype.constructor = exports;


  /**
   * The time period limit
   * @member {Number} get_limit
   */
  exports.prototype['get_limit'] = undefined;
  /**
   * The name of a group of items. Multiple items with the same group name will be limited together, leave null to be assigned a random unique name. It is typical that the other properties here will be the same for all, but this is not enforced and the item being recieved will use its settings.
   * @member {String} group_name
   */
  exports.prototype['group_name'] = undefined;
  /**
   * The length of time
   * @member {Number} time_length
   */
  exports.prototype['time_length'] = undefined;
  /**
   * The unit of time
   * @member {String} unit_of_time
   */
  exports.prototype['unit_of_time'] = undefined;



  return exports;
}));


