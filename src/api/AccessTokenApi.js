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
    define(['ApiClient', 'model/OAuth2Resource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OAuth2Resource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AccessTokenApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.OAuth2Resource);
  }
}(this, function(ApiClient, OAuth2Resource) {
  'use strict';

  /**
   * AccessToken service.
   * @module api/AccessTokenApi
   * @version latest

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
     * Callback function to receive the result of the getOAuthToken operation.
     * @callback module:api/AccessTokenApi~getOAuthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OAuth2Resource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get access token
     * @param {module:model/String} grantType Grant type
     * @param {String} clientId The id of the client
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientSecret The secret key of the client.  Used only with a grant_type of client_credentials
     * @param {String} opts.username The username of the client.  Used only with a grant_type of password
     * @param {String} opts.password The password of the client.  Used only with a grant_type of password
     * @param {module:api/AccessTokenApi~getOAuthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OAuth2Resource}
     */
    this.getOAuthToken = function(grantType, clientId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'grantType' is set
      if (grantType == undefined || grantType == null) {
        throw new Error("Missing the required parameter 'grantType' when calling getOAuthToken");
      }

      // verify the required parameter 'clientId' is set
      if (clientId == undefined || clientId == null) {
        throw new Error("Missing the required parameter 'clientId' when calling getOAuthToken");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': opts['clientSecret'],
        'username': opts['username'],
        'password': opts['password']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = OAuth2Resource;

      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
