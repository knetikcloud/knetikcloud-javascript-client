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
    define(['ApiClient', 'model/LeaderboardEntryResource', 'model/LeaderboardResource', 'model/PageResourcestring', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LeaderboardEntryResource'), require('../model/LeaderboardResource'), require('../model/PageResourcestring'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.GamificationLeaderboardsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.LeaderboardEntryResource, root.KnetikCloud.LeaderboardResource, root.KnetikCloud.PageResourcestring, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, LeaderboardEntryResource, LeaderboardResource, PageResourcestring, Result) {
  'use strict';

  /**
   * GamificationLeaderboards service.
   * @module api/GamificationLeaderboardsApi
   * @version 3.0.271
   */

  /**
   * Constructs a new GamificationLeaderboardsApi. 
   * @alias module:api/GamificationLeaderboardsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieves leaderboard details and paginated entries
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard. Sorting is based on the fields of LeaderboardEntryResource rather than the returned LeaderboardResource. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} contextType The context type for the leaderboard
     * @param {String} contextId The context id for the leaderboard
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to score:DESC,updated:ASC,user_id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeaderboardResource} and HTTP response
     */
    this.getLeaderboardWithHttpInfo = function(contextType, contextId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'contextType' is set
      if (contextType === undefined || contextType === null) {
        throw new Error("Missing the required parameter 'contextType' when calling getLeaderboard");
      }

      // verify the required parameter 'contextId' is set
      if (contextId === undefined || contextId === null) {
        throw new Error("Missing the required parameter 'contextId' when calling getLeaderboard");
      }


      var pathParams = {
        'context_type': contextType,
        'context_id': contextId
      };
      var queryParams = {
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
      var returnType = LeaderboardResource;

      return this.apiClient.callApi(
        '/leaderboards/{context_type}/{context_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves leaderboard details and paginated entries
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard. Sorting is based on the fields of LeaderboardEntryResource rather than the returned LeaderboardResource. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} contextType The context type for the leaderboard
     * @param {String} contextId The context id for the leaderboard
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to score:DESC,updated:ASC,user_id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeaderboardResource}
     */
    this.getLeaderboard = function(contextType, contextId, opts) {
      return this.getLeaderboardWithHttpInfo(contextType, contextId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a specific user entry with rank
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} contextType The context type for the leaderboard
     * @param {String} contextId The context id for the leaderboard
     * @param {String} id The id of a user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeaderboardEntryResource} and HTTP response
     */
    this.getLeaderboardRankWithHttpInfo = function(contextType, contextId, id) {
      var postBody = null;

      // verify the required parameter 'contextType' is set
      if (contextType === undefined || contextType === null) {
        throw new Error("Missing the required parameter 'contextType' when calling getLeaderboardRank");
      }

      // verify the required parameter 'contextId' is set
      if (contextId === undefined || contextId === null) {
        throw new Error("Missing the required parameter 'contextId' when calling getLeaderboardRank");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLeaderboardRank");
      }


      var pathParams = {
        'context_type': contextType,
        'context_id': contextId,
        'id': id
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
      var returnType = LeaderboardEntryResource;

      return this.apiClient.callApi(
        '/leaderboards/{context_type}/{context_id}/users/{id}/rank', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves a specific user entry with rank
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} contextType The context type for the leaderboard
     * @param {String} contextId The context id for the leaderboard
     * @param {String} id The id of a user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeaderboardEntryResource}
     */
    this.getLeaderboardRank = function(contextType, contextId, id) {
      return this.getLeaderboardRankWithHttpInfo(contextType, contextId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of available leaderboard strategy names
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourcestring} and HTTP response
     */
    this.getLeaderboardStrategiesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
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
      var returnType = PageResourcestring;

      return this.apiClient.callApi(
        '/leaderboards/strategies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of available leaderboard strategy names
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourcestring}
     */
    this.getLeaderboardStrategies = function(opts) {
      return this.getLeaderboardStrategiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
