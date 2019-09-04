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
    define(['ApiClient', 'model/ClientResource', 'model/PageResourceRoleResource', 'model/Result', 'model/RoleResource', 'model/UserResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClientResource'), require('../model/PageResourceRoleResource'), require('../model/Result'), require('../model/RoleResource'), require('../model/UserResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AuthRolesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ClientResource, root.KnetikCloud.PageResourceRoleResource, root.KnetikCloud.Result, root.KnetikCloud.RoleResource, root.KnetikCloud.UserResource);
  }
}(this, function(ApiClient, ClientResource, PageResourceRoleResource, Result, RoleResource, UserResource) {
  'use strict';

  /**
   * AuthRoles service.
   * @module api/AuthRolesApi
   * @version 3.0.266
   */

  /**
   * Constructs a new AuthRolesApi. 
   * @alias module:api/AuthRolesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleResource} opts.roleResource The role resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoleResource} and HTTP response
     */
    this.createRoleWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['roleResource'];


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
      var returnType = RoleResource;

      return this.apiClient.callApi(
        '/auth/roles', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleResource} opts.roleResource The role resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoleResource}
     */
    this.createRole = function(opts) {
      return this.createRoleWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes role from users/clients
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteRoleWithHttpInfo = function(role, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'role' is set
      if (role === undefined || role === null) {
        throw new Error("Missing the required parameter 'role' when calling deleteRole");
      }


      var pathParams = {
        'role': role
      };
      var queryParams = {
        'force': opts['force'],
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
        '/auth/roles/{role}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, removes role from users/clients
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteRole = function(role, opts) {
      return this.deleteRoleWithHttpInfo(role, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get roles for a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} clientKey The client key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceRoleResource} and HTTP response
     */
    this.getClientRolesWithHttpInfo = function(clientKey, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'clientKey' is set
      if (clientKey === undefined || clientKey === null) {
        throw new Error("Missing the required parameter 'clientKey' when calling getClientRoles");
      }


      var pathParams = {
        'client_key': clientKey
      };
      var queryParams = {
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
      var returnType = PageResourceRoleResource;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get roles for a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} clientKey The client key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceRoleResource}
     */
    this.getClientRoles = function(clientKey, opts) {
      return this.getClientRolesWithHttpInfo(clientKey, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} role The role value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoleResource} and HTTP response
     */
    this.getRoleWithHttpInfo = function(role) {
      var postBody = null;

      // verify the required parameter 'role' is set
      if (role === undefined || role === null) {
        throw new Error("Missing the required parameter 'role' when calling getRole");
      }


      var pathParams = {
        'role': role
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
      var returnType = RoleResource;

      return this.apiClient.callApi(
        '/auth/roles/{role}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} role The role value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoleResource}
     */
    this.getRole = function(role) {
      return this.getRoleWithHttpInfo(role)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search roles
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for roles that have a name starting with specified string
     * @param {String} opts.filterRole Filter for roles that have a role starting with specified string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceRoleResource} and HTTP response
     */
    this.getRolesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name': opts['filterName'],
        'filter_role': opts['filterRole'],
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
      var returnType = PageResourceRoleResource;

      return this.apiClient.callApi(
        '/auth/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search roles
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterName Filter for roles that have a name starting with specified string
     * @param {String} opts.filterRole Filter for roles that have a role starting with specified string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceRoleResource}
     */
    this.getRoles = function(opts) {
      return this.getRolesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get roles for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {Number} userId The user&#39;s id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceRoleResource} and HTTP response
     */
    this.getUserRolesWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserRoles");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
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
      var returnType = PageResourceRoleResource;

      return this.apiClient.callApi(
        '/auth/users/{user_id}/roles', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get roles for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {Number} userId The user&#39;s id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceRoleResource}
     */
    this.getUserRoles = function(userId, opts) {
      return this.getUserRolesWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set roles for a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} clientKey The client key
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.rolesList The list of unique roles
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ClientResource} and HTTP response
     */
    this.setClientRolesWithHttpInfo = function(clientKey, opts) {
      opts = opts || {};
      var postBody = opts['rolesList'];

      // verify the required parameter 'clientKey' is set
      if (clientKey === undefined || clientKey === null) {
        throw new Error("Missing the required parameter 'clientKey' when calling setClientRoles");
      }


      var pathParams = {
        'client_key': clientKey
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
      var returnType = ClientResource;

      return this.apiClient.callApi(
        '/auth/clients/{client_key}/roles', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set roles for a client
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} clientKey The client key
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.rolesList The list of unique roles
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClientResource}
     */
    this.setClientRoles = function(clientKey, opts) {
      return this.setClientRolesWithHttpInfo(clientKey, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set permissions for a role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.permissionsList The list of unique permissions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoleResource} and HTTP response
     */
    this.setPermissionsForRoleWithHttpInfo = function(role, opts) {
      opts = opts || {};
      var postBody = opts['permissionsList'];

      // verify the required parameter 'role' is set
      if (role === undefined || role === null) {
        throw new Error("Missing the required parameter 'role' when calling setPermissionsForRole");
      }


      var pathParams = {
        'role': role
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
      var returnType = RoleResource;

      return this.apiClient.callApi(
        '/auth/roles/{role}/permissions', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set permissions for a role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.permissionsList The list of unique permissions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoleResource}
     */
    this.setPermissionsForRole = function(role, opts) {
      return this.setPermissionsForRoleWithHttpInfo(role, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set roles for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {Number} userId The user&#39;s id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.rolesList The list of unique roles
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResource} and HTTP response
     */
    this.setUserRolesWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = opts['rolesList'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setUserRoles");
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = UserResource;

      return this.apiClient.callApi(
        '/auth/users/{user_id}/roles', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set roles for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {Number} userId The user&#39;s id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.rolesList The list of unique roles
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResource}
     */
    this.setUserRoles = function(userId, opts) {
      return this.setUserRolesWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleResource} opts.roleResource The role resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RoleResource} and HTTP response
     */
    this.updateRoleWithHttpInfo = function(role, opts) {
      opts = opts || {};
      var postBody = opts['roleResource'];

      // verify the required parameter 'role' is set
      if (role === undefined || role === null) {
        throw new Error("Missing the required parameter 'role' when calling updateRole");
      }


      var pathParams = {
        'role': role
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
      var returnType = RoleResource;

      return this.apiClient.callApi(
        '/auth/roles/{role}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a role
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ROLES_ADMIN
     * @param {String} role The role value
     * @param {Object} opts Optional parameters
     * @param {module:model/RoleResource} opts.roleResource The role resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RoleResource}
     */
    this.updateRole = function(role, opts) {
      return this.updateRoleWithHttpInfo(role, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
