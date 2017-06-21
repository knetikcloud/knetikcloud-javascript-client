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
    define(['ApiClient', 'model/DeviceResource', 'model/PageResourceDeviceResource', 'model/Result', 'model/SimpleUserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceResource'), require('../model/PageResourceDeviceResource'), require('../model/Result'), require('../model/SimpleUserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.DevicesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.DeviceResource, root.KnetikPlatformApiDocumentationLatest.PageResourceDeviceResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.SimpleUserResource);
  }
}(this, function(ApiClient, DeviceResource, PageResourceDeviceResource, Result, SimpleUserResource) {
  'use strict';

  /**
   * Devices service.
   * @module api/DevicesApi
   * @version latest

   */

  /**
   * Constructs a new DevicesApi. 
   * @alias module:api/DevicesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addDeviceUsers operation.
     * @callback module:api/DevicesApi~addDeviceUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add device users
     * @param {Array.<module:model/SimpleUserResource>} userResources userResources
     * @param {Number} id id
     * @param {module:api/DevicesApi~addDeviceUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceResource}
     */
    this.addDeviceUsers = function(userResources, id, callback) {
      var postBody = userResources;

      // verify the required parameter 'userResources' is set
      if (userResources === undefined || userResources === null) {
        throw new Error("Missing the required parameter 'userResources' when calling addDeviceUsers");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addDeviceUsers");
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
      var returnType = DeviceResource;

      return this.apiClient.callApi(
        '/devices/{id}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDevice operation.
     * @callback module:api/DevicesApi~createDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a device
     * @param {module:model/DeviceResource} device device
     * @param {module:api/DevicesApi~createDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceResource}
     */
    this.createDevice = function(device, callback) {
      var postBody = device;

      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling createDevice");
      }


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
      var returnType = DeviceResource;

      return this.apiClient.callApi(
        '/devices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDevice operation.
     * @callback module:api/DevicesApi~deleteDeviceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a device
     * @param {Number} id id
     * @param {module:api/DevicesApi~deleteDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDevice = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDevice");
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
        '/devices/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDeviceUser operation.
     * @callback module:api/DevicesApi~deleteDeviceUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a device user
     * @param {Number} id The id of the device
     * @param {Number} userId The user id of the device user
     * @param {module:api/DevicesApi~deleteDeviceUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDeviceUser = function(id, userId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDeviceUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteDeviceUser");
      }


      var pathParams = {
        'id': id,
        'user_id': userId
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
        '/devices/{id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDeviceUsers operation.
     * @callback module:api/DevicesApi~deleteDeviceUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all device users
     * @param {Number} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterId Filter for device users to delete with a user id in a given comma separated list of ids
     * @param {module:api/DevicesApi~deleteDeviceUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDeviceUsers = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDeviceUsers");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'filter_id': opts['filterId']
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
        '/devices/{id}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevice operation.
     * @callback module:api/DevicesApi~getDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single device
     * @param {Number} id id
     * @param {module:api/DevicesApi~getDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceResource}
     */
    this.getDevice = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDevice");
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
      var returnType = DeviceResource;

      return this.apiClient.callApi(
        '/devices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevices operation.
     * @callback module:api/DevicesApi~getDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceDeviceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search devices
     * Get a list of devices with optional filtering
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterMake Filter for devices with specified make
     * @param {String} opts.filterModel Filter for devices with specified model
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/DevicesApi~getDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceDeviceResource}
     */
    this.getDevices = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_make': opts['filterMake'],
        'filter_model': opts['filterModel'],
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
      var returnType = PageResourceDeviceResource;

      return this.apiClient.callApi(
        '/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDevice operation.
     * @callback module:api/DevicesApi~updateDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a device
     * @param {module:model/DeviceResource} device device
     * @param {Number} id id
     * @param {module:api/DevicesApi~updateDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceResource}
     */
    this.updateDevice = function(device, id, callback) {
      var postBody = device;

      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling updateDevice");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDevice");
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
      var returnType = DeviceResource;

      return this.apiClient.callApi(
        '/devices/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));