/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
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
    define(['ApiClient', 'model/BreCategoryResource', 'model/PageResourceBreCategoryResource', 'model/PageResourceTemplateResource', 'model/Result', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BreCategoryResource'), require('../model/PageResourceBreCategoryResource'), require('../model/PageResourceTemplateResource'), require('../model/Result'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikcloudSdk) {
      root.KnetikcloudSdk = {};
    }
    root.KnetikcloudSdk.BRERuleEngineCategoriesApi = factory(root.KnetikcloudSdk.ApiClient, root.KnetikcloudSdk.BreCategoryResource, root.KnetikcloudSdk.PageResourceBreCategoryResource, root.KnetikcloudSdk.PageResourceTemplateResource, root.KnetikcloudSdk.Result, root.KnetikcloudSdk.TemplateResource);
  }
}(this, function(ApiClient, BreCategoryResource, PageResourceBreCategoryResource, PageResourceTemplateResource, Result, TemplateResource) {
  'use strict';

  /**
   * BRERuleEngineCategories service.
   * @module api/BRERuleEngineCategoriesApi
   * @version latest

   */

  /**
   * Constructs a new BRERuleEngineCategoriesApi. 
   * @alias module:api/BRERuleEngineCategoriesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBRECategoryTemplate operation.
     * @callback module:api/BRERuleEngineCategoriesApi~createBRECategoryTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a BRE category template
     * Templates define a type of BRE category and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.template The category template to create
     * @param {module:api/BRERuleEngineCategoriesApi~createBRECategoryTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createBRECategoryTemplate = function(opts, callback) {
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

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/bre/categories/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBRECategoryTemplate operation.
     * @callback module:api/BRERuleEngineCategoriesApi~deleteBRECategoryTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a BRE category template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/BRERuleEngineCategoriesApi~deleteBRECategoryTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBRECategoryTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBRECategoryTemplate");
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
        '/bre/categories/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBRECategories operation.
     * @callback module:api/BRERuleEngineCategoriesApi~getBRECategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceBreCategoryResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List categories
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/BRERuleEngineCategoriesApi~getBRECategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceBreCategoryResource}
     */
    this.getBRECategories = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceBreCategoryResource;

      return this.apiClient.callApi(
        '/bre/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBRECategory operation.
     * @callback module:api/BRERuleEngineCategoriesApi~getBRECategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BreCategoryResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single category
     * @param {String} name The category name
     * @param {module:api/BRERuleEngineCategoriesApi~getBRECategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BreCategoryResource}
     */
    this.getBRECategory = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getBRECategory");
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
      var returnType = BreCategoryResource;

      return this.apiClient.callApi(
        '/bre/categories/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBRECategoryTemplate operation.
     * @callback module:api/BRERuleEngineCategoriesApi~getBRECategoryTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single BRE category template
     * @param {String} id The id of the template
     * @param {module:api/BRERuleEngineCategoriesApi~getBRECategoryTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getBRECategoryTemplate = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBRECategoryTemplate");
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
        '/bre/categories/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBRECategoryTemplates operation.
     * @callback module:api/BRERuleEngineCategoriesApi~getBRECategoryTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search BRE category templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/BRERuleEngineCategoriesApi~getBRECategoryTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getBRECategoryTemplates = function(opts, callback) {
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
        '/bre/categories/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBRECategory operation.
     * @callback module:api/BRERuleEngineCategoriesApi~updateBRECategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BreCategoryResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a category
     * @param {String} name The category name
     * @param {Object} opts Optional parameters
     * @param {module:model/BreCategoryResource} opts.category The updated BRE category information
     * @param {module:api/BRERuleEngineCategoriesApi~updateBRECategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BreCategoryResource}
     */
    this.updateBRECategory = function(name, opts, callback) {
      opts = opts || {};
      var postBody = opts['category'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateBRECategory");
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
      var returnType = BreCategoryResource;

      return this.apiClient.callApi(
        '/bre/categories/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBRECategoryTemplate operation.
     * @callback module:api/BRERuleEngineCategoriesApi~updateBRECategoryTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a BRE category template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.template The updated category template definition
     * @param {module:api/BRERuleEngineCategoriesApi~updateBRECategoryTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.updateBRECategoryTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['template'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBRECategoryTemplate");
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
        '/bre/categories/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
