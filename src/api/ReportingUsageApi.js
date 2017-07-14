/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    define(['ApiClient', 'model/PageResourceUsageInfo', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceUsageInfo'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.knetikcloud-sdk) {
      root.knetikcloud-sdk = {};
    }
    root.knetikcloud-sdk.ReportingUsageApi = factory(root.knetikcloud-sdk.ApiClient, root.knetikcloud-sdk.PageResourceUsageInfo, root.knetikcloud-sdk.Result);
  }
}(this, function(ApiClient, PageResourceUsageInfo, Result) {
  'use strict';

  /**
   * ReportingUsage service.
   * @module api/ReportingUsageApi
   * @version latest

   */

  /**
   * Constructs a new ReportingUsageApi. 
   * @alias module:api/ReportingUsageApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUsageByDay operation.
     * @callback module:api/ReportingUsageApi~getUsageByDayCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by day
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByDay = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByDay");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByDay");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'method': opts['method'],
        'url': opts['url'],
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/day', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageByHour operation.
     * @callback module:api/ReportingUsageApi~getUsageByHourCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by hour
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByHourCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByHour = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByHour");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByHour");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'method': opts['method'],
        'url': opts['url'],
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/hour', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageByMinute operation.
     * @callback module:api/ReportingUsageApi~getUsageByMinuteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by minute
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByMinuteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByMinute = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByMinute");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByMinute");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'method': opts['method'],
        'url': opts['url'],
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/minute', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageByMonth operation.
     * @callback module:api/ReportingUsageApi~getUsageByMonthCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by month
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByMonthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByMonth = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByMonth");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByMonth");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'method': opts['method'],
        'url': opts['url'],
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/month', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageByYear operation.
     * @callback module:api/ReportingUsageApi~getUsageByYearCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUsageInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns aggregated endpoint usage information by year
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoints. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/ReportingUsageApi~getUsageByYearCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByYear = function(startDate, endDate, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageByYear");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageByYear");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'combine_endpoints': opts['combineEndpoints'],
        'method': opts['method'],
        'url': opts['url'],
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/year', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsageEndpoints operation.
     * @callback module:api/ReportingUsageApi~getUsageEndpointsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of endpoints called (method and url)
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {module:api/ReportingUsageApi~getUsageEndpointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getUsageEndpoints = function(startDate, endDate, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getUsageEndpoints");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getUsageEndpoints");
      }


      var pathParams = {
      };
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/reporting/usage/endpoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
