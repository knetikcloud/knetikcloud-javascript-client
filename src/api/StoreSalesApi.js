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
    define(['ApiClient', 'model/CatalogSale', 'model/PageResourceCatalogSale', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CatalogSale'), require('../model/PageResourceCatalogSale'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.StoreSalesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CatalogSale, root.KnetikCloud.PageResourceCatalogSale, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, CatalogSale, PageResourceCatalogSale, Result) {
  'use strict';

  /**
   * StoreSales service.
   * @module api/StoreSalesApi
   * @version 3.0.18
   */

  /**
   * Constructs a new StoreSalesApi. 
   * @alias module:api/StoreSalesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a sale
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogSale} opts.catalogSale The catalog sale object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogSale} and HTTP response
     */
    this.createCatalogSaleWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['catalogSale'];


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
      var returnType = CatalogSale;

      return this.apiClient.callApi(
        '/store/sales', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a sale
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogSale} opts.catalogSale The catalog sale object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogSale}
     */
    this.createCatalogSale = function(opts) {
      return this.createCatalogSaleWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a sale
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_ADMIN
     * @param {Number} id The id of the sale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCatalogSaleWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCatalogSale");
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
        '/store/sales/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a sale
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_ADMIN
     * @param {Number} id The id of the sale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCatalogSale = function(id) {
      return this.deleteCatalogSaleWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single sale
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_USER or SALES_ADMIN
     * @param {Number} id The id of the sale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogSale} and HTTP response
     */
    this.getCatalogSaleWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCatalogSale");
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
      var returnType = CatalogSale;

      return this.apiClient.callApi(
        '/store/sales/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single sale
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_USER or SALES_ADMIN
     * @param {Number} id The id of the sale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogSale}
     */
    this.getCatalogSale = function(id) {
      return this.getCatalogSaleWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search sales
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_USER or SALES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceCatalogSale} and HTTP response
     */
    this.getCatalogSalesWithHttpInfo = function(opts) {
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
      var returnType = PageResourceCatalogSale;

      return this.apiClient.callApi(
        '/store/sales', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search sales
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_USER or SALES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceCatalogSale}
     */
    this.getCatalogSales = function(opts) {
      return this.getCatalogSalesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a sale
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_ADMIN
     * @param {Number} id The id of the sale
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogSale} opts.catalogSale The catalog sale object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogSale} and HTTP response
     */
    this.updateCatalogSaleWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['catalogSale'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateCatalogSale");
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
      var returnType = CatalogSale;

      return this.apiClient.callApi(
        '/store/sales/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a sale
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SALES_ADMIN
     * @param {Number} id The id of the sale
     * @param {Object} opts Optional parameters
     * @param {module:model/CatalogSale} opts.catalogSale The catalog sale object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogSale}
     */
    this.updateCatalogSale = function(id, opts) {
      return this.updateCatalogSaleWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
