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
    define(['ApiClient', 'model/BasicTemplatedResource', 'model/PageResourceTemplateResource', 'model/PatchResource', 'model/Result', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BasicTemplatedResource'), require('../model/PageResourceTemplateResource'), require('../model/PatchResource'), require('../model/Result'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.TemplatesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BasicTemplatedResource, root.KnetikCloud.PageResourceTemplateResource, root.KnetikCloud.PatchResource, root.KnetikCloud.Result, root.KnetikCloud.TemplateResource);
  }
}(this, function(ApiClient, BasicTemplatedResource, PageResourceTemplateResource, PatchResource, Result, TemplateResource) {
  'use strict';

  /**
   * Templates service.
   * @module api/TemplatesApi
   * @version 3.0.11
   */

  /**
   * Constructs a new TemplatesApi. 
   * @alias module:api/TemplatesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {String} typeHint The type for the resource this template applies to
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.template The template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.createTemplateWithHttpInfo = function(typeHint, opts) {
      opts = opts || {};
      var postBody = opts['template'];

      // verify the required parameter 'typeHint' is set
      if (typeHint === undefined || typeHint === null) {
        throw new Error("Missing the required parameter 'typeHint' when calling createTemplate");
      }


      var pathParams = {
        'type_hint': typeHint
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/templates/{type_hint}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {String} typeHint The type for the resource this template applies to
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.template The template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.createTemplate = function(typeHint, opts) {
      return this.createTemplateWithHttpInfo(typeHint, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} typeHint The type for the resource this template applies to
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade How to cascade the delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteTemplateWithHttpInfo = function(typeHint, id, opts) {
      opts = opts || {};
      var postBody = opts['cascade'];

      // verify the required parameter 'typeHint' is set
      if (typeHint === undefined || typeHint === null) {
        throw new Error("Missing the required parameter 'typeHint' when calling deleteTemplate");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTemplate");
      }


      var pathParams = {
        'type_hint': typeHint,
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
        '/templates/{type_hint}/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} typeHint The type for the resource this template applies to
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade How to cascade the delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteTemplate = function(typeHint, id, opts) {
      return this.deleteTemplateWithHttpInfo(typeHint, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} typeHint The type for the resource this template applies to
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.getTemplateWithHttpInfo = function(typeHint, id) {
      var postBody = null;

      // verify the required parameter 'typeHint' is set
      if (typeHint === undefined || typeHint === null) {
        throw new Error("Missing the required parameter 'typeHint' when calling getTemplate");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTemplate");
      }


      var pathParams = {
        'type_hint': typeHint,
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/templates/{type_hint}/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} typeHint The type for the resource this template applies to
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.getTemplate = function(typeHint, id) {
      return this.getTemplateWithHttpInfo(typeHint, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {String} typeHint The type for the resource this template applies to
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceTemplateResource} and HTTP response
     */
    this.getTemplatesWithHttpInfo = function(typeHint, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'typeHint' is set
      if (typeHint === undefined || typeHint === null) {
        throw new Error("Missing the required parameter 'typeHint' when calling getTemplates");
      }


      var pathParams = {
        'type_hint': typeHint
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
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/templates/{type_hint}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {String} typeHint The type for the resource this template applies to
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceTemplateResource}
     */
    this.getTemplates = function(typeHint, opts) {
      return this.getTemplatesWithHttpInfo(typeHint, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Patch a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} typeHint The type for the resource this template applies to
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchResource} opts.templatePatchResource The patch resource object
     * @param {Boolean} opts.testValidation If true, this will test validation but not submit the patch request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.patchTemplateWithHttpInfo = function(typeHint, id, opts) {
      opts = opts || {};
      var postBody = opts['templatePatchResource'];

      // verify the required parameter 'typeHint' is set
      if (typeHint === undefined || typeHint === null) {
        throw new Error("Missing the required parameter 'typeHint' when calling patchTemplate");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling patchTemplate");
      }


      var pathParams = {
        'type_hint': typeHint,
        'id': id
      };
      var queryParams = {
        'test_validation': opts['testValidation'],
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
      var returnType = null;

      return this.apiClient.callApi(
        '/templates/{type_hint}/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Patch a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} typeHint The type for the resource this template applies to
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchResource} opts.templatePatchResource The patch resource object
     * @param {Boolean} opts.testValidation If true, this will test validation but not submit the patch request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.patchTemplate = function(typeHint, id, opts) {
      return this.patchTemplateWithHttpInfo(typeHint, id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validate a templated resource
     * Error code thrown if invalid.&lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} typeHint The type for the resource this template applies to
     * @param {Object} opts Optional parameters
     * @param {module:model/BasicTemplatedResource} opts.resource The resource to validate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.validateWithHttpInfo = function(typeHint, opts) {
      opts = opts || {};
      var postBody = opts['resource'];

      // verify the required parameter 'typeHint' is set
      if (typeHint === undefined || typeHint === null) {
        throw new Error("Missing the required parameter 'typeHint' when calling validate");
      }


      var pathParams = {
        'type_hint': typeHint
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
      var returnType = null;

      return this.apiClient.callApi(
        '/templates/{type_hint}/validate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate a templated resource
     * Error code thrown if invalid.&lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} typeHint The type for the resource this template applies to
     * @param {Object} opts Optional parameters
     * @param {module:model/BasicTemplatedResource} opts.resource The resource to validate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.validate = function(typeHint, opts) {
      return this.validateWithHttpInfo(typeHint, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
