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
    define(['ApiClient', 'model/NotificationResource', 'model/NotificationTypeResource', 'model/NotificationUserTypeResource', 'model/PageResourceNotificationTypeResource', 'model/PageResourceNotificationUserTypeResource', 'model/PageResourceUserNotificationResource', 'model/Result', 'model/UserNotificationStatusWrapper', 'model/ValueWrapperboolean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NotificationResource'), require('../model/NotificationTypeResource'), require('../model/NotificationUserTypeResource'), require('../model/PageResourceNotificationTypeResource'), require('../model/PageResourceNotificationUserTypeResource'), require('../model/PageResourceUserNotificationResource'), require('../model/Result'), require('../model/UserNotificationStatusWrapper'), require('../model/ValueWrapperboolean'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.NotificationsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.NotificationResource, root.KnetikCloud.NotificationTypeResource, root.KnetikCloud.NotificationUserTypeResource, root.KnetikCloud.PageResourceNotificationTypeResource, root.KnetikCloud.PageResourceNotificationUserTypeResource, root.KnetikCloud.PageResourceUserNotificationResource, root.KnetikCloud.Result, root.KnetikCloud.UserNotificationStatusWrapper, root.KnetikCloud.ValueWrapperboolean);
  }
}(this, function(ApiClient, NotificationResource, NotificationTypeResource, NotificationUserTypeResource, PageResourceNotificationTypeResource, PageResourceNotificationUserTypeResource, PageResourceUserNotificationResource, Result, UserNotificationStatusWrapper, ValueWrapperboolean) {
  'use strict';

  /**
   * Notifications service.
   * @module api/NotificationsApi
   * @version 3.0.18
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:api/NotificationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a notification type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationTypeResource} opts.notificationType notificationType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationTypeResource} and HTTP response
     */
    this.createNotificationTypeWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['notificationType'];


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
      var returnType = NotificationTypeResource;

      return this.apiClient.callApi(
        '/notifications/types', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a notification type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationTypeResource} opts.notificationType notificationType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationTypeResource}
     */
    this.createNotificationType = function(opts) {
      return this.createNotificationTypeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a notification type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteNotificationTypeWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteNotificationType");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/types/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a notification type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteNotificationType = function(id) {
      return this.deleteNotificationTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single notification type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationTypeResource} and HTTP response
     */
    this.getNotificationTypeWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNotificationType");
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
      var returnType = NotificationTypeResource;

      return this.apiClient.callApi(
        '/notifications/types/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single notification type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationTypeResource}
     */
    this.getNotificationType = function(id) {
      return this.getNotificationTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search notification types
     * Get a list of notification type with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceNotificationTypeResource} and HTTP response
     */
    this.getNotificationTypesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageResourceNotificationTypeResource;

      return this.apiClient.callApi(
        '/notifications/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search notification types
     * Get a list of notification type with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceNotificationTypeResource}
     */
    this.getNotificationTypes = function(opts) {
      return this.getNotificationTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * View a user&#39;s notification settings for a type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} typeId The id of the topic
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationUserTypeResource} and HTTP response
     */
    this.getUserNotificationInfoWithHttpInfo = function(typeId, userId) {
      var postBody = null;

      // verify the required parameter 'typeId' is set
      if (typeId === undefined || typeId === null) {
        throw new Error("Missing the required parameter 'typeId' when calling getUserNotificationInfo");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserNotificationInfo");
      }


      var pathParams = {
        'type_id': typeId,
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
      var returnType = NotificationUserTypeResource;

      return this.apiClient.callApi(
        '/users/{user_id}/notifications/types/{type_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * View a user&#39;s notification settings for a type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} typeId The id of the topic
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationUserTypeResource}
     */
    this.getUserNotificationInfo = function(typeId, userId) {
      return this.getUserNotificationInfoWithHttpInfo(typeId, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * View a user&#39;s notification settings
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceNotificationUserTypeResource} and HTTP response
     */
    this.getUserNotificationInfoListWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserNotificationInfoList");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
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
      var returnType = PageResourceNotificationUserTypeResource;

      return this.apiClient.callApi(
        '/users/{user_id}/notifications/types', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * View a user&#39;s notification settings
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceNotificationUserTypeResource}
     */
    this.getUserNotificationInfoList = function(userId, opts) {
      return this.getUserNotificationInfoListWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get notifications
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} id The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterStatus filter for notifications with a given status
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceUserNotificationResource} and HTTP response
     */
    this.getUserNotificationsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserNotifications");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'filter_status': opts['filterStatus'],
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
      var returnType = PageResourceUserNotificationResource;

      return this.apiClient.callApi(
        '/users/{id}/notifications', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get notifications
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} id The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterStatus filter for notifications with a given status
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceUserNotificationResource}
     */
    this.getUserNotifications = function(id, opts) {
      return this.getUserNotificationsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a notification
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationResource} opts.notification notification
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationResource} and HTTP response
     */
    this.sendNotificationWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['notification'];


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
      var returnType = NotificationResource;

      return this.apiClient.callApi(
        '/notifications', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a notification
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationResource} opts.notification notification
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationResource}
     */
    this.sendNotification = function(opts) {
      return this.sendNotificationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set notification status
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} userId The id of the user or &#39;me&#39;
     * @param {String} notificationId The id of the notification
     * @param {Object} opts Optional parameters
     * @param {module:model/UserNotificationStatusWrapper} opts.notification status
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.setUserNotificationStatusWithHttpInfo = function(userId, notificationId, opts) {
      opts = opts || {};
      var postBody = opts['notification'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling setUserNotificationStatus");
      }

      // verify the required parameter 'notificationId' is set
      if (notificationId === undefined || notificationId === null) {
        throw new Error("Missing the required parameter 'notificationId' when calling setUserNotificationStatus");
      }


      var pathParams = {
        'user_id': userId,
        'notification_id': notificationId
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
        '/users/{user_id}/notifications/{notification_id}/status', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set notification status
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} userId The id of the user or &#39;me&#39;
     * @param {String} notificationId The id of the notification
     * @param {Object} opts Optional parameters
     * @param {module:model/UserNotificationStatusWrapper} opts.notification status
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.setUserNotificationStatus = function(userId, notificationId, opts) {
      return this.setUserNotificationStatusWithHttpInfo(userId, notificationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Enable or disable direct notifications for a user
     * Allows enabling or disabling messages for a given notification type when sent direct to the user. Notifications can still be retrieved by endpoint. For notifications broadcased to a topic, see the topic service to disable messages for the user there. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} typeId The id of the topic
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @param {module:model/ValueWrapperboolean} silenced silenced
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.silenceDirectNotificationsWithHttpInfo = function(typeId, userId, silenced) {
      var postBody = silenced;

      // verify the required parameter 'typeId' is set
      if (typeId === undefined || typeId === null) {
        throw new Error("Missing the required parameter 'typeId' when calling silenceDirectNotifications");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling silenceDirectNotifications");
      }

      // verify the required parameter 'silenced' is set
      if (silenced === undefined || silenced === null) {
        throw new Error("Missing the required parameter 'silenced' when calling silenceDirectNotifications");
      }


      var pathParams = {
        'type_id': typeId,
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
        '/users/{user_id}/notifications/types/{type_id}/silenced', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Enable or disable direct notifications for a user
     * Allows enabling or disabling messages for a given notification type when sent direct to the user. Notifications can still be retrieved by endpoint. For notifications broadcased to a topic, see the topic service to disable messages for the user there. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN or self
     * @param {String} typeId The id of the topic
     * @param {String} userId The id of the subscriber or &#39;me&#39;
     * @param {module:model/ValueWrapperboolean} silenced silenced
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.silenceDirectNotifications = function(typeId, userId, silenced) {
      return this.silenceDirectNotificationsWithHttpInfo(typeId, userId, silenced)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a notificationType
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationTypeResource} opts.notificationType notificationType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NotificationTypeResource} and HTTP response
     */
    this.updateNotificationTypeWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['notificationType'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateNotificationType");
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
      var returnType = NotificationTypeResource;

      return this.apiClient.callApi(
        '/notifications/types/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a notificationType
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; NOTIFICATIONS_ADMIN
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationTypeResource} opts.notificationType notificationType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NotificationTypeResource}
     */
    this.updateNotificationType = function(id, opts) {
      return this.updateNotificationTypeWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
