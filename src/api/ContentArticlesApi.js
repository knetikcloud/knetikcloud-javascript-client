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
    define(['ApiClient', 'model/ArticleResource', 'model/PageResourceArticleResource', 'model/PageResourceTemplateResource', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ArticleResource'), require('../model/PageResourceArticleResource'), require('../model/PageResourceTemplateResource'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ContentArticlesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ArticleResource, root.KnetikPlatformApiDocumentationLatest.PageResourceArticleResource, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.TemplateResource);
  }
}(this, function(ApiClient, ArticleResource, PageResourceArticleResource, PageResourceTemplateResource, TemplateResource) {
  'use strict';

  /**
   * ContentArticles service.
   * @module api/ContentArticlesApi
   * @version Latest
   */

  /**
   * Constructs a new ContentArticlesApi. 
   * @alias module:api/ContentArticlesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createArticleTemplateUsingPOST operation.
     * @callback module:api/ContentArticlesApi~createArticleTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an article template
     * Article Templates define a type of article and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.articleTemplateResource The article template resource object
     * @param {module:api/ContentArticlesApi~createArticleTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createArticleTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['articleTemplateResource'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/content/articles/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createArticleUsingPOST operation.
     * @callback module:api/ContentArticlesApi~createArticleUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArticleResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new article
     * Articles are blobs of text with titles, a category and assets. Formatting and display of the text is in the hands of the front end.
     * @param {Object} opts Optional parameters
     * @param {module:model/ArticleResource} opts.articleResource The new article
     * @param {module:api/ContentArticlesApi~createArticleUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArticleResource}
     */
    this.createArticleUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['articleResource'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ArticleResource;

      return this.apiClient.callApi(
        '/content/articles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteArticleTemplateUsingDELETE operation.
     * @callback module:api/ContentArticlesApi~deleteArticleTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an article template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/ContentArticlesApi~deleteArticleTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteArticleTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteArticleTemplateUsingDELETE");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/content/articles/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteArticleUsingDELETE operation.
     * @callback module:api/ContentArticlesApi~deleteArticleUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing article
     * @param {String} id The article id
     * @param {module:api/ContentArticlesApi~deleteArticleUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteArticleUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteArticleUsingDELETE");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/content/articles/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getArticleTemplateUsingGET operation.
     * @callback module:api/ContentArticlesApi~getArticleTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single article template
     * @param {String} id The id of the template
     * @param {module:api/ContentArticlesApi~getArticleTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getArticleTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getArticleTemplateUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/content/articles/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getArticleTemplatesUsingGET operation.
     * @callback module:api/ContentArticlesApi~getArticleTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search article templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/ContentArticlesApi~getArticleTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getArticleTemplatesUsingGET = function(opts, callback) {
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/content/articles/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getArticleUsingGET operation.
     * @callback module:api/ContentArticlesApi~getArticleUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArticleResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single article
     * @param {String} id The article id
     * @param {module:api/ContentArticlesApi~getArticleUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArticleResource}
     */
    this.getArticleUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getArticleUsingGET");
      }


      var pathParams = {
        'id': id
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
      var returnType = ArticleResource;

      return this.apiClient.callApi(
        '/content/articles/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getArticlesUsingGET operation.
     * @callback module:api/ContentArticlesApi~getArticlesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceArticleResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search articles
     * Get a list of articles with optional filtering. Assets will not be filled in on the resources returned. Use &#39;Get a single article&#39; to retrieve the full resource with assets for a given item as needed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterCategory Filter for articles from a specific category by id
     * @param {String} opts.filterTagset Filter for articles with specified tags (separated by comma)
     * @param {String} opts.filterTitle Filter for articles whose title contains a string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/ContentArticlesApi~getArticlesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceArticleResource}
     */
    this.getArticlesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_category': opts['filterCategory'],
        'filter_tagset': opts['filterTagset'],
        'filter_title': opts['filterTitle'],
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
      var returnType = PageResourceArticleResource;

      return this.apiClient.callApi(
        '/content/articles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateArticleTemplateUsingPUT operation.
     * @callback module:api/ContentArticlesApi~updateArticleTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an article template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.articleTemplateResource The article template resource object
     * @param {module:api/ContentArticlesApi~updateArticleTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateArticleTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['articleTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateArticleTemplateUsingPUT");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/content/articles/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateArticleUsingPUT operation.
     * @callback module:api/ContentArticlesApi~updateArticleUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing article
     * @param {String} id The article id
     * @param {Object} opts Optional parameters
     * @param {module:model/ArticleResource} opts.articleResource The article object
     * @param {module:api/ContentArticlesApi~updateArticleUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateArticleUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['articleResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateArticleUsingPUT");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/content/articles/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
