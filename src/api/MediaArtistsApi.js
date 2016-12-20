/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
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
    define(['ApiClient', 'model/ArtistResource', 'model/PageResourceArtistResource', 'model/PageResourceTemplateResource', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ArtistResource'), require('../model/PageResourceArtistResource'), require('../model/PageResourceTemplateResource'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.MediaArtistsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ArtistResource, root.KnetikPlatformApiDocumentationLatest.PageResourceArtistResource, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.TemplateResource);
  }
}(this, function(ApiClient, ArtistResource, PageResourceArtistResource, PageResourceTemplateResource, TemplateResource) {
  'use strict';

  /**
   * MediaArtists service.
   * @module api/MediaArtistsApi
   * @version Latest
   */

  /**
   * Constructs a new MediaArtistsApi. 
   * @alias module:api/MediaArtistsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addArtistUsingPOST operation.
     * @callback module:api/MediaArtistsApi~addArtistUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtistResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a new artist in the system
     * Adds a new artist in the system. Use specific media contributions endpoint to add contributions
     * @param {Object} opts Optional parameters
     * @param {module:model/ArtistResource} opts.artistResource The new artist
     * @param {module:api/MediaArtistsApi~addArtistUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtistResource}
     */
    this.addArtistUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['artistResource'];


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
      var returnType = ArtistResource;

      return this.apiClient.callApi(
        '/media/artists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createArtistTemplateUsingPOST operation.
     * @callback module:api/MediaArtistsApi~createArtistTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an artist template
     * Artist Templates define a type of artist and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.artistTemplateResource The artist template resource object
     * @param {module:api/MediaArtistsApi~createArtistTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createArtistTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['artistTemplateResource'];


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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/media/artists/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteArtistTemplateUsingDELETE operation.
     * @callback module:api/MediaArtistsApi~deleteArtistTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an artist template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/MediaArtistsApi~deleteArtistTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteArtistTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteArtistTemplateUsingDELETE");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade']
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
        '/media/artists/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteArtistUsingDELETE operation.
     * @callback module:api/MediaArtistsApi~deleteArtistUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes an artist from the system IF no resources are attached to it
     * @param {Number} id The artist id
     * @param {module:api/MediaArtistsApi~deleteArtistUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteArtistUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deleteArtistUsingDELETE");
      }


      var pathParams = {
        'id': id
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
        '/media/artists/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getArtistTemplateUsingGET operation.
     * @callback module:api/MediaArtistsApi~getArtistTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single artist template
     * @param {String} id The id of the template
     * @param {module:api/MediaArtistsApi~getArtistTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getArtistTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getArtistTemplateUsingGET");
      }


      var pathParams = {
        'id': id
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/media/artists/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getArtistTemplatesUsingGET operation.
     * @callback module:api/MediaArtistsApi~getArtistTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search artist templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/MediaArtistsApi~getArtistTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getArtistTemplatesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/media/artists/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getArtistUsingGET operation.
     * @callback module:api/MediaArtistsApi~getArtistUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArtistResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Loads a specific artist details
     * @param {Number} id The artist id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.showContributions The number of contributions to show fetch
     * @param {module:api/MediaArtistsApi~getArtistUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArtistResource}
     */
    this.getArtistUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getArtistUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'show_contributions': opts['showContributions']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ArtistResource;

      return this.apiClient.callApi(
        '/media/artists/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchArtistsUsingGET operation.
     * @callback module:api/MediaArtistsApi~searchArtistsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceArtistResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for artists
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterArtistsByName Filter for artists which name *STARTS* with the given string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/MediaArtistsApi~searchArtistsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceArtistResource}
     */
    this.searchArtistsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_artists_by_name': opts['filterArtistsByName'],
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageResourceArtistResource;

      return this.apiClient.callApi(
        '/media/artists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateArtistTemplateUsingPUT operation.
     * @callback module:api/MediaArtistsApi~updateArtistTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an artist template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.artistTemplateResource The artist template resource object
     * @param {module:api/MediaArtistsApi~updateArtistTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateArtistTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['artistTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateArtistTemplateUsingPUT");
      }


      var pathParams = {
        'id': id
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
        '/media/artists/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateArtistUsingPUT operation.
     * @callback module:api/MediaArtistsApi~updateArtistUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies an artist details
     * @param {Number} id The artist id
     * @param {Object} opts Optional parameters
     * @param {module:model/ArtistResource} opts.artistResource The new artist
     * @param {module:api/MediaArtistsApi~updateArtistUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateArtistUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['artistResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updateArtistUsingPUT");
      }


      var pathParams = {
        'id': id
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
        '/media/artists/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
