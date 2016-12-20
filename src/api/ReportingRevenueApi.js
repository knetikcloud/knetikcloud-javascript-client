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
    define(['ApiClient', 'model/PageResourceRevenueCountryReportResource', 'model/PageResourceRevenueProductReportResource', 'model/RevenueReportResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceRevenueCountryReportResource'), require('../model/PageResourceRevenueProductReportResource'), require('../model/RevenueReportResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ReportingRevenueApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceRevenueCountryReportResource, root.KnetikPlatformApiDocumentationLatest.PageResourceRevenueProductReportResource, root.KnetikPlatformApiDocumentationLatest.RevenueReportResource);
  }
}(this, function(ApiClient, PageResourceRevenueCountryReportResource, PageResourceRevenueProductReportResource, RevenueReportResource) {
  'use strict';

  /**
   * ReportingRevenue service.
   * @module api/ReportingRevenueApi
   * @version Latest
   */

  /**
   * Constructs a new ReportingRevenueApi. 
   * @alias module:api/ReportingRevenueApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the executiveRevenueCountrySalesUsingGET operation.
     * @callback module:api/ReportingRevenueApi~executiveRevenueCountrySalesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceRevenueCountryReportResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get revenue info by country
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by country. Sorted for largest revenue at the top
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingRevenueApi~executiveRevenueCountrySalesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceRevenueCountryReportResource}
     */
    this.executiveRevenueCountrySalesUsingGET = function(currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling executiveRevenueCountrySalesUsingGET");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceRevenueCountryReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/countries/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the executiveRevenueItemSalesUsingGET operation.
     * @callback module:api/ReportingRevenueApi~executiveRevenueItemSalesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RevenueReportResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get item revenue info
     * Get basic info about revenue from sales of items and bundles (not subscriptions, shipping, etc), summed up within a time range
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {module:api/ReportingRevenueApi~executiveRevenueItemSalesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RevenueReportResource}
     */
    this.executiveRevenueItemSalesUsingGET = function(currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling executiveRevenueItemSalesUsingGET");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RevenueReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/item-sales/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the executiveRevenueProductSalesUsingGET operation.
     * @callback module:api/ReportingRevenueApi~executiveRevenueProductSalesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceRevenueProductReportResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get revenue info by item
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by specific item. Sorted for largest revenue at the top
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingRevenueApi~executiveRevenueProductSalesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceRevenueProductReportResource}
     */
    this.executiveRevenueProductSalesUsingGET = function(currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling executiveRevenueProductSalesUsingGET");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceRevenueProductReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/products/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the executiveRevenueRefundsUsingGET operation.
     * @callback module:api/ReportingRevenueApi~executiveRevenueRefundsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RevenueReportResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get refund revenue info
     * Get basic info about revenue loss from refunds (for all item types), summed up within a time range.
     * @param {String} currencyCode The code for a currency to get refund data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {module:api/ReportingRevenueApi~executiveRevenueRefundsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RevenueReportResource}
     */
    this.executiveRevenueRefundsUsingGET = function(currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling executiveRevenueRefundsUsingGET");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RevenueReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/refunds/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the executiveRevenueSubscriptionSalesUsingGET operation.
     * @callback module:api/ReportingRevenueApi~executiveRevenueSubscriptionSalesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RevenueReportResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get subscription revenue info
     * Get basic info about revenue from sales of new subscriptions as well as recurring payemnts, summed up within a time range
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param {module:api/ReportingRevenueApi~executiveRevenueSubscriptionSalesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RevenueReportResource}
     */
    this.executiveRevenueSubscriptionSalesUsingGET = function(currencyCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode == undefined || currencyCode == null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling executiveRevenueSubscriptionSalesUsingGET");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RevenueReportResource;

      return this.apiClient.callApi(
        '/reporting/revenue/subscription-sales/{currency_code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));