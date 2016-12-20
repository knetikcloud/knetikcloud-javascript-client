/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
    define(['ApiClient', 'model/PaymentMethodResource', 'model/StripeCreatePaymentMethod', 'model/StripePaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaymentMethodResource'), require('../model/StripeCreatePaymentMethod'), require('../model/StripePaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PaymentsStripeApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PaymentMethodResource, root.KnetikPlatformApiDocumentationLatest.StripeCreatePaymentMethod, root.KnetikPlatformApiDocumentationLatest.StripePaymentRequest);
  }
}(this, function(ApiClient, PaymentMethodResource, StripeCreatePaymentMethod, StripePaymentRequest) {
  'use strict';

  /**
   * PaymentsStripe service.
   * @module api/PaymentsStripeApi
   * @version Latest
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
     * Callback function to receive the result of the createCustomerUsingPOST1 operation.
     * @callback module:api/PaymentsStripeApi~createCustomerUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentMethodResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Stripe payment method for a user
     * Stores customer information and creates a payment method that can be used to pay invoices through the payments endpoints.
     * @param {Object} opts Optional parameters
     * @param {module:model/StripeCreatePaymentMethod} opts.request The request to create a Stripe customer with payment info
     * @param {module:api/PaymentsStripeApi~createCustomerUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentMethodResource}
     */
    this.createCustomerUsingPOST1 = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = PaymentMethodResource;

      return this.apiClient.callApi(
        '/payment/provider/stripe/payment-methods', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the payInvoiceUsingPOST1 operation.
     * @callback module:api/PaymentsStripeApi~payInvoiceUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pay with a single use token
     * @param {Object} opts Optional parameters
     * @param {module:model/StripePaymentRequest} opts.request The request to pay an invoice
     * @param {module:api/PaymentsStripeApi~payInvoiceUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.payInvoiceUsingPOST1 = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/payment/provider/stripe/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
