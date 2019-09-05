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
    define(['ApiClient', 'model/CurrencyResource', 'model/PageResourceCurrencyResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CurrencyResource'), require('../model/PageResourceCurrencyResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.CurrenciesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CurrencyResource, root.KnetikCloud.PageResourceCurrencyResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, CurrencyResource, PageResourceCurrencyResource, Result) {
  'use strict';

  /**
   * Currencies service.
   * @module api/CurrenciesApi
   * @version 3.0.268
   */

  /**
   * Constructs a new CurrenciesApi. 
   * @alias module:api/CurrenciesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a currency
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CURRENCIES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/CurrencyResource} opts.currency The currency object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrencyResource} and HTTP response
     */
    this.createCurrencyWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['currency'];


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
      var returnType = CurrencyResource;

      return this.apiClient.callApi(
        '/currencies', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a currency
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CURRENCIES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/CurrencyResource} opts.currency The currency object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrencyResource}
     */
    this.createCurrency = function(opts) {
      return this.createCurrencyWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a currency
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CURRENCIES_ADMIN
     * @param {String} code The currency code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCurrencyWithHttpInfo = function(code) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling deleteCurrency");
      }


      var pathParams = {
        'code': code
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
        '/currencies/{code}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a currency
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CURRENCIES_ADMIN
     * @param {String} code The currency code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCurrency = function(code) {
      return this.deleteCurrencyWithHttpInfo(code)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search currencies
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterDefault Filter for the one currency that is set as default (true), or all that are not (false)
     * @param {Boolean} opts.filterEnabledCurrencies Filter for alternate currencies setup explicitely in system config
     * @param {String} opts.filterType Filter currencies by type.  Allowable values: (&#39;virtual&#39;, &#39;real&#39;)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceCurrencyResource} and HTTP response
     */
    this.getCurrenciesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_default': opts['filterDefault'],
        'filter_enabled_currencies': opts['filterEnabledCurrencies'],
        'filter_type': opts['filterType'],
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
      var returnType = PageResourceCurrencyResource;

      return this.apiClient.callApi(
        '/currencies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search currencies
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterDefault Filter for the one currency that is set as default (true), or all that are not (false)
     * @param {Boolean} opts.filterEnabledCurrencies Filter for alternate currencies setup explicitely in system config
     * @param {String} opts.filterType Filter currencies by type.  Allowable values: (&#39;virtual&#39;, &#39;real&#39;)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceCurrencyResource}
     */
    this.getCurrencies = function(opts) {
      return this.getCurrenciesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single currency
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} code The currency code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrencyResource} and HTTP response
     */
    this.getCurrencyWithHttpInfo = function(code) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getCurrency");
      }


      var pathParams = {
        'code': code
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
      var returnType = CurrencyResource;

      return this.apiClient.callApi(
        '/currencies/{code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single currency
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} code The currency code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrencyResource}
     */
    this.getCurrency = function(code) {
      return this.getCurrencyWithHttpInfo(code)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a currency
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CURRENCIES_ADMIN
     * @param {String} code The currency code
     * @param {Object} opts Optional parameters
     * @param {module:model/CurrencyResource} opts.currency The currency object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateCurrencyWithHttpInfo = function(code, opts) {
      opts = opts || {};
      var postBody = opts['currency'];

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling updateCurrency");
      }


      var pathParams = {
        'code': code
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
        '/currencies/{code}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a currency
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CURRENCIES_ADMIN
     * @param {String} code The currency code
     * @param {Object} opts Optional parameters
     * @param {module:model/CurrencyResource} opts.currency The currency object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateCurrency = function(code, opts) {
      return this.updateCurrencyWithHttpInfo(code, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
