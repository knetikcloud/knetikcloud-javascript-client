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
    define(['ApiClient', 'model/ArgumentResource', 'model/Operator'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ArgumentResource'), require('./Operator'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.OperationDefinitionResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ArgumentResource, root.KnetikCloud.Operator);
  }
}(this, function(ApiClient, ArgumentResource, Operator) {
  'use strict';




  /**
   * The OperationDefinitionResource model module.
   * @module model/OperationDefinitionResource
   * @version 3.0.8
   */

  /**
   * Constructs a new <code>OperationDefinitionResource</code>.
   * @alias module:model/OperationDefinitionResource
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>OperationDefinitionResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperationDefinitionResource} obj Optional instance to populate.
   * @return {module:model/OperationDefinitionResource} The populated <code>OperationDefinitionResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('arguments')) {
        obj['arguments'] = ApiClient.convertToType(data['arguments'], [ArgumentResource]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('operator')) {
        obj['operator'] = Operator.constructFromObject(data['operator']);
      }
      if (data.hasOwnProperty('return_type')) {
        obj['return_type'] = ApiClient.convertToType(data['return_type'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
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
  
  var discriminatorValue = 'OperationDefinitionResource';


  /**
   * @member {Array.<module:model/ArgumentResource>} arguments
   */
  exports.prototype['arguments'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/Operator} operator
   */
  exports.prototype['operator'] = undefined;
  /**
   * @member {String} return_type
   */
  exports.prototype['return_type'] = undefined;
  /**
   * @member {String} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));

