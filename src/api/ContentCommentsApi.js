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
    define(['ApiClient', 'model/CommentResource', 'model/PageResourceCommentResource', 'model/Result', 'model/StringWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CommentResource'), require('../model/PageResourceCommentResource'), require('../model/Result'), require('../model/StringWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ContentCommentsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CommentResource, root.KnetikCloud.PageResourceCommentResource, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper);
  }
}(this, function(ApiClient, CommentResource, PageResourceCommentResource, Result, StringWrapper) {
  'use strict';

  /**
   * ContentComments service.
   * @module api/ContentCommentsApi
   * @version 3.2.1
   */

  /**
   * Constructs a new ContentCommentsApi. 
   * @alias module:api/ContentCommentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a new comment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COMMENTS_USER or COMMENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/CommentResource} opts.commentResource The comment to be added
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommentResource} and HTTP response
     */
    this.addCommentWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['commentResource'];


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
      var returnType = CommentResource;

      return this.apiClient.callApi(
        '/comments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a new comment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COMMENTS_USER or COMMENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/CommentResource} opts.commentResource The comment to be added
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommentResource}
     */
    this.addComment = function(opts) {
      return this.addCommentWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a comment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COMMENTS_USER or COMMENTS_ADMIN
     * @param {Number} id The comment id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCommentWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteComment");
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
        '/comments/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a comment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COMMENTS_USER or COMMENTS_ADMIN
     * @param {Number} id The comment id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteComment = function(id) {
      return this.deleteCommentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return a comment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The comment id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommentResource} and HTTP response
     */
    this.getCommentWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getComment");
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
      var returnType = CommentResource;

      return this.apiClient.callApi(
        '/comments/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return a comment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The comment id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommentResource}
     */
    this.getComment = function(id) {
      return this.getCommentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of comments
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} context Get comments by context type
     * @param {Number} contextId Get comments by context id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceCommentResource} and HTTP response
     */
    this.getCommentsWithHttpInfo = function(context, contextId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'context' is set
      if (context === undefined || context === null) {
        throw new Error("Missing the required parameter 'context' when calling getComments");
      }

      // verify the required parameter 'contextId' is set
      if (contextId === undefined || contextId === null) {
        throw new Error("Missing the required parameter 'contextId' when calling getComments");
      }


      var pathParams = {
      };
      var queryParams = {
        'context': context,
        'context_id': contextId,
        'size': opts['size'],
        'page': opts['page'],
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
      var returnType = PageResourceCommentResource;

      return this.apiClient.callApi(
        '/comments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a page of comments
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} context Get comments by context type
     * @param {Number} contextId Get comments by context id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceCommentResource}
     */
    this.getComments = function(context, contextId, opts) {
      return this.getCommentsWithHttpInfo(context, contextId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a comment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COMMENTS_USER or COMMENTS_ADMIN
     * @param {Number} id The comment id
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.content The comment content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateCommentWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['content'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateComment");
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
        '/comments/{id}/content', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a comment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; COMMENTS_USER or COMMENTS_ADMIN
     * @param {Number} id The comment id
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.content The comment content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateComment = function(id, opts) {
      return this.updateCommentWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
