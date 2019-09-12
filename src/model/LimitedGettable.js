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
    define(['ApiClient', 'model/Behavior', 'model/LimitedGettableGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Behavior'), require('./LimitedGettableGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.LimitedGettable = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Behavior, root.KnetikCloud.LimitedGettableGroup);
  }
}(this, function(ApiClient, Behavior, LimitedGettableGroup) {
  'use strict';




  /**
   * The LimitedGettable model module.
   * @module model/LimitedGettable
   * @version 3.0.270
   */

  /**
   * Constructs a new <code>LimitedGettable</code>.
   * @alias module:model/LimitedGettable
   * @class
   * @extends module:model/Behavior
   */
  var exports = function() {
    var _this = this;
    Behavior.call(_this);

  };

  /**
   * Constructs a <code>LimitedGettable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LimitedGettable} obj Optional instance to populate.
   * @return {module:model/LimitedGettable} The populated <code>LimitedGettable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Behavior.constructFromObject(data, obj);
      if (data.hasOwnProperty('group')) {
        obj['group'] = LimitedGettableGroup.constructFromObject(data['group']);
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
  
  var discriminatorValue = 'limited_gettable';
  Behavior.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(Behavior.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/LimitedGettableGroup} group
   */
  exports.prototype['group'] = undefined;



  return exports;
}));


