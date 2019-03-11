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
    define(['ApiClient', 'model/CountryTaxResource', 'model/PageResourceCountryTaxResource', 'model/PageResourceStateTaxResource', 'model/Result', 'model/StateTaxResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CountryTaxResource'), require('../model/PageResourceCountryTaxResource'), require('../model/PageResourceStateTaxResource'), require('../model/Result'), require('../model/StateTaxResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.TaxesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CountryTaxResource, root.KnetikCloud.PageResourceCountryTaxResource, root.KnetikCloud.PageResourceStateTaxResource, root.KnetikCloud.Result, root.KnetikCloud.StateTaxResource);
  }
}(this, function(ApiClient, CountryTaxResource, PageResourceCountryTaxResource, PageResourceStateTaxResource, Result, StateTaxResource) {
  'use strict';

  /**
   * Taxes service.
   * @module api/TaxesApi
   * @version 3.0.16
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
     * Create a country tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CountryTaxResource} and HTTP response
     */
    this.createCountryTaxWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['taxResource'];


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
      var returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a country tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CountryTaxResource}
     */
    this.createCountryTax = function(opts) {
      return this.createCountryTaxWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StateTaxResource} and HTTP response
     */
    this.createStateTaxWithHttpInfo = function(countryCodeIso3, opts) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StateTaxResource}
     */
    this.createStateTax = function(countryCodeIso3, opts) {
      return this.createStateTaxWithHttpInfo(countryCodeIso3, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCountryTaxWithHttpInfo = function(countryCodeIso3) {
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
        '/tax/countries/{country_code_iso3}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCountryTax = function(countryCodeIso3) {
      return this.deleteCountryTaxWithHttpInfo(countryCodeIso3)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteStateTaxWithHttpInfo = function(countryCodeIso3, stateCode) {
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
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteStateTax = function(countryCodeIso3, stateCode) {
      return this.deleteStateTaxWithHttpInfo(countryCodeIso3, stateCode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CountryTaxResource} and HTTP response
     */
    this.getCountryTaxWithHttpInfo = function(countryCodeIso3) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CountryTaxResource}
     */
    this.getCountryTax = function(countryCodeIso3) {
      return this.getCountryTaxWithHttpInfo(countryCodeIso3)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search taxes
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceCountryTaxResource} and HTTP response
     */
    this.getCountryTaxesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageResourceCountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search taxes
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceCountryTaxResource}
     */
    this.getCountryTaxes = function(opts) {
      return this.getCountryTaxesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StateTaxResource} and HTTP response
     */
    this.getStateTaxWithHttpInfo = function(countryCodeIso3, stateCode) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StateTaxResource}
     */
    this.getStateTax = function(countryCodeIso3, stateCode) {
      return this.getStateTaxWithHttpInfo(countryCodeIso3, stateCode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search taxes across all countries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceStateTaxResource} and HTTP response
     */
    this.getStateTaxesForCountriesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = PageResourceStateTaxResource;

      return this.apiClient.callApi(
        '/tax/states', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search taxes across all countries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceStateTaxResource}
     */
    this.getStateTaxesForCountries = function(opts) {
      return this.getStateTaxesForCountriesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search taxes within a country
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceStateTaxResource} and HTTP response
     */
    this.getStateTaxesForCountryWithHttpInfo = function(countryCodeIso3, opts) {
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
      var returnType = PageResourceStateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search taxes within a country
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceStateTaxResource}
     */
    this.getStateTaxesForCountry = function(countryCodeIso3, opts) {
      return this.getStateTaxesForCountryWithHttpInfo(countryCodeIso3, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update a tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CountryTaxResource} and HTTP response
     */
    this.updateCountryTaxWithHttpInfo = function(countryCodeIso3, opts) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update a tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CountryTaxResource}
     */
    this.updateCountryTax = function(countryCodeIso3, opts) {
      return this.updateCountryTaxWithHttpInfo(countryCodeIso3, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update a state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StateTaxResource} and HTTP response
     */
    this.updateStateTaxWithHttpInfo = function(countryCodeIso3, stateCode, opts) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update a state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StateTaxResource}
     */
    this.updateStateTax = function(countryCodeIso3, stateCode, opts) {
      return this.updateStateTaxWithHttpInfo(countryCodeIso3, stateCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
