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
    define(['ApiClient', 'model/OauthAccessTokenResource', 'model/PageResourceOauthAccessTokenResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OauthAccessTokenResource'), require('../model/PageResourceOauthAccessTokenResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.AuthTokensApi = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.OauthAccessTokenResource, root.KnetikcloudSdk.PageResourceOauthAccessTokenResource, root.KnetikcloudSdk.Result);
  }
}(this, function(ApiClient, OauthAccessTokenResource, PageResourceOauthAccessTokenResource, Result) {
  'use strict';

  /**
   * AuthTokens service.
   * @module api/AuthTokensApi
   * @version latest

   */

  /**
   * Constructs a new AuthTokensApi. 
   * @alias module:api/AuthTokensApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteTokens operation.
     * @callback module:api/AuthTokensApi~deleteTokensCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete tokens by username, client id, or both
     * @param {Object} opts Optional parameters
     * @param {String} opts.username The username of the user
     * @param {String} opts.clientId The id of the client
     * @param {module:api/AuthTokensApi~deleteTokensCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTokens = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'username': opts['username'],
        'client_id': opts['clientId']
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
        '/auth/tokens', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getToken operation.
     * @callback module:api/AuthTokensApi~getTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OauthAccessTokenResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single token by username and client id
     * @param {String} username The username of the user
     * @param {String} clientId The id of the client
     * @param {module:api/AuthTokensApi~getTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OauthAccessTokenResource}
     */
    this.getToken = function(username, clientId, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getToken");
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getToken");
      }


      var pathParams = {
        'username': username,
        'client_id': clientId
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
      var returnType = OauthAccessTokenResource;

      return this.apiClient.callApi(
        '/auth/tokens/{username}/{client_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokens operation.
     * @callback module:api/AuthTokensApi~getTokensCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceOauthAccessTokenResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List usernames and client ids
     * Token value not shown
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterClientId Filters for token whose client id matches provided string
     * @param {String} opts.filterUsername Filters for token whose username matches provided string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param {module:api/AuthTokensApi~getTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceOauthAccessTokenResource}
     */
    this.getTokens = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_client_id': opts['filterClientId'],
        'filter_username': opts['filterUsername'],
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
      var returnType = PageResourceOauthAccessTokenResource;

      return this.apiClient.callApi(
        '/auth/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
