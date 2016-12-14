/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
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
    define(['ApiClient', 'model/PagePermissionResource', 'model/PermissionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PagePermissionResource'), require('../model/PermissionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AuthPermissionsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PagePermissionResource, root.KnetikPlatformApiDocumentationLatest.PermissionResource);
  }
}(this, function(ApiClient, PagePermissionResource, PermissionResource) {
  'use strict';

  /**
   * AuthPermissions service.
   * @module api/AuthPermissionsApi
   * @version Latest
   */

  /**
   * Constructs a new AuthPermissionsApi. 
   * @alias module:api/AuthPermissionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPermissionUsingPOST operation.
     * @callback module:api/AuthPermissionsApi~createPermissionUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new permission
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @param {module:api/AuthPermissionsApi~createPermissionUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionResource}
     */
    this.createPermissionUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['permissionResource'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePermissionUsingDELETE operation.
     * @callback module:api/AuthPermissionsApi~deletePermissionUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes permission assigned to roles
     * @param {module:api/AuthPermissionsApi~deletePermissionUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePermissionUsingDELETE = function(permission, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'permission' is set
      if (permission == undefined || permission == null) {
        throw new Error("Missing the required parameter 'permission' when calling deletePermissionUsingDELETE");
      }


      var pathParams = {
        'permission': permission
      };
      var queryParams = {
        'force': opts['force']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPermissionUsingGET operation.
     * @callback module:api/AuthPermissionsApi~getPermissionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single permission
     * @param {String} permission The permission value
     * @param {module:api/AuthPermissionsApi~getPermissionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionResource}
     */
    this.getPermissionUsingGET = function(permission, callback) {
      var postBody = null;

      // verify the required parameter 'permission' is set
      if (permission == undefined || permission == null) {
        throw new Error("Missing the required parameter 'permission' when calling getPermissionUsingGET");
      }


      var pathParams = {
        'permission': permission
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPermissionUsingGET1 operation.
     * @callback module:api/AuthPermissionsApi~getPermissionUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePermissionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search permissions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to 1)
     * @param {module:api/AuthPermissionsApi~getPermissionUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagePermissionResource}
     */
    this.getPermissionUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = PagePermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePermissionUsingPUT operation.
     * @callback module:api/AuthPermissionsApi~updatePermissionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @param {module:api/AuthPermissionsApi~updatePermissionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePermissionUsingPUT = function(permission, opts, callback) {
      opts = opts || {};
      var postBody = opts['permissionResource'];

      // verify the required parameter 'permission' is set
      if (permission == undefined || permission == null) {
        throw new Error("Missing the required parameter 'permission' when calling updatePermissionUsingPUT");
      }


      var pathParams = {
        'permission': permission
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
