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
    define(['ApiClient', 'model/Batch', 'model/BatchResult', 'model/BatchReturn', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Batch'), require('../model/BatchResult'), require('../model/BatchReturn'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UtilBatchApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Batch, root.KnetikCloud.BatchResult, root.KnetikCloud.BatchReturn, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, Batch, BatchResult, BatchReturn, Result) {
  'use strict';

  /**
   * UtilBatch service.
   * @module api/UtilBatchApi
   * @version 3.0.274
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
     * Get batch result with token
     * Tokens expire in 24 hours. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} token token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BatchReturn>} and HTTP response
     */
    this.getBatchWithHttpInfo = function(token) {
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_client_credentials_grant', 'oauth2_password_grant'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [BatchReturn];

      return this.apiClient.callApi(
        '/batch/{token}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get batch result with token
     * Tokens expire in 24 hours. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {String} token token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BatchReturn>}
     */
    this.getBatch = function(token) {
      return this.getBatchWithHttpInfo(token)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Request to run API call given the method, content type, path url, and body of request
     * Should the request take longer than one of the alloted timeout parameters, a token will be returned instead, which can be used on the token endpoint in this service. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {module:model/Batch} opts.batch The batch object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BatchReturn>} and HTTP response
     */
    this.sendBatchWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['batch'];


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
      var returnType = [BatchReturn];

      return this.apiClient.callApi(
        '/batch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Request to run API call given the method, content type, path url, and body of request
     * Should the request take longer than one of the alloted timeout parameters, a token will be returned instead, which can be used on the token endpoint in this service. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {module:model/Batch} opts.batch The batch object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BatchReturn>}
     */
    this.sendBatch = function(opts) {
      return this.sendBatchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
