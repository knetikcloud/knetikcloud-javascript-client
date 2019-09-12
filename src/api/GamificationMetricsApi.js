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
    define(['ApiClient', 'model/MetricResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MetricResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.GamificationMetricsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.MetricResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, MetricResource, Result) {
  'use strict';

  /**
   * GamificationMetrics service.
   * @module api/GamificationMetricsApi
   * @version 3.0.270
   */

  /**
   * Constructs a new GamificationMetricsApi. 
   * @alias module:api/GamificationMetricsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a metric
     * Post a new score/stat for an activity occurrence without ending the occurrence itself
     * @param {Object} opts Optional parameters
     * @param {module:model/MetricResource} opts.metric The new metric
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addMetricWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['metric'];


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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/metrics', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a metric
     * Post a new score/stat for an activity occurrence without ending the occurrence itself
     * @param {Object} opts Optional parameters
     * @param {module:model/MetricResource} opts.metric The new metric
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addMetric = function(opts) {
      return this.addMetricWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
