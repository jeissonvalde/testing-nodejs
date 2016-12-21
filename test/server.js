/** 
 * Module dependencies
 */

var expect = require('chai').expect;
var axios = require('axios');

describe('Temperature Conversor API', function () {

	describe('Celsius to Fahrenheit conversion', function () {

		it('return status 200', function (done) {

			axios
			  .get('http://localhost:3000/toFahrenheit?temperature=100')
			  .then(function (res) {
			  	expect(res.status).to.equal(200);
          done()
			  })

		})

		it('return 100C in Fahrenheit', function (done) {

			axios
			  .get('http://localhost:3000/toFahrenheit?temperature=100')
			  .then(function (res) {
			  	expect(res.data).to.equal(212);
          done()
			  })

		})

	})

  describe('Fahrenheit to Celsius conversion', function () {

    it('return status 200', function (done) {

      axios
        .get('http://localhost:3000/toCelsius?temperature=212')
        .then(function (res) {
          expect(res.status).to.equal(200);
          done()
        })

    })

    it('return 212F in Celsius', function (done) {

      axios
        .get('http://localhost:3000/toCelsius?temperature=212')
        .then(function (res) {
          expect(res.data).to.equal(100);
          done()
        })

    })

  })

})
