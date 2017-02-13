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
    define(['ApiClient', 'model/RawEmailResource', 'model/RawSMSResource', 'model/TemplateEmailResource', 'model/TemplateSMSResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RawEmailResource'), require('../model/RawSMSResource'), require('../model/TemplateEmailResource'), require('../model/TemplateSMSResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.MessagingApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.RawEmailResource, root.KnetikPlatformApiDocumentationLatest.RawSMSResource, root.KnetikPlatformApiDocumentationLatest.TemplateEmailResource, root.KnetikPlatformApiDocumentationLatest.TemplateSMSResource);
  }
}(this, function(ApiClient, RawEmailResource, RawSMSResource, TemplateEmailResource, TemplateSMSResource) {
  'use strict';

  /**
   * Messaging service.
   * @module api/MessagingApi
   * @version latest

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
     * Callback function to receive the result of the sendRawEmail operation.
     * @callback module:api/MessagingApi~sendRawEmailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a raw email to one or more users
     * @param {Object} opts Optional parameters
     * @param {module:model/RawEmailResource} opts.rawEmailResource The new raw email to be sent
     * @param {module:api/MessagingApi~sendRawEmailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sendRawEmail = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['rawEmailResource'];


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
        '/messaging/raw-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendRawSMS operation.
     * @callback module:api/MessagingApi~sendRawSMSCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a raw SMS
     * Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param {Object} opts Optional parameters
     * @param {module:model/RawSMSResource} opts.rawSMSResource The new raw SMS to be sent
     * @param {module:api/MessagingApi~sendRawSMSCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sendRawSMS = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['rawSMSResource'];


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
        '/messaging/raw-sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendTemplatedEmail operation.
     * @callback module:api/MessagingApi~sendTemplatedEmailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a templated email to one or more users
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateEmailResource} opts.messageResource The new template email to be sent
     * @param {module:api/MessagingApi~sendTemplatedEmailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sendTemplatedEmail = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['messageResource'];


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
        '/messaging/templated-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendTemplatedSMS operation.
     * @callback module:api/MessagingApi~sendTemplatedSMSCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a new templated SMS
     * Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateSMSResource} opts.templateSMSResource The new template SMS to be sent
     * @param {module:api/MessagingApi~sendTemplatedSMSCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sendTemplatedSMS = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['templateSMSResource'];


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
        '/messaging/templated-sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
