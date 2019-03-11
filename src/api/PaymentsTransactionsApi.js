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
    define(['ApiClient', 'model/PageResourceTransactionResource', 'model/RefundRequest', 'model/RefundResource', 'model/Result', 'model/TransactionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceTransactionResource'), require('../model/RefundRequest'), require('../model/RefundResource'), require('../model/Result'), require('../model/TransactionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentsTransactionsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceTransactionResource, root.KnetikCloud.RefundRequest, root.KnetikCloud.RefundResource, root.KnetikCloud.Result, root.KnetikCloud.TransactionResource);
  }
}(this, function(ApiClient, PageResourceTransactionResource, RefundRequest, RefundResource, Result, TransactionResource) {
  'use strict';

  /**
   * PaymentsTransactions service.
   * @module api/PaymentsTransactionsApi
   * @version 3.0.16
   */

  /**
   * Constructs a new PaymentsTransactionsApi. 
   * @alias module:api/PaymentsTransactionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get the details for a single transaction
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TRANSACTIONS_ADMIN or owner
     * @param {Number} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionResource} and HTTP response
     */
    this.getTransactionWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTransaction");
      }


      var pathParams = {
        'id': id
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
      var returnType = TransactionResource;

      return this.apiClient.callApi(
        '/transactions/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the details for a single transaction
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TRANSACTIONS_ADMIN or owner
     * @param {Number} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionResource}
     */
    this.getTransaction = function(id) {
      return this.getTransactionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search transactions
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TRANSACTIONS_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterInvoice Filter for transactions from a specific invoice
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceTransactionResource} and HTTP response
     */
    this.getTransactionsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_invoice': opts['filterInvoice'],
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
      var returnType = PageResourceTransactionResource;

      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search transactions
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TRANSACTIONS_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterInvoice Filter for transactions from a specific invoice
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceTransactionResource}
     */
    this.getTransactions = function(opts) {
      return this.getTransactionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Refund a payment transaction, in full or in part
     * Will not allow for refunding more than the full amount even with multiple partial refunds. Money is refunded to the payment method used to make the original payment. Payment method must support refunds. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN
     * @param {Number} id The id of the transaction to refund
     * @param {Object} opts Optional parameters
     * @param {module:model/RefundRequest} opts.request Request containing refund details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RefundResource} and HTTP response
     */
    this.refundTransactionWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling refundTransaction");
      }


      var pathParams = {
        'id': id
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
      var returnType = RefundResource;

      return this.apiClient.callApi(
        '/transactions/{id}/refunds', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Refund a payment transaction, in full or in part
     * Will not allow for refunding more than the full amount even with multiple partial refunds. Money is refunded to the payment method used to make the original payment. Payment method must support refunds. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN
     * @param {Number} id The id of the transaction to refund
     * @param {Object} opts Optional parameters
     * @param {module:model/RefundRequest} opts.request Request containing refund details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RefundResource}
     */
    this.refundTransaction = function(id, opts) {
      return this.refundTransactionWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
