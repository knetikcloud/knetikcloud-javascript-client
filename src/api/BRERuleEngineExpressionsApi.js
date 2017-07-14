/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LookupTypeResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LookupTypeResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.BRERuleEngineExpressionsApi = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.LookupTypeResource, root.knetikcloud-sdk.Result);
  }
}(this, function(ApiClient, LookupTypeResource, Result) {
  'use strict';

  /**
   * BRERuleEngineExpressions service.
   * @module api/BRERuleEngineExpressionsApi
   * @version latest

   */

  /**
   * Constructs a new BRERuleEngineExpressionsApi. 
   * @alias module:api/BRERuleEngineExpressionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBREExpressions operation.
     * @callback module:api/BRERuleEngineExpressionsApi~getBREExpressionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LookupTypeResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of &#39;lookup&#39; type expressions
     * These are expression types that take a second expression as input and produce a value. These can be used in addition to the standard types, like parameter, global and constant (see BRE documentation for details).
     * @param {module:api/BRERuleEngineExpressionsApi~getBREExpressionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LookupTypeResource>}
     */
    this.getBREExpressions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [LookupTypeResource];

      return this.apiClient.callApi(
        '/bre/expressions/lookup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
