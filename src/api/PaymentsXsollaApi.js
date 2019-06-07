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
    define(['ApiClient', 'model/Result', 'model/StringWrapper', 'model/XsollaPaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Result'), require('../model/StringWrapper'), require('../model/XsollaPaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentsXsollaApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper, root.KnetikCloud.XsollaPaymentRequest);
  }
}(this, function(ApiClient, Result, StringWrapper, XsollaPaymentRequest) {
  'use strict';

  /**
   * PaymentsXsolla service.
   * @module api/PaymentsXsollaApi
   * @version 3.0.21
   */

  /**
   * Constructs a new PaymentsXsollaApi. 
   * @alias module:api/PaymentsXsollaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a payment token that should be used to forward the user to Xsolla so they can complete payment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; XSOLLA_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/XsollaPaymentRequest} opts.request The payment request to be sent to XSolla
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.createXsollaTokenUrlWithHttpInfo = function(opts) {
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
        '/payment/provider/xsolla/payment', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a payment token that should be used to forward the user to Xsolla so they can complete payment
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; XSOLLA_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/XsollaPaymentRequest} opts.request The payment request to be sent to XSolla
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.createXsollaTokenUrl = function(opts) {
      return this.createXsollaTokenUrlWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
