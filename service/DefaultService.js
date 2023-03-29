'use strict';


/**
 * Operation to fetch all the patients
 *
 * patientname String 
 * returns patients
 **/
exports.patientGET = function(patientname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "PatientProblem" : "Cancer",
  "PatientID" : 401,
  "Bill" : 5000000,
  "PatientName" : "Yash"
}, {
  "PatientProblem" : "Cancer",
  "PatientID" : 401,
  "Bill" : 5000000,
  "PatientName" : "Yash"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates an existing patient record
 *
 * body Patient  (optional)
 * no response value expected for this operation
 **/
exports.patientPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * find String 
 * returns patients
 **/
exports.patientfindGET = function(find) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "PatientProblem" : "Cancer",
  "PatientID" : 401,
  "Bill" : 5000000,
  "PatientName" : "Yash"
}, {
  "PatientProblem" : "Cancer",
  "PatientID" : 401,
  "Bill" : 5000000,
  "PatientName" : "Yash"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Integer 
 * returns patient
 **/
exports.patientidDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "PatientProblem" : "Cancer",
  "PatientID" : 401,
  "Bill" : 5000000,
  "PatientName" : "Yash"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

