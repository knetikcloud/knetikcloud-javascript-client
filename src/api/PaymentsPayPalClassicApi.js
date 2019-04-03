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
    define(['ApiClient', 'model/CreateBillingAgreementRequest', 'model/CreatePayPalPaymentRequest', 'model/FinalizeBillingAgreementRequest', 'model/FinalizePayPalPaymentRequest', 'model/IntWrapper', 'model/Result', 'model/StringWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateBillingAgreementRequest'), require('../model/CreatePayPalPaymentRequest'), require('../model/FinalizeBillingAgreementRequest'), require('../model/FinalizePayPalPaymentRequest'), require('../model/IntWrapper'), require('../model/Result'), require('../model/StringWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentsPayPalClassicApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.CreateBillingAgreementRequest, root.KnetikCloud.CreatePayPalPaymentRequest, root.KnetikCloud.FinalizeBillingAgreementRequest, root.KnetikCloud.FinalizePayPalPaymentRequest, root.KnetikCloud.IntWrapper, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper);
  }
}(this, function(ApiClient, CreateBillingAgreementRequest, CreatePayPalPaymentRequest, FinalizeBillingAgreementRequest, FinalizePayPalPaymentRequest, IntWrapper, Result, StringWrapper) {
  'use strict';

  /**
   * PaymentsPayPalClassic service.
   * @module api/PaymentsPayPalClassicApi
   * @version 3.0.17
   */

  /**
   * Constructs a new PaymentsPayPalClassicApi. 
   * @alias module:api/PaymentsPayPalClassicApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a PayPal Classic billing agreement for the user
     * Returns the token that should be used to forward the user to PayPal so they can accept the agreement. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYPAL_CLASSIC_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateBillingAgreementRequest} opts.request The request to create a PayPal billing agreement
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.createPayPalBillingAgreementUrlWithHttpInfo = function(opts) {
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
        '/payment/provider/paypal/classic/agreements/start', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a PayPal Classic billing agreement for the user
     * Returns the token that should be used to forward the user to PayPal so they can accept the agreement. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYPAL_CLASSIC_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateBillingAgreementRequest} opts.request The request to create a PayPal billing agreement
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.createPayPalBillingAgreementUrl = function(opts) {
      return this.createPayPalBillingAgreementUrlWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a payment token for PayPal express checkout
     * Returns the token that should be used to forward the user to PayPal so they can complete the checkout. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYPAL_CLASSIC_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePayPalPaymentRequest} opts.request The request to create a PayPal payment token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.createPayPalExpressCheckoutWithHttpInfo = function(opts) {
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
        '/payment/provider/paypal/classic/checkout/start', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a payment token for PayPal express checkout
     * Returns the token that should be used to forward the user to PayPal so they can complete the checkout. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYPAL_CLASSIC_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePayPalPaymentRequest} opts.request The request to create a PayPal payment token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.createPayPalExpressCheckout = function(opts) {
      return this.createPayPalExpressCheckoutWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Finalizes a billing agreement after the user has accepted through PayPal
     * Returns the ID of the new payment method created for the user for the billing agreement. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYPAL_CLASSIC_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/FinalizeBillingAgreementRequest} opts.request The request to finalize a PayPal billing agreement
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IntWrapper} and HTTP response
     */
    this.finalizePayPalBillingAgreementWithHttpInfo = function(opts) {
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
      var returnType = IntWrapper;

      return this.apiClient.callApi(
        '/payment/provider/paypal/classic/agreements/finish', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Finalizes a billing agreement after the user has accepted through PayPal
     * Returns the ID of the new payment method created for the user for the billing agreement. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYPAL_CLASSIC_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/FinalizeBillingAgreementRequest} opts.request The request to finalize a PayPal billing agreement
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IntWrapper}
     */
    this.finalizePayPalBillingAgreement = function(opts) {
      return this.finalizePayPalBillingAgreementWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Finalizes a payment after the user has completed checkout with PayPal
     * The invoice will be marked paid/failed by asynchronous IPN callback. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYPAL_CLASSIC_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/FinalizePayPalPaymentRequest} opts.request The request to finalize the payment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.finalizePayPalCheckoutWithHttpInfo = function(opts) {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/payment/provider/paypal/classic/checkout/finish', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Finalizes a payment after the user has completed checkout with PayPal
     * The invoice will be marked paid/failed by asynchronous IPN callback. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYPAL_CLASSIC_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/FinalizePayPalPaymentRequest} opts.request The request to finalize the payment
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.finalizePayPalCheckout = function(opts) {
      return this.finalizePayPalCheckoutWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
