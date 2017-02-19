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
    define(['ApiClient', 'model/CouponItem', 'model/ItemTemplateResource', 'model/PageResourceItemTemplateResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CouponItem'), require('../model/ItemTemplateResource'), require('../model/PageResourceItemTemplateResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreCouponsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.CouponItem, root.KnetikPlatformApiDocumentationLatest.ItemTemplateResource, root.KnetikPlatformApiDocumentationLatest.PageResourceItemTemplateResource, root.KnetikPlatformApiDocumentationLatest.Result);
  }
}(this, function(ApiClient, CouponItem, ItemTemplateResource, PageResourceItemTemplateResource, Result) {
  'use strict';

  /**
   * StoreCoupons service.
   * @module api/StoreCouponsApi
   * @version latest

   */

  /**
   * Constructs a new StoreCouponsApi. 
   * @alias module:api/StoreCouponsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCouponItem operation.
     * @callback module:api/StoreCouponsApi~createCouponItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CouponItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a coupon item
     * SKUs have to be unique in the entire store.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/CouponItem} opts.couponItem The coupon item object
     * @param {module:api/StoreCouponsApi~createCouponItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CouponItem}
     */
    this.createCouponItem = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['couponItem'];


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
      var returnType = CouponItem;

      return this.apiClient.callApi(
        '/store/coupons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCouponTemplate operation.
     * @callback module:api/StoreCouponsApi~createCouponTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a coupon template
     * Coupon Templates define a type of coupon and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.couponTemplateResource The new coupon template
     * @param {module:api/StoreCouponsApi~createCouponTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.createCouponTemplate = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['couponTemplateResource'];


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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/coupons/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCouponItem operation.
     * @callback module:api/StoreCouponsApi~deleteCouponItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a coupon item
     * @param {Number} id The id of the coupon
     * @param {module:api/StoreCouponsApi~deleteCouponItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCouponItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCouponItem");
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
        '/store/coupons/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCouponTemplate operation.
     * @callback module:api/StoreCouponsApi~deleteCouponTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a coupon template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @param {module:api/StoreCouponsApi~deleteCouponTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCouponTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCouponTemplate");
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
        '/store/coupons/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCouponItem operation.
     * @callback module:api/StoreCouponsApi~getCouponItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CouponItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single coupon item
     * @param {Number} id The id of the coupon
     * @param {module:api/StoreCouponsApi~getCouponItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CouponItem}
     */
    this.getCouponItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getCouponItem");
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
      var returnType = CouponItem;

      return this.apiClient.callApi(
        '/store/coupons/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCouponTemplate operation.
     * @callback module:api/StoreCouponsApi~getCouponTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single coupon template
     * Coupon Templates define a type of coupon and the properties they have.
     * @param {String} id The id of the template
     * @param {module:api/StoreCouponsApi~getCouponTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.getCouponTemplate = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getCouponTemplate");
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/coupons/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCouponTemplates operation.
     * @callback module:api/StoreCouponsApi~getCouponTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search coupon templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreCouponsApi~getCouponTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceItemTemplateResource}
     */
    this.getCouponTemplates = function(opts, callback) {
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
      var returnType = PageResourceItemTemplateResource;

      return this.apiClient.callApi(
        '/store/coupons/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCouponItem operation.
     * @callback module:api/StoreCouponsApi~updateCouponItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CouponItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a coupon item
     * @param {Number} id The id of the coupon
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values. (default to false)
     * @param {module:model/CouponItem} opts.couponItem The coupon item object
     * @param {module:api/StoreCouponsApi~updateCouponItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CouponItem}
     */
    this.updateCouponItem = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['couponItem'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateCouponItem");
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
      var returnType = CouponItem;

      return this.apiClient.callApi(
        '/store/coupons/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCouponTemplate operation.
     * @callback module:api/StoreCouponsApi~updateCouponTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ItemTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a coupon template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTemplateResource} opts.couponTemplateResource The coupon template resource object
     * @param {module:api/StoreCouponsApi~updateCouponTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ItemTemplateResource}
     */
    this.updateCouponTemplate = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['couponTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateCouponTemplate");
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
      var returnType = ItemTemplateResource;

      return this.apiClient.callApi(
        '/store/coupons/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
