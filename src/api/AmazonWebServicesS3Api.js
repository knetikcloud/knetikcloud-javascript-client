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
    define(['ApiClient', 'model/AmazonS3Activity', 'model/Result', 'model/StringWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AmazonS3Activity'), require('../model/Result'), require('../model/StringWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AmazonWebServicesS3Api = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.AmazonS3Activity, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper);
  }
}(this, function(ApiClient, AmazonS3Activity, Result, StringWrapper) {
  'use strict';

  /**
   * AmazonWebServicesS3 service.
   * @module api/AmazonWebServicesS3Api
   * @version 3.1.4
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
     * Get a temporary signed S3 URL for download
     * To give access to files in your own S3 account, you will need to grant KnetikcCloud access to the file by adjusting your bucket policy accordingly. See S3 documentation for details. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; S3_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.bucket S3 bucket name
     * @param {String} opts.path The path to the file relative the bucket (the s3 object key)
     * @param {Number} opts.expiration The number of seconds this URL will be valid. Default to 60 (default to 60)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.getDownloadURLWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'bucket': opts['bucket'],
        'path': opts['path'],
        'expiration': opts['expiration'],
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
      var returnType = StringWrapper;

      return this.apiClient.callApi(
        '/amazon/s3/download-url', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a temporary signed S3 URL for download
     * To give access to files in your own S3 account, you will need to grant KnetikcCloud access to the file by adjusting your bucket policy accordingly. See S3 documentation for details. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; S3_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.bucket S3 bucket name
     * @param {String} opts.path The path to the file relative the bucket (the s3 object key)
     * @param {Number} opts.expiration The number of seconds this URL will be valid. Default to 60 (default to 60)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.getDownloadURL = function(opts) {
      return this.getDownloadURLWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a signed S3 URL for upload
     * Requires the file name and file content type (i.e., &#39;video/mpeg&#39;). Make a PUT to the resulting url to upload the file and use the cdn_url to retrieve it after. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; S3_USER or S3_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename The file name
     * @param {String} opts.contentType The content type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AmazonS3Activity} and HTTP response
     */
    this.getSignedS3URLWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filename': opts['filename'],
        'content_type': opts['contentType'],
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
      var returnType = AmazonS3Activity;

      return this.apiClient.callApi(
        '/amazon/s3/signed-post-url', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a signed S3 URL for upload
     * Requires the file name and file content type (i.e., &#39;video/mpeg&#39;). Make a PUT to the resulting url to upload the file and use the cdn_url to retrieve it after. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; S3_USER or S3_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename The file name
     * @param {String} opts.contentType The content type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AmazonS3Activity}
     */
    this.getSignedS3URL = function(opts) {
      return this.getSignedS3URLWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
