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
    define(['ApiClient', 'model/FattMerchantPaymentMethodRequest', 'model/PaymentMethodResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FattMerchantPaymentMethodRequest'), require('../model/PaymentMethodResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentsFattMerchantApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FattMerchantPaymentMethodRequest, root.KnetikCloud.PaymentMethodResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, FattMerchantPaymentMethodRequest, PaymentMethodResource, Result) {
  'use strict';

  /**
   * PaymentsFattMerchant service.
   * @module api/PaymentsFattMerchantApi
   * @version 3.0.19
   */

  /**
   * Constructs a new PaymentsFattMerchantApi. 
   * @alias module:api/PaymentsFattMerchantApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create or update a FattMerchant payment method for a user
     * Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FATTMERCHANT_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/FattMerchantPaymentMethodRequest} opts.request Request containing payment method information for user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethodResource} and HTTP response
     */
    this.createOrUpdateFattMerchantPaymentMethodWithHttpInfo = function(opts) {
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
      var returnType = PaymentMethodResource;

      return this.apiClient.callApi(
        '/payment/provider/fattmerchant/payment-methods', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update a FattMerchant payment method for a user
     * Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FATTMERCHANT_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/FattMerchantPaymentMethodRequest} opts.request Request containing payment method information for user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethodResource}
     */
    this.createOrUpdateFattMerchantPaymentMethod = function(opts) {
      return this.createOrUpdateFattMerchantPaymentMethodWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
