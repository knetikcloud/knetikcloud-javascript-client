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
    define(['ApiClient', 'model/OAuth2Resource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OAuth2Resource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AccessTokenApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.OAuth2Resource);
  }
}(this, function(ApiClient, OAuth2Resource) {
  'use strict';

  /**
   * AccessToken service.
   * @module api/AccessTokenApi
   * @version 3.0.266
   */

  /**
   * Constructs a new AccessTokenApi. 
   * @alias module:api/AccessTokenApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get access token
     * @param {module:model/String} grantType Grant type
     * @param {String} clientId The id of the client
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientSecret The secret key of the client.  Used only with a grant_type of client_credentials
     * @param {String} opts.username The username of the client. Used only with a grant_type of password
     * @param {String} opts.password The password of the client. Used only with a grant_type of password
     * @param {String} opts.token The 3rd party authentication token. Used only with a grant_type of facebook, google, etc (social plugins)
     * @param {String} opts.refreshToken The refresh token obtained during prior authentication. Used only with a grant_type of refresh_token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OAuth2Resource} and HTTP response
     */
    this.getOAuthTokenWithHttpInfo = function(grantType, clientId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling getOAuthToken");
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getOAuthToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': opts['clientSecret'],
        'username': opts['username'],
        'password': opts['password'],
        'token': opts['token'],
        'refresh_token': opts['refreshToken']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = OAuth2Resource;

      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get access token
     * @param {module:model/String} grantType Grant type
     * @param {String} clientId The id of the client
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientSecret The secret key of the client.  Used only with a grant_type of client_credentials
     * @param {String} opts.username The username of the client. Used only with a grant_type of password
     * @param {String} opts.password The password of the client. Used only with a grant_type of password
     * @param {String} opts.token The 3rd party authentication token. Used only with a grant_type of facebook, google, etc (social plugins)
     * @param {String} opts.refreshToken The refresh token obtained during prior authentication. Used only with a grant_type of refresh_token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OAuth2Resource}
     */
    this.getOAuthToken = function(grantType, clientId, opts) {
      return this.getOAuthTokenWithHttpInfo(grantType, clientId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
