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
    define(['ApiClient', 'model/ExpressionResource', 'model/OperationDefinitionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExpressionResource'), require('./OperationDefinitionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.OperationResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ExpressionResource, root.KnetikCloud.OperationDefinitionResource);
  }
}(this, function(ApiClient, ExpressionResource, OperationDefinitionResource) {
  'use strict';




  /**
   * The OperationResource model module.
   * @module model/OperationResource
   * @version 3.0.19
   */

  /**
   * Constructs a new <code>OperationResource</code>.
   * Expressions are instructions for the rule engine to resolve certain values. For example instead of &#x60;user 1&#x60; it&#39;d state &#x60;user provided by the event&#x60;. Full list and definitions available at GET /bre/expressions.
   * @alias module:model/OperationResource
   * @class
   * @param args {Array.<module:model/ExpressionResource>} The arguments the operator apply to. See notes for details.
   * @param op {String} The operator to be used in this predicate. See notes for details.
   */
  var exports = function(args, op) {
    var _this = this;

    _this['args'] = args;

    _this['op'] = op;



  };

  /**
   * Constructs a <code>OperationResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperationResource} obj Optional instance to populate.
   * @return {module:model/OperationResource} The populated <code>OperationResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('args')) {
        obj['args'] = ApiClient.convertToType(data['args'], [ExpressionResource]);
      }
      if (data.hasOwnProperty('definition')) {
        obj['definition'] = ApiClient.convertToType(data['definition'], 'String');
      }
      if (data.hasOwnProperty('op')) {
        obj['op'] = ApiClient.convertToType(data['op'], 'String');
      }
      if (data.hasOwnProperty('return_type')) {
        obj['return_type'] = ApiClient.convertToType(data['return_type'], 'String');
      }
      if (data.hasOwnProperty('supported_operators')) {
        obj['supported_operators'] = ApiClient.convertToType(data['supported_operators'], [OperationDefinitionResource]);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
  
  var discriminatorValue = 'OperationResource';


  /**
   * The arguments the operator apply to. See notes for details.
   * @member {Array.<module:model/ExpressionResource>} args
   */
  exports.prototype['args'] = undefined;
  /**
   * @member {String} definition
   */
  exports.prototype['definition'] = undefined;
  /**
   * The operator to be used in this predicate. See notes for details.
   * @member {String} op
   */
  exports.prototype['op'] = undefined;
  /**
   * @member {String} return_type
   */
  exports.prototype['return_type'] = undefined;
  /**
   * The operators supported by this expression
   * @member {Array.<module:model/OperationDefinitionResource>} supported_operators
   */
  exports.prototype['supported_operators'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


