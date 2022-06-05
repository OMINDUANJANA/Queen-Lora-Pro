# Node.Class7TestingApi

All URIs are relative to *https://api.chat-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instanceStatuses**](Class7TestingApi.md#instanceStatuses) | **GET** /instanceStatuses | Returns instance status changes history.
[**webhookStatuses**](Class7TestingApi.md#webhookStatuses) | **GET** /webhookStatus | Returns webhook status for message.



## instanceStatuses

> Statuses instanceStatuses(opts)

Returns instance status changes history.

Requires enable \&quot;instanceStatuses\&quot; option for collecting data.

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class7TestingApi();
let opts = {
  'minTime': 946684800, // Number | Filter statuses received after specified date. Example: 946684800.
  'maxTime': 946684800 // Number | Filter statuses received before specified date. Example: 946684800.
};
apiInstance.instanceStatuses(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minTime** | **Number**| Filter statuses received after specified date. Example: 946684800. | [optional] 
 **maxTime** | **Number**| Filter statuses received before specified date. Example: 946684800. | [optional] 

### Return type

[**Statuses**](Statuses.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookStatuses

> WebhookStatus webhookStatuses(msgId)

Returns webhook status for message.

Requires enable \&quot;webhookStatuses\&quot; option for collecting data.

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class7TestingApi();
let msgId = false_17472822486@c.us_DF38E6A25B42CC8CCE57EC40F; // String | Message ID. Example: false_17472822486@c.us_DF38E6A25B42CC8CCE57EC40F.
apiInstance.webhookStatuses(msgId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **msgId** | **String**| Message ID. Example: false_17472822486@c.us_DF38E6A25B42CC8CCE57EC40F. | 

### Return type

[**WebhookStatus**](WebhookStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

