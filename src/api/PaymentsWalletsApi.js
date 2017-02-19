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
    define(['ApiClient', 'model/PageResourceSimpleWallet', 'model/PageResourceWalletTotalResponse', 'model/PageResourceWalletTransactionResource', 'model/Result', 'model/SimpleWallet', 'model/WalletAlterRequest', 'model/WalletTransactionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSimpleWallet'), require('../model/PageResourceWalletTotalResponse'), require('../model/PageResourceWalletTransactionResource'), require('../model/Result'), require('../model/SimpleWallet'), require('../model/WalletAlterRequest'), require('../model/WalletTransactionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.PaymentsWalletsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceSimpleWallet, root.KnetikPlatformApiDocumentationLatest.PageResourceWalletTotalResponse, root.KnetikPlatformApiDocumentationLatest.PageResourceWalletTransactionResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.SimpleWallet, root.KnetikPlatformApiDocumentationLatest.WalletAlterRequest, root.KnetikPlatformApiDocumentationLatest.WalletTransactionResource);
  }
}(this, function(ApiClient, PageResourceSimpleWallet, PageResourceWalletTotalResponse, PageResourceWalletTransactionResource, Result, SimpleWallet, WalletAlterRequest, WalletTransactionResource) {
  'use strict';

  /**
   * PaymentsWallets service.
   * @module api/PaymentsWalletsApi
   * @version latest

   */

  /**
   * Constructs a new PaymentsWalletsApi. 
   * @alias module:api/PaymentsWalletsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUserWallet operation.
     * @callback module:api/PaymentsWalletsApi~getUserWalletCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleWallet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the user&#39;s wallet for the given currency code
     * @param {Number} userId The ID of the user for whom wallet is being retrieved
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @param {module:api/PaymentsWalletsApi~getUserWalletCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleWallet}
     */
    this.getUserWallet = function(userId, currencyCode, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserWallet");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getUserWallet");
      }


      var pathParams = {
        'user_id': userId,
        'currency_code': currencyCode
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
      var returnType = SimpleWallet;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserWalletTransactions operation.
     * @callback module:api/PaymentsWalletsApi~getUserWalletTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceWalletTransactionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user&#39;s wallet transactions
     * @param {Number} userId The ID of the user for whom wallet transactions are being retrieved
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterType Filter for transactions with specified type
     * @param {Number} opts.filterMaxDate Filter for transactions from no earlier than the specified date as a unix timestamp in seconds
     * @param {Number} opts.filterMinDate Filter for transactions from no later than the specified date as a unix timestamp in seconds
     * @param {String} opts.filterSign Filter for transactions with amount with the given sign.  Allowable values: (&#39;positive&#39;, &#39;negative&#39;)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/PaymentsWalletsApi~getUserWalletTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceWalletTransactionResource}
     */
    this.getUserWalletTransactions = function(userId, currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserWalletTransactions");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getUserWalletTransactions");
      }


      var pathParams = {
        'user_id': userId,
        'currency_code': currencyCode
      };
      var queryParams = {
        'filter_type': opts['filterType'],
        'filter_max_date': opts['filterMaxDate'],
        'filter_min_date': opts['filterMinDate'],
        'filter_sign': opts['filterSign'],
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
      var accepts = ['application/json'];
      var returnType = PageResourceWalletTransactionResource;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserWallets operation.
     * @callback module:api/PaymentsWalletsApi~getUserWalletsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SimpleWallet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all of a user&#39;s wallets
     * @param {Number} userId The ID of the user for whom wallets are being retrieved
     * @param {module:api/PaymentsWalletsApi~getUserWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SimpleWallet>}
     */
    this.getUserWallets = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserWallets");
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
      var returnType = [SimpleWallet];

      return this.apiClient.callApi(
        '/users/{user_id}/wallets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletBalances operation.
     * @callback module:api/PaymentsWalletsApi~getWalletBalancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceWalletTotalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a summation of wallet balances by currency code
     * @param {module:api/PaymentsWalletsApi~getWalletBalancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceWalletTotalResponse}
     */
    this.getWalletBalances = function(callback) {
      var postBody = null;


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
      var returnType = PageResourceWalletTotalResponse;

      return this.apiClient.callApi(
        '/wallets/totals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletTransactions operation.
     * @callback module:api/PaymentsWalletsApi~getWalletTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceWalletTransactionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve wallet transactions across the system
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterInvoice Filter for transactions from a specific invoice
     * @param {String} opts.filterType Filter for transactions with specified type
     * @param {String} opts.filterDate A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds. Can be repeated for a range, eg: GT,123,LT,456  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {module:model/String} opts.filterSign Filter for transactions with amount with the given sign
     * @param {Number} opts.filterUserId Filter for transactions for specific userId
     * @param {String} opts.filterUsername Filter for transactions for specific username that start with the given string
     * @param {String} opts.filterDetails Filter for transactions for specific details that start with the given string
     * @param {String} opts.filterCurrencyCode Filter for transactions for specific currency code
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/PaymentsWalletsApi~getWalletTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceWalletTransactionResource}
     */
    this.getWalletTransactions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_invoice': opts['filterInvoice'],
        'filter_type': opts['filterType'],
        'filter_date': opts['filterDate'],
        'filter_sign': opts['filterSign'],
        'filter_user_id': opts['filterUserId'],
        'filter_username': opts['filterUsername'],
        'filter_details': opts['filterDetails'],
        'filter_currency_code': opts['filterCurrencyCode'],
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
      var accepts = ['application/json'];
      var returnType = PageResourceWalletTransactionResource;

      return this.apiClient.callApi(
        '/wallets/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWallets operation.
     * @callback module:api/PaymentsWalletsApi~getWalletsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceSimpleWallet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of wallets across the system
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/PaymentsWalletsApi~getWalletsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceSimpleWallet}
     */
    this.getWallets = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var accepts = ['application/json'];
      var returnType = PageResourceSimpleWallet;

      return this.apiClient.callApi(
        '/wallets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWalletBalance operation.
     * @callback module:api/PaymentsWalletsApi~updateWalletBalanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletTransactionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the balance for a user&#39;s wallet
     * @param {Number} userId The ID of the user for whom wallet is being modified
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletAlterRequest} opts.request The requested balance modification to be made to the user&#39;s wallet
     * @param {module:api/PaymentsWalletsApi~updateWalletBalanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletTransactionResource}
     */
    this.updateWalletBalance = function(userId, currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling updateWalletBalance");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling updateWalletBalance");
      }


      var pathParams = {
        'user_id': userId,
        'currency_code': currencyCode
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
      var returnType = WalletTransactionResource;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}/balance', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
