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
    define(['ApiClient', 'model/PageResourceUserRelationshipResource', 'model/Result', 'model/UserRelationshipResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceUserRelationshipResource'), require('../model/Result'), require('../model/UserRelationshipResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UsersRelationshipsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceUserRelationshipResource, root.KnetikCloud.Result, root.KnetikCloud.UserRelationshipResource);
  }
}(this, function(ApiClient, PageResourceUserRelationshipResource, Result, UserRelationshipResource) {
  'use strict';

  /**
   * UsersRelationships service.
   * @module api/UsersRelationshipsApi
   * @version 3.0.274
   */

  /**
   * Constructs a new UsersRelationshipsApi. 
   * @alias module:api/UsersRelationshipsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a user relationship
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Object} opts Optional parameters
     * @param {module:model/UserRelationshipResource} opts.relationship The new relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserRelationshipResource} and HTTP response
     */
    this.createUserRelationshipWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['relationship'];


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
      var returnType = UserRelationshipResource;

      return this.apiClient.callApi(
        '/users/relationships', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a user relationship
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Object} opts Optional parameters
     * @param {module:model/UserRelationshipResource} opts.relationship The new relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserRelationshipResource}
     */
    this.createUserRelationship = function(opts) {
      return this.createUserRelationshipWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a user relationship
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Number} id The id of the relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteUserRelationshipWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUserRelationship");
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
        '/users/relationships/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a user relationship
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Number} id The id of the relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteUserRelationship = function(id) {
      return this.deleteUserRelationshipWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a user relationship
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_USER or RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Number} id The id of the relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserRelationshipResource} and HTTP response
     */
    this.getRelationshipWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRelationship");
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
      var returnType = UserRelationshipResource;

      return this.apiClient.callApi(
        '/users/relationships/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a user relationship
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_USER or RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Number} id The id of the relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserRelationshipResource}
     */
    this.getRelationship = function(id) {
      return this.getRelationshipWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of user relationships
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_USER or RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUserRelationshipResource} and HTTP response
     */
    this.getUserRelationshipsWithHttpInfo = function(opts) {
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
      var returnType = PageResourceUserRelationshipResource;

      return this.apiClient.callApi(
        '/users/relationships', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of user relationships
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_USER or RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUserRelationshipResource}
     */
    this.getUserRelationships = function(opts) {
      return this.getUserRelationshipsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a user relationship
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Number} id The id of the relationship
     * @param {Object} opts Optional parameters
     * @param {module:model/UserRelationshipResource} opts.relationship The new relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserRelationshipResource} and HTTP response
     */
    this.updateUserRelationshipWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['relationship'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUserRelationship");
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
      var returnType = UserRelationshipResource;

      return this.apiClient.callApi(
        '/users/relationships/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a user relationship
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; RELATIONSHIPS_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NONE
     * @param {Number} id The id of the relationship
     * @param {Object} opts Optional parameters
     * @param {module:model/UserRelationshipResource} opts.relationship The new relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserRelationshipResource}
     */
    this.updateUserRelationship = function(id, opts) {
      return this.updateUserRelationshipWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
