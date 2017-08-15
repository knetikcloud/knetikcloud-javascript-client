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
import FulfillmentType from '../model/FulfillmentType';
import PageResourceFulfillmentType from '../model/PageResourceFulfillmentType';
import Result from '../model/Result';

/**
* Fulfillment service.
* @module api/FulfillmentApi
* @version 3.0.7
*/
export default class FulfillmentApi {

    /**
    * Constructs a new FulfillmentApi. 
    * @alias module:api/FulfillmentApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a fulfillment type
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.type The fulfillment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FulfillmentType} and HTTP response
     */
    createFulfillmentTypeWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['type'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a fulfillment type
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.type The fulfillment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FulfillmentType}
     */
    createFulfillmentType(opts) {
      return this.createFulfillmentTypeWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a fulfillment type
     * @param {Number} id The id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteFulfillmentTypeWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFulfillmentType");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/store/fulfillment/types/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a fulfillment type
     * @param {Number} id The id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteFulfillmentType(id) {
      return this.deleteFulfillmentTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single fulfillment type
     * @param {Number} id The id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FulfillmentType} and HTTP response
     */
    getFulfillmentTypeWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFulfillmentType");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single fulfillment type
     * @param {Number} id The id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FulfillmentType}
     */
    getFulfillmentType(id) {
      return this.getFulfillmentTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search fulfillment types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceFulfillmentType} and HTTP response
     */
    getFulfillmentTypesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'size': opts['size'],
        'page': opts['page'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PageResourceFulfillmentType;

      return this.apiClient.callApi(
        '/store/fulfillment/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search fulfillment types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceFulfillmentType}
     */
    getFulfillmentTypes(opts) {
      return this.getFulfillmentTypesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a fulfillment type
     * @param {Number} id The id
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.fulfillmentType The fulfillment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateFulfillmentTypeWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['fulfillmentType'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateFulfillmentType");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/store/fulfillment/types/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a fulfillment type
     * @param {Number} id The id
     * @param {Object} opts Optional parameters
     * @param {module:model/FulfillmentType} opts.fulfillmentType The fulfillment type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateFulfillmentType(id, opts) {
      return this.updateFulfillmentTypeWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
