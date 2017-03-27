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
    define(['ApiClient', 'model/BehaviorDefinitionResource', 'model/PageResourceStoreItem', 'model/PageResourceStoreItemTemplateResource', 'model/Result', 'model/StoreItem', 'model/StoreItemTemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BehaviorDefinitionResource'), require('../model/PageResourceStoreItem'), require('../model/PageResourceStoreItemTemplateResource'), require('../model/Result'), require('../model/StoreItem'), require('../model/StoreItemTemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.BehaviorDefinitionResource, root.KnetikPlatformApiDocumentationLatest.PageResourceStoreItem, root.KnetikPlatformApiDocumentationLatest.PageResourceStoreItemTemplateResource, root.KnetikPlatformApiDocumentationLatest.Result, root.KnetikPlatformApiDocumentationLatest.StoreItem, root.KnetikPlatformApiDocumentationLatest.StoreItemTemplateResource);
  }
}(this, function(ApiClient, BehaviorDefinitionResource, PageResourceStoreItem, PageResourceStoreItemTemplateResource, Result, StoreItem, StoreItemTemplateResource) {
  'use strict';

  /**
   * Store service.
   * @module api/StoreApi
   * @version latest

   */

  /**
   * Constructs a new StoreApi. 
   * @alias module:api/StoreApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createItemTemplate operation.
     * @callback module:api/StoreApi~createItemTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoreItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an item template
     * Item Templates define a type of item and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/StoreItemTemplateResource} opts.itemTemplateResource The new item template
     * @param {module:api/StoreApi~createItemTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StoreItemTemplateResource}
     */
    this.createItemTemplate = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['itemTemplateResource'];


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
      var returnType = StoreItemTemplateResource;

      return this.apiClient.callApi(
        '/store/items/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createStoreItem operation.
     * @callback module:api/StoreApi~createStoreItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoreItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a store item
     * SKUs have to be unique in the entire store. If a duplicate SKU is found, a 400 error is generated and the response will have a \&quot;parameters\&quot; field that is a list of duplicates. A duplicate is an object like {item_id, offending_sku_list}. Ex:&lt;br /&gt; {..., parameters: [[{item: 1, skus: [\&quot;SKU-1\&quot;]}]]}&lt;br /&gt; If an item is brand new and has duplicate SKUs within itself, the item ID will be 0.  Item subclasses are not allowed here, you will have to use their respective endpoints.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/StoreItem} opts.storeItem The store item object
     * @param {module:api/StoreApi~createStoreItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StoreItem}
     */
    this.createStoreItem = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['storeItem'];


      var pathParams = {
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
      var returnType = StoreItem;

      return this.apiClient.callApi(
        '/store/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteItemTemplate operation.
     * @callback module:api/StoreApi~deleteItemTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an item template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @param {module:api/StoreApi~deleteItemTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteItemTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteItemTemplate");
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
        '/store/items/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStoreItem operation.
     * @callback module:api/StoreApi~deleteStoreItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a store item
     * @param {Number} id The id of the item
     * @param {module:api/StoreApi~deleteStoreItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteStoreItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteStoreItem");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/store/items/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBehaviors operation.
     * @callback module:api/StoreApi~getBehaviorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BehaviorDefinitionResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available item behaviors
     * @param {module:api/StoreApi~getBehaviorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BehaviorDefinitionResource>}
     */
    this.getBehaviors = function(callback) {
      var postBody = null;


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
      var returnType = [BehaviorDefinitionResource];

      return this.apiClient.callApi(
        '/store/items/behaviors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemTemplate operation.
     * @callback module:api/StoreApi~getItemTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoreItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single item template
     * Item Templates define a type of item and the properties they have.
     * @param {String} id The id of the template
     * @param {module:api/StoreApi~getItemTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StoreItemTemplateResource}
     */
    this.getItemTemplate = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getItemTemplate");
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
      var returnType = StoreItemTemplateResource;

      return this.apiClient.callApi(
        '/store/items/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getItemTemplates operation.
     * @callback module:api/StoreApi~getItemTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceStoreItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search item templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreApi~getItemTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceStoreItemTemplateResource}
     */
    this.getItemTemplates = function(opts, callback) {
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
      var returnType = PageResourceStoreItemTemplateResource;

      return this.apiClient.callApi(
        '/store/items/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStore operation.
     * @callback module:api/StoreApi~getStoreCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceStoreItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a listing of store items
     * The exact structure of each items may differ to include fields specific to the type. The same is true for behaviors.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The amount of items returned
     * @param {Number} opts.page The page of the request
     * @param {Boolean} opts.useCatalog Whether to remove items that are not intended for display or not in date
     * @param {Boolean} opts.ignoreLocation Whether to ignore country restrictions based on the caller&#39;s location
     * @param {Boolean} opts.inStockOnly Whether only in-stock items should be returned.  Default value is false (default to false)
     * @param {module:api/StoreApi~getStoreCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceStoreItem}
     */
    this.getStore = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'page': opts['page'],
        'use_catalog': opts['useCatalog'],
        'ignore_location': opts['ignoreLocation'],
        'in_stock_only': opts['inStockOnly']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceStoreItem;

      return this.apiClient.callApi(
        '/store', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStoreItem operation.
     * @callback module:api/StoreApi~getStoreItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoreItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single store item
     * @param {Number} id The id of the item
     * @param {module:api/StoreApi~getStoreItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StoreItem}
     */
    this.getStoreItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStoreItem");
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
      var returnType = StoreItem;

      return this.apiClient.callApi(
        '/store/items/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStoreItems operation.
     * @callback module:api/StoreApi~getStoreItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceStoreItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search store items
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterNameSearch Filter for items whose name starts with a given string.
     * @param {String} opts.filterUniqueKey Filter for items whose unique_key is a given string.
     * @param {Boolean} opts.filterPublished Filter for skus that have been published.
     * @param {Boolean} opts.filterDisplayable Filter for items that are displayable.
     * @param {String} opts.filterStart A comma separated string without spaces.  First value is the operator to search on, second value is the store start date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterEnd A comma separated string without spaces.  First value is the operator to search on, second value is the store end date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the sku start date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterStopDate A comma separated string without spaces.  First value is the operator to search on, second value is the sku end date, a unix timestamp in seconds.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterSku Filter for skus whose name starts with a given string.
     * @param {String} opts.filterPrice A colon separated string without spaces.  First value is the operator to search on, second value is the price of a sku.  Allowed operators: (LT, GT, LTE, GTE, EQ).
     * @param {String} opts.filterTag A comma separated list without spaces of the names of tags. Will only return items with at least one of the tags.
     * @param {String} opts.filterItemsByType Filter for item type based on its type hint.
     * @param {String} opts.filterBundledSkus Filter for skus inside bundles whose name starts with a given string.  Used only when type hint is &#39;bundle_item&#39;
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreApi~getStoreItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceStoreItem}
     */
    this.getStoreItems = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_name_search': opts['filterNameSearch'],
        'filter_unique_key': opts['filterUniqueKey'],
        'filter_published': opts['filterPublished'],
        'filter_displayable': opts['filterDisplayable'],
        'filter_start': opts['filterStart'],
        'filter_end': opts['filterEnd'],
        'filter_start_date': opts['filterStartDate'],
        'filter_stop_date': opts['filterStopDate'],
        'filter_sku': opts['filterSku'],
        'filter_price': opts['filterPrice'],
        'filter_tag': opts['filterTag'],
        'filter_items_by_type': opts['filterItemsByType'],
        'filter_bundled_skus': opts['filterBundledSkus'],
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
      var returnType = PageResourceStoreItem;

      return this.apiClient.callApi(
        '/store/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateItemTemplate operation.
     * @callback module:api/StoreApi~updateItemTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoreItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an item template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/StoreItemTemplateResource} opts.itemTemplateResource The item template resource object
     * @param {module:api/StoreApi~updateItemTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StoreItemTemplateResource}
     */
    this.updateItemTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['itemTemplateResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateItemTemplate");
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
      var returnType = StoreItemTemplateResource;

      return this.apiClient.callApi(
        '/store/items/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStoreItem operation.
     * @callback module:api/StoreApi~updateStoreItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StoreItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a store item
     * @param {Number} id The id of the item
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/StoreItem} opts.storeItem The store item object
     * @param {module:api/StoreApi~updateStoreItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StoreItem}
     */
    this.updateStoreItem = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['storeItem'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateStoreItem");
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
      var returnType = StoreItem;

      return this.apiClient.callApi(
        '/store/items/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
