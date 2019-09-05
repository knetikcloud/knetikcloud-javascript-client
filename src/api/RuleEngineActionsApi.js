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
    define(['ApiClient', 'model/PageResourceActionResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceActionResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.RuleEngineActionsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceActionResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, PageResourceActionResource, Result) {
  'use strict';

  /**
   * RuleEngineActions service.
   * @module api/RuleEngineActionsApi
   * @version 3.0.268
   */

  /**
   * Constructs a new RuleEngineActionsApi. 
   * @alias module:api/RuleEngineActionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a list of available actions
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_ACTIONS_USER
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterCategory Filter for actions that are within a specific category
     * @param {String} opts.filterName Filter for actions that have names containing the given string
     * @param {String} opts.filterTags Filter for actions that have all of the given tags (comma separated list)
     * @param {String} opts.filterSearch Filter for actions containing the given words somewhere within name, description and tags
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceActionResource} and HTTP response
     */
    this.getBREActionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_category': opts['filterCategory'],
        'filter_name': opts['filterName'],
        'filter_tags': opts['filterTags'],
        'filter_search': opts['filterSearch'],
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
      var returnType = PageResourceActionResource;

      return this.apiClient.callApi(
        '/bre/actions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of available actions
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_ACTIONS_USER
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterCategory Filter for actions that are within a specific category
     * @param {String} opts.filterName Filter for actions that have names containing the given string
     * @param {String} opts.filterTags Filter for actions that have all of the given tags (comma separated list)
     * @param {String} opts.filterSearch Filter for actions containing the given words somewhere within name, description and tags
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceActionResource}
     */
    this.getBREActions = function(opts) {
      return this.getBREActionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
