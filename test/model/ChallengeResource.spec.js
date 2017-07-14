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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.knetikcloud-sdk);
  }
}(this, function(expect, knetikcloud-sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new knetikcloud-sdk.ChallengeResource();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChallengeResource', function() {
    it('should create an instance of ChallengeResource', function() {
      // uncomment below and update the code to test ChallengeResource
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be.a(knetikcloud-sdk.ChallengeResource);
    });

    it('should have the property activities (base name: "activities")', function() {
      // uncomment below and update the code to test the property activities
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property additionalProperties (base name: "additional_properties")', function() {
      // uncomment below and update the code to test the property additionalProperties
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaign_id")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property copyOf (base name: "copy_of")', function() {
      // uncomment below and update the code to test the property copyOf
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "created_date")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property leaderboardStrategy (base name: "leaderboard_strategy")', function() {
      // uncomment below and update the code to test the property leaderboardStrategy
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "long_description")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property nextEventDate (base name: "next_event_date")', function() {
      // uncomment below and update the code to test the property nextEventDate
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property rewardLagMinutes (base name: "reward_lag_minutes")', function() {
      // uncomment below and update the code to test the property rewardLagMinutes
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property rewardSet (base name: "reward_set")', function() {
      // uncomment below and update the code to test the property rewardSet
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "short_description")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

    it('should have the property updatedDate (base name: "updated_date")', function() {
      // uncomment below and update the code to test the property updatedDate
      //var instane = new knetikcloud-sdk.ChallengeResource();
      //expect(instance).to.be();
    });

  });

}));
