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
    define(['ApiClient', 'model/BreTriggerResource', 'model/LevelingResource', 'model/PageResourceLevelingResource', 'model/PageResourceUserLevelingResource', 'model/Result', 'model/UserLevelingResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreTriggerResource'), require('../model/LevelingResource'), require('../model/PageResourceLevelingResource'), require('../model/PageResourceUserLevelingResource'), require('../model/Result'), require('../model/UserLevelingResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.GamificationLevelingApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BreTriggerResource, root.KnetikPlatformApiDocumentationLatest.LevelingResource, root.KnetikPlatformApiDocumentationLatest.PageResourceLevelingResource, root.KnetikPlatformApiDocumentationLatest.PageResourceUserLevelingResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.UserLevelingResource);
  }
}(this, function(ApiClient, BreTriggerResource, LevelingResource, PageResourceLevelingResource, PageResourceUserLevelingResource, Result, UserLevelingResource) {
  'use strict';

  /**
   * GamificationLeveling service.
   * @module api/GamificationLevelingApi
   * @version latest

   */

  /**
   * Constructs a new GamificationLevelingApi. 
   * @alias module:api/GamificationLevelingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createLevel operation.
     * @callback module:api/GamificationLevelingApi~createLevelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LevelingResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a level schema
     * @param {Object} opts Optional parameters
     * @param {module:model/LevelingResource} opts.level The level schema definition
     * @param {module:api/GamificationLevelingApi~createLevelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LevelingResource}
     */
    this.createLevel = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['level'];


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
      var returnType = LevelingResource;

      return this.apiClient.callApi(
        '/leveling', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteLevel operation.
     * @callback module:api/GamificationLevelingApi~deleteLevelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a level
     * @param {String} name The level schema name
     * @param {module:api/GamificationLevelingApi~deleteLevelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteLevel = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteLevel");
      }


      var pathParams = {
        'name': name
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
        '/leveling/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLevel operation.
     * @callback module:api/GamificationLevelingApi~getLevelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LevelingResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a level
     * @param {String} name The level schema name
     * @param {module:api/GamificationLevelingApi~getLevelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LevelingResource}
     */
    this.getLevel = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getLevel");
      }


      var pathParams = {
        'name': name
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
      var returnType = LevelingResource;

      return this.apiClient.callApi(
        '/leveling/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLevelTriggers operation.
     * @callback module:api/GamificationLevelingApi~getLevelTriggersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BreTriggerResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of triggers that can be used to trigger a leveling progress update
     * @param {module:api/GamificationLevelingApi~getLevelTriggersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BreTriggerResource>}
     */
    this.getLevelTriggers = function(callback) {
      var postBody = null;


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
      var returnType = [BreTriggerResource];

      return this.apiClient.callApi(
        '/leveling/triggers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLevels operation.
     * @callback module:api/GamificationLevelingApi~getLevelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceLevelingResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search levels
     * Get a list of levels schemas with optional filtering
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for level schemas whose name contains a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/GamificationLevelingApi~getLevelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceLevelingResource}
     */
    this.getLevels = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceLevelingResource;

      return this.apiClient.callApi(
        '/leveling', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserLevel operation.
     * @callback module:api/GamificationLevelingApi~getUserLevelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserLevelingResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user&#39;s progress for a given level schema
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @param {module:api/GamificationLevelingApi~getUserLevelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserLevelingResource}
     */
    this.getUserLevel = function(userId, name, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserLevel");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getUserLevel");
      }


      var pathParams = {
        'user_id': userId,
        'name': name
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
      var returnType = UserLevelingResource;

      return this.apiClient.callApi(
        '/users/{user_id}/leveling/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserLevels operation.
     * @callback module:api/GamificationLevelingApi~getUserLevelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUserLevelingResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user&#39;s progress for all level schemas
     * Filtering and sorting is based on the LevelingResource object, not the UserLevelingResource that is returned here.
     * @param {Number} userId The id of the user
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for level schemas whose name contains a given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param {module:api/GamificationLevelingApi~getUserLevelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUserLevelingResource}
     */
    this.getUserLevels = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserLevels");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUserLevelingResource;

      return this.apiClient.callApi(
        '/users/{user_id}/leveling', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the incrementProgress operation.
     * @callback module:api/GamificationLevelingApi~incrementProgressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update or create a leveling progress record for a user
     * If no progress record yet exists for the user, it will be created. Otherwise the provided value will be added to it. May be negative. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.progress The amount of progress to add
     * @param {module:api/GamificationLevelingApi~incrementProgressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.incrementProgress = function(userId, name, opts, callback) {
      opts = opts || {};
      var postBody = opts['progress'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling incrementProgress");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling incrementProgress");
      }


      var pathParams = {
        'user_id': userId,
        'name': name
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
        '/users/{user_id}/leveling/{name}/progress', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setProgress operation.
     * @callback module:api/GamificationLevelingApi~setProgressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set leveling progress for a user
     * If no progress record yet exists for the user, it will be created. Otherwise it will be updated to the provided value. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
     * @param {Number} userId The id of the user
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.progress The new progress amount
     * @param {module:api/GamificationLevelingApi~setProgressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setProgress = function(userId, name, opts, callback) {
      opts = opts || {};
      var postBody = opts['progress'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setProgress");
      }

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling setProgress");
      }


      var pathParams = {
        'user_id': userId,
        'name': name
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
        '/users/{user_id}/leveling/{name}/progress', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLevel operation.
     * @callback module:api/GamificationLevelingApi~updateLevelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LevelingResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a level
     * @param {String} name The level schema name
     * @param {Object} opts Optional parameters
     * @param {module:model/LevelingResource} opts.newLevel The level schema definition
     * @param {module:api/GamificationLevelingApi~updateLevelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LevelingResource}
     */
    this.updateLevel = function(name, opts, callback) {
      opts = opts || {};
      var postBody = opts['newLevel'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateLevel");
      }


      var pathParams = {
        'name': name
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
      var returnType = LevelingResource;

      return this.apiClient.callApi(
        '/leveling/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
