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
    define(['ApiClient', 'model/ActionContextobject', 'model/PredicateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActionContextobject'), require('./PredicateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.BreRule = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ActionContextobject, root.KnetikCloud.PredicateResource);
  }
}(this, function(ApiClient, ActionContextobject, PredicateResource) {
  'use strict';




  /**
   * The BreRule model module.
   * @module model/BreRule
   * @version 3.0.18
   */

  /**
   * Constructs a new <code>BreRule</code>.
   * @alias module:model/BreRule
   * @class
   * @param actions {Array.<module:model/ActionContextobject>} A list of actions to execute, and the mapping for their parameters, when the rule runs. Minimum 1
   * @param eventName {String} The event name of the trigger this rule runs for. Affects which parameters are available
   * @param name {String} The human readable name of the rule
   */
  var exports = function(actions, eventName, name) {
    var _this = this;

    _this['actions'] = actions;






    _this['event_name'] = eventName;

    _this['name'] = name;




  };

  /**
   * Constructs a <code>BreRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BreRule} obj Optional instance to populate.
   * @return {module:model/BreRule} The populated <code>BreRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], [ActionContextobject]);
      }
      if (data.hasOwnProperty('condition')) {
        obj['condition'] = PredicateResource.constructFromObject(data['condition']);
      }
      if (data.hasOwnProperty('condition_text')) {
        obj['condition_text'] = ApiClient.convertToType(data['condition_text'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Number');
      }
      if (data.hasOwnProperty('evaluation_count')) {
        obj['evaluation_count'] = ApiClient.convertToType(data['evaluation_count'], 'Number');
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('run_count')) {
        obj['run_count'] = ApiClient.convertToType(data['run_count'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'Number');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
      if (data.hasOwnProperty('system_rule')) {
        obj['system_rule'] = ApiClient.convertToType(data['system_rule'], 'Boolean');
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
  
  var discriminatorValue = 'BreRule';


  /**
   * A list of actions to execute, and the mapping for their parameters, when the rule runs. Minimum 1
   * @member {Array.<module:model/ActionContextobject>} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * A condition expression that must be met in a given event for the rule to run. Null to always run.
   * @member {module:model/PredicateResource} condition
   */
  exports.prototype['condition'] = undefined;
  /**
   * The condition as a readable string. Filled in by the system from the condition
   * @member {String} condition_text
   */
  exports.prototype['condition_text'] = undefined;
  /**
   * The human readable description of the rule
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Whether the rule is enabled to run (in conjunction with dates). Default true
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * The date the rule ceases to take effect, or null if never. Unix timestamp in seconds
   * @member {Number} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * How many times the rule has been evaluated (it's conditions checked, whether it then runs or not)
   * @member {Number} evaluation_count
   */
  exports.prototype['evaluation_count'] = undefined;
  /**
   * The event name of the trigger this rule runs for. Affects which parameters are available
   * @member {String} event_name
   */
  exports.prototype['event_name'] = undefined;
  /**
   * The id of the rule for later references. If left null a random guid will be generated. Must be unique. Cannot be changed
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The human readable name of the rule
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * How many times the rule has run
   * @member {Number} run_count
   */
  exports.prototype['run_count'] = undefined;
  /**
   * Used to sort rules to control the order they run in. Larger numbered sort values run first.  Default 500
   * @member {Number} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * The date the rule begins to take effect, or null if always. Unix timestamp in seconds
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * Whether the rule is a default part of the system. System rules cannot be edited or deleted, but may be disabled
   * @member {Boolean} system_rule
   */
  exports.prototype['system_rule'] = undefined;



  return exports;
}));


