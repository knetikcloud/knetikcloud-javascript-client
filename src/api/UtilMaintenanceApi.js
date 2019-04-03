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
    define(['ApiClient', 'model/Maintenance', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Maintenance'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UtilMaintenanceApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Maintenance, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, Maintenance, Result) {
  'use strict';

  /**
   * UtilMaintenance service.
   * @module api/UtilMaintenanceApi
   * @version 3.0.17
   */

  /**
   * Constructs a new UtilMaintenanceApi. 
   * @alias module:api/UtilMaintenanceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete maintenance info
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MAINTENANCE_ADMIN
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteMaintenanceWithHttpInfo = function() {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/maintenance', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete maintenance info
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MAINTENANCE_ADMIN
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteMaintenance = function() {
      return this.deleteMaintenanceWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get current maintenance info
     * Get current maintenance info. 404 if no maintenance. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Maintenance} and HTTP response
     */
    this.getMaintenanceWithHttpInfo = function() {
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
      var returnType = Maintenance;

      return this.apiClient.callApi(
        '/maintenance', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get current maintenance info
     * Get current maintenance info. 404 if no maintenance. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Maintenance}
     */
    this.getMaintenance = function() {
      return this.getMaintenanceWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set current maintenance info
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MAINTENANCE_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/Maintenance} opts.maintenance The maintenance object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setMaintenanceWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['maintenance'];


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
        '/maintenance', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set current maintenance info
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; MAINTENANCE_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/Maintenance} opts.maintenance The maintenance object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setMaintenance = function(opts) {
      return this.setMaintenanceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
