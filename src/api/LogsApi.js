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
    define(['ApiClient', 'model/BreEventLog', 'model/ForwardLog', 'model/PageResourceBreEventLog', 'model/PageResourceForwardLog', 'model/PageResourceUserActionLog', 'model/Result', 'model/UserActionLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreEventLog'), require('../model/ForwardLog'), require('../model/PageResourceBreEventLog'), require('../model/PageResourceForwardLog'), require('../model/PageResourceUserActionLog'), require('../model/Result'), require('../model/UserActionLog'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.LogsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BreEventLog, root.KnetikCloud.ForwardLog, root.KnetikCloud.PageResourceBreEventLog, root.KnetikCloud.PageResourceForwardLog, root.KnetikCloud.PageResourceUserActionLog, root.KnetikCloud.Result, root.KnetikCloud.UserActionLog);
  }
}(this, function(ApiClient, BreEventLog, ForwardLog, PageResourceBreEventLog, PageResourceForwardLog, PageResourceUserActionLog, Result, UserActionLog) {
  'use strict';

  /**
   * Logs service.
   * @module api/LogsApi
   * @version 3.0.20
   */

  /**
   * Constructs a new LogsApi. 
   * @alias module:api/LogsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get an existing BRE event log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param {String} id The BRE event log entry id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreEventLog} and HTTP response
     */
    this.getBREEventLogWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBREEventLog");
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
      var returnType = BreEventLog;

      return this.apiClient.callApi(
        '/bre/logs/event-log/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an existing BRE event log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param {String} id The BRE event log entry id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreEventLog}
     */
    this.getBREEventLog = function(id) {
      return this.getBREEventLogWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of BRE event log entries
     * Logs are kept for 24 hours. &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the event log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {String} opts.filterEventName Filter event logs by event name
     * @param {String} opts.filterEventId Filter event logs by request id
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:DESC)
     * @param {String} opts.filterRuleId Filter event logs by request id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceBreEventLog} and HTTP response
     */
    this.getBREEventLogsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_start_date': opts['filterStartDate'],
        'filter_event_name': opts['filterEventName'],
        'filter_event_id': opts['filterEventId'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order'],
        'filter_rule_id': opts['filterRuleId'],
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
      var returnType = PageResourceBreEventLog;

      return this.apiClient.callApi(
        '/bre/logs/event-log', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a list of BRE event log entries
     * Logs are kept for 24 hours. &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the event log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {String} opts.filterEventName Filter event logs by event name
     * @param {String} opts.filterEventId Filter event logs by request id
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:DESC)
     * @param {String} opts.filterRuleId Filter event logs by request id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceBreEventLog}
     */
    this.getBREEventLogs = function(opts) {
      return this.getBREEventLogsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an existing forward log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param {String} id The forward log entry id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ForwardLog} and HTTP response
     */
    this.getBREForwardLogWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBREForwardLog");
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
      var returnType = ForwardLog;

      return this.apiClient.callApi(
        '/bre/logs/forward-log/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an existing forward log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param {String} id The forward log entry id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ForwardLog}
     */
    this.getBREForwardLog = function(id) {
      return this.getBREForwardLogWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of forward log entries
     * Logs are kept for 24 hours. &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {String} opts.filterEndDate A comma separated string without spaces.  First value is the operator to search on, second value is the log end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {Number} opts.filterStatusCode Filter forward logs by http status code
     * @param {Number} opts.filterUrl Filter forward logs by URL starting with...
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:DESC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceForwardLog} and HTTP response
     */
    this.getBREForwardLogsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_start_date': opts['filterStartDate'],
        'filter_end_date': opts['filterEndDate'],
        'filter_status_code': opts['filterStatusCode'],
        'filter_url': opts['filterUrl'],
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
      var returnType = PageResourceForwardLog;

      return this.apiClient.callApi(
        '/bre/logs/forward-log', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a list of forward log entries
     * Logs are kept for 24 hours. &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {String} opts.filterEndDate A comma separated string without spaces.  First value is the operator to search on, second value is the log end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param {Number} opts.filterStatusCode Filter forward logs by http status code
     * @param {Number} opts.filterUrl Filter forward logs by URL starting with...
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:DESC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceForwardLog}
     */
    this.getBREForwardLogs = function(opts) {
      return this.getBREForwardLogsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a user log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LOGS_ADMIN or owner
     * @param {String} id The user log entry id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserActionLog} and HTTP response
     */
    this.getUserLogsWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserLogs");
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
      var returnType = UserActionLog;

      return this.apiClient.callApi(
        '/audit/logs/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a user log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LOGS_ADMIN or owner
     * @param {String} id The user log entry id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserActionLog}
     */
    this.getUserLogs = function(id) {
      return this.getUserLogsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of user logs entries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LOGS_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterUser Filter for actions taken by a specific user by id
     * @param {String} opts.filterActionName Filter for actions of a specific name
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to timestamp:DESC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUserActionLog} and HTTP response
     */
    this.getUserLogs1WithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_user': opts['filterUser'],
        'filter_action_name': opts['filterActionName'],
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
      var returnType = PageResourceUserActionLog;

      return this.apiClient.callApi(
        '/audit/logs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a page of user logs entries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LOGS_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterUser Filter for actions taken by a specific user by id
     * @param {String} opts.filterActionName Filter for actions of a specific name
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to timestamp:DESC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUserActionLog}
     */
    this.getUserLogs1 = function(opts) {
      return this.getUserLogs1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
