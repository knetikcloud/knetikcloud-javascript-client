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


import ApiClient from "../ApiClient";
import CountryTaxResource from '../model/CountryTaxResource';
import PageResourceCountryTaxResource from '../model/PageResourceCountryTaxResource';
import PageResourceStateTaxResource from '../model/PageResourceStateTaxResource';
import Result from '../model/Result';
import StateTaxResource from '../model/StateTaxResource';

/**
* Taxes service.
* @module api/TaxesApi
* @version 3.0.7
*/
export default class TaxesApi {

    /**
    * Constructs a new TaxesApi. 
    * @alias module:api/TaxesApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a country tax
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CountryTaxResource} and HTTP response
     */
    createCountryTaxWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['taxResource'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a country tax
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CountryTaxResource}
     */
    createCountryTax(opts) {
      return this.createCountryTaxWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StateTaxResource} and HTTP response
     */
    createStateTaxWithHttpInfo(countryCodeIso3, opts) {
      opts = opts || {};
      let postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling createStateTax");
      }


      let pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StateTaxResource}
     */
    createStateTax(countryCodeIso3, opts) {
      return this.createStateTaxWithHttpInfo(countryCodeIso3, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCountryTaxWithHttpInfo(countryCodeIso3) {
      let postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling deleteCountryTax");
      }


      let pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCountryTax(countryCodeIso3) {
      return this.deleteCountryTaxWithHttpInfo(countryCodeIso3)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteStateTaxWithHttpInfo(countryCodeIso3, stateCode) {
      let postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling deleteStateTax");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode === undefined || stateCode === null) {
        throw new Error("Missing the required parameter 'stateCode' when calling deleteStateTax");
      }


      let pathParams = {
        'country_code_iso3': countryCodeIso3,
        'state_code': stateCode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteStateTax(countryCodeIso3, stateCode) {
      return this.deleteStateTaxWithHttpInfo(countryCodeIso3, stateCode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CountryTaxResource} and HTTP response
     */
    getCountryTaxWithHttpInfo(countryCodeIso3) {
      let postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getCountryTax");
      }


      let pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CountryTaxResource}
     */
    getCountryTax(countryCodeIso3) {
      return this.getCountryTaxWithHttpInfo(countryCodeIso3)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search taxes
     * Get a list of taxes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceCountryTaxResource} and HTTP response
     */
    getCountryTaxesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceCountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search taxes
     * Get a list of taxes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceCountryTaxResource}
     */
    getCountryTaxes(opts) {
      return this.getCountryTaxesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StateTaxResource} and HTTP response
     */
    getStateTaxWithHttpInfo(countryCodeIso3, stateCode) {
      let postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getStateTax");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode === undefined || stateCode === null) {
        throw new Error("Missing the required parameter 'stateCode' when calling getStateTax");
      }


      let pathParams = {
        'country_code_iso3': countryCodeIso3,
        'state_code': stateCode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StateTaxResource}
     */
    getStateTax(countryCodeIso3, stateCode) {
      return this.getStateTaxWithHttpInfo(countryCodeIso3, stateCode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search taxes across all countries
     * Get a list of taxes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceStateTaxResource} and HTTP response
     */
    getStateTaxesForCountriesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceStateTaxResource;

      return this.apiClient.callApi(
        '/tax/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search taxes across all countries
     * Get a list of taxes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceStateTaxResource}
     */
    getStateTaxesForCountries(opts) {
      return this.getStateTaxesForCountriesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search taxes within a country
     * Get a list of taxes
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceStateTaxResource} and HTTP response
     */
    getStateTaxesForCountryWithHttpInfo(countryCodeIso3, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling getStateTaxesForCountry");
      }


      let pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      let queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceStateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search taxes within a country
     * Get a list of taxes
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceStateTaxResource}
     */
    getStateTaxesForCountry(countryCodeIso3, opts) {
      return this.getStateTaxesForCountryWithHttpInfo(countryCodeIso3, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update a tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CountryTaxResource} and HTTP response
     */
    updateCountryTaxWithHttpInfo(countryCodeIso3, opts) {
      opts = opts || {};
      let postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling updateCountryTax");
      }


      let pathParams = {
        'country_code_iso3': countryCodeIso3
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CountryTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update a tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {Object} opts Optional parameters
     * @param {module:model/CountryTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CountryTaxResource}
     */
    updateCountryTax(countryCodeIso3, opts) {
      return this.updateCountryTaxWithHttpInfo(countryCodeIso3, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update a state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StateTaxResource} and HTTP response
     */
    updateStateTaxWithHttpInfo(countryCodeIso3, stateCode, opts) {
      opts = opts || {};
      let postBody = opts['taxResource'];

      // verify the required parameter 'countryCodeIso3' is set
      if (countryCodeIso3 === undefined || countryCodeIso3 === null) {
        throw new Error("Missing the required parameter 'countryCodeIso3' when calling updateStateTax");
      }

      // verify the required parameter 'stateCode' is set
      if (stateCode === undefined || stateCode === null) {
        throw new Error("Missing the required parameter 'stateCode' when calling updateStateTax");
      }


      let pathParams = {
        'country_code_iso3': countryCodeIso3,
        'state_code': stateCode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StateTaxResource;

      return this.apiClient.callApi(
        '/tax/countries/{country_code_iso3}/states/{state_code}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update a state tax
     * @param {String} countryCodeIso3 The iso3 code of the country
     * @param {String} stateCode The code of the state
     * @param {Object} opts Optional parameters
     * @param {module:model/StateTaxResource} opts.taxResource The tax object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StateTaxResource}
     */
    updateStateTax(countryCodeIso3, stateCode, opts) {
      return this.updateStateTaxWithHttpInfo(countryCodeIso3, stateCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
