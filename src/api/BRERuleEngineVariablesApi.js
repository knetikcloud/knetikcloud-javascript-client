/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    define(['ApiClient', 'model/PageResourceSimpleReferenceResourceobject', 'model/Result', 'model/VariableTypeResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSimpleReferenceResourceobject'), require('../model/Result'), require('../model/VariableTypeResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.BRERuleEngineVariablesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceSimpleReferenceResourceobject, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.VariableTypeResource);
  }
}(this, function(ApiClient, PageResourceSimpleReferenceResourceobject, Result, VariableTypeResource) {
  'use strict';

  /**
   * BRERuleEngineVariables service.
   * @module api/BRERuleEngineVariablesApi
   * @version latest

   */

  /**
   * Constructs a new BRERuleEngineVariablesApi. 
   * @alias module:api/BRERuleEngineVariablesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBREVariableTypes operation.
     * @callback module:api/BRERuleEngineVariablesApi~getBREVariableTypesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VariableTypeResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of variable types available
     * Types include integer, string, user and invoice. These are used to qualify trigger parameters and action variables with strong typing.
     * @param {module:api/BRERuleEngineVariablesApi~getBREVariableTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VariableTypeResource>}
     */
    this.getBREVariableTypes = function(callback) {
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
      var returnType = [VariableTypeResource];

      return this.apiClient.callApi(
        '/bre/variable-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBREVariableValues operation.
     * @callback module:api/BRERuleEngineVariablesApi~getBREVariableValuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceSimpleReferenceResourceobject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List valid values for a type
     * Used to lookup users to fill in a user constant for example. Only types marked as enumerable are suppoorted here.
     * @param {String} name The name of the type
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter results by those with names starting with this string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/BRERuleEngineVariablesApi~getBREVariableValuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceSimpleReferenceResourceobject}
     */
    this.getBREVariableValues = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getBREVariableValues");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceSimpleReferenceResourceobject;

      return this.apiClient.callApi(
        '/bre/variable-types/{name}/values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));