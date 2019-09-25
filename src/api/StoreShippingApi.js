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
    define(['ApiClient', 'model/ItemTemplateResource', 'model/PageResourceItemTemplateResource', 'model/PatchResource', 'model/Result', 'model/ShippingItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ItemTemplateResource'), require('../model/PageResourceItemTemplateResource'), require('../model/PatchResource'), require('../model/Result'), require('../model/ShippingItem'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.StoreShippingApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ItemTemplateResource, root.KnetikCloud.PageResourceItemTemplateResource, root.KnetikCloud.PatchResource, root.KnetikCloud.Result, root.KnetikCloud.ShippingItem);
  }
}(this, function(ApiClient, ItemTemplateResource, PageResourceItemTemplateResource, PatchResource, Result, ShippingItem) {
  'use strict';

  /**
   * StoreShipping service.
   * @module api/StoreShippingApi
   * @version 3.0.271
   */

  /**
   * Constructs a new StoreShippingApi. 
   * @alias module:api/StoreShippingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a shipping item
     * A shipping item represents a shipping option and cost. SKUs have to be unique in the entire store. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHIPPING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/ShippingItem} opts.shippingItem The shipping item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingItem} and HTTP response
     */
    this.createShippingItemWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['shippingItem'];


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
      var returnType = ShippingItem;

      return this.apiClient.callApi(
        '/store/shipping', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a shipping item
     * A shipping item represents a shipping option and cost. SKUs have to be unique in the entire store. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHIPPING_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/ShippingItem} opts.shippingItem The shipping item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingItem}
     */
    this.createShippingItem = function(opts) {
      return this.createShippingItemWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a shipping template
     * Shipping Templates define a type of shipping and the properties they have.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.shippingTemplateResource The new shipping template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.createShippingTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['shippingTemplateResource'];


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
        '/store/shipping/templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a shipping template
     * Shipping Templates define a type of shipping and the properties they have.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.shippingTemplateResource The new shipping template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.createShippingTemplate = function(opts) {
      return this.createShippingTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a shipping item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHIPPING_ADMIN
     * @param {Number} id The id of the shipping item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteShippingItemWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteShippingItem");
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
        '/store/shipping/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a shipping item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHIPPING_ADMIN
     * @param {Number} id The id of the shipping item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteShippingItem = function(id) {
      return this.deleteShippingItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a shipping template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteShippingTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteShippingTemplate");
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
        '/store/shipping/templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a shipping template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteShippingTemplate = function(id, opts) {
      return this.deleteShippingTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single shipping item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The id of the shipping item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingItem} and HTTP response
     */
    this.getShippingItemWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getShippingItem");
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
      var returnType = ShippingItem;

      return this.apiClient.callApi(
        '/store/shipping/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single shipping item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Number} id The id of the shipping item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingItem}
     */
    this.getShippingItem = function(id) {
      return this.getShippingItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single shipping template
     * Shipping Templates define a type of shipping and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.getShippingTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getShippingTemplate");
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
        '/store/shipping/templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single shipping template
     * Shipping Templates define a type of shipping and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.getShippingTemplate = function(id) {
      return this.getShippingTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search shipping templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceItemTemplateResource} and HTTP response
     */
    this.getShippingTemplatesWithHttpInfo = function(opts) {
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
        '/store/shipping/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search shipping templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceItemTemplateResource}
     */
    this.getShippingTemplates = function(opts) {
      return this.getShippingTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a shipping item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHIPPING_ADMIN
     * @param {Number} id The id of the shipping item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/ShippingItem} opts.shippingItem The shipping item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingItem} and HTTP response
     */
    this.updateShippingItemWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['shippingItem'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateShippingItem");
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
      var returnType = ShippingItem;

      return this.apiClient.callApi(
        '/store/shipping/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a shipping item
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHIPPING_ADMIN
     * @param {Number} id The id of the shipping item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/ShippingItem} opts.shippingItem The shipping item object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingItem}
     */
    this.updateShippingItem = function(id, opts) {
      return this.updateShippingItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a shipping template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchResource} opts.templatePatchResource The patch resource object
     * @param {Boolean} opts.testValidation If true, this will test validation but not submit the patch request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemTemplateResource} and HTTP response
     */
    this.updateShippingTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['templatePatchResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateShippingTemplate");
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
        '/store/shipping/templates/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a shipping template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchResource} opts.templatePatchResource The patch resource object
     * @param {Boolean} opts.testValidation If true, this will test validation but not submit the patch request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemTemplateResource}
     */
    this.updateShippingTemplate = function(id, opts) {
      return this.updateShippingTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
