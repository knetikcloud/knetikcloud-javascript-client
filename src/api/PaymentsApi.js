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
    define(['ApiClient', 'model/PaymentAuthorizationResource', 'model/PaymentMethodResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaymentAuthorizationResource'), require('../model/PaymentMethodResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PaymentsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PaymentAuthorizationResource, root.KnetikPlatformApiDocumentationLatest.PaymentMethodResource);
  }
}(this, function(ApiClient, PaymentAuthorizationResource, PaymentMethodResource) {
  'use strict';

  /**
   * Payments service.
   * @module api/PaymentsApi
   * @version Latest
   */

  /**
   * Constructs a new PaymentsApi. 
   * @alias module:api/PaymentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPaymentMethodUsingPOST operation.
     * @callback module:api/PaymentsApi~createPaymentMethodUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentMethodResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new payment method for a user
     * @param {Number} userId ID of the user for whom the payment method is being created
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentMethodResource} opts.paymentMethod Payment method being created
     * @param {module:api/PaymentsApi~createPaymentMethodUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentMethodResource}
     */
    this.createPaymentMethodUsingPOST = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['paymentMethod'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling createPaymentMethodUsingPOST");
      }


      var pathParams = {
        'user_id': userId
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
        '/users/{user_id}/payment-methods', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePaymentMethodUsingDELETE operation.
     * @callback module:api/PaymentsApi~deletePaymentMethodUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing payment method for a user
     * @param {Number} userId ID of the user for whom the payment method is being updated
     * @param {Number} id ID of the payment method being deleted
     * @param {module:api/PaymentsApi~deletePaymentMethodUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePaymentMethodUsingDELETE = function(userId, id, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling deletePaymentMethodUsingDELETE");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deletePaymentMethodUsingDELETE");
      }


      var pathParams = {
        'user_id': userId,
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentMethodUsingGET operation.
     * @callback module:api/PaymentsApi~getPaymentMethodUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentMethodResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single payment method for a user
     * @param {Number} userId ID of the user for whom the payment method is being retrieved
     * @param {Number} id ID of the payment method being retrieved
     * @param {module:api/PaymentsApi~getPaymentMethodUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentMethodResource}
     */
    this.getPaymentMethodUsingGET = function(userId, id, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getPaymentMethodUsingGET");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getPaymentMethodUsingGET");
      }


      var pathParams = {
        'user_id': userId,
        'id': id
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
        '/users/{user_id}/payment-methods/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentMethodsUsingGET operation.
     * @callback module:api/PaymentsApi~getPaymentMethodsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PaymentMethodResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all payment methods for a user
     * @param {Number} userId ID of the user for whom the payment methods are being retrieved
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/PaymentsApi~getPaymentMethodsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PaymentMethodResource>}
     */
    this.getPaymentMethodsUsingGET = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getPaymentMethodsUsingGET");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [PaymentMethodResource];

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentAuthorizationUsingPOST operation.
     * @callback module:api/PaymentsApi~paymentAuthorizationUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentAuthorizationResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authorize payment of an invoice for later capture
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentAuthorizationResource} opts.request Payment authorization request
     * @param {module:api/PaymentsApi~paymentAuthorizationUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentAuthorizationResource}
     */
    this.paymentAuthorizationUsingPOST = function(opts, callback) {
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
      var returnType = PaymentAuthorizationResource;

      return this.apiClient.callApi(
        '/payment/authorizations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentCaptureUsingPOST operation.
     * @callback module:api/PaymentsApi~paymentCaptureUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Capture an existing invoice payment authorization
     * @param {Number} id ID of the payment authorization to capture
     * @param {module:api/PaymentsApi~paymentCaptureUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.paymentCaptureUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling paymentCaptureUsingPOST");
      }


      var pathParams = {
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/payment/authorizations/{id}/capture', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePaymentMethodUsingPUT operation.
     * @callback module:api/PaymentsApi~updatePaymentMethodUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing payment method for a user
     * @param {Number} userId ID of the user for whom the payment method is being updated
     * @param {Number} id ID of the payment method being updated
     * @param {Object} opts Optional parameters
     * @param {module:model/PaymentMethodResource} opts.paymentMethod The updated payment method data
     * @param {module:api/PaymentsApi~updatePaymentMethodUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePaymentMethodUsingPUT = function(userId, id, opts, callback) {
      opts = opts || {};
      var postBody = opts['paymentMethod'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePaymentMethodUsingPUT");
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updatePaymentMethodUsingPUT");
      }


      var pathParams = {
        'user_id': userId,
        'id': id
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/payment-methods/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
