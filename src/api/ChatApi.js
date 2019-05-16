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
    define(['ApiClient', 'model/ChatMessageResource', 'model/IntWrapper', 'model/PageResourceChatBlacklistResource', 'model/PageResourceChatMessageResource', 'model/PageResourceChatUserThreadResource', 'model/Result'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChatMessageResource'), require('../model/IntWrapper'), require('../model/PageResourceChatBlacklistResource'), require('../model/PageResourceChatMessageResource'), require('../model/PageResourceChatUserThreadResource'), require('../model/Result'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.ChatApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.ChatMessageResource, root.KnetikCloud.IntWrapper, root.KnetikCloud.PageResourceChatBlacklistResource, root.KnetikCloud.PageResourceChatMessageResource, root.KnetikCloud.PageResourceChatUserThreadResource, root.KnetikCloud.Result);
  }
}(this, function(ApiClient, ChatMessageResource, IntWrapper, PageResourceChatBlacklistResource, PageResourceChatMessageResource, PageResourceChatUserThreadResource, Result) {
  'use strict';

  /**
   * Chat service.
   * @module api/ChatApi
   * @version 3.0.20
   */

  /**
   * Constructs a new ChatApi. 
   * @alias module:api/ChatApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Acknowledge number of messages in a thread
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param {String} id The thread id
     * @param {Object} opts Optional parameters
     * @param {module:model/IntWrapper} opts.readCount The amount of messages read
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.acknowledgeChatMessageWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['readCount'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling acknowledgeChatMessage");
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
        '/chat/threads/{id}/acknowledge', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Acknowledge number of messages in a thread
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param {String} id The thread id
     * @param {Object} opts Optional parameters
     * @param {module:model/IntWrapper} opts.readCount The amount of messages read
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.acknowledgeChatMessage = function(id, opts) {
      return this.acknowledgeChatMessageWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add a user to a chat message blacklist
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {Number} blacklistedUserId The user id to blacklist
     * @param {String} id The user id or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addChatMessageBlacklistWithHttpInfo = function(blacklistedUserId, id) {
      var postBody = null;

      // verify the required parameter 'blacklistedUserId' is set
      if (blacklistedUserId === undefined || blacklistedUserId === null) {
        throw new Error("Missing the required parameter 'blacklistedUserId' when calling addChatMessageBlacklist");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addChatMessageBlacklist");
      }


      var pathParams = {
        'blacklisted_user_id': blacklistedUserId,
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
        '/chat/users/{id}/blacklist/{blacklisted_user_id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a user to a chat message blacklist
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {Number} blacklistedUserId The user id to blacklist
     * @param {String} id The user id or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addChatMessageBlacklist = function(blacklistedUserId, id) {
      return this.addChatMessageBlacklistWithHttpInfo(blacklistedUserId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a message
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The message id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteChatMessageWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteChatMessage");
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
        '/chat/messages/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a message
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The message id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteChatMessage = function(id) {
      return this.deleteChatMessageWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Edit your message
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param {String} id The message id
     * @param {Object} opts Optional parameters
     * @param {module:model/ChatMessageResource} opts.chatMessageResource The chat message resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.editChatMessageWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['chatMessageResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling editChatMessage");
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
        '/chat/messages/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Edit your message
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param {String} id The message id
     * @param {Object} opts Optional parameters
     * @param {module:model/ChatMessageResource} opts.chatMessageResource The chat message resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.editChatMessage = function(id, opts) {
      return this.editChatMessageWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a message
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The message id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChatMessageResource} and HTTP response
     */
    this.getChatMessageWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getChatMessage");
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
      var returnType = ChatMessageResource;

      return this.apiClient.callApi(
        '/chat/messages/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a message
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The message id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChatMessageResource}
     */
    this.getChatMessage = function(id) {
      return this.getChatMessageWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of blocked users for chat messaging
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The user id or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceChatBlacklistResource} and HTTP response
     */
    this.getChatMessageBlacklistWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getChatMessageBlacklist");
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
      var returnType = PageResourceChatBlacklistResource;

      return this.apiClient.callApi(
        '/chat/users/{id}/blacklist', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of blocked users for chat messaging
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The user id or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceChatBlacklistResource}
     */
    this.getChatMessageBlacklist = function(id, opts) {
      return this.getChatMessageBlacklistWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List your threads
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceChatUserThreadResource} and HTTP response
     */
    this.getChatThreadsWithHttpInfo = function(opts) {
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
      var returnType = PageResourceChatUserThreadResource;

      return this.apiClient.callApi(
        '/chat/threads', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List your threads
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceChatUserThreadResource}
     */
    this.getChatThreads = function(opts) {
      return this.getChatThreadsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List messages with a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param {Number} id The user id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceChatMessageResource} and HTTP response
     */
    this.getDirectMessagesWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDirectMessages");
      }


      var pathParams = {
        'id': id
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
      var returnType = PageResourceChatMessageResource;

      return this.apiClient.callApi(
        '/chat/users/{id}/messages', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List messages with a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param {Number} id The user id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceChatMessageResource}
     */
    this.getDirectMessages = function(id, opts) {
      return this.getDirectMessagesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List messages in a thread
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The thread id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceChatMessageResource} and HTTP response
     */
    this.getThreadMessagesWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getThreadMessages");
      }


      var pathParams = {
        'id': id
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
      var returnType = PageResourceChatMessageResource;

      return this.apiClient.callApi(
        '/chat/threads/{id}/messages', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List messages in a thread
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The thread id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceChatMessageResource}
     */
    this.getThreadMessages = function(id, opts) {
      return this.getThreadMessagesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List messages in a topic
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The topic id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceChatMessageResource} and HTTP response
     */
    this.getTopicMessagesWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTopicMessages");
      }


      var pathParams = {
        'id': id
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
      var returnType = PageResourceChatMessageResource;

      return this.apiClient.callApi(
        '/chat/topics/{id}/messages', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List messages in a topic
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {String} id The topic id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceChatMessageResource}
     */
    this.getTopicMessages = function(id, opts) {
      return this.getTopicMessagesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a user from a blacklist
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {Number} blacklistedUserId The user id to blacklist
     * @param {String} id The user id or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.removeChatBlacklistWithHttpInfo = function(blacklistedUserId, id) {
      var postBody = null;

      // verify the required parameter 'blacklistedUserId' is set
      if (blacklistedUserId === undefined || blacklistedUserId === null) {
        throw new Error("Missing the required parameter 'blacklistedUserId' when calling removeChatBlacklist");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeChatBlacklist");
      }


      var pathParams = {
        'blacklisted_user_id': blacklistedUserId,
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
        '/chat/users/{id}/blacklist/{blacklisted_user_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a user from a blacklist
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CHAT_ADMIN or owner
     * @param {Number} blacklistedUserId The user id to blacklist
     * @param {String} id The user id or &#39;me&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.removeChatBlacklist = function(blacklistedUserId, id) {
      return this.removeChatBlacklistWithHttpInfo(blacklistedUserId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a message
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {module:model/ChatMessageResource} opts.chatMessageResource The chat message resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChatMessageResource} and HTTP response
     */
    this.sendChatMessageWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['chatMessageResource'];


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
      var returnType = ChatMessageResource;

      return this.apiClient.callApi(
        '/chat/messages', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send a message
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {Object} opts Optional parameters
     * @param {module:model/ChatMessageResource} opts.chatMessageResource The chat message resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChatMessageResource}
     */
    this.sendChatMessage = function(opts) {
      return this.sendChatMessageWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
