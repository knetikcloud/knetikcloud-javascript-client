/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    define(['ApiClient', 'model/Result', 'model/XsollaPaymentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Result'), require('../model/XsollaPaymentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PaymentsXsollaApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.XsollaPaymentRequest);
  }
}(this, function(ApiClient, Result, XsollaPaymentRequest) {
  'use strict';

  /**
   * PaymentsXsolla service.
   * @module api/PaymentsXsollaApi
   * @version latest

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
     * Callback function to receive the result of the createXsollaTokenUrl operation.
     * @callback module:api/PaymentsXsollaApi~createXsollaTokenUrlCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a payment token that should be used to forward the user to Xsolla so they can complete payment
     * @param {Object} opts Optional parameters
     * @param {module:model/XsollaPaymentRequest} opts.request The payment request to be sent to XSolla
     * @param {module:api/PaymentsXsollaApi~createXsollaTokenUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.createXsollaTokenUrl = function(opts, callback) {
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
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/payment/provider/xsolla/payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the receiveXsollaNotification operation.
     * @callback module:api/PaymentsXsollaApi~receiveXsollaNotificationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receives payment response from Xsolla
     * Only used by Xsolla to call back to JSAPI after processing user payment action
     * @param {module:api/PaymentsXsollaApi~receiveXsollaNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.receiveXsollaNotification = function(callback) {
      var postBody = null;


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
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/payment/provider/xsolla/notifications', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
