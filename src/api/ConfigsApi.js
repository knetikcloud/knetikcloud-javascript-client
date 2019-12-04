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
    define(['ApiClient', 'model/Config', 'model/PageResourceConfig', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Config'), require('../model/PageResourceConfig'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ConfigsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Config, root.KnetikCloud.PageResourceConfig, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, Config, PageResourceConfig, Result) {
  'use strict';

  /**
   * Configs service.
   * @module api/ConfigsApi
   * @version 3.0.274
   */

  /**
   * Constructs a new ConfigsApi. 
   * @alias module:api/ConfigsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new config
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CONFIGS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/Config} opts.config The config object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Config} and HTTP response
     */
    this.createConfigWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['config'];


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
      var returnType = Config;

      return this.apiClient.callApi(
        '/configs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new config
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CONFIGS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/Config} opts.config The config object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Config}
     */
    this.createConfig = function(opts) {
      return this.createConfigWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing config
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CONFIGS_ADMIN
     * @param {String} name The config name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteConfigWithHttpInfo = function(name) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteConfig");
      }


      var pathParams = {
        'name': name
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
        '/configs/{name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing config
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CONFIGS_ADMIN
     * @param {String} name The config name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteConfig = function(name) {
      return this.deleteConfigWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single config
     * Only configs that are public readable will be shown without admin access. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} name The config name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Config} and HTTP response
     */
    this.getConfigWithHttpInfo = function(name) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getConfig");
      }


      var pathParams = {
        'name': name
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
      var returnType = Config;

      return this.apiClient.callApi(
        '/configs/{name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single config
     * Only configs that are public readable will be shown without admin access. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} name The config name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Config}
     */
    this.getConfig = function(name) {
      return this.getConfigWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search configs
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterSearch Filter for configs whose name contains the given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceConfig} and HTTP response
     */
    this.getConfigsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_search': opts['filterSearch'],
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
      var returnType = PageResourceConfig;

      return this.apiClient.callApi(
        '/configs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search configs
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterSearch Filter for configs whose name contains the given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceConfig}
     */
    this.getConfigs = function(opts) {
      return this.getConfigsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing config
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CONFIGS_ADMIN
     * @param {String} name The config name
     * @param {Object} opts Optional parameters
     * @param {module:model/Config} opts.config The config object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateConfigWithHttpInfo = function(name, opts) {
      opts = opts || {};
      var postBody = opts['config'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateConfig");
      }


      var pathParams = {
        'name': name
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
      var returnType = null;

      return this.apiClient.callApi(
        '/configs/{name}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing config
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CONFIGS_ADMIN
     * @param {String} name The config name
     * @param {Object} opts Optional parameters
     * @param {module:model/Config} opts.config The config object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateConfig = function(name, opts) {
      return this.updateConfigWithHttpInfo(name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
