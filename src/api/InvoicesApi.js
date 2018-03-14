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
    define(['ApiClient', 'model/AddressResource', 'model/InvoiceCreateRequest', 'model/InvoicePaymentStatusRequest', 'model/InvoiceResource', 'model/PageResourceInvoiceLogEntry', 'model/PageResourceInvoiceResource', 'model/PayBySavedMethodRequest', 'model/Result', 'model/StringWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddressResource'), require('../model/InvoiceCreateRequest'), require('../model/InvoicePaymentStatusRequest'), require('../model/InvoiceResource'), require('../model/PageResourceInvoiceLogEntry'), require('../model/PageResourceInvoiceResource'), require('../model/PayBySavedMethodRequest'), require('../model/Result'), require('../model/StringWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.InvoicesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.AddressResource, root.KnetikCloud.InvoiceCreateRequest, root.KnetikCloud.InvoicePaymentStatusRequest, root.KnetikCloud.InvoiceResource, root.KnetikCloud.PageResourceInvoiceLogEntry, root.KnetikCloud.PageResourceInvoiceResource, root.KnetikCloud.PayBySavedMethodRequest, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper);
  }
}(this, function(ApiClient, AddressResource, InvoiceCreateRequest, InvoicePaymentStatusRequest, InvoiceResource, PageResourceInvoiceLogEntry, PageResourceInvoiceResource, PayBySavedMethodRequest, Result, StringWrapper) {
  'use strict';

  /**
   * Invoices service.
   * @module api/InvoicesApi
   * @version 3.0.9
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
     * Create an invoice
     * Create an invoice(s) by providing a cart GUID. Note that there may be multiple invoices created, one per vendor. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER or INVOICES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoiceCreateRequest} opts.req Invoice to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/InvoiceResource>} and HTTP response
     */
    this.createInvoiceWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['req'];


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
      var returnType = [InvoiceResource];

      return this.apiClient.callApi(
        '/invoices', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an invoice
     * Create an invoice(s) by providing a cart GUID. Note that there may be multiple invoices created, one per vendor. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER or INVOICES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoiceCreateRequest} opts.req Invoice to be created
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InvoiceResource>}
     */
    this.createInvoice = function(opts) {
      return this.createInvoiceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists available fulfillment statuses
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<'String'>} and HTTP response
     */
    this.getFulFillmentStatusesWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/invoices/fulfillment-statuses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lists available fulfillment statuses
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */
    this.getFulFillmentStatuses = function() {
      return this.getFulFillmentStatusesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an invoice
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InvoiceResource} and HTTP response
     */
    this.getInvoiceWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvoice");
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
      var returnType = InvoiceResource;

      return this.apiClient.callApi(
        '/invoices/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve an invoice
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InvoiceResource}
     */
    this.getInvoice = function(id) {
      return this.getInvoiceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List invoice logs
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceInvoiceLogEntry} and HTTP response
     */
    this.getInvoiceLogsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInvoiceLogs");
      }


      var pathParams = {
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
      var returnType = PageResourceInvoiceLogEntry;

      return this.apiClient.callApi(
        '/invoices/{id}/logs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List invoice logs
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceInvoiceLogEntry}
     */
    this.getInvoiceLogs = function(id, opts) {
      return this.getInvoiceLogsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve invoices
     * Without INVOICES_ADMIN permission the results are automatically filtered for only the logged in user&#39;s invoices. It is recomended however that filter_user be added to avoid issues for admin users accidentally getting additional invoices. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterUser The id of a user to get invoices for. Automtically added if not being called with admin permissions.
     * @param {String} opts.filterEmail Filters invoices by customer&#39;s email. Admins only.
     * @param {String} opts.filterFulfillmentStatus Filters invoices by fulfillment status type. Can be a comma separated list of statuses
     * @param {String} opts.filterPaymentStatus Filters invoices by payment status type. Can be a comma separated list of statuses
     * @param {String} opts.filterItemName Filters invoices by item name containing the given string
     * @param {String} opts.filterExternalRef Filters invoices by external reference.
     * @param {String} opts.filterCreatedDate Filters invoices by creation date. Multiple values possible for range search. Format: filter_created_date&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ) and ts is a unix timestamp in seconds. Ex: filter_created_date&#x3D;GT,1452154258,LT,1554254874
     * @param {String} opts.filterVendorIds Filters invoices for ones from one of the vendors whose id is in the given comma separated list
     * @param {String} opts.filterCurrency Filters invoices by currency. ISO3 currency code
     * @param {String} opts.filterShippingStateName Filters invoices by shipping address: Exact match state name
     * @param {String} opts.filterShippingCountryName Filters invoices by shipping address: Exact match country name
     * @param {String} opts.filterShipping Filters invoices by shipping price. Multiple values possible for range search. Format: filter_shipping&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ). Ex: filter_shipping&#x3D;GT,14.58,LT,15.54
     * @param {String} opts.filterVendorName Filters invoices by vendor name starting with given string
     * @param {String} opts.filterSku Filters invoices by item sku
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceInvoiceResource} and HTTP response
     */
    this.getInvoicesWithHttpInfo = function(opts) {
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
        'filter_external_ref': opts['filterExternalRef'],
        'filter_created_date': opts['filterCreatedDate'],
        'filter_vendor_ids': opts['filterVendorIds'],
        'filter_currency': opts['filterCurrency'],
        'filter_shipping_state_name': opts['filterShippingStateName'],
        'filter_shipping_country_name': opts['filterShippingCountryName'],
        'filter_shipping': opts['filterShipping'],
        'filter_vendor_name': opts['filterVendorName'],
        'filter_sku': opts['filterSku'],
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
      var returnType = PageResourceInvoiceResource;

      return this.apiClient.callApi(
        '/invoices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve invoices
     * Without INVOICES_ADMIN permission the results are automatically filtered for only the logged in user&#39;s invoices. It is recomended however that filter_user be added to avoid issues for admin users accidentally getting additional invoices. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterUser The id of a user to get invoices for. Automtically added if not being called with admin permissions.
     * @param {String} opts.filterEmail Filters invoices by customer&#39;s email. Admins only.
     * @param {String} opts.filterFulfillmentStatus Filters invoices by fulfillment status type. Can be a comma separated list of statuses
     * @param {String} opts.filterPaymentStatus Filters invoices by payment status type. Can be a comma separated list of statuses
     * @param {String} opts.filterItemName Filters invoices by item name containing the given string
     * @param {String} opts.filterExternalRef Filters invoices by external reference.
     * @param {String} opts.filterCreatedDate Filters invoices by creation date. Multiple values possible for range search. Format: filter_created_date&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ) and ts is a unix timestamp in seconds. Ex: filter_created_date&#x3D;GT,1452154258,LT,1554254874
     * @param {String} opts.filterVendorIds Filters invoices for ones from one of the vendors whose id is in the given comma separated list
     * @param {String} opts.filterCurrency Filters invoices by currency. ISO3 currency code
     * @param {String} opts.filterShippingStateName Filters invoices by shipping address: Exact match state name
     * @param {String} opts.filterShippingCountryName Filters invoices by shipping address: Exact match country name
     * @param {String} opts.filterShipping Filters invoices by shipping price. Multiple values possible for range search. Format: filter_shipping&#x3D;OP,ts&amp;... where OP in (GT, LT, GOE, LOE, EQ). Ex: filter_shipping&#x3D;GT,14.58,LT,15.54
     * @param {String} opts.filterVendorName Filters invoices by vendor name starting with given string
     * @param {String} opts.filterSku Filters invoices by item sku
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceInvoiceResource}
     */
    this.getInvoices = function(opts) {
      return this.getInvoicesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists available payment statuses
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<'String'>} and HTTP response
     */
    this.getPaymentStatusesWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/invoices/payment-statuses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lists available payment statuses
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<'String'>}
     */
    this.getPaymentStatuses = function() {
      return this.getPaymentStatusesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Pay an invoice using a saved payment method
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/PayBySavedMethodRequest} opts.request The payment method details. Will default to the appropriate user&#39;s wallet in the invoice currency if ommited.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.payInvoiceWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling payInvoice");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/invoices/{id}/payments', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Pay an invoice using a saved payment method
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/PayBySavedMethodRequest} opts.request The payment method details. Will default to the appropriate user&#39;s wallet in the invoice currency if ommited.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.payInvoice = function(id, opts) {
      return this.payInvoiceWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the fulfillment status of a bundled invoice item
     * This allows external fulfillment systems to report success or failure. Fulfillment status changes are restricted by a specific flow determining which status can lead to which. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {String} bundleSku The sku of the bundle in the invoice that contains the given target
     * @param {String} sku The sku of an item in the bundle in the invoice
     * @param {module:model/StringWrapper} status The new fulfillment status for the item. Additional options may be available based on configuration.  Allowable values:  &#39;unfulfilled&#39;, &#39;fulfilled&#39;, &#39;not fulfillable&#39;, &#39;failed&#39;, &#39;processing&#39;, &#39;failed_permanent&#39;, &#39;delayed&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setBundledInvoiceItemFulfillmentStatusWithHttpInfo = function(id, bundleSku, sku, status) {
      var postBody = status;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setBundledInvoiceItemFulfillmentStatus");
      }

      // verify the required parameter 'bundleSku' is set
      if (bundleSku === undefined || bundleSku === null) {
        throw new Error("Missing the required parameter 'bundleSku' when calling setBundledInvoiceItemFulfillmentStatus");
      }

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling setBundledInvoiceItemFulfillmentStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling setBundledInvoiceItemFulfillmentStatus");
      }


      var pathParams = {
        'id': id,
        'bundleSku': bundleSku,
        'sku': sku
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
        '/invoices/{id}/items/{bundleSku}/bundled-skus/{sku}/fulfillment-status', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set the fulfillment status of a bundled invoice item
     * This allows external fulfillment systems to report success or failure. Fulfillment status changes are restricted by a specific flow determining which status can lead to which. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {String} bundleSku The sku of the bundle in the invoice that contains the given target
     * @param {String} sku The sku of an item in the bundle in the invoice
     * @param {module:model/StringWrapper} status The new fulfillment status for the item. Additional options may be available based on configuration.  Allowable values:  &#39;unfulfilled&#39;, &#39;fulfilled&#39;, &#39;not fulfillable&#39;, &#39;failed&#39;, &#39;processing&#39;, &#39;failed_permanent&#39;, &#39;delayed&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setBundledInvoiceItemFulfillmentStatus = function(id, bundleSku, sku, status) {
      return this.setBundledInvoiceItemFulfillmentStatusWithHttpInfo(id, bundleSku, sku, status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the external reference of an invoice
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.externalRef External reference info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setExternalRefWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['externalRef'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setExternalRef");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/invoices/{id}/external-ref', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set the external reference of an invoice
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.externalRef External reference info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setExternalRef = function(id, opts) {
      return this.setExternalRefWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the fulfillment status of an invoice item
     * This allows external fulfillment systems to report success or failure. Fulfillment status changes are restricted by a specific flow determining which status can lead to which. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {String} sku The sku of an item in the invoice
     * @param {module:model/StringWrapper} status The new fulfillment status for the item. Additional options may be available based on configuration.  Allowable values:  &#39;unfulfilled&#39;, &#39;fulfilled&#39;, &#39;not fulfillable&#39;, &#39;failed&#39;, &#39;processing&#39;, &#39;failed_permanent&#39;, &#39;delayed&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setInvoiceItemFulfillmentStatusWithHttpInfo = function(id, sku, status) {
      var postBody = status;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setInvoiceItemFulfillmentStatus");
      }

      // verify the required parameter 'sku' is set
      if (sku === undefined || sku === null) {
        throw new Error("Missing the required parameter 'sku' when calling setInvoiceItemFulfillmentStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling setInvoiceItemFulfillmentStatus");
      }


      var pathParams = {
        'id': id,
        'sku': sku
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
        '/invoices/{id}/items/{sku}/fulfillment-status', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set the fulfillment status of an invoice item
     * This allows external fulfillment systems to report success or failure. Fulfillment status changes are restricted by a specific flow determining which status can lead to which. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {String} sku The sku of an item in the invoice
     * @param {module:model/StringWrapper} status The new fulfillment status for the item. Additional options may be available based on configuration.  Allowable values:  &#39;unfulfilled&#39;, &#39;fulfilled&#39;, &#39;not fulfillable&#39;, &#39;failed&#39;, &#39;processing&#39;, &#39;failed_permanent&#39;, &#39;delayed&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setInvoiceItemFulfillmentStatus = function(id, sku, status) {
      return this.setInvoiceItemFulfillmentStatusWithHttpInfo(id, sku, status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the order notes of an invoice
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.orderNotes Payment status info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setOrderNotesWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['orderNotes'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setOrderNotes");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/invoices/{id}/order-notes', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set the order notes of an invoice
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.orderNotes Payment status info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setOrderNotes = function(id, opts) {
      return this.setOrderNotesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the payment status of an invoice
     * This may trigger fulfillment if setting the status to &#39;paid&#39;. This is mainly intended to support external payment systems that cannot be incorporated into the payment method system. Payment status changes are restricted by a specific flow determining which status can lead to which. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoicePaymentStatusRequest} opts.request Payment status info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setPaymentStatusWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setPaymentStatus");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/invoices/{id}/payment-status', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set the payment status of an invoice
     * This may trigger fulfillment if setting the status to &#39;paid&#39;. This is mainly intended to support external payment systems that cannot be incorporated into the payment method system. Payment status changes are restricted by a specific flow determining which status can lead to which. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/InvoicePaymentStatusRequest} opts.request Payment status info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setPaymentStatus = function(id, opts) {
      return this.setPaymentStatusWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set or update billing info
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/AddressResource} opts.billingInfoRequest Address info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateBillingInfoWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['billingInfoRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBillingInfo");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/invoices/{id}/billing-address', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set or update billing info
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVOICES_USER and owner, or INVOICES_ADMIN
     * @param {Number} id The id of the invoice
     * @param {Object} opts Optional parameters
     * @param {module:model/AddressResource} opts.billingInfoRequest Address info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateBillingInfo = function(id, opts) {
      return this.updateBillingInfoWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
