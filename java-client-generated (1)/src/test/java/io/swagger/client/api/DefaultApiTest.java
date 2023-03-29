/*
 * Patient API
 * Patient API using swagger.io by Himesh Sharma
 *
 * OpenAPI spec version: 1.0.0
 * Contact: himesh.sharma2019@vitbhopal.ac.in
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.api;

import io.swagger.client.model.Patient;
import io.swagger.client.model.Patients;
import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * API tests for DefaultApi
 */
@Ignore
public class DefaultApiTest {

    private final DefaultApi api = new DefaultApi();

    /**
     * 
     *
     * Operation to fetch all the patients
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void patientGetTest() throws Exception {
        String patientname = null;
        Patients response = api.patientGet(patientname);

        // TODO: test validations
    }
    /**
     * 
     *
     * Updates an existing patient record
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void patientPutTest() throws Exception {
        Patient body = null;
        api.patientPut(body);

        // TODO: test validations
    }
    /**
     * 
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void patientfindGetTest() throws Exception {
        String find = null;
        Patients response = api.patientfindGet(find);

        // TODO: test validations
    }
    /**
     * 
     *
     * 
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void patientidDeleteTest() throws Exception {
        Integer id = null;
        Patient response = api.patientidDelete(id);

        // TODO: test validations
    }
}
