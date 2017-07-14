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
    define(['ApiClient', 'model/CountryTaxResource', 'model/PageResourceCountryTaxResource', 'model/PageResourceStateTaxResource', 'model/Result', 'model/StateTaxResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountryTaxResource'), require('../model/PageResourceCountryTaxResource'), require('../model/PageResourceStateTaxResource'), require('../model/Result'), require('../model/StateTaxResource'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.TaxesApi = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.CountryTaxResource, root.knetikcloud-sdk.PageResourceCountryTaxResource, root.knetikcloud-sdk.PageResourceStateTaxResource, root.knetikcloud-sdk.Result, root.knetikcloud-sdk.StateTaxResource);
  }
}(this, function(ApiClient, CountryTaxResource, PageResourceCountryTaxResource, PageResourceStateTaxResource, Result, StateTaxResource) {
  'use strict';

  /**
   * Taxes service.
   * @module api/TaxesApi
   * @version latest

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
     * Callback function to receive the result of the createCountryTax operation.
     * @callback module:api/TaxesApi~createCountryTaxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountryTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a country tax
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @param {module:api/TaxesApi~createCountryTaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountryTaxResource}
     */
    this.createCountryTax = function(opts, callback) {
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
      var accepts = ['application/json'];
      var returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createStateTax operation.
     * @callback module:api/TaxesApi~createStateTaxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StateTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @param {module:api/TaxesApi~createStateTaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StateTaxResource}
     */
    this.createStateTax = function(countryCodeIso3, opts, callback) {
      opts = opts || {};
      var postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling createStateTax");
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
      var accepts = ['application/json'];
      var returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCountryTax operation.
     * @callback module:api/TaxesApi~deleteCountryTaxCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {module:api/TaxesApi~deleteCountryTaxCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCountryTax = function(countryCodeIso3, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling deleteCountryTax");
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
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStateTax operation.
     * @callback module:api/TaxesApi~deleteStateTaxCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {module:api/TaxesApi~deleteStateTaxCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteStateTax = function(countryCodeIso3, stateCode, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling deleteStateTax");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode === undefined || stateCode === null) {
        throw new Error("Missing the required parameter 'stateCode' when calling deleteStateTax");
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
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCountryTax operation.
     * @callback module:api/TaxesApi~getCountryTaxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountryTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {module:api/TaxesApi~getCountryTaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountryTaxResource}
     */
    this.getCountryTax = function(countryCodeIso3, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getCountryTax");
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
      var accepts = ['application/json'];
      var returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCountryTaxes operation.
     * @callback module:api/TaxesApi~getCountryTaxesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceCountryTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search taxes
     * Get a list of taxes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/TaxesApi~getCountryTaxesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceCountryTaxResource}
     */
    this.getCountryTaxes = function(opts, callback) {
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
      var returnType = PageResourceCountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStateTax operation.
     * @callback module:api/TaxesApi~getStateTaxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StateTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {module:api/TaxesApi~getStateTaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StateTaxResource}
     */
    this.getStateTax = function(countryCodeIso3, stateCode, callback) {
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getStateTax");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode === undefined || stateCode === null) {
        throw new Error("Missing the required parameter 'stateCode' when calling getStateTax");
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
      var accepts = ['application/json'];
      var returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStateTaxesForCountries operation.
     * @callback module:api/TaxesApi~getStateTaxesForCountriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceStateTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search taxes across all countries
     * Get a list of taxes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param {module:api/TaxesApi~getStateTaxesForCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceStateTaxResource}
     */
    this.getStateTaxesForCountries = function(opts, callback) {
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
      var returnType = PageResourceStateTaxResource;

      return this.apiClient.callApi(
        '/tax/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStateTaxesForCountry operation.
     * @callback module:api/TaxesApi~getStateTaxesForCountryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceStateTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search taxes within a country
     * Get a list of taxes
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param {module:api/TaxesApi~getStateTaxesForCountryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceStateTaxResource}
     */
    this.getStateTaxesForCountry = function(countryCodeIso3, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getStateTaxesForCountry");
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
      var accepts = ['application/json'];
      var returnType = PageResourceStateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCountryTax operation.
     * @callback module:api/TaxesApi~updateCountryTaxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountryTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @param {module:api/TaxesApi~updateCountryTaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountryTaxResource}
     */
    this.updateCountryTax = function(countryCodeIso3, opts, callback) {
      opts = opts || {};
      var postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling updateCountryTax");
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
      var accepts = ['application/json'];
      var returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStateTax operation.
     * @callback module:api/TaxesApi~updateStateTaxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StateTaxResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update a state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @param {module:api/TaxesApi~updateStateTaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StateTaxResource}
     */
    this.updateStateTax = function(countryCodeIso3, stateCode, opts, callback) {
      opts = opts || {};
      var postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling updateStateTax");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode === undefined || stateCode === null) {
        throw new Error("Missing the required parameter 'stateCode' when calling updateStateTax");
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
      var accepts = ['application/json'];
      var returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
