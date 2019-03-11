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
    root.KnetikCloud.Schedule = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Schedule model module.
   * @module model/Schedule
   * @version 3.0.16
   */

  /**
   * Constructs a new <code>Schedule</code>.
   * @alias module:model/Schedule
   * @class
   * @param duration {Number} The duration of the repeatable events
   * @param durationUnit {module:model/Schedule.DurationUnitEnum} The unit of time for the duration field
   * @param repeat {module:model/Schedule.RepeatEnum} How often the event is scheduled
   */
  var exports = function(duration, durationUnit, repeat) {
    var _this = this;

    _this['duration'] = duration;
    _this['duration_unit'] = durationUnit;
    _this['repeat'] = repeat;
  };

  /**
   * Constructs a <code>Schedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Schedule} obj Optional instance to populate.
   * @return {module:model/Schedule} The populated <code>Schedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('duration_unit')) {
        obj['duration_unit'] = ApiClient.convertToType(data['duration_unit'], 'String');
      }
      if (data.hasOwnProperty('repeat')) {
        obj['repeat'] = ApiClient.convertToType(data['repeat'], 'String');
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
  
  var discriminatorValue = 'Schedule';


  /**
   * The duration of the repeatable events
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * The unit of time for the duration field
   * @member {module:model/Schedule.DurationUnitEnum} duration_unit
   */
  exports.prototype['duration_unit'] = undefined;
  /**
   * How often the event is scheduled
   * @member {module:model/Schedule.RepeatEnum} repeat
   */
  exports.prototype['repeat'] = undefined;


  /**
   * Allowed values for the <code>duration_unit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DurationUnitEnum = {
    /**
     * value: "millisecond"
     * @const
     */
    "millisecond": "millisecond",
    /**
     * value: "second"
     * @const
     */
    "second": "second",
    /**
     * value: "minute"
     * @const
     */
    "minute": "minute",
    /**
     * value: "hour"
     * @const
     */
    "hour": "hour",
    /**
     * value: "day"
     * @const
     */
    "day": "day",
    /**
     * value: "week"
     * @const
     */
    "week": "week",
    /**
     * value: "month"
     * @const
     */
    "month": "month",
    /**
     * value: "year"
     * @const
     */
    "year": "year"  };

  /**
   * Allowed values for the <code>repeat</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RepeatEnum = {
    /**
     * value: "DAILY"
     * @const
     */
    "DAILY": "DAILY",
    /**
     * value: "WEEKLY"
     * @const
     */
    "WEEKLY": "WEEKLY"  };


  return exports;
}));


