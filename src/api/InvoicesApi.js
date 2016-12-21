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
    define(['ApiClient', 'model/AddressResource', 'model/InvoiceCreateRequest', 'model/InvoicePaymentStatusRequest', 'model/InvoiceResource', 'model/PageResourceInvoiceLogEntry', 'model/PageResourceInvoiceResource', 'model/PayBySavedMethodRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddressResource'), require('../model/InvoiceCreateRequest'), require('../model/InvoicePaymentStatusRequest'), require('../model/InvoiceResource'), require('../model/PageResourceInvoiceLogEntry'), require('../model/PageResourceInvoiceResource'), require('../model/PayBySavedMethodRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.InvoicesApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.AddressResource, root.KnetikPlatformApiDocumentationLatest.InvoiceCreateRequest, root.KnetikPlatformApiDocumentationLatest.InvoicePaymentStatusRequest, root.KnetikPlatformApiDocumentationLatest.InvoiceResource, root.KnetikPlatformApiDocumentationLatest.PageResourceInvoiceLogEntry, root.KnetikPlatformApiDocumentationLatest.PageResourceInvoiceResource, root.KnetikPlatformApiDocumentationLatest.PayBySavedMethodRequest);
  }
}(this, function(ApiClient, AddressResource, InvoiceCreateRequest, InvoicePaymentStatusRequest, InvoiceResource, PageResourceInvoiceLogEntry, PageResourceInvoiceResource, PayBySavedMethodRequest) {
  'use strict';

  /**
   * Invoices service.
   * @module api/InvoicesApi
   * @version Latest
   */

  /**
   * Constructs a new InvoicesApi. 
   * @alias module:api/InvoicesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createInvoiceUsingPOST operation.
     * @callback module:api/InvoicesApi~createInvoiceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InvoiceResource>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an invoice
     * Create an invoice(s) by providing a cart GUID. Note that there may be multiple invoices created, one per vendor.
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoiceCreateRequest} opts.req Invoice to be created
     * @param {module:api/InvoicesApi~createInvoiceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InvoiceResource>}
     */
    this.createInvoiceUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['req'];


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
      var returnType = [InvoiceResource];

      return this.apiClient.callApi(
        '/invoices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceHistoryUsingGET operation.
     * @callback module:api/InvoicesApi~getInvoiceHistoryUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceInvoiceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve invoices
     * Without INVOICES_ADMIN permission the results are automatically filtered for only the logged in user&#39;s invoices. It is recomended however that filter_user be added to avoid issues for admin users accidentally getting additional invoices.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterUser The id of a user to get invoices for. Automtically added if not being called with admin permissions.
     * @param {String} opts.filterEmail Filters invoices by customer&#39;s email. Admins only.
     * @param {String} opts.filterFulfillmentStatus Filters invoices by fulfillment status type. Can be a comma separated list of statuses
     * @param {String} opts.filterPaymentStatus Filters invoices by payment status type. Can be a comma separated list of statuses
     * @param {String} opts.filterItemName Filters invoices by item name containing the given string
     * @param {String} opts.filterCreatedDate Filters invoices by creation date. Multiple values possible for range search. Format: filter_created_date&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ) and ts is a unix timestamp in seconds. Ex: filter_created_date&#x3D;GT,1452154258,LT,1554254874
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/InvoicesApi~getInvoiceHistoryUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceInvoiceResource}
     */
    this.getInvoiceHistoryUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_user': opts['filterUser'],
        'filter_email': opts['filterEmail'],
        'filter_fulfillment_status': opts['filterFulfillmentStatus'],
        'filter_payment_status': opts['filterPaymentStatus'],
        'filter_item_name': opts['filterItemName'],
        'filter_created_date': opts['filterCreatedDate'],
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
      var returnType = PageResourceInvoiceResource;

      return this.apiClient.callApi(
        '/invoices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvoiceUsingGET operation.
     * @callback module:api/InvoicesApi~getInvoiceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InvoiceResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an invoice
     * The postal code associated with the invoice may be required for security purposes if the invoice has one set and the config postal_code_required is set to true. Send &#39;none&#39; if the invoice has no postal code.
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {String} opts.postalCode The postal code of the invoice or &#39;none&#39;.
     * @param {module:api/InvoicesApi~getInvoiceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InvoiceResource}
     */
    this.getInvoiceUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getInvoiceUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'postal_code': opts['postalCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InvoiceResource;

      return this.apiClient.callApi(
        '/invoices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLogsUsingGET operation.
     * @callback module:api/InvoicesApi~getLogsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceInvoiceLogEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List invoice logs
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {module:api/InvoicesApi~getLogsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceInvoiceLogEntry}
     */
    this.getLogsUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getLogsUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['knetik_oauth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceInvoiceLogEntry;

      return this.apiClient.callApi(
        '/invoices/{id}/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listFulFillmentStatusesUsingGET operation.
     * @callback module:api/InvoicesApi~listFulFillmentStatusesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists available fulfillment statuses
     * @param {module:api/InvoicesApi~listFulFillmentStatusesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.listFulFillmentStatusesUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/invoices/fulfillment-statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPaymentStatusesUsingGET operation.
     * @callback module:api/InvoicesApi~listPaymentStatusesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists available payment statuses
     * @param {module:api/InvoicesApi~listPaymentStatusesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<'String'>}
     */
    this.listPaymentStatusesUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/invoices/payment-statuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the payInvoiceUsingPOST operation.
     * @callback module:api/InvoicesApi~payInvoiceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trigger payment of an invoice
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/PayBySavedMethodRequest} opts.request Payment info
     * @param {module:api/InvoicesApi~payInvoiceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.payInvoiceUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling payInvoiceUsingPOST");
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
        '/invoices/{id}/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setItemFulfillmentStatusUsingPUT operation.
     * @callback module:api/InvoicesApi~setItemFulfillmentStatusUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the fulfillment status of an invoice item
     * This allows external fulfillment systems to report success or failure. Fulfillment status changes are restricted by a specific flow determining which status can lead to which.
     * @param {Number} id The id of the invoice
     * @param {String} sku The sku of an item in the invoice
     * @param {String} status The new fulfillment status for the item. Additional options may be available based on configuration.  Allowable values:  &#39;unfulfilled&#39;, &#39;fulfilled&#39;, &#39;not fulfillable&#39;, &#39;failed&#39;, &#39;processing&#39;, &#39;failed_permanent&#39;, &#39;delayed&#39;
     * @param {module:api/InvoicesApi~setItemFulfillmentStatusUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setItemFulfillmentStatusUsingPUT = function(id, sku, status, callback) {
      var postBody = status;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling setItemFulfillmentStatusUsingPUT");
      }

      // verify the required parameter 'sku' is set
      if (sku == undefined || sku == null) {
        throw new Error("Missing the required parameter 'sku' when calling setItemFulfillmentStatusUsingPUT");
      }

      // verify the required parameter 'status' is set
      if (status == undefined || status == null) {
        throw new Error("Missing the required parameter 'status' when calling setItemFulfillmentStatusUsingPUT");
      }


      var pathParams = {
        'id': id,
        'sku': sku
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
        '/invoices/{id}/items/{sku}/fulfillment-status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setOrderNotesUsingPUT operation.
     * @callback module:api/InvoicesApi~setOrderNotesUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the order notes of an invoice
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderNotes Payment status info
     * @param {module:api/InvoicesApi~setOrderNotesUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setOrderNotesUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['orderNotes'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling setOrderNotesUsingPUT");
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
        '/invoices/{id}/order-notes', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setPaymentStatusUsingPUT operation.
     * @callback module:api/InvoicesApi~setPaymentStatusUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the payment status of an invoice
     * This may trigger fulfillment if setting the status to &#39;paid&#39;. This is mainly intended to support external payment systems that cannot be incorporated into the payment method system. Payment status changes are restricted by a specific flow determining which status can lead to which.
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoicePaymentStatusRequest} opts.request Payment status info
     * @param {module:api/InvoicesApi~setPaymentStatusUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.setPaymentStatusUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling setPaymentStatusUsingPUT");
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
        '/invoices/{id}/payment-status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBillingInfoUsingPUT operation.
     * @callback module:api/InvoicesApi~updateBillingInfoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set or update billing info
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/AddressResource} opts.billingInfoRequest Address info
     * @param {module:api/InvoicesApi~updateBillingInfoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateBillingInfoUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['billingInfoRequest'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateBillingInfoUsingPUT");
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
        '/invoices/{id}/billing-address', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
