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
    define(['ApiClient', 'model/FulfillmentType', 'model/PageResourceFulfillmentType', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FulfillmentType'), require('../model/PageResourceFulfillmentType'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.FulfillmentApi = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.FulfillmentType, root.KnetikcloudSdk.PageResourceFulfillmentType, root.KnetikcloudSdk.Result);
  }
}(this, function(ApiClient, FulfillmentType, PageResourceFulfillmentType, Result) {
  'use strict';

  /**
   * Fulfillment service.
   * @module api/FulfillmentApi
   * @version latest

   */

  /**
   * Constructs a new FulfillmentApi. 
   * @alias module:api/FulfillmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createFulfillmentType operation.
     * @callback module:api/FulfillmentApi~createFulfillmentTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a fulfillment type
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.type The fulfillment type
     * @param {module:api/FulfillmentApi~createFulfillmentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentType}
     */
    this.createFulfillmentType = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['type'];


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
      var returnType = FulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFulfillmentType operation.
     * @callback module:api/FulfillmentApi~deleteFulfillmentTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a fulfillment type
     * @param {Number} id The id
     * @param {module:api/FulfillmentApi~deleteFulfillmentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFulfillmentType = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFulfillmentType");
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
        '/store/fulfillment/types/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentType operation.
     * @callback module:api/FulfillmentApi~getFulfillmentTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FulfillmentType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single fulfillment type
     * @param {Number} id The id
     * @param {module:api/FulfillmentApi~getFulfillmentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FulfillmentType}
     */
    this.getFulfillmentType = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFulfillmentType");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFulfillmentTypes operation.
     * @callback module:api/FulfillmentApi~getFulfillmentTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceFulfillmentType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search fulfillment types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/FulfillmentApi~getFulfillmentTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceFulfillmentType}
     */
    this.getFulfillmentTypes = function(opts, callback) {
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
      var accepts = ['application/json'];
      var returnType = PageResourceFulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFulfillmentType operation.
     * @callback module:api/FulfillmentApi~updateFulfillmentTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a fulfillment type
     * @param {Number} id The id
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.fulfillmentType The fulfillment type
     * @param {module:api/FulfillmentApi~updateFulfillmentTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateFulfillmentType = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['fulfillmentType'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateFulfillmentType");
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
        '/store/fulfillment/types/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
