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
    root.KnetikCloud.MonitoringMetricResource = factory(root.KnetikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MonitoringMetricResource model module.
   * @module model/MonitoringMetricResource
   * @version 3.1.4
   */

  /**
   * Constructs a new <code>MonitoringMetricResource</code>.
   * @alias module:model/MonitoringMetricResource
   * @class
   * @param id {String} The id of the metric. Cannot be changed
   * @param metricType {module:model/MonitoringMetricResource.MetricTypeEnum} The type of metric.  Cannot be updated once set.  counter: a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart.  delta: a metric to track the change in value of another gauge metric once started.  gauge: a metric that represents a single numerical value that can arbitrarily go up and down.  timer: a metric that functions as a running timer once started.
   */
  var exports = function(id, metricType) {
    var _this = this;


    _this['id'] = id;
    _this['metric_type'] = metricType;


  };

  /**
   * Constructs a <code>MonitoringMetricResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringMetricResource} obj Optional instance to populate.
   * @return {module:model/MonitoringMetricResource} The populated <code>MonitoringMetricResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dimension_keys')) {
        obj['dimension_keys'] = ApiClient.convertToType(data['dimension_keys'], ['String']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('metric_type')) {
        obj['metric_type'] = ApiClient.convertToType(data['metric_type'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parent_metric_id')) {
        obj['parent_metric_id'] = ApiClient.convertToType(data['parent_metric_id'], 'String');
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
  
  var discriminatorValue = 'MonitoringMetricResource';


  /**
   * The sets of dimensions that datapoints may be recorded with (each datapoint must have dimensions keys exactly matching this set)
   * @member {Array.<String>} dimension_keys
   */
  exports.prototype['dimension_keys'] = undefined;
  /**
   * The id of the metric. Cannot be changed
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The type of metric.  Cannot be updated once set.  counter: a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart.  delta: a metric to track the change in value of another gauge metric once started.  gauge: a metric that represents a single numerical value that can arbitrarily go up and down.  timer: a metric that functions as a running timer once started.
   * @member {module:model/MonitoringMetricResource.MetricTypeEnum} metric_type
   */
  exports.prototype['metric_type'] = undefined;
  /**
   * The name of the metric, for display purposes. Will default if not provided
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The id of the parent metric.  Cannot be updated once set.  Needed for delta metrics only.
   * @member {String} parent_metric_id
   */
  exports.prototype['parent_metric_id'] = undefined;


  /**
   * Allowed values for the <code>metric_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MetricTypeEnum = {
    /**
     * value: "counter"
     * @const
     */
    "counter": "counter",
    /**
     * value: "gauge"
     * @const
     */
    "gauge": "gauge"  };


  return exports;
}));


