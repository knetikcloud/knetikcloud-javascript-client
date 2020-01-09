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
    define(['ApiClient', 'model/Cart', 'model/CartItemRequest', 'model/CartShippableResponse', 'model/CartShippingAddressRequest', 'model/CouponDefinition', 'model/IntWrapper', 'model/PageResourceCartSummary', 'model/Result', 'model/SampleCountriesResponse', 'model/SkuRequest', 'model/StringWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cart'), require('../model/CartItemRequest'), require('../model/CartShippableResponse'), require('../model/CartShippingAddressRequest'), require('../model/CouponDefinition'), require('../model/IntWrapper'), require('../model/PageResourceCartSummary'), require('../model/Result'), require('../model/SampleCountriesResponse'), require('../model/SkuRequest'), require('../model/StringWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.StoreShoppingCartsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Cart, root.KnetikCloud.CartItemRequest, root.KnetikCloud.CartShippableResponse, root.KnetikCloud.CartShippingAddressRequest, root.KnetikCloud.CouponDefinition, root.KnetikCloud.IntWrapper, root.KnetikCloud.PageResourceCartSummary, root.KnetikCloud.Result, root.KnetikCloud.SampleCountriesResponse, root.KnetikCloud.SkuRequest, root.KnetikCloud.StringWrapper);
  }
}(this, function(ApiClient, Cart, CartItemRequest, CartShippableResponse, CartShippingAddressRequest, CouponDefinition, IntWrapper, PageResourceCartSummary, Result, SampleCountriesResponse, SkuRequest, StringWrapper) {
  'use strict';

  /**
   * StoreShoppingCarts service.
   * @module api/StoreShoppingCartsApi
   * @version 3.0.2
   */

  /**
   * Constructs a new StoreShoppingCartsApi. 
   * @alias module:api/StoreShoppingCartsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Adds a custom discount to the cart
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CouponDefinition} opts.customDiscount The details of the discount to add
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addCustomDiscountWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['customDiscount'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addCustomDiscount");
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
        '/carts/{id}/custom-discounts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Adds a custom discount to the cart
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CouponDefinition} opts.customDiscount The details of the discount to add
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addCustomDiscount = function(id, opts) {
      return this.addCustomDiscountWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Adds a discount coupon to the cart
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/SkuRequest} opts.skuRequest The request of the sku
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addDiscountToCartWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['skuRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addDiscountToCart");
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
        '/carts/{id}/discounts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Adds a discount coupon to the cart
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/SkuRequest} opts.skuRequest The request of the sku
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addDiscountToCart = function(id, opts) {
      return this.addDiscountToCartWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add an item to the cart
     * Currently, carts cannot contain virtual and real currency items at the same time. Furthermore, the API only support a single virtual item at the moment. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartItemRequest} opts.cartItemRequest The cart item request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addItemToCartWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['cartItemRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addItemToCart");
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
        '/carts/{id}/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add an item to the cart
     * Currently, carts cannot contain virtual and real currency items at the same time. Furthermore, the API only support a single virtual item at the moment. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartItemRequest} opts.cartItemRequest The cart item request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addItemToCart = function(id, opts) {
      return this.addItemToCartWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a cart
     * You don&#39;t have to have a user to create a cart but the API requires authentication to checkout. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.owner Set the owner of a cart. If not specified, defaults to the calling user&#39;s id. If specified and is not the calling user&#39;s id, SHOPPING_CARTS_ADMIN permission is required
     * @param {String} opts.currencyCode Set the currency for the cart, by currency code. May be disallowed by site settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.createCartWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'owner': opts['owner'],
        'currency_code': opts['currencyCode'],
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
      var returnType = StringWrapper;

      return this.apiClient.callApi(
        '/carts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a cart
     * You don&#39;t have to have a user to create a cart but the API requires authentication to checkout. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {Number} opts.owner Set the owner of a cart. If not specified, defaults to the calling user&#39;s id. If specified and is not the calling user&#39;s id, SHOPPING_CARTS_ADMIN permission is required
     * @param {String} opts.currencyCode Set the currency for the cart, by currency code. May be disallowed by site settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.createCart = function(opts) {
      return this.createCartWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the cart with the given GUID
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cart} and HTTP response
     */
    this.getCartWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCart");
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
      var returnType = Cart;

      return this.apiClient.callApi(
        '/carts/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the cart with the given GUID
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cart}
     */
    this.getCart = function(id) {
      return this.getCartWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of carts
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterOwnerId Filter by the id of the owner
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceCartSummary} and HTTP response
     */
    this.getCartsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_owner_id': opts['filterOwnerId'],
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
      var returnType = PageResourceCartSummary;

      return this.apiClient.callApi(
        '/carts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of carts
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {Object} opts Optional parameters
     * @param {Number} opts.filterOwnerId Filter by the id of the owner
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceCartSummary}
     */
    this.getCarts = function(opts) {
      return this.getCartsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns whether a cart requires shipping
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CartShippableResponse} and HTTP response
     */
    this.getShippableWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getShippable");
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
      var returnType = CartShippableResponse;

      return this.apiClient.callApi(
        '/carts/{id}/shippable', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns whether a cart requires shipping
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CartShippableResponse}
     */
    this.getShippable = function(id) {
      return this.getShippableWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the list of available shipping countries per vendor
     * Since a cart can have multiple vendors with different shipping options, the countries are broken down by vendors. Please see notes about the response object as the fields are variable. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SampleCountriesResponse} and HTTP response
     */
    this.getShippingCountriesWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getShippingCountries");
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
      var returnType = SampleCountriesResponse;

      return this.apiClient.callApi(
        '/carts/{id}/countries', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the list of available shipping countries per vendor
     * Since a cart can have multiple vendors with different shipping options, the countries are broken down by vendors. Please see notes about the response object as the fields are variable. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SampleCountriesResponse}
     */
    this.getShippingCountries = function(id) {
      return this.getShippingCountriesWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Removes a discount coupon from the cart
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {String} code The SKU code of the coupon to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.removeDiscountFromCartWithHttpInfo = function(id, code) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeDiscountFromCart");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling removeDiscountFromCart");
      }


      var pathParams = {
        'id': id,
        'code': code
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
        '/carts/{id}/discounts/{code}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Removes a discount coupon from the cart
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {String} code The SKU code of the coupon to remove
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.removeDiscountFromCart = function(id, code) {
      return this.removeDiscountFromCartWithHttpInfo(id, code)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sets the currency to use for the cart
     * May be disallowed by site settings. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.currencyCode The code of the currency
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setCartCurrencyWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['currencyCode'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setCartCurrency");
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
        '/carts/{id}/currency', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Sets the currency to use for the cart
     * May be disallowed by site settings. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.currencyCode The code of the currency
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setCartCurrency = function(id, opts) {
      return this.setCartCurrencyWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sets the owner of a cart if none is set already
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/IntWrapper} opts.userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setCartOwnerWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['userId'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setCartOwner");
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
        '/carts/{id}/owner', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Sets the owner of a cart if none is set already
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/IntWrapper} opts.userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setCartOwner = function(id, opts) {
      return this.setCartOwnerWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Changes the quantity of an item already in the cart
     * A quantity of zero will remove the item from the cart altogether. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartItemRequest} opts.cartItemRequest The cart item request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateItemInCartWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['cartItemRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateItemInCart");
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
        '/carts/{id}/items', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Changes the quantity of an item already in the cart
     * A quantity of zero will remove the item from the cart altogether. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartItemRequest} opts.cartItemRequest The cart item request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateItemInCart = function(id, opts) {
      return this.updateItemInCartWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Modifies or sets the order shipping address
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartShippingAddressRequest} opts.cartShippingAddressRequest The cart shipping address request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateShippingAddressWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['cartShippingAddressRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateShippingAddress");
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
        '/carts/{id}/shipping-address', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Modifies or sets the order shipping address
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SHOPPING_CARTS_ADMIN or owner
     * @param {String} id The id of the cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartShippingAddressRequest} opts.cartShippingAddressRequest The cart shipping address request object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateShippingAddress = function(id, opts) {
      return this.updateShippingAddressWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
