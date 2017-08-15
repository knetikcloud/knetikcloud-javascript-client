/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ActionResource from '../model/ActionResource';
import Result from '../model/Result';

/**
* BRERuleEngineActions service.
* @module api/BRERuleEngineActionsApi
* @version 3.0.7
*/
export default class BRERuleEngineActionsApi {

    /**
    * Constructs a new BRERuleEngineActionsApi. 
    * @alias module:api/BRERuleEngineActionsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a list of available actions
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterCategory Filter for actions that are within a specific category
     * @param {String} opts.filterName Filter for actions that have names containing the given string
     * @param {String} opts.filterTags Filter for actions that have all of the given tags (comma separated list)
     * @param {String} opts.filterSearch Filter for actions containing the given words somewhere within name, description and tags
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ActionResource>} and HTTP response
     */
    getBREActionsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'filter_category': opts['filterCategory'],
        'filter_name': opts['filterName'],
        'filter_tags': opts['filterTags'],
        'filter_search': opts['filterSearch']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [ActionResource];

      return this.apiClient.callApi(
        '/bre/actions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of available actions
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filterCategory Filter for actions that are within a specific category
     * @param {String} opts.filterName Filter for actions that have names containing the given string
     * @param {String} opts.filterTags Filter for actions that have all of the given tags (comma separated list)
     * @param {String} opts.filterSearch Filter for actions containing the given words somewhere within name, description and tags
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ActionResource>}
     */
    getBREActions(opts) {
      return this.getBREActionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
