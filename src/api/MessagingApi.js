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
    define(['ApiClient', 'model/RawEmailResource', 'model/RawSMSResource', 'model/Result', 'model/TemplateEmailResource', 'model/TemplateSMSResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RawEmailResource'), require('../model/RawSMSResource'), require('../model/Result'), require('../model/TemplateEmailResource'), require('../model/TemplateSMSResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MessagingApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.RawEmailResource, root.KnetikCloud.RawSMSResource, root.KnetikCloud.Result, root.KnetikCloud.TemplateEmailResource, root.KnetikCloud.TemplateSMSResource);
  }
}(this, function(ApiClient, RawEmailResource, RawSMSResource, Result, TemplateEmailResource, TemplateSMSResource) {
  'use strict';

  /**
   * Messaging service.
   * @module api/MessagingApi
   * @version 3.0.7
   */

  /**
   * Constructs a new MessagingApi. 
   * @alias module:api/MessagingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Send a raw email to one or more users
     * @param {Object} opts Optional parameters
     * @param {module:model/RawEmailResource} opts.rawEmailResource The new raw email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendRawEmailWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['rawEmailResource'];


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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/raw-email', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a raw email to one or more users
     * @param {Object} opts Optional parameters
     * @param {module:model/RawEmailResource} opts.rawEmailResource The new raw email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendRawEmail = function(opts) {
      return this.sendRawEmailWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a raw SMS
     * Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param {Object} opts Optional parameters
     * @param {module:model/RawSMSResource} opts.rawSMSResource The new raw SMS to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendRawSMSWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['rawSMSResource'];


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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/raw-sms', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a raw SMS
     * Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param {Object} opts Optional parameters
     * @param {module:model/RawSMSResource} opts.rawSMSResource The new raw SMS to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendRawSMS = function(opts) {
      return this.sendRawSMSWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a templated email to one or more users
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateEmailResource} opts.messageResource The new template email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendTemplatedEmailWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['messageResource'];


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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/templated-email', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a templated email to one or more users
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateEmailResource} opts.messageResource The new template email to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendTemplatedEmail = function(opts) {
      return this.sendTemplatedEmailWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a new templated SMS
     * Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateSMSResource} opts.templateSMSResource The new template SMS to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendTemplatedSMSWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['templateSMSResource'];


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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/messaging/templated-sms', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a new templated SMS
     * Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateSMSResource} opts.templateSMSResource The new template SMS to be sent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendTemplatedSMS = function(opts) {
      return this.sendTemplatedSMSWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
