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
    define(['ApiClient', 'model/AchievementDefinitionResource', 'model/AchievementProgressUpdateRequest', 'model/BreTriggerResource', 'model/PageResourceAchievementDefinitionResource', 'model/PageResourceTemplateResource', 'model/PageResourceUserAchievementGroupResource', 'model/TemplateResource', 'model/UserAchievementGroupResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AchievementDefinitionResource'), require('../model/AchievementProgressUpdateRequest'), require('../model/BreTriggerResource'), require('../model/PageResourceAchievementDefinitionResource'), require('../model/PageResourceTemplateResource'), require('../model/PageResourceUserAchievementGroupResource'), require('../model/TemplateResource'), require('../model/UserAchievementGroupResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.GamificationAchievementsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.AchievementDefinitionResource, root.KnetikPlatformApiDocumentationLatest.AchievementProgressUpdateRequest, root.KnetikPlatformApiDocumentationLatest.BreTriggerResource, root.KnetikPlatformApiDocumentationLatest.PageResourceAchievementDefinitionResource, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.PageResourceUserAchievementGroupResource, root.KnetikPlatformApiDocumentationLatest.TemplateResource, root.KnetikPlatformApiDocumentationLatest.UserAchievementGroupResource);
  }
}(this, function(ApiClient, AchievementDefinitionResource, AchievementProgressUpdateRequest, BreTriggerResource, PageResourceAchievementDefinitionResource, PageResourceTemplateResource, PageResourceUserAchievementGroupResource, TemplateResource, UserAchievementGroupResource) {
  'use strict';

  /**
   * GamificationAchievements service.
   * @module api/GamificationAchievementsApi
   * @version Latest
   */

  /**
   * Constructs a new GamificationAchievementsApi. 
   * @alias module:api/GamificationAchievementsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAchievementUsingPOST operation.
     * @callback module:api/GamificationAchievementsApi~createAchievementUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AchievementDefinitionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new achievement definition
     * If the definition contains a trigger event name, a BRE rule is created, so that tracking logic is executed when the triggering event occurs. If no trigger event name is specified, the user&#39;s achievement status must manually be updated via the API.
     * @param {Object} opts Optional parameters
     * @param {module:model/AchievementDefinitionResource} opts.achievement The achievement definition
     * @param {module:api/GamificationAchievementsApi~createAchievementUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AchievementDefinitionResource}
     */
    this.createAchievementUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['achievement'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AchievementDefinitionResource;

      return this.apiClient.callApi(
        '/achievements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTemplateUsingPOST operation.
     * @callback module:api/GamificationAchievementsApi~createTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an achievement template
     * Achievement templates define a type of achievement and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.template The achievement template to be created
     * @param {module:api/GamificationAchievementsApi~createTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['template'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/achievements/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAchievementTemplateUsingDELETE operation.
     * @callback module:api/GamificationAchievementsApi~deleteAchievementTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an achievement template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/GamificationAchievementsApi~deleteAchievementTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAchievementTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAchievementTemplateUsingDELETE");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/achievements/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAchievementUsingDELETE operation.
     * @callback module:api/GamificationAchievementsApi~deleteAchievementUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an achievement definition
     * Will also disable the associated generated rule, if any.
     * @param {String} name The name of the achievement
     * @param {module:api/GamificationAchievementsApi~deleteAchievementUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAchievementUsingDELETE = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling deleteAchievementUsingDELETE");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/achievements/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllByGroupNameUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~findAllByGroupNameUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AchievementDefinitionResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of derived achievements
     * Used by other services that depend on achievements
     * @param {String} name The name of the derived achievement
     * @param {module:api/GamificationAchievementsApi~findAllByGroupNameUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AchievementDefinitionResource>}
     */
    this.findAllByGroupNameUsingGET = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling findAllByGroupNameUsingGET");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [AchievementDefinitionResource];

      return this.apiClient.callApi(
        '/achievements/derived/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAchievementTemplateUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getAchievementTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single achievement template
     * @param {String} id The id of the template
     * @param {module:api/GamificationAchievementsApi~getAchievementTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getAchievementTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getAchievementTemplateUsingGET");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/achievements/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAchievementTemplatesUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getAchievementTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search achievement templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/GamificationAchievementsApi~getAchievementTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getAchievementTemplatesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/achievements/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAchievementUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getAchievementUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AchievementDefinitionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single achievement definition
     * @param {String} name The name of the achievement
     * @param {module:api/GamificationAchievementsApi~getAchievementUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AchievementDefinitionResource}
     */
    this.getAchievementUsingGET = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling getAchievementUsingGET");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AchievementDefinitionResource;

      return this.apiClient.callApi(
        '/achievements/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAchievementsUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getAchievementsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceAchievementDefinitionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all achievement definitions in the system
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterTagset Filter for achievements with specified tags (separated by comma)
     * @param {String} opts.filterName Filter for achievements whose name contains a string
     * @param {Boolean} opts.filterHidden Filter for achievements that are hidden or not
     * @param {Boolean} opts.filterDerived Filter for achievements that are derived from other services
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/GamificationAchievementsApi~getAchievementsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceAchievementDefinitionResource}
     */
    this.getAchievementsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_tagset': opts['filterTagset'],
        'filter_name': opts['filterName'],
        'filter_hidden': opts['filterHidden'],
        'filter_derived': opts['filterDerived'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceAchievementDefinitionResource;

      return this.apiClient.callApi(
        '/achievements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllUserProgressForAchievementUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getAllUserProgressForAchievementUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUserAchievementGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve progress on a given achievement for all users
     * Assets will not be filled in on the resources returned. Use &#39;Get single achievement progress for user&#39; to retrieve the full resource with assets for a given user as needed.
     * @param {String} achievementName The achievement&#39;s name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterAchievementDerived Filter for achievements that are derived from other services
     * @param {String} opts.filterAchievementTagset Filter for achievements with specified tags (separated by comma)
     * @param {Boolean} opts.filterAchievementHidden Filter for achievements that are hidden or not
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/GamificationAchievementsApi~getAllUserProgressForAchievementUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUserAchievementGroupResource}
     */
    this.getAllUserProgressForAchievementUsingGET = function(achievementName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'achievementName' is set
      if (achievementName == undefined || achievementName == null) {
        throw new Error("Missing the required parameter 'achievementName' when calling getAllUserProgressForAchievementUsingGET");
      }


      var pathParams = {
        'achievement_name': achievementName
      };
      var queryParams = {
        'filter_achievement_derived': opts['filterAchievementDerived'],
        'filter_achievement_tagset': opts['filterAchievementTagset'],
        'filter_achievement_hidden': opts['filterAchievementHidden'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUserAchievementGroupResource;

      return this.apiClient.callApi(
        '/users/achievements/{achievement_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllUserProgressUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getAllUserProgressUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUserAchievementGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve progress on achievements for all users
     * Assets will not be filled in on the resources returned. Use &#39;Get single achievement progress for user&#39; to retrieve the full resource with assets for a given user as needed.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterAchievementDerived Filter for achievements that are derived from other services
     * @param {String} opts.filterAchievementTagset Filter for achievements with specified tags (separated by comma)
     * @param {String} opts.filterAchievementName Filter for achievements whose name contains a string
     * @param {Boolean} opts.filterAchievementHidden Filter for achievements that are hidden or not
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/GamificationAchievementsApi~getAllUserProgressUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUserAchievementGroupResource}
     */
    this.getAllUserProgressUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_achievement_derived': opts['filterAchievementDerived'],
        'filter_achievement_tagset': opts['filterAchievementTagset'],
        'filter_achievement_name': opts['filterAchievementName'],
        'filter_achievement_hidden': opts['filterAchievementHidden'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUserAchievementGroupResource;

      return this.apiClient.callApi(
        '/users/achievements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAvailableTriggersUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getAvailableTriggersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BreTriggerResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of triggers that can be used to trigger an achievement progress update
     * @param {module:api/GamificationAchievementsApi~getAvailableTriggersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BreTriggerResource>}
     */
    this.getAvailableTriggersUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [BreTriggerResource];

      return this.apiClient.callApi(
        '/achievements/triggers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProgressForAchievementUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getUserProgressForAchievementUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAchievementGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve progress on a given achievement for a given user
     * Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.
     * @param {Number} userId The user&#39;s id
     * @param {String} achievementName The achievement&#39;s name
     * @param {module:api/GamificationAchievementsApi~getUserProgressForAchievementUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserAchievementGroupResource}
     */
    this.getUserProgressForAchievementUsingGET = function(userId, achievementName, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserProgressForAchievementUsingGET");
      }

      // verify the required parameter 'achievementName' is set
      if (achievementName == undefined || achievementName == null) {
        throw new Error("Missing the required parameter 'achievementName' when calling getUserProgressForAchievementUsingGET");
      }


      var pathParams = {
        'user_id': userId,
        'achievement_name': achievementName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserAchievementGroupResource;

      return this.apiClient.callApi(
        '/users/{user_id}/achievements/{achievement_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProgressUsingGET operation.
     * @callback module:api/GamificationAchievementsApi~getUserProgressUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUserAchievementGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve progress on achievements for a given user
     * Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.
     * @param {Number} userId The user&#39;s id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.filterAchievementDerived Filter for achievements that are derived from other services
     * @param {String} opts.filterAchievementTagset Filter for achievements with specified tags (separated by comma)
     * @param {String} opts.filterAchievementName Filter for achievements whose name contains a string
     * @param {Boolean} opts.filterAchievementHidden Filter for achievements that are hidden or not
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/GamificationAchievementsApi~getUserProgressUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUserAchievementGroupResource}
     */
    this.getUserProgressUsingGET = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserProgressUsingGET");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'filter_achievement_derived': opts['filterAchievementDerived'],
        'filter_achievement_tagset': opts['filterAchievementTagset'],
        'filter_achievement_name': opts['filterAchievementName'],
        'filter_achievement_hidden': opts['filterAchievementHidden'],
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceUserAchievementGroupResource;

      return this.apiClient.callApi(
        '/users/{user_id}/achievements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAchievementUsingPUT operation.
     * @callback module:api/GamificationAchievementsApi~updateAchievementUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an achievement definition
     * The existing generated rule, if any, will be deleted. A new rule will be created if a trigger event name is specified in the new version.
     * @param {String} name The name of the achievement
     * @param {Object} opts Optional parameters
     * @param {module:model/AchievementDefinitionResource} opts.achievement The achievement definition
     * @param {module:api/GamificationAchievementsApi~updateAchievementUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateAchievementUsingPUT = function(name, opts, callback) {
      opts = opts || {};
      var postBody = opts['achievement'];

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw new Error("Missing the required parameter 'name' when calling updateAchievementUsingPUT");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/achievements/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProgressUsingPUT operation.
     * @callback module:api/GamificationAchievementsApi~updateProgressUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAchievementGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update or create an achievement progress record for a user
     * If no progress record yet exists for the user, it will be created. Otherwise it will be updated. If progress meets or exceeds the achievement&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;.
     * @param {Number} userId The user&#39;s id
     * @param {String} achievementName The achievement&#39;s name
     * @param {Object} opts Optional parameters
     * @param {module:model/AchievementProgressUpdateRequest} opts.request The progress update details
     * @param {module:api/GamificationAchievementsApi~updateProgressUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserAchievementGroupResource}
     */
    this.updateProgressUsingPUT = function(userId, achievementName, opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling updateProgressUsingPUT");
      }

      // verify the required parameter 'achievementName' is set
      if (achievementName == undefined || achievementName == null) {
        throw new Error("Missing the required parameter 'achievementName' when calling updateProgressUsingPUT");
      }


      var pathParams = {
        'user_id': userId,
        'achievement_name': achievementName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserAchievementGroupResource;

      return this.apiClient.callApi(
        '/users/{user_id}/achievements/{achievement_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTemplateUsingPUT operation.
     * @callback module:api/GamificationAchievementsApi~updateTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an achievement template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.template The updated template
     * @param {module:api/GamificationAchievementsApi~updateTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['template'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateTemplateUsingPUT");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/achievements/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
