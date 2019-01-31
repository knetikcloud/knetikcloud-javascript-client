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
    define(['ApiClient', 'model/PageResourceSimpleUserResource', 'model/Result', 'model/StringWrapper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourceSimpleUserResource'), require('../model/Result'), require('../model/StringWrapper'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.UsersFriendshipsApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.PageResourceSimpleUserResource, root.KnetikCloud.Result, root.KnetikCloud.StringWrapper);
  }
}(this, function(ApiClient, PageResourceSimpleUserResource, Result, StringWrapper) {
  'use strict';

  /**
   * UsersFriendships service.
   * @module api/UsersFriendshipsApi
   * @version 3.0.14
   */

  /**
   * Constructs a new UsersFriendshipsApi. 
   * @alias module:api/UsersFriendshipsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a friend
     * As a user, either creates or confirm a pending request. As an admin, call this endpoint twice while inverting the IDs to create a confirmed friendship. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Number} id The id of the user to befriend
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addFriendWithHttpInfo = function(userId, id) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addFriend");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addFriend");
      }


      var pathParams = {
        'user_id': userId,
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
        '/users/{user_id}/friends/{id}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a friend
     * As a user, either creates or confirm a pending request. As an admin, call this endpoint twice while inverting the IDs to create a confirmed friendship. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Number} id The id of the user to befriend
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addFriend = function(userId, id) {
      return this.addFriendWithHttpInfo(userId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get friends list
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterUsername Filter for friends with the given username
     * @param {Number} opts.filterUserId Filter for friends by user id
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceSimpleUserResource} and HTTP response
     */
    this.getFriendsWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getFriends");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'filter_username': opts['filterUsername'],
        'filter_user_id': opts['filterUserId'],
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
      var returnType = PageResourceSimpleUserResource;

      return this.apiClient.callApi(
        '/users/{user_id}/friends', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get friends list
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterUsername Filter for friends with the given username
     * @param {Number} opts.filterUserId Filter for friends by user id
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceSimpleUserResource}
     */
    this.getFriends = function(userId, opts) {
      return this.getFriendsWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the invite token
     * This is a unique invite token that allows direct connection to the request user.  Exposing that token presents privacy issues if the token is leaked. Use friend request flow instead if confirmation is required. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StringWrapper} and HTTP response
     */
    this.getInviteTokenWithHttpInfo = function(userId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getInviteToken");
      }


      var pathParams = {
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
      var returnType = StringWrapper;

      return this.apiClient.callApi(
        '/users/{user_id}/invite-token', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns the invite token
     * This is a unique invite token that allows direct connection to the request user.  Exposing that token presents privacy issues if the token is leaked. Use friend request flow instead if confirmation is required. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StringWrapper}
     */
    this.getInviteToken = function(userId) {
      return this.getInviteTokenWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get pending invites
     * Invites that the specified user received. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceSimpleUserResource} and HTTP response
     */
    this.getInvitesWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getInvites");
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = PageResourceSimpleUserResource;

      return this.apiClient.callApi(
        '/users/{user_id}/invites', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get pending invites
     * Invites that the specified user received. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39;
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceSimpleUserResource}
     */
    this.getInvites = function(userId, opts) {
      return this.getInvitesWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Redeem friendship token
     * Immediately connects the requested user with the user mapped by the provided invite token. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.token The invite token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.redeemFriendshipTokenWithHttpInfo = function(userId, opts) {
      opts = opts || {};
      var postBody = opts['token'];

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling redeemFriendshipToken");
      }


      var pathParams = {
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
        '/users/{user_id}/friends/tokens', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Redeem friendship token
     * Immediately connects the requested user with the user mapped by the provided invite token. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Object} opts Optional parameters
     * @param {module:model/StringWrapper} opts.token The invite token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.redeemFriendshipToken = function(userId, opts) {
      return this.redeemFriendshipTokenWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove or decline a friend
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Number} id The id of the user to befriend
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.removeOrDeclineFriendWithHttpInfo = function(userId, id) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeOrDeclineFriend");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeOrDeclineFriend");
      }


      var pathParams = {
        'user_id': userId,
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
        '/users/{user_id}/friends/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove or decline a friend
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; FRIENDSHIPS_ADMIN or (FRIENDSHIPS_USER and owner)
     * @param {String} userId The id of the user or &#39;me&#39; if logged in
     * @param {Number} id The id of the user to befriend
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.removeOrDeclineFriend = function(userId, id) {
      return this.removeOrDeclineFriendWithHttpInfo(userId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
