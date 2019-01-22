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
    define(['ApiClient', 'model/BreEvent', 'model/Result', 'model/StringWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreEvent'), require('../model/Result'), require('../model/StringWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.RuleEngineEventsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BreEvent, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper);
  }
}(this, function(ApiClient, BreEvent, Result, StringWrapper) {
  'use strict';

  /**
   * RuleEngineEvents service.
   * @module api/RuleEngineEventsApi
   * @version 3.0.13
   */

  /**
   * Constructs a new RuleEngineEventsApi. 
   * @alias module:api/RuleEngineEventsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Fire a new event, based on an existing trigger
     * Parameters within the event must match names and types from the trigger. Actual rule execution is asynchornous.  Returns request id, which will be used as the event id. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_USER
     * @param {Object} opts Optional parameters
     * @param {module:model/BreEvent} opts.breEvent The BRE event object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.sendBREEventWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['breEvent'];


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
      var returnType = StringWrapper;

      return this.apiClient.callApi(
        '/bre/events', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fire a new event, based on an existing trigger
     * Parameters within the event must match names and types from the trigger. Actual rule execution is asynchornous.  Returns request id, which will be used as the event id. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_USER
     * @param {Object} opts Optional parameters
     * @param {module:model/BreEvent} opts.breEvent The BRE event object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.sendBREEvent = function(opts) {
      return this.sendBREEventWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
