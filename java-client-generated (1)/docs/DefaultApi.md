# DefaultApi

All URIs are relative to *http://hostapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**patientGet**](DefaultApi.md#patientGet) | **GET** /patient | 
[**patientPut**](DefaultApi.md#patientPut) | **PUT** /patient | 
[**patientfindGet**](DefaultApi.md#patientfindGet) | **GET** /patient{find} | 
[**patientidDelete**](DefaultApi.md#patientidDelete) | **DELETE** /patient{id} | 

<a name="patientGet"></a>
# **patientGet**
> Patients patientGet(patientname)



Operation to fetch all the patients

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String patientname = "patientname_example"; // String | 
try {
    Patients result = apiInstance.patientGet(patientname);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#patientGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patientname** | **String**|  |

### Return type

[**Patients**](Patients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patientPut"></a>
# **patientPut**
> patientPut(body)



Updates an existing patient record

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Patient body = new Patient(); // Patient | 
try {
    apiInstance.patientPut(body);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#patientPut");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Patient**](Patient.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="patientfindGet"></a>
# **patientfindGet**
> Patients patientfindGet(find)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String find = "find_example"; // String | 
try {
    Patients result = apiInstance.patientfindGet(find);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#patientfindGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find** | **String**|  |

### Return type

[**Patients**](Patients.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patientidDelete"></a>
# **patientidDelete**
> Patient patientidDelete(id)



### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Integer id = 56; // Integer | 
try {
    Patient result = apiInstance.patientidDelete(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#patientidDelete");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**Patient**](Patient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

