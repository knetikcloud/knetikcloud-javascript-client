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
    define(['ApiClient', 'model/GroupMemberResource', 'model/GroupResource', 'model/PageResourceGroupMemberResource', 'model/PageResourceGroupResource', 'model/PageResourceTemplateResource', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GroupMemberResource'), require('../model/GroupResource'), require('../model/PageResourceGroupMemberResource'), require('../model/PageResourceGroupResource'), require('../model/PageResourceTemplateResource'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UsersGroupsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.GroupMemberResource, root.KnetikPlatformApiDocumentationLatest.GroupResource, root.KnetikPlatformApiDocumentationLatest.PageResourceGroupMemberResource, root.KnetikPlatformApiDocumentationLatest.PageResourceGroupResource, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.TemplateResource);
  }
}(this, function(ApiClient, GroupMemberResource, GroupResource, PageResourceGroupMemberResource, PageResourceGroupResource, PageResourceTemplateResource, TemplateResource) {
  'use strict';

  /**
   * UsersGroups service.
   * @module api/UsersGroupsApi
   * @version Latest
   */

  /**
   * Constructs a new UsersGroupsApi. 
   * @alias module:api/UsersGroupsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addGroupUsingPOST operation.
     * @callback module:api/UsersGroupsApi~addGroupUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a new group in the system
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupResource} opts.groupResource The new group
     * @param {module:api/UsersGroupsApi~addGroupUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupResource}
     */
    this.addGroupUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['groupResource'];


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
      var returnType = GroupResource;

      return this.apiClient.callApi(
        '/users/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addMemberUsingPOST operation.
     * @callback module:api/UsersGroupsApi~addMemberUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupMemberResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a new member to the group
     * @param {String} uniqueName The group unique name
     * @param {module:model/GroupMemberResource} username The username of a user to add to the group
     * @param {module:api/UsersGroupsApi~addMemberUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupMemberResource}
     */
    this.addMemberUsingPOST = function(uniqueName, username, callback) {
      var postBody = username;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName == undefined || uniqueName == null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling addMemberUsingPOST");
      }

      // verify the required parameter 'username' is set
      if (username == undefined || username == null) {
        throw new Error("Missing the required parameter 'username' when calling addMemberUsingPOST");
      }


      var pathParams = {
        'unique_name': uniqueName
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
      var returnType = GroupMemberResource;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}/members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createGroupTemplateUsingPOST operation.
     * @callback module:api/UsersGroupsApi~createGroupTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a group template
     * Group Templates define a type of group and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.groupTemplateResource The group template resource object
     * @param {module:api/UsersGroupsApi~createGroupTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createGroupTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['groupTemplateResource'];


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
        '/users/groups/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupTemplateUsingDELETE operation.
     * @callback module:api/UsersGroupsApi~deleteGroupTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/UsersGroupsApi~deleteGroupTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteGroupTemplateUsingDELETE");
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
        '/users/groups/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupUsingDELETE operation.
     * @callback module:api/UsersGroupsApi~deleteGroupUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a user from a group
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The id of the user to remove
     * @param {module:api/UsersGroupsApi~deleteGroupUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupUsingDELETE = function(uniqueName, userId, callback) {
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName == undefined || uniqueName == null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling deleteGroupUsingDELETE");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteGroupUsingDELETE");
      }


      var pathParams = {
        'unique_name': uniqueName,
        'user_id': userId
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
        '/users/groups/{unique_name}/members/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupUsingDELETE1 operation.
     * @callback module:api/UsersGroupsApi~deleteGroupUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a group from the system IF no resources are attached to it
     * @param {String} uniqueName The group unique name
     * @param {module:api/UsersGroupsApi~deleteGroupUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupUsingDELETE1 = function(uniqueName, callback) {
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName == undefined || uniqueName == null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling deleteGroupUsingDELETE1");
      }


      var pathParams = {
        'unique_name': uniqueName
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
        '/users/groups/{unique_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupTemplateUsingGET operation.
     * @callback module:api/UsersGroupsApi~getGroupTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single group template
     * @param {String} id The id of the template
     * @param {module:api/UsersGroupsApi~getGroupTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getGroupTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getGroupTemplateUsingGET");
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
        '/users/groups/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupTemplatesUsingGET operation.
     * @callback module:api/UsersGroupsApi~getGroupTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search group templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/UsersGroupsApi~getGroupTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getGroupTemplatesUsingGET = function(opts, callback) {
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
        '/users/groups/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupUsingGET operation.
     * @callback module:api/UsersGroupsApi~getGroupUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Loads a specific group&#39;s details
     * @param {String} uniqueName The group unique name
     * @param {module:api/UsersGroupsApi~getGroupUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupResource}
     */
    this.getGroupUsingGET = function(uniqueName, callback) {
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName == undefined || uniqueName == null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling getGroupUsingGET");
      }


      var pathParams = {
        'unique_name': uniqueName
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
      var returnType = GroupResource;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchGroupsUsingGET operation.
     * @callback module:api/UsersGroupsApi~searchGroupsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceGroupMemberResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists members of the group
     * @param {String} uniqueName The group unique name
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/UsersGroupsApi~searchGroupsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceGroupMemberResource}
     */
    this.searchGroupsUsingGET = function(uniqueName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName == undefined || uniqueName == null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling searchGroupsUsingGET");
      }


      var pathParams = {
        'unique_name': uniqueName
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceGroupMemberResource;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchGroupsUsingGET1 operation.
     * @callback module:api/UsersGroupsApi~searchGroupsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/UsersGroupsApi~searchGroupsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceGroupResource}
     */
    this.searchGroupsUsingGET1 = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceGroupResource;

      return this.apiClient.callApi(
        '/users/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroupTemplateUsingPUT operation.
     * @callback module:api/UsersGroupsApi~updateGroupTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a group template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.groupTemplateResource The group template resource object
     * @param {module:api/UsersGroupsApi~updateGroupTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateGroupTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateGroupTemplateUsingPUT");
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
        '/users/groups/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroupUsingPUT operation.
     * @callback module:api/UsersGroupsApi~updateGroupUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies a group&#39;s details
     * @param {String} uniqueName The group unique name
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupResource} opts.groupResource The updated group
     * @param {module:api/UsersGroupsApi~updateGroupUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateGroupUsingPUT = function(uniqueName, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupResource'];

      // verify the required parameter 'uniqueName' is set
      if (uniqueName == undefined || uniqueName == null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling updateGroupUsingPUT");
      }


      var pathParams = {
        'unique_name': uniqueName
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
        '/users/groups/{unique_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMemberStatusUsingPUT operation.
     * @callback module:api/UsersGroupsApi~updateMemberStatusUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a user&#39;s status
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The user id of the member to modify
     * @param {String} status The new status for the user
     * @param {module:api/UsersGroupsApi~updateMemberStatusUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateMemberStatusUsingPUT = function(uniqueName, userId, status, callback) {
      var postBody = status;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName == undefined || uniqueName == null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling updateMemberStatusUsingPUT");
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling updateMemberStatusUsingPUT");
      }

      // verify the required parameter 'status' is set
      if (status == undefined || status == null) {
        throw new Error("Missing the required parameter 'status' when calling updateMemberStatusUsingPUT");
      }


      var pathParams = {
        'unique_name': uniqueName,
        'user_id': userId
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
        '/users/groups/{unique_name}/members/{user_id}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
