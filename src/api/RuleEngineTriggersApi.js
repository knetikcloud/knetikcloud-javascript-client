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
    define(['ApiClient', 'model/BreTriggerResource', 'model/PageResourceBreTriggerResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreTriggerResource'), require('../model/PageResourceBreTriggerResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.RuleEngineTriggersApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BreTriggerResource, root.KnetikCloud.PageResourceBreTriggerResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, BreTriggerResource, PageResourceBreTriggerResource, Result) {
  'use strict';

  /**
   * RuleEngineTriggers service.
   * @module api/RuleEngineTriggersApi
   * @version 3.0.273
   */

  /**
   * Constructs a new RuleEngineTriggersApi. 
   * @alias module:api/RuleEngineTriggersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a trigger
     * Customer added triggers will not be fired automatically or have rules associated with them by default. Custom rules must be added to get use from the trigger and it must then be fired from the outside. See the Bre Event services. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/BreTriggerResource} opts.breTriggerResource The BRE trigger resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreTriggerResource} and HTTP response
     */
    this.createBRETriggerWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['breTriggerResource'];


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
      var returnType = BreTriggerResource;

      return this.apiClient.callApi(
        '/bre/triggers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a trigger
     * Customer added triggers will not be fired automatically or have rules associated with them by default. Custom rules must be added to get use from the trigger and it must then be fired from the outside. See the Bre Event services. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/BreTriggerResource} opts.breTriggerResource The BRE trigger resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreTriggerResource}
     */
    this.createBRETrigger = function(opts) {
      return this.createBRETriggerWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a trigger
     * May fail if there are existing rules against it. Cannot delete core triggers. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_ADMIN
     * @param {String} eventName The trigger event name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteBRETriggerWithHttpInfo = function(eventName) {
      var postBody = null;

      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling deleteBRETrigger");
      }


      var pathParams = {
        'event_name': eventName
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
      var returnType = null;

      return this.apiClient.callApi(
        '/bre/triggers/{event_name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a trigger
     * May fail if there are existing rules against it. Cannot delete core triggers. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_ADMIN
     * @param {String} eventName The trigger event name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteBRETrigger = function(eventName) {
      return this.deleteBRETriggerWithHttpInfo(eventName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single trigger
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_USER
     * @param {String} eventName The trigger event name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreTriggerResource} and HTTP response
     */
    this.getBRETriggerWithHttpInfo = function(eventName) {
      var postBody = null;

      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling getBRETrigger");
      }


      var pathParams = {
        'event_name': eventName
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
      var returnType = BreTriggerResource;

      return this.apiClient.callApi(
        '/bre/triggers/{event_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single trigger
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_USER
     * @param {String} eventName The trigger event name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreTriggerResource}
     */
    this.getBRETrigger = function(eventName) {
      return this.getBRETriggerWithHttpInfo(eventName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List triggers
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_USER
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterSystem Filter for triggers that are system triggers when true, or not when false. Leave off for both mixed
     * @param {module:model/String} opts.filterCategory Filter for triggers that are within a specific category
     * @param {String} opts.filterTags Filter for triggers that have all of the given tags (comma separated list)
     * @param {String} opts.filterName Filter for triggers that have names containing the given string
     * @param {String} opts.filterSearch Filter for triggers containing the given words somewhere within name, description and tags
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceBreTriggerResource} and HTTP response
     */
    this.getBRETriggersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_system': opts['filterSystem'],
        'filter_category': opts['filterCategory'],
        'filter_tags': opts['filterTags'],
        'filter_name': opts['filterName'],
        'filter_search': opts['filterSearch'],
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
      var returnType = PageResourceBreTriggerResource;

      return this.apiClient.callApi(
        '/bre/triggers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List triggers
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_USER
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterSystem Filter for triggers that are system triggers when true, or not when false. Leave off for both mixed
     * @param {module:model/String} opts.filterCategory Filter for triggers that are within a specific category
     * @param {String} opts.filterTags Filter for triggers that have all of the given tags (comma separated list)
     * @param {String} opts.filterName Filter for triggers that have names containing the given string
     * @param {String} opts.filterSearch Filter for triggers containing the given words somewhere within name, description and tags
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceBreTriggerResource}
     */
    this.getBRETriggers = function(opts) {
      return this.getBRETriggersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a trigger
     * May fail if new parameters mismatch requirements of existing rules. Cannot update core triggers. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_ADMIN
     * @param {String} eventName The trigger event name
     * @param {Object} opts Optional parameters
     * @param {module:model/BreTriggerResource} opts.breTriggerResource The BRE trigger resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BreTriggerResource} and HTTP response
     */
    this.updateBRETriggerWithHttpInfo = function(eventName, opts) {
      opts = opts || {};
      var postBody = opts['breTriggerResource'];

      // verify the required parameter 'eventName' is set
      if (eventName === undefined || eventName === null) {
        throw new Error("Missing the required parameter 'eventName' when calling updateBRETrigger");
      }


      var pathParams = {
        'event_name': eventName
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
      var returnType = BreTriggerResource;

      return this.apiClient.callApi(
        '/bre/triggers/{event_name}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a trigger
     * May fail if new parameters mismatch requirements of existing rules. Cannot update core triggers. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_TRIGGERS_ADMIN
     * @param {String} eventName The trigger event name
     * @param {Object} opts Optional parameters
     * @param {module:model/BreTriggerResource} opts.breTriggerResource The BRE trigger resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BreTriggerResource}
     */
    this.updateBRETrigger = function(eventName, opts) {
      return this.updateBRETriggerWithHttpInfo(eventName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
