/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
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
    define(['ApiClient', 'model/CountryTaxResource', 'model/PageCountryTaxResource', 'model/PageStateTaxResource', 'model/StateTaxResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountryTaxResource'), require('../model/PageCountryTaxResource'), require('../model/PageStateTaxResource'), require('../model/StateTaxResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.TaxesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.CountryTaxResource, root.KnetikPlatformApiDocumentationLatest.PageCountryTaxResource, root.KnetikPlatformApiDocumentationLatest.PageStateTaxResource, root.KnetikPlatformApiDocumentationLatest.StateTaxResource);
  }
}(this, function(ApiClient, CountryTaxResource, PageCountryTaxResource, PageStateTaxResource, StateTaxResource) {
  'use strict';

  /**
   * Taxes service.
   * @module api/TaxesApi
   * @version Latest
   */

  /**
   * Constructs a new TaxesApi. 
   * @alias module:api/TaxesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTaxUsingPOST operation.
     * @callback module:api/TaxesApi~createTaxUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @param {module:api/TaxesApi~createTaxUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createTaxUsingPOST = function(countryCodeIso3, opts, callback) {
      opts = opts || {};
      var postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling createTaxUsingPOST");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTaxUsingDELETE operation.
     * @callback module:api/TaxesApi~deleteTaxUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {module:api/TaxesApi~deleteTaxUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTaxUsingDELETE = function(countryCodeIso3, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling deleteTaxUsingDELETE");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTaxUsingDELETE1 operation.
     * @callback module:api/TaxesApi~deleteTaxUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {module:api/TaxesApi~deleteTaxUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTaxUsingDELETE1 = function(countryCodeIso3, stateCode, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling deleteTaxUsingDELETE1");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode == undefined || stateCode == null) {
        throw new Error("Missing the required parameter 'stateCode' when calling deleteTaxUsingDELETE1");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3,
        'state_code': stateCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllTaxesUsingGET operation.
     * @callback module:api/TaxesApi~getAllTaxesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStateTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search taxes across all countries
     * Get a list of taxes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/TaxesApi~getAllTaxesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageStateTaxResource}
     */
    this.getAllTaxesUsingGET = function(opts, callback) {
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
      var accepts = ['*/*'];
      var returnType = PageStateTaxResource;

      return this.apiClient.callApi(
        '/tax/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaxUsingGET operation.
     * @callback module:api/TaxesApi~getTaxUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountryTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {module:api/TaxesApi~getTaxUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountryTaxResource}
     */
    this.getTaxUsingGET = function(countryCodeIso3, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getTaxUsingGET");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaxUsingGET1 operation.
     * @callback module:api/TaxesApi~getTaxUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/StateTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {module:api/TaxesApi~getTaxUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StateTaxResource}
     */
    this.getTaxUsingGET1 = function(countryCodeIso3, stateCode, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getTaxUsingGET1");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode == undefined || stateCode == null) {
        throw new Error("Missing the required parameter 'stateCode' when calling getTaxUsingGET1");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3,
        'state_code': stateCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaxesUsingGET operation.
     * @callback module:api/TaxesApi~getTaxesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCountryTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search taxes
     * Get a list of taxes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/TaxesApi~getTaxesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageCountryTaxResource}
     */
    this.getTaxesUsingGET = function(opts, callback) {
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
      var accepts = ['*/*'];
      var returnType = PageCountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaxesUsingGET1 operation.
     * @callback module:api/TaxesApi~getTaxesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStateTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search taxes within a country
     * Get a list of taxes
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/TaxesApi~getTaxesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageStateTaxResource}
     */
    this.getTaxesUsingGET1 = function(countryCodeIso3, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getTaxesUsingGET1");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3
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
      var accepts = ['*/*'];
      var returnType = PageStateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaxUsingPOST operation.
     * @callback module:api/TaxesApi~updateTaxUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a tax
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @param {module:api/TaxesApi~updateTaxUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateTaxUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['taxResource'];


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
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tax/countries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaxUsingPUT operation.
     * @callback module:api/TaxesApi~updateTaxUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @param {module:api/TaxesApi~updateTaxUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateTaxUsingPUT = function(countryCodeIso3, opts, callback) {
      opts = opts || {};
      var postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling updateTaxUsingPUT");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaxUsingPUT1 operation.
     * @callback module:api/TaxesApi~updateTaxUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @param {module:api/TaxesApi~updateTaxUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateTaxUsingPUT1 = function(countryCodeIso3, stateCode, opts, callback) {
      opts = opts || {};
      var postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 == undefined || countryCodeIso3 == null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling updateTaxUsingPUT1");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode == undefined || stateCode == null) {
        throw new Error("Missing the required parameter 'stateCode' when calling updateTaxUsingPUT1");
      }


      var pathParams = {
        'country_code_iso3': countryCodeIso3,
        'state_code': stateCode
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
