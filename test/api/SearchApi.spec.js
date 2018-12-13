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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KnetikCloud);
  }
}(this, function(expect, KnetikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikCloud.SearchApi();
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

  describe('SearchApi', function() {
    describe('indexDocument', function() {
      it('should call indexDocument successfully', function(done) {
        //uncomment below and update the code to test indexDocument
        //instance.indexDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reindexAll', function() {
      it('should call reindexAll successfully', function(done) {
        //uncomment below and update the code to test reindexAll
        //instance.reindexAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocument', function() {
      it('should call removeDocument successfully', function(done) {
        //uncomment below and update the code to test removeDocument
        //instance.removeDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchCountGET', function() {
      it('should call searchCountGET successfully', function(done) {
        //uncomment below and update the code to test searchCountGET
        //instance.searchCountGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchCountPOST', function() {
      it('should call searchCountPOST successfully', function(done) {
        //uncomment below and update the code to test searchCountPOST
        //instance.searchCountPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchDocumentGET', function() {
      it('should call searchDocumentGET successfully', function(done) {
        //uncomment below and update the code to test searchDocumentGET
        //instance.searchDocumentGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchExplainGET', function() {
      it('should call searchExplainGET successfully', function(done) {
        //uncomment below and update the code to test searchExplainGET
        //instance.searchExplainGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchExplainPOST', function() {
      it('should call searchExplainPOST successfully', function(done) {
        //uncomment below and update the code to test searchExplainPOST
        //instance.searchExplainPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchIndex', function() {
      it('should call searchIndex successfully', function(done) {
        //uncomment below and update the code to test searchIndex
        //instance.searchIndex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchIndexGET', function() {
      it('should call searchIndexGET successfully', function(done) {
        //uncomment below and update the code to test searchIndexGET
        //instance.searchIndexGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchIndicesGET', function() {
      it('should call searchIndicesGET successfully', function(done) {
        //uncomment below and update the code to test searchIndicesGET
        //instance.searchIndicesGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchMappingsGET', function() {
      it('should call searchMappingsGET successfully', function(done) {
        //uncomment below and update the code to test searchMappingsGET
        //instance.searchMappingsGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchPublicIndex', function() {
      it('should call searchPublicIndex successfully', function(done) {
        //uncomment below and update the code to test searchPublicIndex
        //instance.searchPublicIndex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchValidateGET', function() {
      it('should call searchValidateGET successfully', function(done) {
        //uncomment below and update the code to test searchValidateGET
        //instance.searchValidateGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchValidatePOST', function() {
      it('should call searchValidatePOST successfully', function(done) {
        //uncomment below and update the code to test searchValidatePOST
        //instance.searchValidatePOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
