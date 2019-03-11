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
    define(['ApiClient', 'model/BundleItem', 'model/ItemTemplateResource', 'model/PageResourceItemTemplateResource', 'model/PatchResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BundleItem'), require('../model/ItemTemplateResource'), require('../model/PageResourceItemTemplateResource'), require('../model/PatchResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.StoreBundlesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.BundleItem, root.KnetikCloud.ItemTemplateResource, root.KnetikCloud.PageResourceItemTemplateResource, root.KnetikCloud.PatchResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, BundleItem, ItemTemplateResource, PageResourceItemTemplateResource, PatchResource, Result) {
  'use strict';

  /**
   * StoreBundles service.
   * @module api/StoreBundlesApi
   * @version 3.0.16
   */

  /**
   * Constructs a new StoreBundlesApi. 
   * @alias module:api/StoreBundlesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a bundle item
     * The SKU for the bundle itself must be unique and there can only be one SKU.  Extra notes for price_override:  The price of all the items (multiplied by the quantity) must equal the price of the bundle.  With individual prices set, items will be processed individually and can be refunded as such.  However, if all prices are set to null, the price of the bundle will be used and will be treated as one item. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BUNDLES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/BundleItem} opts.bundleItem The bundle item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BundleItem} and HTTP response
     */
    this.createBundleItemWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['bundleItem'];


      var pathParams = {
      };
      var queryParams = {
        'cascade': opts['cascade'],
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
      var returnType = BundleItem;

      return this.apiClient.callApi(
        '/store/bundles', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a bundle item
     * The SKU for the bundle itself must be unique and there can only be one SKU.  Extra notes for price_override:  The price of all the items (multiplied by the quantity) must equal the price of the bundle.  With individual prices set, items will be processed individually and can be refunded as such.  However, if all prices are set to null, the price of the bundle will be used and will be treated as one item. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; BUNDLES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/BundleItem} opts.bundleItem The bundle item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BundleItem}
     */
    this.createBundleItem = function(opts) {
      return this.createBundleItemWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a bundle template
     * Bundle Templates define a type of bundle and the properties they have.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.bundleTemplateResource The new bundle template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.createBundleTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['bundleTemplateResource'];


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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/bundles/templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a bundle template
     * Bundle Templates define a type of bundle and the properties they have.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.bundleTemplateResource The new bundle template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.createBundleTemplate = function(opts) {
      return this.createBundleTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a bundle item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BUNDLES_ADMIN
     * @param {Number} id The id of the bundle
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteBundleItemWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBundleItem");
      }


      var pathParams = {
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
        '/store/bundles/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a bundle item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BUNDLES_ADMIN
     * @param {Number} id The id of the bundle
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteBundleItem = function(id) {
      return this.deleteBundleItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a bundle template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteBundleTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBundleTemplate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade'],
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
        '/store/bundles/templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a bundle template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteBundleTemplate = function(id, opts) {
      return this.deleteBundleTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single bundle item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The id of the bundle
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BundleItem} and HTTP response
     */
    this.getBundleItemWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBundleItem");
      }


      var pathParams = {
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
      var returnType = BundleItem;

      return this.apiClient.callApi(
        '/store/bundles/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single bundle item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The id of the bundle
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BundleItem}
     */
    this.getBundleItem = function(id) {
      return this.getBundleItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single bundle template
     * Bundle Templates define a type of bundle and the properties they have.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.getBundleTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBundleTemplate");
      }


      var pathParams = {
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/bundles/templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single bundle template
     * Bundle Templates define a type of bundle and the properties they have.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.getBundleTemplate = function(id) {
      return this.getBundleTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search bundle templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceItemTemplateResource} and HTTP response
     */
    this.getBundleTemplatesWithHttpInfo = function(opts) {
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
      var returnType = PageResourceItemTemplateResource;

      return this.apiClient.callApi(
        '/store/bundles/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search bundle templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceItemTemplateResource}
     */
    this.getBundleTemplates = function(opts) {
      return this.getBundleTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a bundle item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BUNDLES_ADMIN
     * @param {Number} id The id of the bundle
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/BundleItem} opts.bundleItem The bundle item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BundleItem} and HTTP response
     */
    this.updateBundleItemWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['bundleItem'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBundleItem");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade'],
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
      var returnType = BundleItem;

      return this.apiClient.callApi(
        '/store/bundles/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a bundle item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BUNDLES_ADMIN
     * @param {Number} id The id of the bundle
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/BundleItem} opts.bundleItem The bundle item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BundleItem}
     */
    this.updateBundleItem = function(id, opts) {
      return this.updateBundleItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a bundle template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchResource} opts.templatePatchResource The patch resource object
     * @param {Boolean} opts.testValidation If true, this will test validation but not submit the patch request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.updateBundleTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['templatePatchResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBundleTemplate");
      }


      var pathParams = {
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/bundles/templates/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a bundle template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchResource} opts.templatePatchResource The patch resource object
     * @param {Boolean} opts.testValidation If true, this will test validation but not submit the patch request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.updateBundleTemplate = function(id, opts) {
      return this.updateBundleTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
