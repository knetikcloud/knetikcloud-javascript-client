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
    define(['ApiClient', 'model/PageResourceRewardSetResource', 'model/RewardSetResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceRewardSetResource'), require('../model/RewardSetResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.CampaignsRewardsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceRewardSetResource, root.KnetikPlatformApiDocumentationLatest.RewardSetResource);
  }
}(this, function(ApiClient, PageResourceRewardSetResource, RewardSetResource) {
  'use strict';

  /**
   * CampaignsRewards service.
   * @module api/CampaignsRewardsApi
   * @version latest

   */

  /**
   * Constructs a new CampaignsRewardsApi. 
   * @alias module:api/CampaignsRewardsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createRewardSet operation.
     * @callback module:api/CampaignsRewardsApi~createRewardSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RewardSetResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a reward set
     * @param {Object} opts Optional parameters
     * @param {module:model/RewardSetResource} opts.rewardSetResource The reward set resource object
     * @param {module:api/CampaignsRewardsApi~createRewardSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RewardSetResource}
     */
    this.createRewardSet = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['rewardSetResource'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RewardSetResource;

      return this.apiClient.callApi(
        '/rewards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRewardSet operation.
     * @callback module:api/CampaignsRewardsApi~deleteRewardSetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a reward set
     * @param {Number} id The reward id
     * @param {module:api/CampaignsRewardsApi~deleteRewardSetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRewardSet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRewardSet");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/rewards/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRewardSet operation.
     * @callback module:api/CampaignsRewardsApi~getRewardSetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RewardSetResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single reward set
     * @param {Number} id The reward id
     * @param {module:api/CampaignsRewardsApi~getRewardSetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RewardSetResource}
     */
    this.getRewardSet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getRewardSet");
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
      var returnType = RewardSetResource;

      return this.apiClient.callApi(
        '/rewards/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRewardSets operation.
     * @callback module:api/CampaignsRewardsApi~getRewardSetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceRewardSetResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search reward sets
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/CampaignsRewardsApi~getRewardSetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceRewardSetResource}
     */
    this.getRewardSets = function(opts, callback) {
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
      var returnType = PageResourceRewardSetResource;

      return this.apiClient.callApi(
        '/rewards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRewardSet operation.
     * @callback module:api/CampaignsRewardsApi~updateRewardSetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a reward set
     * @param {Number} id The reward id
     * @param {Object} opts Optional parameters
     * @param {module:model/RewardSetResource} opts.rewardSetResource The reward set resource object
     * @param {module:api/CampaignsRewardsApi~updateRewardSetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateRewardSet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['rewardSetResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateRewardSet");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/rewards/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
