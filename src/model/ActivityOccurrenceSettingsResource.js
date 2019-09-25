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
    define(['ApiClient', 'model/CoreActivityOccurrenceSettings', 'model/SelectedSettingRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CoreActivityOccurrenceSettings'), require('./SelectedSettingRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ActivityOccurrenceSettingsResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CoreActivityOccurrenceSettings, root.KnetikCloud.SelectedSettingRequest);
  }
}(this, function(ApiClient, CoreActivityOccurrenceSettings, SelectedSettingRequest) {
  'use strict';




  /**
   * The ActivityOccurrenceSettingsResource model module.
   * @module model/ActivityOccurrenceSettingsResource
   * @version 3.0.271
   */

  /**
   * Constructs a new <code>ActivityOccurrenceSettingsResource</code>.
   * @alias module:model/ActivityOccurrenceSettingsResource
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ActivityOccurrenceSettingsResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityOccurrenceSettingsResource} obj Optional instance to populate.
   * @return {module:model/ActivityOccurrenceSettingsResource} The populated <code>ActivityOccurrenceSettingsResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('core_settings')) {
        obj['core_settings'] = CoreActivityOccurrenceSettings.constructFromObject(data['core_settings']);
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = ApiClient.convertToType(data['settings'], [SelectedSettingRequest]);
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
  
  var discriminatorValue = 'ActivityOccurrenceSettingsResource';


  /**
   * Defines core settings about the activity occurrence that affect how it behaves in the system. Validated against core settings in activity/challenge-activity.
   * @member {module:model/CoreActivityOccurrenceSettings} core_settings
   */
  exports.prototype['core_settings'] = undefined;
  /**
   * The values selected from the available settings defined for the activity. Ex: difficulty: hard. Can be left out if the activity is played during an event and the settings are already set at the event level. Ex: every monday, difficulty: hard, number of questions: 10, category: sport. Otherwise, the set must exactly match those of the activity.
   * @member {Array.<module:model/SelectedSettingRequest>} settings
   */
  exports.prototype['settings'] = undefined;



  return exports;
}));


