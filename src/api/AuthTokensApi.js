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
    define(['ApiClient', 'model/OauthAccessTokenResource', 'model/PageResourceOauthAccessTokenResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OauthAccessTokenResource'), require('../model/PageResourceOauthAccessTokenResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AuthTokensApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.OauthAccessTokenResource, root.KnetikCloud.PageResourceOauthAccessTokenResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, OauthAccessTokenResource, PageResourceOauthAccessTokenResource, Result) {
  'use strict';

  /**
   * AuthTokens service.
   * @module api/AuthTokensApi
   * @version 3.0.273
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
     * Delete tokens by username, client id, or both
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TOKENS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.username The username of the user
     * @param {String} opts.clientId The id of the client
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteTokensWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'username': opts['username'],
        'client_id': opts['clientId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/tokens', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete tokens by username, client id, or both
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TOKENS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.username The username of the user
     * @param {String} opts.clientId The id of the client
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteTokens = function(opts) {
      return this.deleteTokensWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single token by username and client id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TOKENS_ADMIN
     * @param {String} username The username of the user
     * @param {String} clientId The id of the client
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthAccessTokenResource} and HTTP response
     */
    this.getTokenWithHttpInfo = function(username, clientId) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = OauthAccessTokenResource;

      return this.apiClient.callApi(
        '/auth/tokens/{username}/{client_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single token by username and client id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TOKENS_ADMIN
     * @param {String} username The username of the user
     * @param {String} clientId The id of the client
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthAccessTokenResource}
     */
    this.getToken = function(username, clientId) {
      return this.getTokenWithHttpInfo(username, clientId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List usernames and client ids
     * Token value not shown. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TOKENS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterClientId Filters for token whose client id matches provided string
     * @param {String} opts.filterUsername Filters for token whose username matches provided string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceOauthAccessTokenResource} and HTTP response
     */
    this.getTokensWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_client_id': opts['filterClientId'],
        'filter_username': opts['filterUsername'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageResourceOauthAccessTokenResource;

      return this.apiClient.callApi(
        '/auth/tokens', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List usernames and client ids
     * Token value not shown. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TOKENS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterClientId Filters for token whose client id matches provided string
     * @param {String} opts.filterUsername Filters for token whose username matches provided string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceOauthAccessTokenResource}
     */
    this.getTokens = function(opts) {
      return this.getTokensWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
