/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    define(['ApiClient', 'model/Result', 'model/Version'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Result'), require('../model/Version'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.UtilVersionApi = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.Result, root.KnetikcloudSdk.Version);
  }
}(this, function(ApiClient, Result, Version) {
  'use strict';

  /**
   * UtilVersion service.
   * @module api/UtilVersionApi
   * @version latest

   */

  /**
   * Constructs a new UtilVersionApi. 
   * @alias module:api/UtilVersionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getVersion operation.
     * @callback module:api/UtilVersionApi~getVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Version} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current version info
     * @param {module:api/UtilVersionApi~getVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Version}
     */
    this.getVersion = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = Version;

      return this.apiClient.callApi(
        '/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
