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
    define(['ApiClient', 'model/PageResourceSubscriptionResource', 'model/PageResourceSubscriptionTemplateResource', 'model/SubscriptionResource', 'model/SubscriptionTemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSubscriptionResource'), require('../model/PageResourceSubscriptionTemplateResource'), require('../model/SubscriptionResource'), require('../model/SubscriptionTemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.StoreSubscriptionsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourceSubscriptionResource, root.KnetikPlatformApiDocumentationLatest.PageResourceSubscriptionTemplateResource, root.KnetikPlatformApiDocumentationLatest.SubscriptionResource, root.KnetikPlatformApiDocumentationLatest.SubscriptionTemplateResource);
  }
}(this, function(ApiClient, PageResourceSubscriptionResource, PageResourceSubscriptionTemplateResource, SubscriptionResource, SubscriptionTemplateResource) {
  'use strict';

  /**
   * StoreSubscriptions service.
   * @module api/StoreSubscriptionsApi
   * @version Latest
   */

  /**
   * Constructs a new StoreSubscriptionsApi. 
   * @alias module:api/StoreSubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSubscriptionTemplateUsingPOST operation.
     * @callback module:api/StoreSubscriptionsApi~createSubscriptionTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a subscription template
     * Subscription Templates define a type of subscription and the properties they have.
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionTemplateResource} opts.subscriptionTemplateResource The new subscription template
     * @param {module:api/StoreSubscriptionsApi~createSubscriptionTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionTemplateResource}
     */
    this.createSubscriptionTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionTemplateResource'];


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
      var returnType = SubscriptionTemplateResource;

      return this.apiClient.callApi(
        '/subscriptions/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSubscriptionUsingPOST operation.
     * @callback module:api/StoreSubscriptionsApi~createSubscriptionUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a subscription item and associated plans
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionResource} opts.subscriptionResource The subscription to be created
     * @param {module:api/StoreSubscriptionsApi~createSubscriptionUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionResource}
     */
    this.createSubscriptionUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionResource'];


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
      var returnType = SubscriptionResource;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePlanUsingDELETE operation.
     * @callback module:api/StoreSubscriptionsApi~deletePlanUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a subscription plan
     * Must not be locked or a migration target
     * @param {Number} id The id of the subscription
     * @param {String} planId The id of the plan
     * @param {module:api/StoreSubscriptionsApi~deletePlanUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePlanUsingDELETE = function(id, planId, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deletePlanUsingDELETE");
      }

      // verify the required parameter 'planId' is set
      if (planId == undefined || planId == null) {
        throw new Error("Missing the required parameter 'planId' when calling deletePlanUsingDELETE");
      }


      var pathParams = {
        'id': id,
        'plan_id': planId
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
        '/subscriptions/{id}/plans/{plan_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSubscriptionTemplateUsingDELETE operation.
     * @callback module:api/StoreSubscriptionsApi~deleteSubscriptionTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a subscription template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @param {module:api/StoreSubscriptionsApi~deleteSubscriptionTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSubscriptionTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSubscriptionTemplateUsingDELETE");
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
        '/subscriptions/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscriptionTemplateUsingGET operation.
     * @callback module:api/StoreSubscriptionsApi~getSubscriptionTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single subscription template
     * Subscription Templates define a type of subscription and the properties they have.
     * @param {String} id The id of the template
     * @param {module:api/StoreSubscriptionsApi~getSubscriptionTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionTemplateResource}
     */
    this.getSubscriptionTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscriptionTemplateUsingGET");
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
      var returnType = SubscriptionTemplateResource;

      return this.apiClient.callApi(
        '/subscriptions/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscriptionTemplatesUsingGET operation.
     * @callback module:api/StoreSubscriptionsApi~getSubscriptionTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceSubscriptionTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search subscription templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreSubscriptionsApi~getSubscriptionTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceSubscriptionTemplateResource}
     */
    this.getSubscriptionTemplatesUsingGET = function(opts, callback) {
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
      var returnType = PageResourceSubscriptionTemplateResource;

      return this.apiClient.callApi(
        '/subscriptions/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscriptionUsingGET operation.
     * @callback module:api/StoreSubscriptionsApi~getSubscriptionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a single subscription item and associated plans
     * @param {Number} id The id of the subscription
     * @param {module:api/StoreSubscriptionsApi~getSubscriptionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionResource}
     */
    this.getSubscriptionUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscriptionUsingGET");
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
      var returnType = SubscriptionResource;

      return this.apiClient.callApi(
        '/subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSubscriptionsUsingGET operation.
     * @callback module:api/StoreSubscriptionsApi~listSubscriptionsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceSubscriptionResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available subscription items and associated plans
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/StoreSubscriptionsApi~listSubscriptionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceSubscriptionResource}
     */
    this.listSubscriptionsUsingGET = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceSubscriptionResource;

      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the processUsingPOST operation.
     * @callback module:api/StoreSubscriptionsApi~processUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Processes subscriptions and charge dues
     * @param {module:api/StoreSubscriptionsApi~processUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.processUsingPOST = function(callback) {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/subscriptions/process', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubscriptionTemplateUsingPUT operation.
     * @callback module:api/StoreSubscriptionsApi~updateSubscriptionTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a subscription template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionTemplateResource} opts.subscriptionTemplateResource The subscription template resource object
     * @param {module:api/StoreSubscriptionsApi~updateSubscriptionTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSubscriptionTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubscriptionTemplateUsingPUT");
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
        '/subscriptions/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSubscriptionUsingPUT operation.
     * @callback module:api/StoreSubscriptionsApi~updateSubscriptionUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a subscription item and associated plans
     * Will not remove plans left out
     * @param {Number} id The id of the subscription
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionResource} opts.subscriptionResource The subscription resource object
     * @param {module:api/StoreSubscriptionsApi~updateSubscriptionUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateSubscriptionUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubscriptionUsingPUT");
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
        '/subscriptions/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
