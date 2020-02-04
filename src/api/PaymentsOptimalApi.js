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
    define(['ApiClient', 'model/OptimalPaymentRequest', 'model/Result', 'model/StringWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OptimalPaymentRequest'), require('../model/Result'), require('../model/StringWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentsOptimalApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.OptimalPaymentRequest, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper);
  }
}(this, function(ApiClient, OptimalPaymentRequest, Result, StringWrapper) {
  'use strict';

  /**
   * PaymentsOptimal service.
   * @module api/PaymentsOptimalApi
   * @version 3.0.3
   */

  /**
   * Constructs a new PaymentsOptimalApi. 
   * @alias module:api/PaymentsOptimalApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Initiate silent post with Optimal
     * Will return the url for a hosted payment endpoint to post to. See Optimal documentation for details. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; OPTIMAL_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/OptimalPaymentRequest} opts.request The payment request to initiate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.silentPostOptimalWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['request'];


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
      var returnType = StringWrapper;

      return this.apiClient.callApi(
        '/payment/provider/optimal/silent', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Initiate silent post with Optimal
     * Will return the url for a hosted payment endpoint to post to. See Optimal documentation for details. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; OPTIMAL_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/OptimalPaymentRequest} opts.request The payment request to initiate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.silentPostOptimal = function(opts) {
      return this.silentPostOptimalWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
