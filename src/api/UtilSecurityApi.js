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
    define(['ApiClient', 'model/PageResourceLocationLogResource', 'model/Result', 'model/TokenDetailsResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceLocationLogResource'), require('../model/Result'), require('../model/TokenDetailsResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UtilSecurityApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceLocationLogResource, root.KnetikCloud.Result, root.KnetikCloud.TokenDetailsResource);
  }
}(this, function(ApiClient, PageResourceLocationLogResource, Result, TokenDetailsResource) {
  'use strict';

  /**
   * UtilSecurity service.
   * @module api/UtilSecurityApi
   * @version 3.0.14
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
     * Returns the authentication log for a user
     * A log entry is recorded everytime a user requests a new token. Standard pagination available. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SECURITY_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The user id
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceLocationLogResource} and HTTP response
     */
    this.getUserLocationLogWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'user_id': opts['userId'],
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
      var returnType = PageResourceLocationLogResource;

      return this.apiClient.callApi(
        '/security/country-log', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the authentication log for a user
     * A log entry is recorded everytime a user requests a new token. Standard pagination available. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SECURITY_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The user id
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceLocationLogResource}
     */
    this.getUserLocationLog = function(opts) {
      return this.getUserLocationLogWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the authentication token details. Use /users endpoint for detailed user&#39;s info
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SECURITY_ADMIN
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenDetailsResource} and HTTP response
     */
    this.getUserTokenDetailsWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TokenDetailsResource;

      return this.apiClient.callApi(
        '/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the authentication token details. Use /users endpoint for detailed user&#39;s info
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SECURITY_ADMIN
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenDetailsResource}
     */
    this.getUserTokenDetails = function() {
      return this.getUserTokenDetailsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
