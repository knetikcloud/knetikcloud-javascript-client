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
    define(['ApiClient', 'model/NewPasswordRequest', 'model/PageResourceTemplateResource', 'model/PageResourceUserBaseResource', 'model/TemplateResource', 'model/UserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NewPasswordRequest'), require('../model/PageResourceTemplateResource'), require('../model/PageResourceUserBaseResource'), require('../model/TemplateResource'), require('../model/UserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.UsersApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.NewPasswordRequest, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.PageResourceUserBaseResource, root.KnetikPlatformApiDocumentationLatest.TemplateResource, root.KnetikPlatformApiDocumentationLatest.UserResource);
  }
}(this, function(ApiClient, NewPasswordRequest, PageResourceTemplateResource, PageResourceUserBaseResource, TemplateResource, UserResource) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version Latest
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addTagUsingPOST1 operation.
     * @callback module:api/UsersApi~addTagUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a tag to a user
     * @param {Number} userId The id of the user
     * @param {String} tag tag
     * @param {module:api/UsersApi~addTagUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addTagUsingPOST1 = function(userId, tag, callback) {
      var postBody = tag;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling addTagUsingPOST1");
      }

      // verify the required parameter 'tag' is set
      if (tag == undefined || tag == null) {
        throw new Error("Missing the required parameter 'tag' when calling addTagUsingPOST1");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserTemplateUsingPOST operation.
     * @callback module:api/UsersApi~createUserTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user template
     * User Templates define a type of user and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.userTemplateResource The user template resource object
     * @param {module:api/UsersApi~createUserTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createUserTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['userTemplateResource'];


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
        '/users/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserTemplateUsingDELETE operation.
     * @callback module:api/UsersApi~deleteUserTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/UsersApi~deleteUserTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUserTemplateUsingDELETE");
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
        '/users/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the doPasswordResetUsingPUT operation.
     * @callback module:api/UsersApi~doPasswordResetUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Choose a new password after a reset
     * Finish resetting a user&#39;s password using the secret provided from the password-reset endpoint.  Password should be in plain text and will be encrypted on receipt. Use SSL for security.
     * @param {Number} id The id of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/NewPasswordRequest} opts.newPasswordRequest The new password request object
     * @param {module:api/UsersApi~doPasswordResetUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.doPasswordResetUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['newPasswordRequest'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling doPasswordResetUsingPUT");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}/password-reset', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTagsUsingGET3 operation.
     * @callback module:api/UsersApi~getTagsUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List tags for a user
     * @param {Number} userId The id of the user
     * @param {module:api/UsersApi~getTagsUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.getTagsUsingGET3 = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getTagsUsingGET3");
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

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/users/{user_id}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTemplateUsingGET operation.
     * @callback module:api/UsersApi~getUserTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single user template
     * @param {String} id The id of the template
     * @param {module:api/UsersApi~getUserTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getUserTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getUserTemplateUsingGET");
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
        '/users/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTemplatesUsingGET operation.
     * @callback module:api/UsersApi~getUserTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search user templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/UsersApi~getUserTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getUserTemplatesUsingGET = function(opts, callback) {
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
        '/users/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserUsingGET operation.
     * @callback module:api/UsersApi~getUserUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single user
     * Additional private info is included as USERS_ADMIN
     * @param {String} id The id of the user or &#39;me&#39;
     * @param {module:api/UsersApi~getUserUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResource}
     */
    this.getUserUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getUserUsingGET");
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
      var returnType = UserResource;

      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersUsingGET operation.
     * @callback module:api/UsersApi~getUsersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceUserBaseResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search users
     * Additional private info is included as USERS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterDisplayname Filter for users whose display name starts with provided string.
     * @param {String} opts.filterEmail Filter for users whose email starts with provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterFirstname Filter for users whose first name starts with provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterFullname Filter for users whose full name starts with provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterLastname Filter for users whose last name starts with provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterUsername Filter for users whose username starts with the provided string. Requires USERS_ADMIN permission
     * @param {String} opts.filterTag Filter for users who have a given tag
     * @param {String} opts.filterGroup Filter for users in a given group, by unique name
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/UsersApi~getUsersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceUserBaseResource}
     */
    this.getUsersUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_displayname': opts['filterDisplayname'],
        'filter_email': opts['filterEmail'],
        'filter_firstname': opts['filterFirstname'],
        'filter_fullname': opts['filterFullname'],
        'filter_lastname': opts['filterLastname'],
        'filter_username': opts['filterUsername'],
        'filter_tag': opts['filterTag'],
        'filter_group': opts['filterGroup'],
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
      var returnType = PageResourceUserBaseResource;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the initiatePasswordResetUsingPOST operation.
     * @callback module:api/UsersApi~initiatePasswordResetUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset a user&#39;s password
     * A reset code will be generated and a &#39;forgot_password&#39; BRE event will be fired with that code; this can be routed to the user as needed and submitted to the &#39;choose a new password&#39; endpoint.
     * @param {Number} id The id of the user
     * @param {module:api/UsersApi~initiatePasswordResetUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.initiatePasswordResetUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling initiatePasswordResetUsingPOST");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{id}/password-reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registerUserUsingPOST operation.
     * @callback module:api/UsersApi~registerUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a new user
     * Password should be in plain text and will be encrypted on receipt. Use SSL for security
     * @param {Object} opts Optional parameters
     * @param {module:model/UserResource} opts.userResource The user resource object
     * @param {module:api/UsersApi~registerUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserResource}
     */
    this.registerUserUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['userResource'];


      var pathParams = {
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
      var returnType = UserResource;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeTagUsingDELETE1 operation.
     * @callback module:api/UsersApi~removeTagUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a tag from a user
     * @param {Number} userId The id of the user
     * @param {String} tag The tag to remove
     * @param {module:api/UsersApi~removeTagUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeTagUsingDELETE1 = function(userId, tag, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling removeTagUsingDELETE1");
      }

      // verify the required parameter 'tag' is set
      if (tag == undefined || tag == null) {
        throw new Error("Missing the required parameter 'tag' when calling removeTagUsingDELETE1");
      }


      var pathParams = {
        'user_id': userId,
        'tag': tag
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
        '/users/{user_id}/tags/{tag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setPasswordUsingPUT operation.
     * @callback module:api/UsersApi~setPasswordUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a user&#39;s password
     * Password should be in plain text and will be encrypted on receipt. Use SSL for security.
     * @param {Number} id The id of the user
     * @param {Object} opts Optional parameters
     * @param {String} opts.password The new plain text password
     * @param {module:api/UsersApi~setPasswordUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setPasswordUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['password'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling setPasswordUsingPUT");
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
        '/users/{id}/password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserTemplateUsingPUT operation.
     * @callback module:api/UsersApi~updateUserTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.userTemplateResource The user template resource object
     * @param {module:api/UsersApi~updateUserTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateUserTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['userTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateUserTemplateUsingPUT");
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
        '/users/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserUsingPUT operation.
     * @callback module:api/UsersApi~updateUserUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user&#39;s info
     * Password will not be edited on this endpoint, use password specific endpoints.
     * @param {String} id The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {module:model/UserResource} opts.userResource The user resource object
     * @param {module:api/UsersApi~updateUserUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateUserUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['userResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateUserUsingPUT");
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
        '/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
