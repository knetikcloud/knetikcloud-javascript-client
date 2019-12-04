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
    define(['ApiClient', 'model/PaymentMethodResource', 'model/Result', 'model/StringWrapper', 'model/StripeCreatePaymentMethod', 'model/StripePaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaymentMethodResource'), require('../model/Result'), require('../model/StringWrapper'), require('../model/StripeCreatePaymentMethod'), require('../model/StripePaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentsStripeApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PaymentMethodResource, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper, root.KnetikCloud.StripeCreatePaymentMethod, root.KnetikCloud.StripePaymentRequest);
  }
}(this, function(ApiClient, PaymentMethodResource, Result, StringWrapper, StripeCreatePaymentMethod, StripePaymentRequest) {
  'use strict';

  /**
   * PaymentsStripe service.
   * @module api/PaymentsStripeApi
   * @version 3.0.274
   */

  /**
   * Constructs a new PaymentsStripeApi. 
   * @alias module:api/PaymentsStripeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a Stripe payment method for a user
     * Obtain a token from Stripe, following their examples and documentation. Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints. Ensure that Stripe itself has been configured with the webhook so that invoices are marked paid. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; STRIPE_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/StripeCreatePaymentMethod} opts.request The request to create a Stripe customer with payment info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethodResource} and HTTP response
     */
    this.createStripePaymentMethodWithHttpInfo = function(opts) {
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
        '/payment/provider/stripe/payment-methods', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Stripe payment method for a user
     * Obtain a token from Stripe, following their examples and documentation. Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints. Ensure that Stripe itself has been configured with the webhook so that invoices are marked paid. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; STRIPE_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {module:model/StripeCreatePaymentMethod} opts.request The request to create a Stripe customer with payment info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethodResource}
     */
    this.createStripePaymentMethod = function(opts) {
      return this.createStripePaymentMethodWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Pay with a single use token
     * Obtain a token from Stripe, following their examples and documentation. Pays an invoice without creating a payment method. Ensure that Stripe itself has been configured with the webhook so that invoices are marked paid. A 200 status code indicates sucess with a return value of \&quot;succeeded\&quot;. \&quot;pending\&quot; status is also a 200 and otherwise a non-200 will be sent for failures. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {module:model/StripePaymentRequest} opts.request The request to pay an invoice
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.payStripeInvoiceWithHttpInfo = function(opts) {
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
        '/payment/provider/stripe/payments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Pay with a single use token
     * Obtain a token from Stripe, following their examples and documentation. Pays an invoice without creating a payment method. Ensure that Stripe itself has been configured with the webhook so that invoices are marked paid. A 200 status code indicates sucess with a return value of \&quot;succeeded\&quot;. \&quot;pending\&quot; status is also a 200 and otherwise a non-200 will be sent for failures. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {module:model/StripePaymentRequest} opts.request The request to pay an invoice
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.payStripeInvoice = function(opts) {
      return this.payStripeInvoiceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
