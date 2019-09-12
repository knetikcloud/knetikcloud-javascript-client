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
    define(['ApiClient', 'model/PatchActionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PatchActionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PatchResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PatchActionResource);
  }
}(this, function(ApiClient, PatchActionResource) {
  'use strict';




  /**
   * The PatchResource model module.
   * @module model/PatchResource
   * @version 3.0.270
   */

  /**
   * Constructs a new <code>PatchResource</code>.
   * @alias module:model/PatchResource
   * @class
   * @param patchActions {Array.<module:model/PatchActionResource>} The list of patch actions to perform on a resource
   */
  var exports = function(patchActions) {
    var _this = this;

    _this['patch_actions'] = patchActions;
  };

  /**
   * Constructs a <code>PatchResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PatchResource} obj Optional instance to populate.
   * @return {module:model/PatchResource} The populated <code>PatchResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('patch_actions')) {
        obj['patch_actions'] = ApiClient.convertToType(data['patch_actions'], [PatchActionResource]);
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
  
  var discriminatorValue = 'PatchResource';


  /**
   * The list of patch actions to perform on a resource
   * @member {Array.<module:model/PatchActionResource>} patch_actions
   */
  exports.prototype['patch_actions'] = undefined;



  return exports;
}));


