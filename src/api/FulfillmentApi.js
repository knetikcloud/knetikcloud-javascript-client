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
    define(['ApiClient', 'model/FulfillmentType', 'model/PageResourceFulfillmentType', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FulfillmentType'), require('../model/PageResourceFulfillmentType'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.FulfillmentApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FulfillmentType, root.KnetikCloud.PageResourceFulfillmentType, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, FulfillmentType, PageResourceFulfillmentType, Result) {
  'use strict';

  /**
   * Fulfillment service.
   * @module api/FulfillmentApi
   * @version 3.0.272
   */

  /**
   * Constructs a new FulfillmentApi. 
   * @alias module:api/FulfillmentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a fulfillment type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FULFILLMENT_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.type The fulfillment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FulfillmentType} and HTTP response
     */
    this.createFulfillmentTypeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['type'];


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
      var returnType = FulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a fulfillment type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FULFILLMENT_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.type The fulfillment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FulfillmentType}
     */
    this.createFulfillmentType = function(opts) {
      return this.createFulfillmentTypeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a fulfillment type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FULFILLMENT_ADMIN
     * @param {Number} id The id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteFulfillmentTypeWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFulfillmentType");
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
        '/store/fulfillment/types/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a fulfillment type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FULFILLMENT_ADMIN
     * @param {Number} id The id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteFulfillmentType = function(id) {
      return this.deleteFulfillmentTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single fulfillment type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FulfillmentType} and HTTP response
     */
    this.getFulfillmentTypeWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFulfillmentType");
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
      var returnType = FulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single fulfillment type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FulfillmentType}
     */
    this.getFulfillmentType = function(id) {
      return this.getFulfillmentTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search fulfillment types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceFulfillmentType} and HTTP response
     */
    this.getFulfillmentTypesWithHttpInfo = function(opts) {
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
      var returnType = PageResourceFulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search fulfillment types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceFulfillmentType}
     */
    this.getFulfillmentTypes = function(opts) {
      return this.getFulfillmentTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a fulfillment type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FULFILLMENT_ADMIN
     * @param {Number} id The fulfillment id
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.fulfillmentType The fulfillment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateFulfillmentTypeWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['fulfillmentType'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateFulfillmentType");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/store/fulfillment/types/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a fulfillment type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FULFILLMENT_ADMIN
     * @param {Number} id The fulfillment id
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.fulfillmentType The fulfillment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateFulfillmentType = function(id, opts) {
      return this.updateFulfillmentTypeWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
