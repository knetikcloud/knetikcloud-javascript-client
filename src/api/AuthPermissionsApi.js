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
    define(['ApiClient', 'model/PageResourcePermissionResource', 'model/PermissionResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourcePermissionResource'), require('../model/PermissionResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AuthPermissionsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourcePermissionResource, root.KnetikPlatformApiDocumentationLatest.PermissionResource, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, PageResourcePermissionResource, PermissionResource, Result) {
  'use strict';

  /**
   * AuthPermissions service.
   * @module api/AuthPermissionsApi
   * @version latest

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
     * Callback function to receive the result of the createPermission operation.
     * @callback module:api/AuthPermissionsApi~createPermissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new permission
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @param {module:api/AuthPermissionsApi~createPermissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionResource}
     */
    this.createPermission = function(opts, callback) {
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePermission operation.
     * @callback module:api/AuthPermissionsApi~deletePermissionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes permission assigned to roles
     * @param {module:api/AuthPermissionsApi~deletePermissionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePermission = function(permission, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'permission' is set
      if (permission == undefined || permission == null) {
        throw new Error("Missing the required parameter 'permission' when calling deletePermission");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPermission operation.
     * @callback module:api/AuthPermissionsApi~getPermissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single permission
     * @param {String} permission The permission value
     * @param {module:api/AuthPermissionsApi~getPermissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionResource}
     */
    this.getPermission = function(permission, callback) {
      var postBody = null;

      // verify the required parameter 'permission' is set
      if (permission == undefined || permission == null) {
        throw new Error("Missing the required parameter 'permission' when calling getPermission");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPermissions operation.
     * @callback module:api/AuthPermissionsApi~getPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourcePermissionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search permissions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to permission:ASC)
     * @param {module:api/AuthPermissionsApi~getPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourcePermissionResource}
     */
    this.getPermissions = function(opts, callback) {
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourcePermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePermission operation.
     * @callback module:api/AuthPermissionsApi~updatePermissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @param {module:api/AuthPermissionsApi~updatePermissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionResource}
     */
    this.updatePermission = function(permission, opts, callback) {
      opts = opts || {};
      var postBody = opts['permissionResource'];

      // verify the required parameter 'permission' is set
      if (permission == undefined || permission == null) {
        throw new Error("Missing the required parameter 'permission' when calling updatePermission");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
