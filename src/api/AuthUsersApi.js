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
    define(['ApiClient', 'model/PageResourceUserSidResource', 'model/Result', 'model/UserSidResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceUserSidResource'), require('../model/Result'), require('../model/UserSidResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AuthUsersApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceUserSidResource, root.KnetikCloud.Result, root.KnetikCloud.UserSidResource);
  }
}(this, function(ApiClient, PageResourceUserSidResource, Result, UserSidResource) {
  'use strict';

  /**
   * AuthUsers service.
   * @module api/AuthUsersApi
   * @version 3.0.19
   */

  /**
   * Constructs a new AuthUsersApi. 
   * @alias module:api/AuthUsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a sid to a user
     * No error returned if the user already has the sid. &lt;b&gt;Resources Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {Number} userId The user id
     * @param {Object} opts Optional parameters
     * @param {module:model/UserSidResource} opts.sid The new sid for the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserSidResource} and HTTP response
     */
    this.addSidWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = opts['sid'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addSid");
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

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserSidResource;

      return this.apiClient.callApi(
        '/access/users/{user_id}/sids', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a sid to a user
     * No error returned if the user already has the sid. &lt;b&gt;Resources Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {Number} userId The user id
     * @param {Object} opts Optional parameters
     * @param {module:model/UserSidResource} opts.sid The new sid for the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserSidResource}
     */
    this.addSid = function(userId, opts) {
      return this.addSidWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search user sids
     * &lt;b&gt;Resources Needed:&lt;/b&gt; VIEW_ACCESS
     * @param {Number} userId The resource type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to resource:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUserSidResource} and HTTP response
     */
    this.getResources1WithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getResources1");
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

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageResourceUserSidResource;

      return this.apiClient.callApi(
        '/access/users/{user_id}/sids', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search user sids
     * &lt;b&gt;Resources Needed:&lt;/b&gt; VIEW_ACCESS
     * @param {Number} userId The resource type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to resource:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUserSidResource}
     */
    this.getResources1 = function(userId, opts) {
      return this.getResources1WithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a user sid
     * Http error 404 means the user does not have the sid&lt;b&gt;Resources Needed:&lt;/b&gt; VIEW_ACCESS
     * @param {Number} userId The user id
     * @param {String} sid The security id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserSidResource} and HTTP response
     */
    this.getSidWithHttpInfo = function(userId, sid) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getSid");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling getSid");
      }


      var pathParams = {
        'user_id': userId,
        'sid': sid
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
      var returnType = UserSidResource;

      return this.apiClient.callApi(
        '/access/users/{user_id}/sids/{sid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a user sid
     * Http error 404 means the user does not have the sid&lt;b&gt;Resources Needed:&lt;/b&gt; VIEW_ACCESS
     * @param {Number} userId The user id
     * @param {String} sid The security id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserSidResource}
     */
    this.getSid = function(userId, sid) {
      return this.getSidWithHttpInfo(userId, sid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a sid from a user
     * No error returned if the suer does not have the sid. &lt;b&gt;Resources Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {Number} userId The user id
     * @param {String} sid The security id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.removeSidWithHttpInfo = function(userId, sid) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeSid");
      }

      // verify the required parameter 'sid' is set
      if (sid === undefined || sid === null) {
        throw new Error("Missing the required parameter 'sid' when calling removeSid");
      }


      var pathParams = {
        'user_id': userId,
        'sid': sid
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
        '/access/users/{user_id}/sids/{sid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a sid from a user
     * No error returned if the suer does not have the sid. &lt;b&gt;Resources Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {Number} userId The user id
     * @param {String} sid The security id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.removeSid = function(userId, sid) {
      return this.removeSidWithHttpInfo(userId, sid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
