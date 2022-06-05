# Node.Class2MessagesApi

All URIs are relative to *https://api.chat-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forwardMessage**](Class2MessagesApi.md#forwardMessage) | **POST** /forwardMessage | Forwarding messages to a new or existing chat.
[**getMessages**](Class2MessagesApi.md#getMessages) | **GET** /messages | Get a list of messages.
[**sendContact**](Class2MessagesApi.md#sendContact) | **POST** /sendContact | Sending a contact or contact list to a new or existing chat.
[**sendFile**](Class2MessagesApi.md#sendFile) | **POST** /sendFile | Send a file to a new or existing chat.
[**sendLink**](Class2MessagesApi.md#sendLink) | **POST** /sendLink | Send text with link and link&#39;s preview to a new or existing chat.
[**sendLocation**](Class2MessagesApi.md#sendLocation) | **POST** /sendLocation | Sending a location to a new or existing chat.
[**sendMessage**](Class2MessagesApi.md#sendMessage) | **POST** /sendMessage | Send a message to a new or existing chat.
[**sendPTT**](Class2MessagesApi.md#sendPTT) | **POST** /sendPTT | Send a ptt-audio to a new or existing chat.
[**sendVCard**](Class2MessagesApi.md#sendVCard) | **POST** /sendVCard | Sending a vcard to a new or existing chat.



## forwardMessage

> SendMessageStatus forwardMessage(forwardMessageRequest)

Forwarding messages to a new or existing chat.

Only one of two parameters is needed to determine the destination - chatId or phone.

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

let apiInstance = new Node.Class2MessagesApi();
let forwardMessageRequest = new Node.ForwardMessageRequest(); // ForwardMessageRequest | 
apiInstance.forwardMessage(forwardMessageRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forwardMessageRequest** | [**ForwardMessageRequest**](ForwardMessageRequest.md)|  | 

### Return type

[**SendMessageStatus**](SendMessageStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## getMessages

> Messages getMessages(opts)

Get a list of messages.

To receive only new messages, pass the **lastMessageNumber** parameter from the last query.  Files from messages are guaranteed to be stored only for 30 days and can be deleted. Download the files as soon as you get to your server.

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

let apiInstance = new Node.Class2MessagesApi();
let opts = {
  'lastMessageNumber': 0, // Number | The lastMessageNumber parameter from the last response
  'last': true, // Boolean | Displays the last 100 messages. If this parameter is passed, then lastMessageNumber is ignored.
  'chatId': 17633123456@c.us, // String | Filter messages by chatId  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group.
  'limit': 100, // Number | Sets length of the message list. Default 100. With value 0 returns all messages.
  'minTime': 946684800, // Number | Filter messages received after specified time. Example: 946684800.
  'maxTime': 946684800 // Number | Filter messages received before specified time. Example: 946684800.
};
apiInstance.getMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lastMessageNumber** | **Number**| The lastMessageNumber parameter from the last response | [optional] 
 **last** | **Boolean**| Displays the last 100 messages. If this parameter is passed, then lastMessageNumber is ignored. | [optional] [default to false]
 **chatId** | **String**| Filter messages by chatId  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group. | [optional] 
 **limit** | **Number**| Sets length of the message list. Default 100. With value 0 returns all messages. | [optional] 
 **minTime** | **Number**| Filter messages received after specified time. Example: 946684800. | [optional] 
 **maxTime** | **Number**| Filter messages received before specified time. Example: 946684800. | [optional] 

### Return type

[**Messages**](Messages.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendContact

> SendMessageStatus sendContact(sendContactRequest)

Sending a contact or contact list to a new or existing chat.

Only one of two parameters is needed to determine the destination - chatId or phone.

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

let apiInstance = new Node.Class2MessagesApi();
let sendContactRequest = new Node.SendContactRequest(); // SendContactRequest | 
apiInstance.sendContact(sendContactRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendContactRequest** | [**SendContactRequest**](SendContactRequest.md)|  | 

### Return type

[**SendMessageStatus**](SendMessageStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## sendFile

> SendMessageStatus sendFile(sendFileRequest)

Send a file to a new or existing chat.

Only one of two parameters is needed to determine the destination - chatId or phone.

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

let apiInstance = new Node.Class2MessagesApi();
let sendFileRequest = new Node.SendFileRequest(); // SendFileRequest | 
apiInstance.sendFile(sendFileRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendFileRequest** | [**SendFileRequest**](SendFileRequest.md)|  | 

### Return type

[**SendMessageStatus**](SendMessageStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## sendLink

> SendMessageStatus sendLink(sendLinkRequest)

Send text with link and link&#39;s preview to a new or existing chat.

Only one of two parameters is needed to determine the destination - chatId or phone.

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

let apiInstance = new Node.Class2MessagesApi();
let sendLinkRequest = new Node.SendLinkRequest(); // SendLinkRequest | 
apiInstance.sendLink(sendLinkRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendLinkRequest** | [**SendLinkRequest**](SendLinkRequest.md)|  | 

### Return type

[**SendMessageStatus**](SendMessageStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## sendLocation

> SendMessageStatus sendLocation(sendLocationRequest)

Sending a location to a new or existing chat.

Only one of two parameters is needed to determine the destination - chatId or phone.

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

let apiInstance = new Node.Class2MessagesApi();
let sendLocationRequest = new Node.SendLocationRequest(); // SendLocationRequest | 
apiInstance.sendLocation(sendLocationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendLocationRequest** | [**SendLocationRequest**](SendLocationRequest.md)|  | 

### Return type

[**SendMessageStatus**](SendMessageStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## sendMessage

> SendMessageStatus sendMessage(sendMessageRequest)

Send a message to a new or existing chat.

The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone.

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

let apiInstance = new Node.Class2MessagesApi();
let sendMessageRequest = new Node.SendMessageRequest(); // SendMessageRequest | 
apiInstance.sendMessage(sendMessageRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMessageRequest** | [**SendMessageRequest**](SendMessageRequest.md)|  | 

### Return type

[**SendMessageStatus**](SendMessageStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## sendPTT

> SendMessageStatus sendPTT(sendPTTRequest)

Send a ptt-audio to a new or existing chat.

Only one of two parameters is needed to determine the destination - chatId or phone.

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

let apiInstance = new Node.Class2MessagesApi();
let sendPTTRequest = new Node.SendPTTRequest(); // SendPTTRequest | 
apiInstance.sendPTT(sendPTTRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendPTTRequest** | [**SendPTTRequest**](SendPTTRequest.md)|  | 

### Return type

[**SendMessageStatus**](SendMessageStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## sendVCard

> SendMessageStatus sendVCard(sendVCardRequest)

Sending a vcard to a new or existing chat.

Only one of two parameters is needed to determine the destination - chatId or phone.

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

let apiInstance = new Node.Class2MessagesApi();
let sendVCardRequest = new Node.SendVCardRequest(); // SendVCardRequest | 
apiInstance.sendVCard(sendVCardRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendVCardRequest** | [**SendVCardRequest**](SendVCardRequest.md)|  | 

### Return type

[**SendMessageStatus**](SendMessageStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

