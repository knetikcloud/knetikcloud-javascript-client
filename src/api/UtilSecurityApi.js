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
    define(['ApiClient', 'model/PageResourceLocationLogResource', 'model/Result', 'model/TokenDetailsResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceLocationLogResource'), require('../model/Result'), require('../model/TokenDetailsResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UtilSecurityApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceLocationLogResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.TokenDetailsResource);
  }
}(this, function(ApiClient, PageResourceLocationLogResource, Result, TokenDetailsResource) {
  'use strict';

  /**
   * UtilSecurity service.
   * @module api/UtilSecurityApi
   * @version latest

   */

  /**
   * Constructs a new UtilSecurityApi. 
   * @alias module:api/UtilSecurityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUserLocationLog operation.
     * @callback module:api/UtilSecurityApi~getUserLocationLogCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceLocationLogResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the authentication log for a user
     * A log entry is recorded everytime a user requests a new token. Standard pagination available
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The user id
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param {module:api/UtilSecurityApi~getUserLocationLogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceLocationLogResource}
     */
    this.getUserLocationLog = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'user_id': opts['userId'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceLocationLogResource;

      return this.apiClient.callApi(
        '/security/country-log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTokenDetails operation.
     * @callback module:api/UtilSecurityApi~getUserTokenDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TokenDetailsResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the authentication token details. Use /users endpoint for detailed user&#39;s info
     * @param {module:api/UtilSecurityApi~getUserTokenDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TokenDetailsResource}
     */
    this.getUserTokenDetails = function(callback) {
      var postBody = null;


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
      var returnType = TokenDetailsResource;

      return this.apiClient.callApi(
        '/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));