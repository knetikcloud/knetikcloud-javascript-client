/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    define(['ApiClient', 'model/PageResourceMapstringobject', 'model/Result', 'model/SearchReferenceMapping'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceMapstringobject'), require('../model/Result'), require('../model/SearchReferenceMapping'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.SearchApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceMapstringobject, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.SearchReferenceMapping);
  }
}(this, function(ApiClient, PageResourceMapstringobject, Result, SearchReferenceMapping) {
  'use strict';

  /**
   * Search service.
   * @module api/SearchApi
   * @version latest

   */

  /**
   * Constructs a new SearchApi. 
   * @alias module:api/SearchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addSearchIndex operation.
     * @callback module:api/SearchApi~addSearchIndexCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new object to an index
     * Mainly intended for internal use.
     * @param {String} type The index type
     * @param {String} id The ID of the object
     * @param {Object} opts Optional parameters
     * @param {Object} opts._object The object to add
     * @param {module:api/SearchApi~addSearchIndexCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addSearchIndex = function(type, id, opts, callback) {
      opts = opts || {};
      var postBody = opts['_object'];

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling addSearchIndex");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addSearchIndex");
      }


      var pathParams = {
        'type': type,
        'id': id
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
        '/search/index/{type}/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSearchMappings operation.
     * @callback module:api/SearchApi~addSearchMappingsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register reference mappings
     * Add a new type mapping to connect data from one index to another, or discover an exsting one. Mainly intended for internal use.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/SearchReferenceMapping>} opts.mappings The mappings to add
     * @param {module:api/SearchApi~addSearchMappingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addSearchMappings = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['mappings'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/search/mappings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSearchIndex operation.
     * @callback module:api/SearchApi~deleteSearchIndexCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an object
     * Mainly intended for internal use. Requires SEARCH_ADMIN.
     * @param {String} type The index type
     * @param {String} id The ID of the object to delete
     * @param {module:api/SearchApi~deleteSearchIndexCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSearchIndex = function(type, id, callback) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling deleteSearchIndex");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSearchIndex");
      }


      var pathParams = {
        'type': type,
        'id': id
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
        '/search/index/{type}/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSearchIndexes operation.
     * @callback module:api/SearchApi~deleteSearchIndexesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete all objects in an index
     * Mainly intended for internal use
     * @param {String} type The index type
     * @param {module:api/SearchApi~deleteSearchIndexesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSearchIndexes = function(type, callback) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling deleteSearchIndexes");
      }


      var pathParams = {
        'type': type
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
        '/search/index/{type}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchIndex operation.
     * @callback module:api/SearchApi~searchIndexCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceMapstringobject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search an index
     * The body is an ElasticSearch query in JSON format. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options. The searchable object&#39;s format depends on on the type. See individual search endpoints on other resources for details on their format.
     * @param {String} type The index type
     * @param {Object} opts Optional parameters
     * @param {Object} opts.query The query to be used for the search
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/SearchApi~searchIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceMapstringobject}
     */
    this.searchIndex = function(type, opts, callback) {
      opts = opts || {};
      var postBody = opts['query'];

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling searchIndex");
      }


      var pathParams = {
        'type': type
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceMapstringobject;

      return this.apiClient.callApi(
        '/search/index/{type}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
