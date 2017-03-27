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
    define(['ApiClient', 'model/GroupMemberResource', 'model/GroupResource', 'model/PageResourceGroupMemberResource', 'model/PageResourceGroupResource', 'model/PageResourceTemplateResource', 'model/Result', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GroupMemberResource'), require('../model/GroupResource'), require('../model/PageResourceGroupMemberResource'), require('../model/PageResourceGroupResource'), require('../model/PageResourceTemplateResource'), require('../model/Result'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UsersGroupsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.GroupMemberResource, root.KnetikPlatformApiDocumentationLatest.GroupResource, root.KnetikPlatformApiDocumentationLatest.PageResourceGroupMemberResource, root.KnetikPlatformApiDocumentationLatest.PageResourceGroupResource, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.TemplateResource);
  }
}(this, function(ApiClient, GroupMemberResource, GroupResource, PageResourceGroupMemberResource, PageResourceGroupResource, PageResourceTemplateResource, Result, TemplateResource) {
  'use strict';

  /**
   * UsersGroups service.
   * @module api/UsersGroupsApi
   * @version latest

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
     * Callback function to receive the result of the addMemberToGroup operation.
     * @callback module:api/UsersGroupsApi~addMemberToGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupMemberResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a new member to the group
     * @param {String} uniqueName The group unique name
     * @param {module:model/GroupMemberResource} username The username of a user to add to the group
     * @param {module:api/UsersGroupsApi~addMemberToGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupMemberResource}
     */
    this.addMemberToGroup = function(uniqueName, username, callback) {
      var postBody = username;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling addMemberToGroup");
      }

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling addMemberToGroup");
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the createGroup operation.
     * @callback module:api/UsersGroupsApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a group
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupResource} opts.groupResource The new group
     * @param {module:api/UsersGroupsApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupResource}
     */
    this.createGroup = function(opts, callback) {
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the createGroupTemplate operation.
     * @callback module:api/UsersGroupsApi~createGroupTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a group template
     * Group Templates define a type of group and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.groupTemplateResource The group template resource object
     * @param {module:api/UsersGroupsApi~createGroupTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createGroupTemplate = function(opts, callback) {
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/UsersGroupsApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a group from the system IF no resources are attached to it
     * @param {String} uniqueName The group unique name
     * @param {module:api/UsersGroupsApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroup = function(uniqueName, callback) {
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling deleteGroup");
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the deleteGroupTemplate operation.
     * @callback module:api/UsersGroupsApi~deleteGroupTemplateCallback
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
     * @param {module:api/UsersGroupsApi~deleteGroupTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteGroupTemplate");
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the getGroup operation.
     * @callback module:api/UsersGroupsApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Loads a specific group&#39;s details
     * @param {String} uniqueName The group unique name
     * @param {module:api/UsersGroupsApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupResource}
     */
    this.getGroup = function(uniqueName, callback) {
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling getGroup");
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
     * Callback function to receive the result of the getGroupMember operation.
     * @callback module:api/UsersGroupsApi~getGroupMemberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupMemberResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user from a group
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The id of the user
     * @param {module:api/UsersGroupsApi~getGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupMemberResource}
     */
    this.getGroupMember = function(uniqueName, userId, callback) {
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling getGroupMember");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getGroupMember");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GroupMemberResource;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}/members/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupMembers operation.
     * @callback module:api/UsersGroupsApi~getGroupMembersCallback
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
     * @param {module:api/UsersGroupsApi~getGroupMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceGroupMemberResource}
     */
    this.getGroupMembers = function(uniqueName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling getGroupMembers");
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
     * Callback function to receive the result of the getGroupTemplate operation.
     * @callback module:api/UsersGroupsApi~getGroupTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single group template
     * @param {String} id The id of the template
     * @param {module:api/UsersGroupsApi~getGroupTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getGroupTemplate = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getGroupTemplate");
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/groups/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupTemplates operation.
     * @callback module:api/UsersGroupsApi~getGroupTemplatesCallback
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
     * @param {module:api/UsersGroupsApi~getGroupTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getGroupTemplates = function(opts, callback) {
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the getGroupsForUser operation.
     * @callback module:api/UsersGroupsApi~getGroupsForUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List groups a user is in
     * @param {Number} userId The id of the user
     * @param {module:api/UsersGroupsApi~getGroupsForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getGroupsForUser = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getGroupsForUser");
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/users/{user_id}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeGroupMember operation.
     * @callback module:api/UsersGroupsApi~removeGroupMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a user from a group
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The id of the user to remove
     * @param {module:api/UsersGroupsApi~removeGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeGroupMember = function(uniqueName, userId, callback) {
      var postBody = null;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling removeGroupMember");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeGroupMember");
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/UsersGroupsApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a group
     * @param {String} uniqueName The group unique name
     * @param {Object} opts Optional parameters
     * @param {module:model/GroupResource} opts.groupResource The updated group
     * @param {module:api/UsersGroupsApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateGroup = function(uniqueName, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupResource'];

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling updateGroup");
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

      var authNames = ['OAuth2'];
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
     * Callback function to receive the result of the updateGroupMemberStatus operation.
     * @callback module:api/UsersGroupsApi~updateGroupMemberStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a user&#39;s status
     * @param {String} uniqueName The group unique name
     * @param {Number} userId The user id of the member to modify
     * @param {String} status The new status for the user
     * @param {module:api/UsersGroupsApi~updateGroupMemberStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateGroupMemberStatus = function(uniqueName, userId, status, callback) {
      var postBody = status;

      // verify the required parameter 'uniqueName' is set
      if (uniqueName === undefined || uniqueName === null) {
        throw new Error("Missing the required parameter 'uniqueName' when calling updateGroupMemberStatus");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateGroupMemberStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling updateGroupMemberStatus");
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/groups/{unique_name}/members/{user_id}/status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroupTemplate operation.
     * @callback module:api/UsersGroupsApi~updateGroupTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a group template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.groupTemplateResource The group template resource object
     * @param {module:api/UsersGroupsApi~updateGroupTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.updateGroupTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['groupTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateGroupTemplate");
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/users/groups/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroups operation.
     * @callback module:api/UsersGroupsApi~updateGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search groups
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for groups whose name starts with provided string
     * @param {String} opts.filterUniqueName Filter for groups whose unique_name starts with provided string
     * @param {String} opts.filterParent Filter for groups whose parent equals provided string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to name:ASC)
     * @param {module:api/UsersGroupsApi~updateGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceGroupResource}
     */
    this.updateGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'filter_unique_name': opts['filterUniqueName'],
        'filter_parent': opts['filterParent'],
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
  };

  return exports;
}));
