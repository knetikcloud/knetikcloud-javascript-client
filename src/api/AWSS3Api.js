/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    define(['ApiClient', 'model/AmazonS3Activity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AmazonS3Activity'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.AWSS3Api = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.AmazonS3Activity);
  }
}(this, function(ApiClient, AmazonS3Activity) {
  'use strict';

  /**
   * AWSS3 service.
   * @module api/AWSS3Api
   * @version Latest
   */

  /**
   * Constructs a new AWSS3Api. 
   * @alias module:api/AWSS3Api
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the preSignUrlUsingGET operation.
     * @callback module:api/AWSS3Api~preSignUrlUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AmazonS3Activity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a signed S3 URL
     * Requires the file name and file content type (i.e., &#39;video/mpeg&#39;)
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename The file name
     * @param {String} opts.contentType The content type
     * @param {module:api/AWSS3Api~preSignUrlUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AmazonS3Activity}
     */
    this.preSignUrlUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filename': opts['filename'],
        'content_type': opts['contentType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = AmazonS3Activity;

      return this.apiClient.callApi(
        '/amazon/s3/signedposturl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
