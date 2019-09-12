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
    define(['ApiClient', 'model/PageResourceSimpleWallet', 'model/PageResourceWalletTotalResponse', 'model/PageResourceWalletTransactionResource', 'model/Result', 'model/SimpleWallet', 'model/WalletAlterRequest', 'model/WalletTransactionResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSimpleWallet'), require('../model/PageResourceWalletTotalResponse'), require('../model/PageResourceWalletTransactionResource'), require('../model/Result'), require('../model/SimpleWallet'), require('../model/WalletAlterRequest'), require('../model/WalletTransactionResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.PaymentsWalletsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceSimpleWallet, root.KnetikCloud.PageResourceWalletTotalResponse, root.KnetikCloud.PageResourceWalletTransactionResource, root.KnetikCloud.Result, root.KnetikCloud.SimpleWallet, root.KnetikCloud.WalletAlterRequest, root.KnetikCloud.WalletTransactionResource);
  }
}(this, function(ApiClient, PageResourceSimpleWallet, PageResourceWalletTotalResponse, PageResourceWalletTransactionResource, Result, SimpleWallet, WalletAlterRequest, WalletTransactionResource) {
  'use strict';

  /**
   * PaymentsWallets service.
   * @module api/PaymentsWalletsApi
   * @version 3.0.270
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
     * Returns the user&#39;s wallet for the given currency code
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN or owner
     * @param {Number} userId The ID of the user for whom wallet is being retrieved
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SimpleWallet} and HTTP response
     */
    this.getUserWalletWithHttpInfo = function(userId, currencyCode) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserWallet");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getUserWallet");
      }


      var pathParams = {
        'user_id': userId,
        'currency_code': currencyCode
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
      var returnType = SimpleWallet;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the user&#39;s wallet for the given currency code
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN or owner
     * @param {Number} userId The ID of the user for whom wallet is being retrieved
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SimpleWallet}
     */
    this.getUserWallet = function(userId, currencyCode) {
      return this.getUserWalletWithHttpInfo(userId, currencyCode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a user&#39;s wallet transactions
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN or owner
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceWalletTransactionResource} and HTTP response
     */
    this.getUserWalletTransactionsWithHttpInfo = function(userId, currencyCode, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserWalletTransactions");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
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
      var returnType = PageResourceWalletTransactionResource;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a user&#39;s wallet transactions
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN or owner
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceWalletTransactionResource}
     */
    this.getUserWalletTransactions = function(userId, currencyCode, opts) {
      return this.getUserWalletTransactionsWithHttpInfo(userId, currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all of a user&#39;s wallets
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN or owner
     * @param {Number} userId The ID of the user for whom wallets are being retrieved
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceSimpleWallet} and HTTP response
     */
    this.getUserWalletsWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserWallets");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
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
      var returnType = PageResourceSimpleWallet;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all of a user&#39;s wallets
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN or owner
     * @param {Number} userId The ID of the user for whom wallets are being retrieved
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceSimpleWallet}
     */
    this.getUserWallets = function(userId, opts) {
      return this.getUserWalletsWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a summation of wallet balances by currency code
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceWalletTotalResponse} and HTTP response
     */
    this.getWalletBalancesWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = PageResourceWalletTotalResponse;

      return this.apiClient.callApi(
        '/wallets/totals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves a summation of wallet balances by currency code
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceWalletTotalResponse}
     */
    this.getWalletBalances = function() {
      return this.getWalletBalancesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve wallet transactions across the system
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceWalletTransactionResource} and HTTP response
     */
    this.getWalletTransactionsWithHttpInfo = function(opts) {
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
      var returnType = PageResourceWalletTransactionResource;

      return this.apiClient.callApi(
        '/wallets/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve wallet transactions across the system
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceWalletTransactionResource}
     */
    this.getWalletTransactions = function(opts) {
      return this.getWalletTransactionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a list of wallets across the system
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceSimpleWallet} and HTTP response
     */
    this.getWalletsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageResourceSimpleWallet;

      return this.apiClient.callApi(
        '/wallets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a list of wallets across the system
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceSimpleWallet}
     */
    this.getWallets = function(opts) {
      return this.getWalletsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the balance for a user&#39;s wallet
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN
     * @param {Number} userId The ID of the user for whom wallet is being modified
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletAlterRequest} opts.request The requested balance modification to be made to the user&#39;s wallet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletTransactionResource} and HTTP response
     */
    this.updateWalletBalanceWithHttpInfo = function(userId, currencyCode, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateWalletBalance");
      }

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling updateWalletBalance");
      }


      var pathParams = {
        'user_id': userId,
        'currency_code': currencyCode
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
      var returnType = WalletTransactionResource;

      return this.apiClient.callApi(
        '/users/{user_id}/wallets/{currency_code}/balance', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the balance for a user&#39;s wallet
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; WALLETS_ADMIN
     * @param {Number} userId The ID of the user for whom wallet is being modified
     * @param {String} currencyCode Currency code of the user&#39;s wallet
     * @param {Object} opts Optional parameters
     * @param {module:model/WalletAlterRequest} opts.request The requested balance modification to be made to the user&#39;s wallet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletTransactionResource}
     */
    this.updateWalletBalance = function(userId, currencyCode, opts) {
      return this.updateWalletBalanceWithHttpInfo(userId, currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
