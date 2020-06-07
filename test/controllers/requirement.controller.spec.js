// const sinon = require('sinon');
// const supertest = require('supertest');
// const chai = require('chai');
// const expect = chai.expect();
// const mongoose = require('mongoose');
//
//
// // Importing model for our unit testing.
// const visa = require("../../models/visa");
// var visaController = require("../../controllers/visaController");
//
//
// describe("Unit test for getVisaByCountry", function(){
//     // Test will pass if we get all visas
//     it("should return one visa req", function(done){
//         var visaMock = sinon.mock(visaController.getVisaByCountry);
//         var expectedResult = {status: true, visa: []};
//         visaMock.expect('find').yields(null, expectedResult);
//         visa.find(function (err, result) {
//             visaMock.verify();
//             visaMock.restore();
//             expect(result.status).to.be.true;
//             done();
//         });
//     });
//
//     // Test will pass if we fail to get a visa
//     it("should return error", function(done){
//
//
//     });
// });
