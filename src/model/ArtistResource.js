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
    define(['ApiClient', 'model/ContributionResource', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContributionResource'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikPlatformApiDocumentationLatest) {
      root.KnetikPlatformApiDocumentationLatest = {};
    }
    root.KnetikPlatformApiDocumentationLatest.ArtistResource = factory(root.KnetikPlatformApiDocumentationLatest.ApiClient, root.KnetikPlatformApiDocumentationLatest.ContributionResource, root.KnetikPlatformApiDocumentationLatest.Property);
  }
}(this, function(ApiClient, ContributionResource, Property) {
  'use strict';




  /**
   * The ArtistResource model module.
   * @module model/ArtistResource
   * @version Latest
   */

  /**
   * Constructs a new <code>ArtistResource</code>.
   * @alias module:model/ArtistResource
   * @class
   * @param name {String} The user friendly name of that resource
   */
  var exports = function(name) {
    var _this = this;









    _this['name'] = name;




  };

  /**
   * Constructs a <code>ArtistResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArtistResource} obj Optional instance to populate.
   * @return {module:model/ArtistResource} The populated <code>ArtistResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('born')) {
        obj['born'] = ApiClient.convertToType(data['born'], 'String');
      }
      if (data.hasOwnProperty('contribution_count')) {
        obj['contribution_count'] = ApiClient.convertToType(data['contribution_count'], 'Number');
      }
      if (data.hasOwnProperty('contributions')) {
        obj['contributions'] = ApiClient.convertToType(data['contributions'], [ContributionResource]);
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Number');
      }
      if (data.hasOwnProperty('died')) {
        obj['died'] = ApiClient.convertToType(data['died'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * YYYY/MM/DD when this artist was born
   * @member {String} born
   */
  exports.prototype['born'] = undefined;
  /**
   * The current number of contributions the artist has made
   * @member {Number} contribution_count
   */
  exports.prototype['contribution_count'] = undefined;
  /**
   * The list of media this artist has contributed to as well as role(s) during contribution.  Use media endpoint to add contributions
   * @member {Array.<module:model/ContributionResource>} contributions
   */
  exports.prototype['contributions'] = undefined;
  /**
   * The date/time this resource was created in seconds since unix epoch
   * @member {Number} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * YYYY/MM/DD when this artist died
   * @member {String} died
   */
  exports.prototype['died'] = undefined;
  /**
   * The unique ID for that resource
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The user friendly name of that resource
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The sort order priority ofr the artist.  Default 100
   * @member {Number} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * The user friendly name of that resource. Defaults to blank string
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * An artist template this artist is validated against (private). May be null and no validation of additional_properties will be done
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The date/time this resource was last updated in seconds since unix epoch
   * @member {Number} updated_date
   */
  exports.prototype['updated_date'] = undefined;



  return exports;
}));


