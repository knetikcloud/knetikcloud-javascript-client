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
    define(['ApiClient', 'model/PageResourceUsageInfo', 'model/PageResourcestring', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceUsageInfo'), require('../model/PageResourcestring'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ReportingUsageApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceUsageInfo, root.KnetikCloud.PageResourcestring, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, PageResourceUsageInfo, PageResourcestring, Result) {
  'use strict';

  /**
   * ReportingUsage service.
   * @module api/ReportingUsageApi
   * @version 3.0.18
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
     * Returns aggregated endpoint usage information by day
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUsageInfo} and HTTP response
     */
    this.getUsageByDayWithHttpInfo = function(startDate, endDate, opts) {
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/day', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns aggregated endpoint usage information by day
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByDay = function(startDate, endDate, opts) {
      return this.getUsageByDayWithHttpInfo(startDate, endDate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns aggregated endpoint usage information by hour
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUsageInfo} and HTTP response
     */
    this.getUsageByHourWithHttpInfo = function(startDate, endDate, opts) {
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/hour', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns aggregated endpoint usage information by hour
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByHour = function(startDate, endDate, opts) {
      return this.getUsageByHourWithHttpInfo(startDate, endDate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns aggregated endpoint usage information by minute
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUsageInfo} and HTTP response
     */
    this.getUsageByMinuteWithHttpInfo = function(startDate, endDate, opts) {
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/minute', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns aggregated endpoint usage information by minute
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByMinute = function(startDate, endDate, opts) {
      return this.getUsageByMinuteWithHttpInfo(startDate, endDate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns aggregated endpoint usage information by month
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUsageInfo} and HTTP response
     */
    this.getUsageByMonthWithHttpInfo = function(startDate, endDate, opts) {
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/month', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns aggregated endpoint usage information by month
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByMonth = function(startDate, endDate, opts) {
      return this.getUsageByMonthWithHttpInfo(startDate, endDate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns aggregated endpoint usage information by year
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoints. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUsageInfo} and HTTP response
     */
    this.getUsageByYearWithHttpInfo = function(startDate, endDate, opts) {
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
      var returnType = PageResourceUsageInfo;

      return this.apiClient.callApi(
        '/reporting/usage/year', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns aggregated endpoint usage information by year
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.combineEndpoints Whether to combine counts from different endpoints. Removes the url and method from the result object (default to false)
     * @param {module:model/String} opts.method Filter for a certain endpoint method.  Must include url as well to work
     * @param {String} opts.url Filter for a certain endpoint.  Must include method as well to work
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUsageInfo}
     */
    this.getUsageByYear = function(startDate, endDate, opts) {
      return this.getUsageByYearWithHttpInfo(startDate, endDate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns list of endpoints called (method and url)
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourcestring} and HTTP response
     */
    this.getUsageEndpointsWithHttpInfo = function(startDate, endDate) {
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
        'end_date': endDate,
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
      var returnType = PageResourcestring;

      return this.apiClient.callApi(
        '/reporting/usage/endpoints', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns list of endpoints called (method and url)
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USAGE_ADMIN
     * @param {Number} startDate The beginning of the range being requested, unix timestamp in seconds
     * @param {Number} endDate The ending of the range being requested, unix timestamp in seconds
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourcestring}
     */
    this.getUsageEndpoints = function(startDate, endDate) {
      return this.getUsageEndpointsWithHttpInfo(startDate, endDate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
