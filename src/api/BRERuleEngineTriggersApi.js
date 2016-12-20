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
    define(['ApiClient', 'model/BreTriggerResource', 'model/PageBreTriggerResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreTriggerResource'), require('../model/PageBreTriggerResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.BRERuleEngineTriggersApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BreTriggerResource, root.KnetikPlatformApiDocumentationLatest.PageBreTriggerResource);
  }
}(this, function(ApiClient, BreTriggerResource, PageBreTriggerResource) {
  'use strict';

  /**
   * BRERuleEngineTriggers service.
   * @module api/BRERuleEngineTriggersApi
   * @version Latest
   */

  /**
   * Constructs a new BRERuleEngineTriggersApi. 
   * @alias module:api/BRERuleEngineTriggersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createTriggerUsingPOST operation.
     * @callback module:api/BRERuleEngineTriggersApi~createTriggerUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BreTriggerResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a trigger
     * Customer added triggers will not be fired automatically or have rules associated with them by default. Custom rules must be added to get use from the trigger and it must then be fired from the outside. See the Bre Event services
     * @param {Object} opts Optional parameters
     * @param {module:model/BreTriggerResource} opts.breTriggerResource The BRE trigger resource object
     * @param {module:api/BRERuleEngineTriggersApi~createTriggerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BreTriggerResource}
     */
    this.createTriggerUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['breTriggerResource'];


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
      var accepts = ['*/*'];
      var returnType = BreTriggerResource;

      return this.apiClient.callApi(
        '/bre/triggers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTriggerUsingDELETE operation.
     * @callback module:api/BRERuleEngineTriggersApi~deleteTriggerUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a trigger
     * May fail if there are existing rules against it. Cannot delete core triggers
     * @param {String} eventName The trigger event name
     * @param {module:api/BRERuleEngineTriggersApi~deleteTriggerUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTriggerUsingDELETE = function(eventName, callback) {
      var postBody = null;

      // verify the required parameter 'eventName' is set
      if (eventName == undefined || eventName == null) {
        throw new Error("Missing the required parameter 'eventName' when calling deleteTriggerUsingDELETE");
      }


      var pathParams = {
        'event_name': eventName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/bre/triggers/{event_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTriggerUsingGET operation.
     * @callback module:api/BRERuleEngineTriggersApi~getTriggerUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BreTriggerResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single trigger
     * @param {String} eventName The trigger event name
     * @param {module:api/BRERuleEngineTriggersApi~getTriggerUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BreTriggerResource}
     */
    this.getTriggerUsingGET = function(eventName, callback) {
      var postBody = null;

      // verify the required parameter 'eventName' is set
      if (eventName == undefined || eventName == null) {
        throw new Error("Missing the required parameter 'eventName' when calling getTriggerUsingGET");
      }


      var pathParams = {
        'event_name': eventName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = BreTriggerResource;

      return this.apiClient.callApi(
        '/bre/triggers/{event_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTriggersUsingGET operation.
     * @callback module:api/BRERuleEngineTriggersApi~getTriggersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBreTriggerResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List triggers
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterSystem Filter for triggers that are system triggers when true, or not when false. Leave off for both mixed
     * @param {module:model/String} opts.filterCategory Filter for triggers that are within a specific category
     * @param {String} opts.filterName Filter for triggers that have names containing the given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/BRERuleEngineTriggersApi~getTriggersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBreTriggerResource}
     */
    this.getTriggersUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_system': opts['filterSystem'],
        'filter_category': opts['filterCategory'],
        'filter_name': opts['filterName'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = PageBreTriggerResource;

      return this.apiClient.callApi(
        '/bre/triggers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTriggerUsingPUT operation.
     * @callback module:api/BRERuleEngineTriggersApi~updateTriggerUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a trigger
     * May fail if new parameters mismatch requirements of existing rules. Cannot update core triggers
     * @param {String} eventName The trigger event name
     * @param {Object} opts Optional parameters
     * @param {module:model/BreTriggerResource} opts.breTriggerResource The BRE trigger resource object
     * @param {module:api/BRERuleEngineTriggersApi~updateTriggerUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateTriggerUsingPUT = function(eventName, opts, callback) {
      opts = opts || {};
      var postBody = opts['breTriggerResource'];

      // verify the required parameter 'eventName' is set
      if (eventName == undefined || eventName == null) {
        throw new Error("Missing the required parameter 'eventName' when calling updateTriggerUsingPUT");
      }


      var pathParams = {
        'event_name': eventName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/bre/triggers/{event_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
