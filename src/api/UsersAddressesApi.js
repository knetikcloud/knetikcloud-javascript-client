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
    define(['ApiClient', 'model/PageResourceSavedAddressResource', 'model/Result', 'model/SavedAddressResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSavedAddressResource'), require('../model/Result'), require('../model/SavedAddressResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UsersAddressesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceSavedAddressResource, root.KnetikCloud.Result, root.KnetikCloud.SavedAddressResource);
  }
}(this, function(ApiClient, PageResourceSavedAddressResource, Result, SavedAddressResource) {
  'use strict';

  /**
   * UsersAddresses service.
   * @module api/UsersAddressesApi
   * @version 3.0.7
   */

  /**
   * Constructs a new UsersAddressesApi. 
   * @alias module:api/UsersAddressesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new address
     * @param {String} userId The id of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/SavedAddressResource} opts.savedAddressResource The new address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SavedAddressResource} and HTTP response
     */
    this.createAddressWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = opts['savedAddressResource'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createAddress");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SavedAddressResource;

      return this.apiClient.callApi(
        '/users/{user_id}/addresses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new address
     * @param {String} userId The id of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/SavedAddressResource} opts.savedAddressResource The new address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SavedAddressResource}
     */
    this.createAddress = function(userId, opts) {
      return this.createAddressWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an address
     * @param {String} userId The id of the user
     * @param {Number} id The id of the address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteAddressWithHttpInfo = function(userId, id) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteAddress");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAddress");
      }


      var pathParams = {
        'user_id': userId,
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/addresses/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an address
     * @param {String} userId The id of the user
     * @param {Number} id The id of the address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAddress = function(userId, id) {
      return this.deleteAddressWithHttpInfo(userId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single address
     * @param {String} userId The id of the user
     * @param {Number} id The id of the address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SavedAddressResource} and HTTP response
     */
    this.getAddressWithHttpInfo = function(userId, id) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getAddress");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAddress");
      }


      var pathParams = {
        'user_id': userId,
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SavedAddressResource;

      return this.apiClient.callApi(
        '/users/{user_id}/addresses/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single address
     * @param {String} userId The id of the user
     * @param {Number} id The id of the address
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SavedAddressResource}
     */
    this.getAddress = function(userId, id) {
      return this.getAddressWithHttpInfo(userId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search addresses
     * @param {String} userId The id of the user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceSavedAddressResource} and HTTP response
     */
    this.getAddressesWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getAddresses");
      }


      var pathParams = {
        'user_id': userId
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceSavedAddressResource;

      return this.apiClient.callApi(
        '/users/{user_id}/addresses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search addresses
     * @param {String} userId The id of the user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceSavedAddressResource}
     */
    this.getAddresses = function(userId, opts) {
      return this.getAddressesWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an address
     * @param {String} userId The id of the user
     * @param {Number} id The id of the address
     * @param {Object} opts Optional parameters
     * @param {module:model/SavedAddressResource} opts.savedAddressResource The saved address resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SavedAddressResource} and HTTP response
     */
    this.updateAddressWithHttpInfo = function(userId, id, opts) {
      opts = opts || {};
      var postBody = opts['savedAddressResource'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateAddress");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateAddress");
      }


      var pathParams = {
        'user_id': userId,
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SavedAddressResource;

      return this.apiClient.callApi(
        '/users/{user_id}/addresses/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an address
     * @param {String} userId The id of the user
     * @param {Number} id The id of the address
     * @param {Object} opts Optional parameters
     * @param {module:model/SavedAddressResource} opts.savedAddressResource The saved address resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SavedAddressResource}
     */
    this.updateAddress = function(userId, id, opts) {
      return this.updateAddressWithHttpInfo(userId, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
