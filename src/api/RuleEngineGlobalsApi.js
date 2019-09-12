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
    define(['ApiClient', 'model/BreGlobalResource', 'model/PageResourceBreGlobalResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreGlobalResource'), require('../model/PageResourceBreGlobalResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.RuleEngineGlobalsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BreGlobalResource, root.KnetikCloud.PageResourceBreGlobalResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, BreGlobalResource, PageResourceBreGlobalResource, Result) {
  'use strict';

  /**
   * RuleEngineGlobals service.
   * @module api/RuleEngineGlobalsApi
   * @version 3.0.270
   */

  /**
   * Constructs a new RuleEngineGlobalsApi. 
   * @alias module:api/RuleEngineGlobalsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a global definition
     * Once created you can then use in a custom rule. Note that global definitions cannot be modified or deleted if in use. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/BreGlobalResource} opts.breGlobalResource The BRE global resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreGlobalResource} and HTTP response
     */
    this.createBREGlobalWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['breGlobalResource'];


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BreGlobalResource;

      return this.apiClient.callApi(
        '/bre/globals/definitions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a global definition
     * Once created you can then use in a custom rule. Note that global definitions cannot be modified or deleted if in use. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/BreGlobalResource} opts.breGlobalResource The BRE global resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreGlobalResource}
     */
    this.createBREGlobal = function(opts) {
      return this.createBREGlobalWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a global
     * May fail if there are existing rules against it. Cannot delete core globals. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_ADMIN
     * @param {String} id The id of the global definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteBREGlobalWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBREGlobal");
      }


      var pathParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/bre/globals/definitions/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a global
     * May fail if there are existing rules against it. Cannot delete core globals. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_ADMIN
     * @param {String} id The id of the global definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteBREGlobal = function(id) {
      return this.deleteBREGlobalWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single global definition
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_USER
     * @param {String} id The id of the global definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreGlobalResource} and HTTP response
     */
    this.getBREGlobalWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBREGlobal");
      }


      var pathParams = {
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
      var returnType = BreGlobalResource;

      return this.apiClient.callApi(
        '/bre/globals/definitions/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single global definition
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_USER
     * @param {String} id The id of the global definition
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreGlobalResource}
     */
    this.getBREGlobal = function(id) {
      return this.getBREGlobalWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List global definitions
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_USER
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterSystem Filter for globals that are system globals when true, or not when false. Leave off for both mixed
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceBreGlobalResource} and HTTP response
     */
    this.getBREGlobalsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_system': opts['filterSystem'],
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
      var returnType = PageResourceBreGlobalResource;

      return this.apiClient.callApi(
        '/bre/globals/definitions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List global definitions
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_USER
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterSystem Filter for globals that are system globals when true, or not when false. Leave off for both mixed
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceBreGlobalResource}
     */
    this.getBREGlobals = function(opts) {
      return this.getBREGlobalsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a global definition
     * May fail if new parameters mismatch requirements of existing rules. Cannot update core globals. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_ADMIN
     * @param {String} id The id of the global definition
     * @param {Object} opts Optional parameters
     * @param {module:model/BreGlobalResource} opts.breGlobalResource The BRE global resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreGlobalResource} and HTTP response
     */
    this.updateBREGlobalWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['breGlobalResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBREGlobal");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BreGlobalResource;

      return this.apiClient.callApi(
        '/bre/globals/definitions/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a global definition
     * May fail if new parameters mismatch requirements of existing rules. Cannot update core globals. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_GLOBALS_ADMIN
     * @param {String} id The id of the global definition
     * @param {Object} opts Optional parameters
     * @param {module:model/BreGlobalResource} opts.breGlobalResource The BRE global resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreGlobalResource}
     */
    this.updateBREGlobal = function(id, opts) {
      return this.updateBREGlobalWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
