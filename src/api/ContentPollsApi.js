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
    define(['ApiClient', 'model/PageResourcePollResource', 'model/PageResourceTemplateResource', 'model/PollResource', 'model/PollResponseResource', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageResourcePollResource'), require('../model/PageResourceTemplateResource'), require('../model/PollResource'), require('../model/PollResponseResource'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ContentPollsApi = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.PageResourcePollResource, root.KnetikPlatformApiDocumentationLatest.PageResourceTemplateResource, root.KnetikPlatformApiDocumentationLatest.PollResource, root.KnetikPlatformApiDocumentationLatest.PollResponseResource, root.KnetikPlatformApiDocumentationLatest.TemplateResource);
  }
}(this, function(ApiClient, PageResourcePollResource, PageResourceTemplateResource, PollResource, PollResponseResource, TemplateResource) {
  'use strict';

  /**
   * ContentPolls service.
   * @module api/ContentPollsApi
   * @version Latest
   */

  /**
   * Constructs a new ContentPollsApi. 
   * @alias module:api/ContentPollsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the answerPollUsingPOST operation.
     * @callback module:api/ContentPollsApi~answerPollUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PollResponseResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add your vote to a poll
     * @param {String} id The poll id
     * @param {Object} opts Optional parameters
     * @param {String} opts.answerKey The answer key
     * @param {module:api/ContentPollsApi~answerPollUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PollResponseResource}
     */
    this.answerPollUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['answerKey'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling answerPollUsingPOST");
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
      var returnType = PollResponseResource;

      return this.apiClient.callApi(
        '/media/polls/{id}/response', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createPollTemplateUsingPOST operation.
     * @callback module:api/ContentPollsApi~createPollTemplateUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a poll template
     * Poll templates define a type of poll and the properties they have
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.pollTemplateResource The poll template resource object
     * @param {module:api/ContentPollsApi~createPollTemplateUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.createPollTemplateUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['pollTemplateResource'];


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
        '/media/polls/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createPollUsingPOST operation.
     * @callback module:api/ContentPollsApi~createPollUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PollResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new poll
     * Polls are blobs of text with titles, a category and assets. Formatting and display of the text is in the hands of the front end.
     * @param {Object} opts Optional parameters
     * @param {module:model/PollResource} opts.pollResource The poll object
     * @param {module:api/ContentPollsApi~createPollUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PollResource}
     */
    this.createPollUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['pollResource'];


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
      var returnType = PollResource;

      return this.apiClient.callApi(
        '/media/polls', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePollTemplateUsingDELETE operation.
     * @callback module:api/ContentPollsApi~deletePollTemplateUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a poll template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @param {module:api/ContentPollsApi~deletePollTemplateUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePollTemplateUsingDELETE = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deletePollTemplateUsingDELETE");
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
        '/media/polls/templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePollUsingDELETE operation.
     * @callback module:api/ContentPollsApi~deletePollUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing poll
     * @param {String} id The poll id
     * @param {module:api/ContentPollsApi~deletePollUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePollUsingDELETE = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deletePollUsingDELETE");
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
        '/media/polls/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPollAnswerUsingGET operation.
     * @callback module:api/ContentPollsApi~getPollAnswerUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PollResponseResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get poll answer
     * @param {String} id The poll id
     * @param {module:api/ContentPollsApi~getPollAnswerUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PollResponseResource}
     */
    this.getPollAnswerUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getPollAnswerUsingGET");
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
      var returnType = PollResponseResource;

      return this.apiClient.callApi(
        '/media/polls/{id}/response', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPollTemplateUsingGET operation.
     * @callback module:api/ContentPollsApi~getPollTemplateUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single poll template
     * @param {String} id The id of the template
     * @param {module:api/ContentPollsApi~getPollTemplateUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateResource}
     */
    this.getPollTemplateUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getPollTemplateUsingGET");
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
        '/media/polls/templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPollTemplatesUsingGET operation.
     * @callback module:api/ContentPollsApi~getPollTemplatesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourceTemplateResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search poll templates
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/ContentPollsApi~getPollTemplatesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourceTemplateResource}
     */
    this.getPollTemplatesUsingGET = function(opts, callback) {
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
        '/media/polls/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPollUsingGET operation.
     * @callback module:api/ContentPollsApi~getPollUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PollResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single poll
     * @param {String} id The poll id
     * @param {module:api/ContentPollsApi~getPollUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PollResource}
     */
    this.getPollUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling getPollUsingGET");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PollResource;

      return this.apiClient.callApi(
        '/media/polls/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPollsUsingGET operation.
     * @callback module:api/ContentPollsApi~getPollsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageResourcePollResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List and search polls
     * Get a list of polls with optional filtering. Assets will not be filled in on the resources returned. Use &#39;Get a single poll&#39; to retrieve the full resource with assets for a given item as needed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterCategory Filter for polls from a specific category by id
     * @param {String} opts.filterTagset Filter for polls with specified tags (separated by comma)
     * @param {String} opts.filterText Filter for polls whose text contains a string
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @param {module:api/ContentPollsApi~getPollsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageResourcePollResource}
     */
    this.getPollsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_category': opts['filterCategory'],
        'filter_tagset': opts['filterTagset'],
        'filter_text': opts['filterText'],
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
      var returnType = PageResourcePollResource;

      return this.apiClient.callApi(
        '/media/polls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePollTemplateUsingPUT operation.
     * @callback module:api/ContentPollsApi~updatePollTemplateUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a poll template
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.pollTemplateResource The poll template resource object
     * @param {module:api/ContentPollsApi~updatePollTemplateUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePollTemplateUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['pollTemplateResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updatePollTemplateUsingPUT");
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
        '/media/polls/templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePollUsingPUT operation.
     * @callback module:api/ContentPollsApi~updatePollUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing poll
     * @param {String} id The poll id
     * @param {Object} opts Optional parameters
     * @param {module:model/PollResource} opts.pollResource The poll object
     * @param {module:api/ContentPollsApi~updatePollUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePollUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['pollResource'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling updatePollUsingPUT");
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
        '/media/polls/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));