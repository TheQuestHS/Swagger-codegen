'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.patientGET = function patientGET (req, res, next, patientname) {
  Default.patientGET(patientname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patientPUT = function patientPUT (req, res, next, body) {
  Default.patientPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patientfindGET = function patientfindGET (req, res, next, find) {
  Default.patientfindGET(find)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patientidDELETE = function patientidDELETE (req, res, next, id) {
  Default.patientidDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
