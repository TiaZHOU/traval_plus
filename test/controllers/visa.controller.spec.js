var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
var visaController =  require('../../controllers/TestVisaController');
const visa = require('../../models/test');

describe('visaController', function () {
    // Below, we are going to test HTTP functions, so we need to create fake request and respond object!

    const mockResponse = (fake) => {
        return {
            send: fake
        };
    }

    // this is just example how you can design the fake request, you can also add header property if your website needs one!
    // I'm not even going to use any of these stuff inside request
    const mockRequest = (session, body) => ({
        session,
        body,
    });

    // I just want to remind that using chai is easier to read
    describe('getAllVisa', function() {


        it("Visa should have id, Country, and visaRequirements", function(){
            const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);

            visaController.getAllVisa(req,res);
            const result = fake.lastArg;

            result.forEach(element => {
                expect(element).to.have.property('id');//check one with chai
                expect(element).to.have.keys(['id', 'Country', 'visaRequirements']); //check everything with chai
                element.should.have.property('id'); // different way of checking using should
                // assert.equal(Object.keys(element), ['id', 'first_name', 'last_name']); Not going to work because it does strict equality, not deep comparison
                // but if you really insist...
                assert.deepEqual(Object.keys(element), ['id', 'Country', 'visaRequirements']); //check with assert
            });
        })

        it('should return all authors', function(){
            const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);

            // Quick quiz! why didn't I write line 62 like line 61? HINT: I didn't forget and I am not lazy >:(
            // let result = authorController.getAllAuthors(req,res);
            visaController.getAllVisa(req,res);
            const result = fake.lastArg;
            expect(result).to.deep.equal(visa); // Don't forget to use deep, you don't want to compare object id, you want to compare contents!
        });
    });
});

