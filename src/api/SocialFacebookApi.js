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
    define(['ApiClient', 'model/FacebookToken', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FacebookToken'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.SocialFacebookApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.FacebookToken, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, FacebookToken, Result) {
  'use strict';

  /**
   * SocialFacebook service.
   * @module api/SocialFacebookApi
   * @version 3.0.14
   */

  /**
   * Constructs a new SocialFacebookApi. 
   * @alias module:api/SocialFacebookApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Link facebook account
     * Links the current user account to a facebook account, using the acccess token from facebook. Can also be used to update the access token after it has expired. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; Non-facebook user token
     * @param {Object} opts Optional parameters
     * @param {module:model/FacebookToken} opts.facebookToken The token from facebook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.linkAccountsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['facebookToken'];


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
      var returnType = null;

      return this.apiClient.callApi(
        '/social/facebook/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Link facebook account
     * Links the current user account to a facebook account, using the acccess token from facebook. Can also be used to update the access token after it has expired. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; Non-facebook user token
     * @param {Object} opts Optional parameters
     * @param {module:model/FacebookToken} opts.facebookToken The token from facebook
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.linkAccounts = function(opts) {
      return this.linkAccountsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
