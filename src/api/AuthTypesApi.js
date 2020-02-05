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
    define(['ApiClient', 'model/AccessResourceCreateRequest', 'model/AccessTypeResource', 'model/PageResourceAccessResultsResource', 'model/PageResourceAccessTypeResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessResourceCreateRequest'), require('../model/AccessTypeResource'), require('../model/PageResourceAccessResultsResource'), require('../model/PageResourceAccessTypeResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AuthTypesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.AccessResourceCreateRequest, root.KnetikCloud.AccessTypeResource, root.KnetikCloud.PageResourceAccessResultsResource, root.KnetikCloud.PageResourceAccessTypeResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, AccessResourceCreateRequest, AccessTypeResource, PageResourceAccessResultsResource, PageResourceAccessTypeResource, Result) {
  'use strict';

  /**
   * AuthTypes service.
   * @module api/AuthTypesApi
   * @version 3.1.4
   */

  /**
   * Constructs a new AuthTypesApi. 
   * @alias module:api/AuthTypesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get allowed action
     * Checks for which actions can be taken against a given resource by the caller. &lt;b&gt;Types Needed:&lt;/b&gt; any
     * @param {String} type The type value
     * @param {String} id The resource id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceAccessResultsResource} and HTTP response
     */
    this.allowedResourceActionsWithHttpInfo = function(type, id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling allowedResourceActions");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling allowedResourceActions");
      }


      var pathParams = {
        'type': type,
        'id': id
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
      var returnType = PageResourceAccessResultsResource;

      return this.apiClient.callApi(
        '/access/resources/{type}/{id}/actions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get allowed action
     * Checks for which actions can be taken against a given resource by the caller. &lt;b&gt;Types Needed:&lt;/b&gt; any
     * @param {String} type The type value
     * @param {String} id The resource id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceAccessResultsResource}
     */
    this.allowedResourceActions = function(type, id, opts) {
      return this.allowedResourceActionsWithHttpInfo(type, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get allowed actions on a type
     * Checks for which actions can be taken against a given type by the caller. &lt;b&gt;Types Needed:&lt;/b&gt; any
     * @param {String} type The type value
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceAccessResultsResource} and HTTP response
     */
    this.allowedTypeActionsWithHttpInfo = function(type, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling allowedTypeActions");
      }


      var pathParams = {
        'type': type
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
      var returnType = PageResourceAccessResultsResource;

      return this.apiClient.callApi(
        '/access/types/{type}/actions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get allowed actions on a type
     * Checks for which actions can be taken against a given type by the caller. &lt;b&gt;Types Needed:&lt;/b&gt; any
     * @param {String} type The type value
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceAccessResultsResource}
     */
    this.allowedTypeActions = function(type, opts) {
      return this.allowedTypeActionsWithHttpInfo(type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update resource
     * Creates the access control for a resource if it does not exist, and updates parent information if it does not.&lt;b&gt;Resources Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The resource type
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessResourceCreateRequest} opts.accessResource The access rules for the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccessTypeResource} and HTTP response
     */
    this.createResourceWithHttpInfo = function(type, opts) {
      opts = opts || {};
      var postBody = opts['accessResource'];

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling createResource");
      }


      var pathParams = {
        'type': type
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
      var returnType = AccessTypeResource;

      return this.apiClient.callApi(
        '/access/resources/{type}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update resource
     * Creates the access control for a resource if it does not exist, and updates parent information if it does not.&lt;b&gt;Resources Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The resource type
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessResourceCreateRequest} opts.accessResource The access rules for the resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessTypeResource}
     */
    this.createResource = function(type, opts) {
      return this.createResourceWithHttpInfo(type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new type
     * &lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessTypeResource} opts.typeResource The type resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccessTypeResource} and HTTP response
     */
    this.createTypeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['typeResource'];


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
      var returnType = AccessTypeResource;

      return this.apiClient.callApi(
        '/access/types', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new type
     * &lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessTypeResource} opts.typeResource The type resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessTypeResource}
     */
    this.createType = function(opts) {
      return this.createTypeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all resources of a type
     * &lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The type value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteAllOfTypeWithHttpInfo = function(type) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling deleteAllOfType");
      }


      var pathParams = {
        'type': type
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
        '/access/resources/{type}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete all resources of a type
     * &lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The type value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAllOfType = function(type) {
      return this.deleteAllOfTypeWithHttpInfo(type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a resource
     * Deletes a non-root level type&lt;br /&gt;&lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The type value
     * @param {String} id The resource id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteResourceWithHttpInfo = function(type, id) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling deleteResource");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteResource");
      }


      var pathParams = {
        'type': type,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/access/resources/{type}/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a resource
     * Deletes a non-root level type&lt;br /&gt;&lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The type value
     * @param {String} id The resource id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteResource = function(type, id) {
      return this.deleteResourceWithHttpInfo(type, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a root type
     * Deletes a root level type with no id&lt;br /&gt;&lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The type value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteTypeWithHttpInfo = function(type) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling deleteType");
      }


      var pathParams = {
        'type': type
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
        '/access/types/{type}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a root type
     * Deletes a root level type with no id&lt;br /&gt;&lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The type value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteType = function(type) {
      return this.deleteTypeWithHttpInfo(type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single resource
     * &lt;b&gt;Types Needed:&lt;/b&gt; VIEW_ACCESS
     * @param {String} type The type value
     * @param {String} id The resource id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccessTypeResource} and HTTP response
     */
    this.getResourceWithHttpInfo = function(type, id) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getResource");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getResource");
      }


      var pathParams = {
        'type': type,
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
      var returnType = AccessTypeResource;

      return this.apiClient.callApi(
        '/access/resources/{type}/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single resource
     * &lt;b&gt;Types Needed:&lt;/b&gt; VIEW_ACCESS
     * @param {String} type The type value
     * @param {String} id The resource id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessTypeResource}
     */
    this.getResource = function(type, id) {
      return this.getResourceWithHttpInfo(type, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search resources
     * &lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The type value
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterType Filter for a specific type
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to type:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceAccessTypeResource} and HTTP response
     */
    this.getResourcesWithHttpInfo = function(type, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getResources");
      }


      var pathParams = {
        'type': type
      };
      var queryParams = {
        'filter_type': opts['filterType'],
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
      var returnType = PageResourceAccessTypeResource;

      return this.apiClient.callApi(
        '/access/resources/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search resources
     * &lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {String} type The type value
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterType Filter for a specific type
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to type:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceAccessTypeResource}
     */
    this.getResources = function(type, opts) {
      return this.getResourcesWithHttpInfo(type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single root type
     * &lt;b&gt;Types Needed:&lt;/b&gt; VIEW_ACCESS
     * @param {String} type The type value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccessTypeResource} and HTTP response
     */
    this.getTypeWithHttpInfo = function(type) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getType");
      }


      var pathParams = {
        'type': type
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
      var returnType = AccessTypeResource;

      return this.apiClient.callApi(
        '/access/types/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single root type
     * &lt;b&gt;Types Needed:&lt;/b&gt; VIEW_ACCESS
     * @param {String} type The type value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessTypeResource}
     */
    this.getType = function(type) {
      return this.getTypeWithHttpInfo(type)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search types
     * &lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to type:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceAccessTypeResource} and HTTP response
     */
    this.getTypesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageResourceAccessTypeResource;

      return this.apiClient.callApi(
        '/access/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search types
     * &lt;b&gt;Types Needed:&lt;/b&gt; ROLE_SUPER_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to type:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceAccessTypeResource}
     */
    this.getTypes = function(opts) {
      return this.getTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a resource
     * &lt;b&gt;Types Needed:&lt;/b&gt; ACCESS_CONTROL
     * @param {String} type The type value
     * @param {String} id The resource id
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessTypeResource} opts.typeResource The resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccessTypeResource} and HTTP response
     */
    this.updateResourceWithHttpInfo = function(type, id, opts) {
      opts = opts || {};
      var postBody = opts['typeResource'];

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling updateResource");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateResource");
      }


      var pathParams = {
        'type': type,
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AccessTypeResource;

      return this.apiClient.callApi(
        '/access/resources/{type}/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a resource
     * &lt;b&gt;Types Needed:&lt;/b&gt; ACCESS_CONTROL
     * @param {String} type The type value
     * @param {String} id The resource id
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessTypeResource} opts.typeResource The resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessTypeResource}
     */
    this.updateResource = function(type, id, opts) {
      return this.updateResourceWithHttpInfo(type, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a root type
     * &lt;b&gt;Types Needed:&lt;/b&gt; ACCESS_CONTROL
     * @param {String} type The type value
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessTypeResource} opts.typeResource The type resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccessTypeResource} and HTTP response
     */
    this.updateTypeWithHttpInfo = function(type, opts) {
      opts = opts || {};
      var postBody = opts['typeResource'];

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling updateType");
      }


      var pathParams = {
        'type': type
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
      var returnType = AccessTypeResource;

      return this.apiClient.callApi(
        '/access/types/{type}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a root type
     * &lt;b&gt;Types Needed:&lt;/b&gt; ACCESS_CONTROL
     * @param {String} type The type value
     * @param {Object} opts Optional parameters
     * @param {module:model/AccessTypeResource} opts.typeResource The type resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessTypeResource}
     */
    this.updateType = function(type, opts) {
      return this.updateTypeWithHttpInfo(type, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
