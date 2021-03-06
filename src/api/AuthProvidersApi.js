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
    define(['ApiClient', 'model/OAuth2ProviderResource', 'model/PageResourceOAuth2ProviderResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OAuth2ProviderResource'), require('../model/PageResourceOAuth2ProviderResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.AuthProvidersApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.OAuth2ProviderResource, root.KnetikCloud.PageResourceOAuth2ProviderResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, OAuth2ProviderResource, PageResourceOAuth2ProviderResource, Result) {
  'use strict';

  /**
   * AuthProviders service.
   * @module api/AuthProvidersApi
   * @version 3.1.4
   */

  /**
   * Constructs a new AuthProvidersApi. 
   * @alias module:api/AuthProvidersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a new OAuth 2 provider
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {module:model/OAuth2ProviderResource} providerResource providerResource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OAuth2ProviderResource} and HTTP response
     */
    this.createProviderWithHttpInfo = function(providerResource) {
      var postBody = providerResource;

      // verify the required parameter 'providerResource' is set
      if (providerResource === undefined || providerResource === null) {
        throw new Error("Missing the required parameter 'providerResource' when calling createProvider");
      }


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
      var returnType = OAuth2ProviderResource;

      return this.apiClient.callApi(
        '/auth/providers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a new OAuth 2 provider
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {module:model/OAuth2ProviderResource} providerResource providerResource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OAuth2ProviderResource}
     */
    this.createProvider = function(providerResource) {
      return this.createProviderWithHttpInfo(providerResource)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing OAuth 2 provider
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} providerId provider_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteProviderWithHttpInfo = function(providerId) {
      var postBody = null;

      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling deleteProvider");
      }


      var pathParams = {
        'provider_id': providerId
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
        '/auth/providers/{provider_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing OAuth 2 provider
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} providerId provider_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteProvider = function(providerId) {
      return this.deleteProviderWithHttpInfo(providerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an existing OAuth 2 provider
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} providerId provider_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OAuth2ProviderResource} and HTTP response
     */
    this.getProviderWithHttpInfo = function(providerId) {
      var postBody = null;

      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling getProvider");
      }


      var pathParams = {
        'provider_id': providerId
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
      var returnType = OAuth2ProviderResource;

      return this.apiClient.callApi(
        '/auth/providers/{provider_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an existing OAuth 2 provider
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} providerId provider_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OAuth2ProviderResource}
     */
    this.getProvider = function(providerId) {
      return this.getProviderWithHttpInfo(providerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List OAuth 2 providers
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceOAuth2ProviderResource} and HTTP response
     */
    this.getProvidersWithHttpInfo = function() {
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
      var returnType = PageResourceOAuth2ProviderResource;

      return this.apiClient.callApi(
        '/auth/providers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List OAuth 2 providers
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceOAuth2ProviderResource}
     */
    this.getProviders = function() {
      return this.getProvidersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing OAuth 2 provider
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} providerId provider_id
     * @param {module:model/OAuth2ProviderResource} providerResource providerResource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateProviderWithHttpInfo = function(providerId, providerResource) {
      var postBody = providerResource;

      // verify the required parameter 'providerId' is set
      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling updateProvider");
      }

      // verify the required parameter 'providerResource' is set
      if (providerResource === undefined || providerResource === null) {
        throw new Error("Missing the required parameter 'providerResource' when calling updateProvider");
      }


      var pathParams = {
        'provider_id': providerId
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
        '/auth/providers/{provider_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing OAuth 2 provider
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} providerId provider_id
     * @param {module:model/OAuth2ProviderResource} providerResource providerResource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateProvider = function(providerId, providerResource) {
      return this.updateProviderWithHttpInfo(providerId, providerResource)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
