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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KnetikPlatformApiDocumentationLatest);
  }
}(this, function(expect, KnetikPlatformApiDocumentationLatest) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikPlatformApiDocumentationLatest.ContentArticlesApi();
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

  describe('ContentArticlesApi', function() {
    describe('createArticleTemplateUsingPOST', function() {
      it('should call createArticleTemplateUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createArticleTemplateUsingPOST
        //instance.createArticleTemplateUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createArticleUsingPOST', function() {
      it('should call createArticleUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createArticleUsingPOST
        //instance.createArticleUsingPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteArticleTemplateUsingDELETE', function() {
      it('should call deleteArticleTemplateUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteArticleTemplateUsingDELETE
        //instance.deleteArticleTemplateUsingDELETE(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteArticleUsingDELETE', function() {
      it('should call deleteArticleUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteArticleUsingDELETE
        //instance.deleteArticleUsingDELETE(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleTemplateUsingGET', function() {
      it('should call getArticleTemplateUsingGET successfully', function(done) {
        //uncomment below and update the code to test getArticleTemplateUsingGET
        //instance.getArticleTemplateUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleTemplatesUsingGET', function() {
      it('should call getArticleTemplatesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getArticleTemplatesUsingGET
        //instance.getArticleTemplatesUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticleUsingGET', function() {
      it('should call getArticleUsingGET successfully', function(done) {
        //uncomment below and update the code to test getArticleUsingGET
        //instance.getArticleUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getArticlesUsingGET', function() {
      it('should call getArticlesUsingGET successfully', function(done) {
        //uncomment below and update the code to test getArticlesUsingGET
        //instance.getArticlesUsingGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateArticleTemplateUsingPUT', function() {
      it('should call updateArticleTemplateUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateArticleTemplateUsingPUT
        //instance.updateArticleTemplateUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateArticleUsingPUT', function() {
      it('should call updateArticleUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateArticleUsingPUT
        //instance.updateArticleUsingPUT(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
