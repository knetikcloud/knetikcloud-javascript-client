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
    define(['ApiClient', 'model/Batch', 'model/BatchResult', 'model/BatchReturn', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Batch'), require('../model/BatchResult'), require('../model/BatchReturn'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.UtilBatchApi = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.Batch, root.KnetikcloudSdk.BatchResult, root.KnetikcloudSdk.BatchReturn, root.KnetikcloudSdk.Result);
  }
}(this, function(ApiClient, Batch, BatchResult, BatchReturn, Result) {
  'use strict';

  /**
   * UtilBatch service.
   * @module api/UtilBatchApi
   * @version latest

   */

  /**
   * Constructs a new UtilBatchApi. 
   * @alias module:api/UtilBatchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getBatch operation.
     * @callback module:api/UtilBatchApi~getBatchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BatchReturn>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get batch result with token
     * Tokens expire in 24 hours
     * @param {String} token token
     * @param {module:api/UtilBatchApi~getBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BatchReturn>}
     */
    this.getBatch = function(token, callback) {
      var postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling getBatch");
      }


      var pathParams = {
        'token': token
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
      var returnType = [BatchReturn];

      return this.apiClient.callApi(
        '/batch/{token}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendBatch operation.
     * @callback module:api/UtilBatchApi~sendBatchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BatchReturn>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request to run API call given the method, content type, path url, and body of request
     * Should the request take longer than one of the alloted timeout parameters, a token will be returned instead, which can be used on the token endpoint in this service
     * @param {Object} opts Optional parameters
     * @param {module:model/Batch} opts.batch The batch object
     * @param {module:api/UtilBatchApi~sendBatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BatchReturn>}
     */
    this.sendBatch = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['batch'];


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
      var returnType = [BatchReturn];

      return this.apiClient.callApi(
        '/batch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
