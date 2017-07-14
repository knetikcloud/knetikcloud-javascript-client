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
    define(['ApiClient', 'model/AmazonS3Activity', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AmazonS3Activity'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.AmazonWebServicesS3Api = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.AmazonS3Activity, root.KnetikcloudSdk.Result);
  }
}(this, function(ApiClient, AmazonS3Activity, Result) {
  'use strict';

  /**
   * AmazonWebServicesS3 service.
   * @module api/AmazonWebServicesS3Api
   * @version latest

   */

  /**
   * Constructs a new AmazonWebServicesS3Api. 
   * @alias module:api/AmazonWebServicesS3Api
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getSignedS3URL operation.
     * @callback module:api/AmazonWebServicesS3Api~getSignedS3URLCallback
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
     * @param {module:api/AmazonWebServicesS3Api~getSignedS3URLCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AmazonS3Activity}
     */
    this.getSignedS3URL = function(opts, callback) {
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
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
