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
    define(['ApiClient', 'model/BreGlobalResource', 'model/PageResourceBreGlobalResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreGlobalResource'), require('../model/PageResourceBreGlobalResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.BRERuleEngineGlobalsApi = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.BreGlobalResource, root.knetikcloud-sdk.PageResourceBreGlobalResource, root.knetikcloud-sdk.Result);
  }
}(this, function(ApiClient, BreGlobalResource, PageResourceBreGlobalResource, Result) {
  'use strict';

  /**
   * BRERuleEngineGlobals service.
   * @module api/BRERuleEngineGlobalsApi
   * @version latest

   */

  /**
   * Constructs a new BRERuleEngineGlobalsApi. 
   * @alias module:api/BRERuleEngineGlobalsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBREGlobal operation.
     * @callback module:api/BRERuleEngineGlobalsApi~createBREGlobalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BreGlobalResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a global definition
     * Once created you can then use in a custom rule. Note that global definitions cannot be modified or deleted if in use.
     * @param {Object} opts Optional parameters
     * @param {module:model/BreGlobalResource} opts.breGlobalResource The BRE global resource object
     * @param {module:api/BRERuleEngineGlobalsApi~createBREGlobalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BreGlobalResource}
     */
    this.createBREGlobal = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['breGlobalResource'];


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
      var returnType = BreGlobalResource;

      return this.apiClient.callApi(
        '/bre/globals/definitions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBREGlobal operation.
     * @callback module:api/BRERuleEngineGlobalsApi~deleteBREGlobalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a global
     * May fail if there are existing rules against it. Cannot delete core globals
     * @param {String} id The id of the global definition
     * @param {module:api/BRERuleEngineGlobalsApi~deleteBREGlobalCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBREGlobal = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBREGlobal");
      }


      var pathParams = {
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/bre/globals/definitions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBREGlobal operation.
     * @callback module:api/BRERuleEngineGlobalsApi~getBREGlobalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BreGlobalResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single global definition
     * @param {String} id The id of the global definition
     * @param {module:api/BRERuleEngineGlobalsApi~getBREGlobalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BreGlobalResource}
     */
    this.getBREGlobal = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBREGlobal");
      }


      var pathParams = {
        'id': id
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
      var returnType = BreGlobalResource;

      return this.apiClient.callApi(
        '/bre/globals/definitions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBREGlobals operation.
     * @callback module:api/BRERuleEngineGlobalsApi~getBREGlobalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceBreGlobalResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List global definitions
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterSystem Filter for globals that are system globals when true, or not when false. Leave off for both mixed
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/BRERuleEngineGlobalsApi~getBREGlobalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceBreGlobalResource}
     */
    this.getBREGlobals = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_system': opts['filterSystem'],
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
      var returnType = PageResourceBreGlobalResource;

      return this.apiClient.callApi(
        '/bre/globals/definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBREGlobal operation.
     * @callback module:api/BRERuleEngineGlobalsApi~updateBREGlobalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BreGlobalResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a global definition
     * May fail if new parameters mismatch requirements of existing rules. Cannot update core globals
     * @param {String} id The id of the global definition
     * @param {Object} opts Optional parameters
     * @param {module:model/BreGlobalResource} opts.breGlobalResource The BRE global resource object
     * @param {module:api/BRERuleEngineGlobalsApi~updateBREGlobalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BreGlobalResource}
     */
    this.updateBREGlobal = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['breGlobalResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBREGlobal");
      }


      var pathParams = {
        'id': id
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
      var returnType = BreGlobalResource;

      return this.apiClient.callApi(
        '/bre/globals/definitions/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
