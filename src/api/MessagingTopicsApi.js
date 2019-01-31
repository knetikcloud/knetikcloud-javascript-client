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
    define(['ApiClient', 'model/PageResourceTopicResource', 'model/Result', 'model/TopicSubscriberResource', 'model/ValueWrapperboolean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceTopicResource'), require('../model/Result'), require('../model/TopicSubscriberResource'), require('../model/ValueWrapperboolean'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.MessagingTopicsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceTopicResource, root.KnetikCloud.Result, root.KnetikCloud.TopicSubscriberResource, root.KnetikCloud.ValueWrapperboolean);
  }
}(this, function(ApiClient, PageResourceTopicResource, Result, TopicSubscriberResource, ValueWrapperboolean) {
  'use strict';

  /**
   * MessagingTopics service.
   * @module api/MessagingTopicsApi
   * @version 3.0.14
   */

  /**
   * Constructs a new MessagingTopicsApi. 
   * @alias module:api/MessagingTopicsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Enable or disable messages for a user
     * Useful for opt-out options on a single topic. Consider multiple topics for multiple opt-out options. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self
     * @param {String} id The id of the topic
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @param {module:model/ValueWrapperboolean} disabled disabled
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.disableTopicSubscriberWithHttpInfo = function(id, userId, disabled) {
      var postBody = disabled;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling disableTopicSubscriber");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling disableTopicSubscriber");
      }

      // verify the required parameter 'disabled' is set
      if (disabled === undefined || disabled === null) {
        throw new Error("Missing the required parameter 'disabled' when calling disableTopicSubscriber");
      }


      var pathParams = {
        'id': id,
        'user_id': userId
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
        '/messaging/topics/{id}/subscribers/{user_id}/disabled', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Enable or disable messages for a user
     * Useful for opt-out options on a single topic. Consider multiple topics for multiple opt-out options. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self
     * @param {String} id The id of the topic
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @param {module:model/ValueWrapperboolean} disabled disabled
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.disableTopicSubscriber = function(id, userId, disabled) {
      return this.disableTopicSubscriberWithHttpInfo(id, userId, disabled)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a subscriber to a topic
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self
     * @param {String} id The id of the topic
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TopicSubscriberResource} and HTTP response
     */
    this.getTopicSubscriberWithHttpInfo = function(id, userId) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTopicSubscriber");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getTopicSubscriber");
      }


      var pathParams = {
        'id': id,
        'user_id': userId
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
      var returnType = TopicSubscriberResource;

      return this.apiClient.callApi(
        '/messaging/topics/{id}/subscribers/{user_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a subscriber to a topic
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self
     * @param {String} id The id of the topic
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TopicSubscriberResource}
     */
    this.getTopicSubscriber = function(id, userId) {
      return this.getTopicSubscriberWithHttpInfo(id, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all messaging topics for a given user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self
     * @param {String} id The id of the user or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceTopicResource} and HTTP response
     */
    this.getUserTopicsWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserTopics");
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
      var returnType = PageResourceTopicResource;

      return this.apiClient.callApi(
        '/users/{id}/topics', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all messaging topics for a given user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TOPICS_ADMIN or self
     * @param {String} id The id of the user or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceTopicResource}
     */
    this.getUserTopics = function(id) {
      return this.getUserTopicsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
