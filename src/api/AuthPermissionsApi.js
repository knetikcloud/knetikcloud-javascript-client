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


import ApiClient from "../ApiClient";
import PageResourcePermissionResource from '../model/PageResourcePermissionResource';
import PermissionResource from '../model/PermissionResource';
import Result from '../model/Result';

/**
* AuthPermissions service.
* @module api/AuthPermissionsApi
* @version 3.0.7
*/
export default class AuthPermissionsApi {

    /**
    * Constructs a new AuthPermissionsApi. 
    * @alias module:api/AuthPermissionsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new permission
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PermissionResource} and HTTP response
     */
    createPermissionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['permissionResource'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new permission
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PermissionResource}
     */
    createPermission(opts) {
      return this.createPermissionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes permission assigned to roles
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePermissionWithHttpInfo(permission, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'permission' is set
      if (permission === undefined || permission === null) {
        throw new Error("Missing the required parameter 'permission' when calling deletePermission");
      }


      let pathParams = {
        'permission': permission
      };
      let queryParams = {
        'force': opts['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes permission assigned to roles
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePermission(permission, opts) {
      return this.deletePermissionWithHttpInfo(permission, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single permission
     * @param {String} permission The permission value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PermissionResource} and HTTP response
     */
    getPermissionWithHttpInfo(permission) {
      let postBody = null;

      // verify the required parameter 'permission' is set
      if (permission === undefined || permission === null) {
        throw new Error("Missing the required parameter 'permission' when calling getPermission");
      }


      let pathParams = {
        'permission': permission
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single permission
     * @param {String} permission The permission value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PermissionResource}
     */
    getPermission(permission) {
      return this.getPermissionWithHttpInfo(permission)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search permissions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to permission:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourcePermissionResource} and HTTP response
     */
    getPermissionsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourcePermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search permissions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to permission:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourcePermissionResource}
     */
    getPermissions(opts) {
      return this.getPermissionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PermissionResource} and HTTP response
     */
    updatePermissionWithHttpInfo(permission, opts) {
      opts = opts || {};
      let postBody = opts['permissionResource'];

      // verify the required parameter 'permission' is set
      if (permission === undefined || permission === null) {
        throw new Error("Missing the required parameter 'permission' when calling updatePermission");
      }


      let pathParams = {
        'permission': permission
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PermissionResource;

      return this.apiClient.callApi(
        '/auth/permissions/{permission}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a permission
     * @param {String} permission The permission value
     * @param {Object} opts Optional parameters
     * @param {module:model/PermissionResource} opts.permissionResource The permission resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PermissionResource}
     */
    updatePermission(permission, opts) {
      return this.updatePermissionWithHttpInfo(permission, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
