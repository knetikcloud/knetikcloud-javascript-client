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
    define(['ApiClient', 'model/DeviceResource', 'model/PageResourceDeviceResource', 'model/PageResourceTemplateResource', 'model/PatchResource', 'model/Result', 'model/SimpleUserResource', 'model/TemplateResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceResource'), require('../model/PageResourceDeviceResource'), require('../model/PageResourceTemplateResource'), require('../model/PatchResource'), require('../model/Result'), require('../model/SimpleUserResource'), require('../model/TemplateResource'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.DevicesApi = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.DeviceResource, root.KnetikCloud.PageResourceDeviceResource, root.KnetikCloud.PageResourceTemplateResource, root.KnetikCloud.PatchResource, root.KnetikCloud.Result, root.KnetikCloud.SimpleUserResource, root.KnetikCloud.TemplateResource);
  }
}(this, function(ApiClient, DeviceResource, PageResourceDeviceResource, PageResourceTemplateResource, PatchResource, Result, SimpleUserResource, TemplateResource) {
  'use strict';

  /**
   * Devices service.
   * @module api/DevicesApi
   * @version 3.0.263
   */

  /**
   * Constructs a new DevicesApi. 
   * @alias module:api/DevicesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add device users
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {Array.<module:model/SimpleUserResource>} userResources userResources
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceResource} and HTTP response
     */
    this.addDeviceUserWithHttpInfo = function(userResources, id) {
      var postBody = userResources;

      // verify the required parameter 'userResources' is set
      if (userResources === undefined || userResources === null) {
        throw new Error("Missing the required parameter 'userResources' when calling addDeviceUser");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addDeviceUser");
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
      var returnType = DeviceResource;

      return this.apiClient.callApi(
        '/devices/{id}/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add device users
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {Array.<module:model/SimpleUserResource>} userResources userResources
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceResource}
     */
    this.addDeviceUser = function(userResources, id) {
      return this.addDeviceUserWithHttpInfo(userResources, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a device
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {module:model/DeviceResource} device device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceResource} and HTTP response
     */
    this.createDeviceWithHttpInfo = function(device) {
      var postBody = device;

      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling createDevice");
      }


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
      var returnType = DeviceResource;

      return this.apiClient.callApi(
        '/devices', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a device
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param {module:model/DeviceResource} device device
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceResource}
     */
    this.createDevice = function(device) {
      return this.createDeviceWithHttpInfo(device)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a device template
     * Device Templates define a type of device and the properties they have.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.deviceTemplateResource The device template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.createDeviceTemplateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['deviceTemplateResource'];


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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/devices/templates', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a device template
     * Device Templates define a type of device and the properties they have.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param {Object} opts Optional parameters
     * @param {module:model/TemplateResource} opts.deviceTemplateResource The device template resource object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.createDeviceTemplate = function(opts) {
      return this.createDeviceTemplateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a device
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDeviceWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDevice");
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
        '/devices/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a device
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDevice = function(id) {
      return this.deleteDeviceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an device template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDeviceTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDeviceTemplate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'cascade': opts['cascade'],
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
        '/devices/templates/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an device template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects.&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {String} opts.cascade The value needed to delete used templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDeviceTemplate = function(id, opts) {
      return this.deleteDeviceTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a device user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {String} id The id of the device
     * @param {Number} userId The user id of the device user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDeviceUserWithHttpInfo = function(id, userId) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDeviceUser");
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteDeviceUser");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/devices/{id}/users/{user_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a device user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {String} id The id of the device
     * @param {Number} userId The user id of the device user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDeviceUser = function(id, userId) {
      return this.deleteDeviceUserWithHttpInfo(id, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all device users
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterId Filter for device users to delete with a user id in a given comma separated list of ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDeviceUsersWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDeviceUsers");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'filter_id': opts['filterId'],
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
        '/devices/{id}/users', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete all device users
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {String} id The id of the device
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterId Filter for device users to delete with a user id in a given comma separated list of ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDeviceUsers = function(id, opts) {
      return this.deleteDeviceUsersWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single device
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceResource} and HTTP response
     */
    this.getDeviceWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDevice");
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
      var returnType = DeviceResource;

      return this.apiClient.callApi(
        '/devices/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single device
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or owner
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceResource}
     */
    this.getDevice = function(id) {
      return this.getDeviceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single device template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.getDeviceTemplateWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDeviceTemplate");
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/devices/templates/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a single device template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param {String} id The id of the template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.getDeviceTemplate = function(id) {
      return this.getDeviceTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search device templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceTemplateResource} and HTTP response
     */
    this.getDeviceTemplatesWithHttpInfo = function(opts) {
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
      var returnType = PageResourceTemplateResource;

      return this.apiClient.callApi(
        '/devices/templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search device templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceTemplateResource}
     */
    this.getDeviceTemplates = function(opts) {
      return this.getDeviceTemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List and search devices
     * Get a list of devices with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or user
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterMake Filter for devices with specified make
     * @param {String} opts.filterModel Filter for devices with specified model
     * @param {String} opts.filterOs Filter for devices with specified OS
     * @param {String} opts.filterSerial Filter for devices with specified serial
     * @param {String} opts.filterType Filter for devices with specified type
     * @param {String} opts.filterTag A comma separated list without spaces to filter for devices with specified tags (matches any)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageResourceDeviceResource} and HTTP response
     */
    this.getDevicesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter_make': opts['filterMake'],
        'filter_model': opts['filterModel'],
        'filter_os': opts['filterOs'],
        'filter_serial': opts['filterSerial'],
        'filter_type': opts['filterType'],
        'filter_tag': opts['filterTag'],
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
      var returnType = PageResourceDeviceResource;

      return this.apiClient.callApi(
        '/devices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List and search devices
     * Get a list of devices with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DEVICES_ADMIN or user
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterMake Filter for devices with specified make
     * @param {String} opts.filterModel Filter for devices with specified model
     * @param {String} opts.filterOs Filter for devices with specified OS
     * @param {String} opts.filterSerial Filter for devices with specified serial
     * @param {String} opts.filterType Filter for devices with specified type
     * @param {String} opts.filterTag A comma separated list without spaces to filter for devices with specified tags (matches any)
     * @param {Number} opts.size The number of objects returned per page (default to 25)
     * @param {Number} opts.page The number of the page returned, starting with 1 (default to 1)
     * @param {String} opts.order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC] (default to id:ASC)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageResourceDeviceResource}
     */
    this.getDevices = function(opts) {
      return this.getDevicesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a device
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CUSTOMERS_ADMIN
     * @param {module:model/DeviceResource} device device
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceResource} and HTTP response
     */
    this.updateDeviceWithHttpInfo = function(device, id) {
      var postBody = device;

      // verify the required parameter 'device' is set
      if (device === undefined || device === null) {
        throw new Error("Missing the required parameter 'device' when calling updateDevice");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDevice");
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
      var returnType = DeviceResource;

      return this.apiClient.callApi(
        '/devices/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a device
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; CUSTOMERS_ADMIN
     * @param {module:model/DeviceResource} device device
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceResource}
     */
    this.updateDevice = function(device, id) {
      return this.updateDeviceWithHttpInfo(device, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an device template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchResource} opts.templatePatchResource The patch resource object
     * @param {Boolean} opts.testValidation If true, this will test validation but not submit the patch request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateResource} and HTTP response
     */
    this.updateDeviceTemplateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['templatePatchResource'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDeviceTemplate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'test_validation': opts['testValidation'],
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
      var returnType = TemplateResource;

      return this.apiClient.callApi(
        '/devices/templates/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an device template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param {String} id The id of the template
     * @param {Object} opts Optional parameters
     * @param {module:model/PatchResource} opts.templatePatchResource The patch resource object
     * @param {Boolean} opts.testValidation If true, this will test validation but not submit the patch request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateResource}
     */
    this.updateDeviceTemplate = function(id, opts) {
      return this.updateDeviceTemplateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
