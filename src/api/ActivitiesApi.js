/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
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
    define(['ApiClient', 'model/ActivityOccurrenceCreationFailure', 'model/ActivityOccurrenceResource', 'model/ActivityOccurrenceResults', 'model/ActivityResource', 'model/PageResourceBareActivityResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActivityOccurrenceCreationFailure'), require('../model/ActivityOccurrenceResource'), require('../model/ActivityOccurrenceResults'), require('../model/ActivityResource'), require('../model/PageResourceBareActivityResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ActivitiesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ActivityOccurrenceCreationFailure, root.KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource, root.KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResults, root.KnetikPlatformApiDocumentationLatest.ActivityResource, root.KnetikPlatformApiDocumentationLatest.PageResourceBareActivityResource);
  }
}(this, function(ApiClient, ActivityOccurrenceCreationFailure, ActivityOccurrenceResource, ActivityOccurrenceResults, ActivityResource, PageResourceBareActivityResource) {
  'use strict';

  /**
   * Activities service.
   * @module api/ActivitiesApi
   * @version latest

   */

  /**
   * Constructs a new ActivitiesApi. 
   * @alias module:api/ActivitiesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createActivity operation.
     * @callback module:api/ActivitiesApi~createActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivityResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an activity
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityResource} opts.activityResource The activity resource object
     * @param {module:api/ActivitiesApi~createActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivityResource}
     */
    this.createActivity = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['activityResource'];


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
      var accepts = ['application/json'];
      var returnType = ActivityResource;

      return this.apiClient.callApi(
        '/activities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createActivityOccurrence operation.
     * @callback module:api/ActivitiesApi~createActivityOccurrenceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivityOccurrenceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new activity occurrence
     * Has to enforce extra rules if not used as an admin
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.test if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings (default to false)
     * @param {module:model/ActivityOccurrenceResource} opts.activityOccurrenceResource The activity occurrence object
     * @param {module:api/ActivitiesApi~createActivityOccurrenceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivityOccurrenceResource}
     */
    this.createActivityOccurrence = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['activityOccurrenceResource'];


      var pathParams = {
      };
      var queryParams = {
        'test': opts['test']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ActivityOccurrenceResource;

      return this.apiClient.callApi(
        '/activity-occurrences', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteActivity operation.
     * @callback module:api/ActivitiesApi~deleteActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an activity
     * @param {Number} id The id of the activity
     * @param {module:api/ActivitiesApi~deleteActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteActivity = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteActivity");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/activities/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivities operation.
     * @callback module:api/ActivitiesApi~getActivitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceBareActivityResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List activity definitions
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterTemplate Filter for activities that are templates, or specifically not if false
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/ActivitiesApi~getActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceBareActivityResource}
     */
    this.getActivities = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_template': opts['filterTemplate'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceBareActivityResource;

      return this.apiClient.callApi(
        '/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getActivity operation.
     * @callback module:api/ActivitiesApi~getActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivityResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single activity
     * @param {Number} id The id of the activity
     * @param {module:api/ActivitiesApi~getActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivityResource}
     */
    this.getActivity = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getActivity");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ActivityResource;

      return this.apiClient.callApi(
        '/activities/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setActivityOccurrenceResults operation.
     * @callback module:api/ActivitiesApi~setActivityOccurrenceResultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivityOccurrenceResults} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets the status of an activity occurrence to FINISHED and logs metrics
     * @param {Number} activityOccurrenceId The id of the activity occurrence
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityOccurrenceResults} opts.activityOccurrenceResults The activity occurrence object
     * @param {module:api/ActivitiesApi~setActivityOccurrenceResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivityOccurrenceResults}
     */
    this.setActivityOccurrenceResults = function(activityOccurrenceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['activityOccurrenceResults'];

      // verify the required parameter 'activityOccurrenceId' is set
      if (activityOccurrenceId == undefined || activityOccurrenceId == null) {
        throw new Error("Missing the required parameter 'activityOccurrenceId' when calling setActivityOccurrenceResults");
      }


      var pathParams = {
        'activity_occurrence_id': activityOccurrenceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ActivityOccurrenceResults;

      return this.apiClient.callApi(
        '/activity-occurrences/{activity_occurrence_id}/results', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateActivity operation.
     * @callback module:api/ActivitiesApi~updateActivityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an activity
     * @param {Number} id The id of the activity
     * @param {Object} opts Optional parameters
     * @param {module:model/ActivityResource} opts.activityResource The activity resource object
     * @param {module:api/ActivitiesApi~updateActivityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateActivity = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['activityResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateActivity");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/activities/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateActivityOccurrence operation.
     * @callback module:api/ActivitiesApi~updateActivityOccurrenceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updated the status of an activity occurrence
     * If setting to &#39;FINISHED&#39; you must POST to /results instead to record the metrics and get synchronous reward results
     * @param {Number} activityOccurrenceId The id of the activity occurrence
     * @param {Object} opts Optional parameters
     * @param {String} opts.activityCccurrenceStatus The activity occurrence status object
     * @param {module:api/ActivitiesApi~updateActivityOccurrenceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateActivityOccurrence = function(activityOccurrenceId, opts, callback) {
      opts = opts || {};
      var postBody = opts['activityCccurrenceStatus'];

      // verify the required parameter 'activityOccurrenceId' is set
      if (activityOccurrenceId == undefined || activityOccurrenceId == null) {
        throw new Error("Missing the required parameter 'activityOccurrenceId' when calling updateActivityOccurrence");
      }


      var pathParams = {
        'activity_occurrence_id': activityOccurrenceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/activity-occurrences/{activity_occurrence_id}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
