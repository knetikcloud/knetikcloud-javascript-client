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
    define(['ApiClient', 'model/PageResourceSimpleReferenceResourceobject', 'model/PageResourceVariableTypeResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSimpleReferenceResourceobject'), require('../model/PageResourceVariableTypeResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.RuleEngineVariablesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceSimpleReferenceResourceobject, root.KnetikCloud.PageResourceVariableTypeResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, PageResourceSimpleReferenceResourceobject, PageResourceVariableTypeResource, Result) {
  'use strict';

  /**
   * RuleEngineVariables service.
   * @module api/RuleEngineVariablesApi
   * @version 3.0.18
   */

  /**
   * Constructs a new RuleEngineVariablesApi. 
   * @alias module:api/RuleEngineVariablesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a list of variable types available
     * Types include integer, string, user and invoice. These are used to qualify trigger parameters and action variables with strong typing. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_VARIABLES_USER
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceVariableTypeResource} and HTTP response
     */
    this.getBREVariableTypesWithHttpInfo = function(opts) {
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
      var returnType = PageResourceVariableTypeResource;

      return this.apiClient.callApi(
        '/bre/variable-types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of variable types available
     * Types include integer, string, user and invoice. These are used to qualify trigger parameters and action variables with strong typing. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_VARIABLES_USER
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceVariableTypeResource}
     */
    this.getBREVariableTypes = function(opts) {
      return this.getBREVariableTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List valid values for a type
     * Used to lookup users to fill in a user constant for example. Only types marked as enumerable are suppoorted here. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_VARIABLES_USER
     * @param {String} name The name of the type
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter results by those with names starting with this string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceSimpleReferenceResourceobject} and HTTP response
     */
    this.getBREVariableValuesWithHttpInfo = function(name, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getBREVariableValues");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'filter_name': opts['filterName'],
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
      var returnType = PageResourceSimpleReferenceResourceobject;

      return this.apiClient.callApi(
        '/bre/variable-types/{name}/values', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List valid values for a type
     * Used to lookup users to fill in a user constant for example. Only types marked as enumerable are suppoorted here. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_VARIABLES_USER
     * @param {String} name The name of the type
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter results by those with names starting with this string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceSimpleReferenceResourceobject}
     */
    this.getBREVariableValues = function(name, opts) {
      return this.getBREVariableValuesWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
