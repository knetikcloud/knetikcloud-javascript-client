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
    define(['ApiClient', 'model/PageResourceAggregateInvoiceReportResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceAggregateInvoiceReportResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ReportingOrdersApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceAggregateInvoiceReportResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, PageResourceAggregateInvoiceReportResource, Result) {
  'use strict';

  /**
   * ReportingOrders service.
   * @module api/ReportingOrdersApi
   * @version 3.0.16
   */

  /**
   * Constructs a new ReportingOrdersApi. 
   * @alias module:api/ReportingOrdersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieve invoice counts aggregated by time ranges
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; REPORTING_ORDERS_ADMIN
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time duration to aggregate by (default to day)
     * @param {String} opts.filterPaymentStatus A payment status to filter results by, can be a comma separated list
     * @param {String} opts.filterFulfillmentStatus An invoice fulfillment status to filter results by, can be a comma separated list
     * @param {Number} opts.startDate The start of the time range to return, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to return, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceAggregateInvoiceReportResource} and HTTP response
     */
    this.getInvoiceReportsWithHttpInfo = function(currencyCode, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'currencyCode' is set
      if (currencyCode === undefined || currencyCode === null) {
        throw new Error("Missing the required parameter 'currencyCode' when calling getInvoiceReports");
      }


      var pathParams = {
        'currency_code': currencyCode
      };
      var queryParams = {
        'granularity': opts['granularity'],
        'filter_payment_status': opts['filterPaymentStatus'],
        'filter_fulfillment_status': opts['filterFulfillmentStatus'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
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
      var returnType = PageResourceAggregateInvoiceReportResource;

      return this.apiClient.callApi(
        '/reporting/orders/count/{currency_code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve invoice counts aggregated by time ranges
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; REPORTING_ORDERS_ADMIN
     * @param {String} currencyCode The code for a currency to get sales data for
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.granularity The time duration to aggregate by (default to day)
     * @param {String} opts.filterPaymentStatus A payment status to filter results by, can be a comma separated list
     * @param {String} opts.filterFulfillmentStatus An invoice fulfillment status to filter results by, can be a comma separated list
     * @param {Number} opts.startDate The start of the time range to return, unix timestamp in seconds. Default is beginning of time
     * @param {Number} opts.endDate The end of the time range to return, unix timestamp in seconds. Default is end of time
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceAggregateInvoiceReportResource}
     */
    this.getInvoiceReports = function(currencyCode, opts) {
      return this.getInvoiceReportsWithHttpInfo(currencyCode, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
