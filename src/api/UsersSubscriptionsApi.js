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
    define(['ApiClient', 'model/InventorySubscriptionResource', 'model/InvoiceResource', 'model/ReactivateSubscriptionRequest', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InventorySubscriptionResource'), require('../model/InvoiceResource'), require('../model/ReactivateSubscriptionRequest'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UsersSubscriptionsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.InventorySubscriptionResource, root.KnetikPlatformApiDocumentationLatest.InvoiceResource, root.KnetikPlatformApiDocumentationLatest.ReactivateSubscriptionRequest, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, InventorySubscriptionResource, InvoiceResource, ReactivateSubscriptionRequest, Result) {
  'use strict';

  /**
   * UsersSubscriptions service.
   * @module api/UsersSubscriptionsApi
   * @version latest

   */

  /**
   * Constructs a new UsersSubscriptionsApi. 
   * @alias module:api/UsersSubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUserSubscriptionDetails operation.
     * @callback module:api/UsersSubscriptionsApi~getUserSubscriptionDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InventorySubscriptionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details about a user&#39;s subscription
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {module:api/UsersSubscriptionsApi~getUserSubscriptionDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InventorySubscriptionResource}
     */
    this.getUserSubscriptionDetails = function(userId, inventoryId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserSubscriptionDetails");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId == undefined || inventoryId == null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling getUserSubscriptionDetails");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
      var returnType = InventorySubscriptionResource;

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions/{inventory_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersSubscriptionDetails operation.
     * @callback module:api/UsersSubscriptionsApi~getUsersSubscriptionDetailsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InventorySubscriptionResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details about a user&#39;s subscriptions
     * @param {Number} userId The id of the user
     * @param {module:api/UsersSubscriptionsApi~getUsersSubscriptionDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InventorySubscriptionResource>}
     */
    this.getUsersSubscriptionDetails = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUsersSubscriptionDetails");
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
      var accepts = ['application/json'];
      var returnType = [InventorySubscriptionResource];

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reactivateUserSubscription operation.
     * @callback module:api/UsersSubscriptionsApi~reactivateUserSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reactivate a subscription and charge fee
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {module:model/ReactivateSubscriptionRequest} opts.reactivateSubscriptionRequest The reactivate subscription request object inventory
     * @param {module:api/UsersSubscriptionsApi~reactivateUserSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResource}
     */
    this.reactivateUserSubscription = function(userId, inventoryId, opts, callback) {
      opts = opts || {};
      var postBody = opts['reactivateSubscriptionRequest'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling reactivateUserSubscription");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId == undefined || inventoryId == null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling reactivateUserSubscription");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
      var returnType = InvoiceResource;

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions/{inventory_id}/reactivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setSubscriptionBillDate operation.
     * @callback module:api/UsersSubscriptionsApi~setSubscriptionBillDateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a new date to bill a subscription on
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Number} billDate The new bill date. Unix timestamp in seconds
     * @param {module:api/UsersSubscriptionsApi~setSubscriptionBillDateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setSubscriptionBillDate = function(userId, inventoryId, billDate, callback) {
      var postBody = billDate;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling setSubscriptionBillDate");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId == undefined || inventoryId == null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setSubscriptionBillDate");
      }

      // verify the required parameter 'billDate' is set
      if (billDate == undefined || billDate == null) {
        throw new Error("Missing the required parameter 'billDate' when calling setSubscriptionBillDate");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions/{inventory_id}/bill-date', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setSubscriptionPaymentMethod operation.
     * @callback module:api/UsersSubscriptionsApi~setSubscriptionPaymentMethodCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the payment method to use for a subscription
     * May send null to use floating default
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {Number} opts.paymentMethodId The id of the payment method
     * @param {module:api/UsersSubscriptionsApi~setSubscriptionPaymentMethodCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setSubscriptionPaymentMethod = function(userId, inventoryId, opts, callback) {
      opts = opts || {};
      var postBody = opts['paymentMethodId'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling setSubscriptionPaymentMethod");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId == undefined || inventoryId == null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setSubscriptionPaymentMethod");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions/{inventory_id}/payment-method', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setSubscriptionStatus operation.
     * @callback module:api/UsersSubscriptionsApi~setSubscriptionStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the status of a subscription
     * The body is a json string (put in quotes) that should match a desired invoice status type. Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {String} status The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: (&#39;current&#39;, &#39;canceled&#39;, &#39;stopped&#39;, &#39;payment_failed&#39;, &#39;suspended&#39;)
     * @param {module:api/UsersSubscriptionsApi~setSubscriptionStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setSubscriptionStatus = function(userId, inventoryId, status, callback) {
      var postBody = status;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling setSubscriptionStatus");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId == undefined || inventoryId == null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setSubscriptionStatus");
      }

      // verify the required parameter 'status' is set
      if (status == undefined || status == null) {
        throw new Error("Missing the required parameter 'status' when calling setSubscriptionStatus");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions/{inventory_id}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setUserSubscriptionPlan operation.
     * @callback module:api/UsersSubscriptionsApi~setUserSubscriptionPlanCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a new subscription plan for a user
     * @param {Number} userId The id of the user
     * @param {Number} inventoryId The id of the user&#39;s inventory
     * @param {Object} opts Optional parameters
     * @param {String} opts.planId The id of the new plan. Must be from the same subscription
     * @param {module:api/UsersSubscriptionsApi~setUserSubscriptionPlanCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setUserSubscriptionPlan = function(userId, inventoryId, opts, callback) {
      opts = opts || {};
      var postBody = opts['planId'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling setUserSubscriptionPlan");
      }

      // verify the required parameter 'inventoryId' is set
      if (inventoryId == undefined || inventoryId == null) {
        throw new Error("Missing the required parameter 'inventoryId' when calling setUserSubscriptionPlan");
      }


      var pathParams = {
        'user_id': userId,
        'inventory_id': inventoryId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/subscriptions/{inventory_id}/plan', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
